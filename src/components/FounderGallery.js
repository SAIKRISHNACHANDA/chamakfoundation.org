"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";

const HONORS_DATA = [
  {
    id: 1,
    src: "/assets/img/founder/founder-pranab-mukherjee.jpg",
    alt: "Dr. Mohammad Azam Ali receiving an honor from the Former President of India, Late Shri Pranab Mukherjee",
    title: "With Late President of India, Shri Pranab Mukherjee",
    tag: "Presidential Honor",
    venue: "Rashtrapati Bhavan, New Delhi",
  },
  {
    id: 2,
    src: "/assets/img/founder/founder-droupadi-murmu.jpg",
    alt: "Dr. Mohammad Azam Ali presenting a bouquet to the Hon'ble President of India, Smt. Droupadi Murmu",
    title: "With Hon'ble President of India, Smt. Droupadi Murmu",
    tag: "Rashtrapati Bhavan",
    venue: "New Delhi",
  },
  {
    id: 3,
    src: "/assets/img/founder/founder-venkaiah-naidu.jpg",
    alt: "Dr. Mohammad Azam Ali with Former Vice President of India, Shri M. Venkaiah Naidu",
    title: "With Former Vice President of India, Shri M. Venkaiah Naidu",
    tag: "National Recognition",
    venue: "Upa-Rashtrapati Nivas, New Delhi",
  },
  {
    id: 4,
    src: "/assets/img/founder/founder-anurag-thakur.jpg",
    alt: "Dr. Mohammad Azam Ali receiving National Youth Award from Union Minister Shri Anurag Thakur",
    title: "With Union Minister Shri Anurag Thakur",
    tag: "National Youth Award",
    venue: "Vigyan Bhawan, New Delhi",
  },
];

export default function FounderGallery() {
  const [activeIdx, setActiveIdx] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeIdx === null) return;
      if (e.key === "Escape") setActiveIdx(null);
      if (e.key === "ArrowRight") {
        setActiveIdx((prev) => (prev + 1) % HONORS_DATA.length);
      }
      if (e.key === "ArrowLeft") {
        setActiveIdx((prev) => (prev - 1 + HONORS_DATA.length) % HONORS_DATA.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIdx]);

  return (
    <>
      <div className="founder-grid-2x2">
        {HONORS_DATA.map((item, idx) => (
          <div
            key={item.id}
            className="founder-card"
            onClick={() => setActiveIdx(idx)}
            role="button"
            tabIndex={0}
            aria-label={`View photo: ${item.title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActiveIdx(idx);
              }
            }}
          >
            <div className="founder-card__media">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="founder-card__img"
              />
              <div className="founder-card__overlay">
                <span className="founder-card__zoom-btn">
                  <ZoomIn size={18} />
                </span>
                <div className="founder-card__info">
                  <span className="founder-card__tag">{item.tag}</span>
                  <p className="founder-card__title">{item.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeIdx !== null && (
        <div
          className="founder-lightbox"
          onClick={() => setActiveIdx(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="founder-lightbox__content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="founder-lightbox__close"
              onClick={() => setActiveIdx(null)}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <button
              className="founder-lightbox__nav founder-lightbox__nav--prev"
              onClick={() =>
                setActiveIdx((prev) => (prev - 1 + HONORS_DATA.length) % HONORS_DATA.length)
              }
              aria-label="Previous photo"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              className="founder-lightbox__nav founder-lightbox__nav--next"
              onClick={() =>
                setActiveIdx((prev) => (prev + 1) % HONORS_DATA.length)
              }
              aria-label="Next photo"
            >
              <ChevronRight size={28} />
            </button>

            <div className="founder-lightbox__media">
              <img
                src={HONORS_DATA[activeIdx].src}
                alt={HONORS_DATA[activeIdx].alt}
                className="founder-lightbox__img"
              />
            </div>

            <div className="founder-lightbox__caption">
              <span className="founder-lightbox__tag">
                {HONORS_DATA[activeIdx].tag}
              </span>
              <h3>{HONORS_DATA[activeIdx].title}</h3>
              <p>{HONORS_DATA[activeIdx].venue}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
