import { useEffect, useRef } from 'react';

/**
 * A custom React hook that applies a coordinate-based 3D Tilt-on-Hover effect to any element.
 * @param {number} maxTilt The maximum tilt angle in degrees. Default is 10.
 * @param {number} scale The scale multiplier on hover. Default is 1.015.
 * @returns {React.RefObject} The ref to bind to the card element.
 */
export default function use3DTilt(maxTilt = 10, scale = 1.015) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Apply baseline styles for smooth transition resets
    el.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.5s, box-shadow 0.5s';
    el.style.transformStyle = 'preserve-3d';

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse X coordinate relative to card
      const y = e.clientY - rect.top;  // Mouse Y coordinate relative to card
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate relative coordinate offset from center (-1 to 1)
      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      // Update style transforms in real-time
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
    };

    const handleMouseLeave = () => {
      // Gently return to flat coordinates when cursor leaves
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [maxTilt, scale]);

  return ref;
}
