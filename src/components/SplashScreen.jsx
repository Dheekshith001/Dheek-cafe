import React, { useState, useEffect, useRef } from 'react';

export default function SplashScreen({ onEnter }) {
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const circleRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  const handleMouseMove = (e) => {
    if (clicked || !circleRef.current) return;
    const el = circleRef.current;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.035)`;
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (clicked || !circleRef.current) return;
    const el = circleRef.current;
    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  const handleClick = () => {
    if (clicked) return;
    setClicked(true);
    // Pass the card's bounding rect so Home.jsx can fly it to the hero card
    const rect = circleRef.current?.getBoundingClientRect() ?? null;
    setTimeout(() => onEnter(rect), 80);
  };

  return (
    <div
      className="fixed inset-0 z-[990] overflow-hidden"
      style={{
        background: '#050201', // Dark solid espresso base to prevent transparent flicker
        opacity: clicked ? 0 : 1,
        transition: 'opacity 1.0s ease-in-out 0.15s', // Smooth fade out matching flight duration
        pointerEvents: clicked ? 'none' : 'auto',
      }}
    >
      {/* ── Background video ── */}
      <video
        autoPlay muted loop playsInline
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src="/coffee-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay on video */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(0,0,0,0.55)',
        pointerEvents: 'none',
      }} />

      {/* Radial vignette around edges */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.65) 100%)',
      }} />

      {/* ── Centered clickable circle logo ── */}
      <div
        onClick={handleClick}
        className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer select-none"
      >
        {/* Ambient gold glow behind circle */}
        <div style={{
          position: 'absolute',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: hovered
            ? 'radial-gradient(circle, rgba(205,164,94,0.26) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(205,164,94,0.18) 0%, transparent 70%)',
          filter: 'blur(50px)',
          animation: 'ambientPulse 3s ease-in-out infinite alternate',
          opacity: visible ? (clicked ? 0 : 1) : 0,
          transition: clicked ? 'opacity 0.1s ease-out' : 'opacity 1s ease-out, background 0.45s ease',
        }} />

        {/* ── 3D Circular Logo Card ── */}
        <div
          ref={circleRef}
          onMouseEnter={() => setHovered(true)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            width: '260px',
            height: '260px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: hovered ? '2.5px solid rgba(205,164,94,0.85)' : '2.5px solid rgba(205,164,94,0.6)',
            boxShadow: hovered ? `
              0 0 35px rgba(205,164,94,0.4),
              0 15px 40px rgba(0,0,0,0.85)
            ` : `
              0 10px 30px rgba(0,0,0,0.75)
            `,
            opacity: visible ? (clicked ? 0 : 1) : 0,
            transform: visible
              ? (clicked ? 'scale(0.9) rotateY(0deg) rotateX(0deg)' : 'scale(1)')
              : 'scale(0.5)',
            transition: clicked ? 'opacity 0.08s ease-out' : `
              opacity 0.9s ease-out 0.2s,
              transform 0.15s ease-out,
              border 0.45s ease,
              box-shadow 0.45s ease
            `,
            animation: visible && !clicked && !hovered ? 'floatUp 4s ease-in-out infinite' : 'none',
            flexShrink: 0,
            position: 'relative',
            zIndex: 2,
            transformStyle: 'preserve-3d',
            perspective: '1000px',
          }}
        >
          {/* Logo badge — contain so that the full gold circle fits inside */}
          <div style={{
            width: '100%',
            height: '100%',
            backgroundImage: `url('/logocafe.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }} />

          {/* Inner vignette */}
          <div style={{
            position: 'absolute', inset: 0,
            borderRadius: '50%',
            background: 'radial-gradient(circle at center, transparent 60%, rgba(5,2,1,0.6) 100%)',
            pointerEvents: 'none',
          }} />

          {/* Shimmer sweep */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.06) 50%, transparent 70%)',
            animation: 'shimmer 3.5s ease-in-out infinite',
            pointerEvents: 'none',
          }} />
        </div>

        {/* Brand name below circle */}
        <div
          className="mt-6 text-center"
          style={{
            opacity: visible ? (clicked ? 0 : 1) : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: clicked ? 'opacity 0.1s ease-out' : 'opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s',
            zIndex: 2,
          }}
        >
          <p className="font-serif text-2xl font-bold tracking-[0.35em] text-cream uppercase">
            Dheek <span className="text-gold">Cafe</span>
          </p>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-2 mb-2" />
          <p className="text-cream/40 text-[10px] tracking-[0.3em] uppercase font-light">
            Brewing Moments, Creating Memories
          </p>
        </div>

        {/* Click to enter */}
        <div
          className="mt-8 flex flex-col items-center gap-2"
          style={{
            opacity: visible ? (clicked ? 0 : 1) : 0,
            transition: clicked ? 'opacity 0.1s ease-out' : 'opacity 1s ease-out 0.9s',
            zIndex: 2,
          }}
        >
          <p className="text-gold/70 text-[10px] tracking-[0.4em] uppercase font-light">
            Click to Enter
          </p>
          <div style={{ animation: 'bounce 1.4s ease-in-out infinite' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M6 9L12 15L18 9" stroke="rgba(205,164,94,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ambientPulse {
          from { transform: scale(0.85); opacity: 0.6; }
          to   { transform: scale(1.2);  opacity: 1;   }
        }
        @keyframes spin {
          from { transform: rotate(0deg);   }
          to   { transform: rotate(360deg); }
        }
        @keyframes floatUp {
          0%,100% { transform: scale(1) translateY(0px);   }
          50%      { transform: scale(1) translateY(-10px); }
        }
        @keyframes shimmer {
          0%   { transform: translateX(-150%); }
          60%  { transform: translateX(150%);  }
          100% { transform: translateX(150%);  }
        }
        @keyframes bounce {
          0%,100% { transform: translateY(0px); opacity:0.4; }
          50%      { transform: translateY(5px); opacity:1;   }
        }
      `}</style>
    </div>
  );
}
