import React, { useEffect, useRef } from 'react';

export default function FloatingBeans() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Particle count based on screen width
    let particleCount = window.innerWidth < 768 ? 20 : 50;
    const particles = [];
    
    // Handle window resize
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track scroll velocity
    let scrollVelocity = 0;
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY;
      scrollVelocity += diff * 0.08; // scale velocity responsiveness
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Track mouse coordinates to add subtle repelling/push forces
    let mouseX = -1000;
    let mouseY = -1000;
    
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Color palettes for premium aesthetic (rich gold and coffee brown beans)
    const beanColors = [
      { fill: 'rgba(205, 164, 94, 0.45)', stroke: 'rgba(130, 95, 40, 0.75)' }, // Rich Gold
      { fill: 'rgba(141, 95, 62, 0.55)', stroke: 'rgba(75, 45, 25, 0.85)' },   // Milk Chocolate Brown
      { fill: 'rgba(92, 60, 36, 0.65)', stroke: 'rgba(45, 25, 10, 0.95)' },    // Dark Roasted Espresso
      { fill: 'rgba(212, 175, 55, 0.40)', stroke: 'rgba(150, 120, 30, 0.75)' } // Vibrant Yellow Gold
    ];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      const scale = Math.random() * 0.6 + 0.4; // 0.4 to 1.0 depth scale
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        w: (Math.random() * 8 + 10) * scale, // width radius (larger beans)
        h: (Math.random() * 6 + 5) * scale, // height radius (larger beans)
        angle: Math.random() * Math.PI * 2,
        spinSpeed: (Math.random() * 0.015 - 0.007) * (scale + 0.2),
        swayRange: Math.random() * 15 + 10,
        swaySpeed: Math.random() * 0.008 + 0.004,
        swayOffset: Math.random() * Math.PI * 2,
        baseSpeedY: (Math.random() * 0.5 + 0.3) * scale, // deeper particles fall slower
        speedY: 0,
        color: beanColors[Math.floor(Math.random() * beanColors.length)],
        opacity: (Math.random() * 0.3 + 0.6) * (scale * 0.7 + 0.3) // higher opacity multiplier
      });
    }

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Decay scroll velocity towards zero
      scrollVelocity *= 0.93;

      particles.forEach((p) => {
        // Fall speed increases temporarily with scrolling
        p.speedY = p.baseSpeedY + Math.abs(scrollVelocity) * 0.14;

        // Apply falling movement
        p.y += p.speedY;
        
        // Sway side to side (simulating air currents)
        p.swayOffset += p.swaySpeed;
        const sway = Math.sin(p.swayOffset) * p.swayRange * 0.02;
        p.x += sway;

        // Spin in 3D
        p.angle += p.spinSpeed;

        // Mouse interaction: push away slightly if close
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) / 150;
          const forceX = (dx / dist) * force * 1.5;
          p.x += forceX;
        }

        // Boundary wrap
        if (p.y > canvas.height + 40) {
          p.y = -40;
          p.x = Math.random() * canvas.width;
        } else if (p.y < -40) {
          p.y = canvas.height + 40;
        }
        if (p.x > canvas.width + 40) {
          p.x = -40;
        } else if (p.x < -40) {
          p.x = canvas.width + 40;
        }

        // Render coffee bean
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.globalAlpha = p.opacity;

        // Draw Ellipse (Bean Outer Outline)
        ctx.beginPath();
        ctx.ellipse(0, 0, p.w, p.h, 0, 0, Math.PI * 2);
        ctx.fillStyle = p.color.fill;
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = p.color.stroke;
        ctx.stroke();

        // Draw Bean Crease Line (Wavy crease through center)
        ctx.beginPath();
        ctx.moveTo(-p.w * 0.8, -p.h * 0.15);
        ctx.bezierCurveTo(
          -p.w * 0.2, p.h * 0.35, 
          p.w * 0.2, -p.h * 0.55, 
          p.w * 0.8, -p.h * 0.15
        );
        ctx.lineWidth = Math.max(1, p.w * 0.12);
        ctx.strokeStyle = p.color.stroke;
        ctx.stroke();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[1]"
    />
  );
}
