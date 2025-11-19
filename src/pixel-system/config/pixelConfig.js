// src/pixel-system/config/pixelConfig.js
export const PIXEL_CONFIG = {
  // Scale factor for pixel art (1 CSS pixel = SCALE device pixels)
  SCALE: 4,
  
  // Base grid size
  GRID_SIZE: 8,
  
  // Common sprite sizes
  SPRITE_SIZES: {
    ICON: 8,
    SMALL: 16,
    MEDIUM: 32,
    LARGE: 64,
    XLARGE: 128
  },
  
  // Retro color palette
  PALETTE: {
    BLACK: '#0f0d1e',
    DARK_PURPLE: '#2a1b3d',
    BLUE: '#1ba3f5',
    CYAN: '#2dd4bf',
    WHITE: '#e8e3d7',
    YELLOW: '#ffcc00',
    RED: '#f52a65',
    PINK: '#ff69b4',
  },
  
  ANIMATION: {
    FRAME_RATE: 8, // FPS for pixel animations
    TRANSITION_SPEED: 200 // ms
  }
};

// Helper functions
export const px = (pixels) => `${pixels * PIXEL_CONFIG.SCALE}px`;
export const pixelSize = (size) => ({
  width: px(size),
  height: px(size),
  imageRendering: 'pixelated'
});