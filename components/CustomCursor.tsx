
import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const dotCoords = useRef(Array.from({ length: 12 }, () => ({ x: 0, y: 0 })));

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      let { x, y } = mousePos.current;

      dotCoords.current.forEach((coord, index) => {
        // O primeiro ponto segue o mouse, os outros seguem o ponto anterior com atraso
        coord.x += (x - coord.x) * 0.4;
        coord.y += (y - coord.y) * 0.4;

        const dot = dotsRef.current[index];
        if (dot) {
          dot.style.transform = `translate3d(${coord.x}px, ${coord.y}px, 0) scale(${1 - index * 0.07})`;
          dot.style.opacity = `${1 - index * 0.1}`;
        }

        x = coord.x;
        y = coord.y;
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    const animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div ref={containerRef} className="custom-cursor-container pointer-events-none fixed inset-0 z-[10000]">
      {dotCoords.current.map((_, i) => (
        <div
          key={i}
          ref={(el) => { if (el) dotsRef.current[i] = el; }}
          className="cursor-dot"
          style={{
            // Brilho mais intenso para os primeiros pontos
            boxShadow: `0 0 ${15 - i}px rgba(16, 185, 129, ${0.8 - i * 0.05})`
          }}
        />
      ))}
    </div>
  );
};

export default CustomCursor;
