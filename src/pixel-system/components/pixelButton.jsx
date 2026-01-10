// src/pixel-system/components/PixelButton.js
import React, { useState } from 'react';
import './PixelButton.css';

const PixelButton = ({ children, onClick, variant = 'primary' }) => {
  const [isPressed, setIsPressed] = useState(false);
  
  return (
    <button
      className={`pixel-btn pixel-btn-${variant} ${isPressed ? 'pressed' : ''}`}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PixelButton;