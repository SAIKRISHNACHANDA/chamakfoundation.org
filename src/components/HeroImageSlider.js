"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    src: "/assets/img/founder-president.jpg",
    alt: "Chamak Foundation Founder & President Dr. Mohammad Azam Ali with Hon'ble President of India, Smt. Droupadi Murmu at Rashtrapati Bhavan",
    title: "Rashtrapati Bhavan, New Delhi",
  },
  {
    id: 2,
    src: "/assets/img/classroom-students.jpg",
    alt: "Underprivileged students in class supported by Chamak Foundation scholarships and educational materials",
    title: "Classroom Scholarships & Support",
  },
  {
    id: 3,
    src: "/assets/img/digital-lab.jpg",
    alt: "Students learning digital literacy and computer skills in Chamak Foundation tech lab",
    title: "Digital Literacy & Innovation Lab",
  },
];

export default function HeroImageSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const goToSlide = (idx) => {
    setCurrent(idx);
  };

  // Auto-scroll every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Touch swipe support for mobile/tablet
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    setTouchStartX(null);
  };

  return (
    <div
      className="hero-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-roledescription="carousel"
      aria-label="Chamak Foundation Highlights"
    >
      <div className="hero-slider__track">
        {SLIDES.map((slide, idx) => {
          const isActive = idx === current;
          return (
            <div
              key={slide.id}
              className={`hero-slider__slide ${isActive ? "is-active" : ""}`}
              aria-hidden={!isActive}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={idx === 0}
                sizes="(max-width: 960px) 100vw, 55vw"
                className="hero-slider__img"
              />
            </div>
          );
        })}
      </div>

      {/* Prev Navigation Arrow */}
      <button
        type="button"
        className="hero-slider__btn hero-slider__btn--prev"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Next Navigation Arrow */}
      <button
        type="button"
        className="hero-slider__btn hero-slider__btn--next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={22} />
      </button>

      {/* Navigation Indicators & Pill Dots */}
      <div className="hero-slider__controls">
        <div className="hero-slider__dots">
          {SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              type="button"
              className={`hero-slider__dot ${idx === current ? "is-active" : ""}`}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
