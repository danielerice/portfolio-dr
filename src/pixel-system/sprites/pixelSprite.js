// src/pixel-system/components/PixelSprite.js
import React, { useEffect, useRef } from 'react';

const PixelSprite = ({ 
  src, 
  frameWidth, 
  frameHeight, 
  frameCount = 1,
  fps = 8,
  loop = true,
  scale = 4 
}) => {
  const canvasRef = useRef(null);
  const frameRef = useRef(0);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false; // Pixel-perfect rendering
    
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw current frame
        ctx.drawImage(
          img,
          frameRef.current * frameWidth, 0,
          frameWidth, frameHeight,
          0, 0,
          frameWidth * scale, frameHeight * scale
        );
        
        // Update frame
        frameRef.current = (frameRef.current + 1) % frameCount;
      };
      
      const interval = setInterval(animate, 1000 / fps);
      return () => clearInterval(interval);
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
};

export default PixelSprite;