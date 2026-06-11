import { useEffect, useRef } from 'react';

// Renders at 1/SCALE resolution and upscales with image-rendering: pixelated,
// which is what makes the stars chunky instead of crisp dots.
const SCALE = 3;

const LAYERS = [
  { count: 70, depth: 0.15, speed: 0.04, size: 1, alpha: 0.55, colors: [0xe8e3d7, 0x8b9bb4] },
  { count: 45, depth: 0.45, speed: 0.12, size: 1, alpha: 0.8, colors: [0xe8e3d7, 0x2dd4bf, 0x1ba3f5] },
  { count: 20, depth: 1.0, speed: 0.3, size: 2, alpha: 1, colors: [0xffffff, 0xffcc00, 0xff69b4] },
];

const rand = (min, max) => min + Math.random() * (max - min);
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

export default function Starfield() {
  const hostRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
    let app = null;
    let cancelled = false;
    const disposers = [];

    (async () => {
      // Pixi stays out of the main bundle: it downloads while the boot splash
      // plays, so the splash itself renders instantly.
      const { Application, Container, Sprite, Texture } = await import('pixi.js');
      if (cancelled) return;
      const candidate = new Application();
      try {
        await candidate.init({
          width: Math.ceil(window.innerWidth / SCALE),
          height: Math.ceil(window.innerHeight / SCALE),
          background: 0x0f0d1e,
          antialias: false,
          autoDensity: false,
          resolution: 1,
        });
      } catch {
        return; // no WebGL/WebGPU (tests, old hardware) — site works without the backdrop
      }
      if (cancelled || !hostRef.current) {
        candidate.destroy(true, { children: true });
        return;
      }
      app = candidate;
      app.canvas.classList.add('starfield-canvas');
      hostRef.current.appendChild(app.canvas);

      const layers = LAYERS.map((spec) => {
        const container = new Container();
        app.stage.addChild(container);
        const stars = Array.from({ length: spec.count }, () => {
          const sprite = new Sprite(Texture.WHITE);
          sprite.width = spec.size;
          sprite.height = spec.size;
          sprite.tint = pick(spec.colors);
          sprite.x = rand(0, app.renderer.width);
          sprite.y = rand(0, app.renderer.height);
          sprite.alpha = spec.alpha;
          container.addChild(sprite);
          return {
            sprite,
            base: spec.alpha * rand(0.6, 1),
            phase: rand(0, Math.PI * 2),
            twinkle: rand(1, 3),
            speed: spec.speed * rand(0.6, 1.4),
          };
        });
        return { container, spec, stars };
      });

      const onResize = () => {
        const w = Math.ceil(window.innerWidth / SCALE);
        const h = Math.ceil(window.innerHeight / SCALE);
        app.renderer.resize(w, h);
        layers.forEach(({ stars }) =>
          stars.forEach((star) => {
            if (star.sprite.x > w) star.sprite.x = rand(0, w);
            if (star.sprite.y > h) star.sprite.y = rand(0, h);
          })
        );
      };
      window.addEventListener('resize', onResize);
      disposers.push(() => window.removeEventListener('resize', onResize));

      if (reduced) return; // static stars only — no drift, twinkle, or streaks

      const pointer = { x: 0, y: 0 };
      const onPointerMove = (e) => {
        pointer.x = e.clientX / window.innerWidth - 0.5;
        pointer.y = e.clientY / window.innerHeight - 0.5;
      };
      window.addEventListener('pointermove', onPointerMove);
      disposers.push(() => window.removeEventListener('pointermove', onPointerMove));

      let elapsed = 0;
      let nextStreak = rand(240, 480); // ticks (~60/s) until the next shooting star
      const streaks = [];

      app.ticker.add((ticker) => {
        const dt = ticker.deltaTime;
        elapsed += dt;
        const w = app.renderer.width;
        const h = app.renderer.height;

        layers.forEach(({ container, spec, stars }) => {
          container.x += (pointer.x * spec.depth * -14 - container.x) * 0.04 * dt;
          container.y += (pointer.y * spec.depth * -8 - container.y) * 0.04 * dt;
          stars.forEach((star) => {
            star.sprite.x -= star.speed * dt;
            if (star.sprite.x < -2) {
              star.sprite.x = w + 2;
              star.sprite.y = rand(0, h);
            }
            star.sprite.alpha = star.base * (0.75 + 0.25 * Math.sin(elapsed * 0.02 * star.twinkle + star.phase));
          });
        });

        nextStreak -= dt;
        if (nextStreak <= 0) {
          nextStreak = rand(300, 700);
          const streak = new Sprite(Texture.WHITE);
          streak.width = 14;
          streak.height = 1;
          streak.tint = 0xe8e3d7;
          streak.x = rand(0, w * 0.7);
          streak.y = rand(0, h * 0.35);
          streak.rotation = 0.35;
          app.stage.addChild(streak);
          streaks.push(streak);
        }
        for (let i = streaks.length - 1; i >= 0; i--) {
          const s = streaks[i];
          s.x += 3.4 * dt;
          s.y += 1.2 * dt;
          s.alpha -= 0.02 * dt;
          if (s.alpha <= 0 || s.x > w + 20) {
            s.destroy();
            streaks.splice(i, 1);
          }
        }
      });
    })();

    return () => {
      cancelled = true;
      disposers.forEach((fn) => fn());
      if (app) {
        app.destroy(true, { children: true });
        app = null;
      }
    };
  }, []);

  return <div ref={hostRef} className="starfield" aria-hidden="true" />;
}
