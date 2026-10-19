"use client";

import { useEffect, useRef } from "react";

export default function StarfieldCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    let stars = [];
    const dpr = window.devicePixelRatio || 1;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(Math.floor((rect.width * rect.height) / 7000), 120);
      stars = [];
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          r: Math.random() * 1.5 + 0.4,
          baseAlpha: Math.random() * 0.5 + 0.25,
          speed: Math.random() * 0.015 + 0.005,
          phase: Math.random() * Math.PI * 2,
          isGold: Math.random() > 0.65,
        });
      }
    }

    function render(time) {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      for (const s of stars) {
        const flicker = reduceMotion ? 1 : (Math.sin(time * s.speed + s.phase) + 1) / 2;
        const alpha = s.baseAlpha * (0.4 + 0.6 * flicker);
        ctx.fillStyle = s.isGold
          ? `rgba(217, 175, 82, ${alpha})`
          : `rgba(250, 247, 239, ${alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduceMotion) {
        animId = requestAnimationFrame(render);
      }
    }

    resize();
    render(0);

    const onResize = () => {
      resize();
      render(0);
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero__stars" aria-hidden="true" />;
}
