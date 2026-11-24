"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState(null); // index into flat photos

  useEffect(() => {
    fetch("/api/gallery?t=" + Date.now(), { cache: "no-store" })
      .then((r) => r.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data)) setEvents(data.data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const photos = useMemo(() => {
    const flat = [];
    events.forEach((ev) => {
      (ev.images || []).forEach((img) => {
        flat.push({
          src: img.src,
          alt: img.alt || ev.title || "Gallery photo",
        });
      });
    });
    return flat;
  }, [events]);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)),
    [photos.length]
  );
  const next = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, close, prev, next]);

  return (
    <>
      <PageHero
        eyebrow={<><Camera size={14} /> Gallery</>}
        title="Photo Gallery"
      />

      <section className="section">
        <div className="container">
          {loading ? (
            <p style={{ textAlign: "center", color: "var(--ink-400)" }}>Loading photos...</p>
          ) : photos.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 16px", color: "var(--ink-400)" }}>
              <Camera size={40} style={{ opacity: 0.4, marginBottom: 12 }} />
              <p style={{ margin: 0, fontWeight: 600 }}>No photos uploaded yet.</p>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                gap: "16px",
              }}
            >
              {photos.map((p, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setLightbox(i)}
                  style={{
                    position: "relative",
                    aspectRatio: "4 / 3",
                    borderRadius: "12px",
                    overflow: "hidden",
                    border: "1px solid rgba(201,154,58,0.25)",
                    background: "#0c1524",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 600px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {lightbox !== null && photos[lightbox] && (
        <div
          onClick={close}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.92)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); close(); }}
            aria-label="Close"
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              background: "rgba(255,255,255,0.12)",
              border: "none",
              color: "#fff",
              borderRadius: "50%",
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <X size={20} />
          </button>
          {photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); prev(); }}
                aria-label="Previous"
                style={{
                  position: "absolute",
                  left: 20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(255,255,255,0.12)",
                  border: "none",
                  color: "#fff",
                  borderRadius: "50%",
                  width: 44,
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); next(); }}
                aria-label="Next"
                style={{
                  position: "absolute",
                  right: 20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(255,255,255,0.12)",
                  border: "none",
                  color: "#fff",
                  borderRadius: "50%",
                  width: 44,
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
          <img
            src={photos[lightbox].src}
            alt={photos[lightbox].alt}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "95vw",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: 8,
            }}
          />
        </div>
      )}
    </>
  );
}
