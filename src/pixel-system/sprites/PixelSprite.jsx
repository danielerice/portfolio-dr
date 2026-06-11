import { useEffect, useRef } from 'react';

// Plays a horizontal spritesheet strip on a canvas, pixel-perfect.
// Ready for hand-made pixel art: <PixelSprite src={sheet} frameWidth={32} frameHeight={32} frameCount={4} />
export default function PixelSprite({ src, frameWidth, frameHeight, frameCount = 1, fps = 8, scale = 4 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return undefined;
    ctx.imageSmoothingEnabled = false;

    const img = new Image();
    img.src = src;
    let frame = 0;
    let interval;

    img.onload = () => {
      interval = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          img,
          frame * frameWidth, 0,
          frameWidth, frameHeight,
          0, 0,
          frameWidth * scale, frameHeight * scale
        );
        frame = (frame + 1) % frameCount;
      }, 1000 / fps);
    };

    return () => {
      img.onload = null;
      clearInterval(interval);
    };
  }, [src, frameWidth, frameHeight, frameCount, fps, scale]);

  return (
    <canvas
      ref={canvasRef}
      width={frameWidth * scale}
      height={frameHeight * scale}
      style={{ imageRendering: 'pixelated' }}
    />
  );
}
