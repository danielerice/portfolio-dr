// Everything listed here is loaded while the boot splash plays, so nothing
// pops in after the site reveals. Add pixel-art sprite paths to the manifest
// as they're created, e.g. '/sprites/avatar-idle.png'.
export const ASSET_MANIFEST = [];

const FONTS = ['12px "Press Start 2P"', '20px "VT323"'];

export async function preloadAssets() {
  const tasks = [];
  if (typeof document !== 'undefined' && document.fonts?.load) {
    FONTS.forEach((font) => tasks.push(document.fonts.load(font)));
  }
  if (ASSET_MANIFEST.length > 0) {
    tasks.push(import('pixi.js').then(({ Assets }) => Assets.load(ASSET_MANIFEST)));
  }
  await Promise.allSettled(tasks);
}
