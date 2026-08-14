import React, { useRef, useState } from 'react';

export function TiltCard({ children, className = '', intensity = 9 }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  const handleMove = (event) => {
    const node = ref.current;
    if (!node || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    setStyle({
      transform: `perspective(900px) rotateX(${y * -intensity}deg) rotateY(${x * intensity}deg) translateY(-6px)`,
    });
  };

  return (
    <div
      ref={ref}
      className={`tilt-card will-change-transform ${className}`}
      style={style}
      onMouseMove={handleMove}
      onMouseLeave={() => setStyle({ transform: 'perspective(900px) rotateX(0deg) rotateY(0deg)' })}
    >
      {children}
    </div>
  );
}
