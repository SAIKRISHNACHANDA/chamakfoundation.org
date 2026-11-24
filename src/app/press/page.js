"use client";

import { useState, useEffect, useCallback } from "react";
import PageHero from "@/components/PageHero";
import { Newspaper, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function PressPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    fetch("/api/press?t=" + Date.now(), { cache: "no-store" })
      .then((r) => r.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data)) setItems(data.data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [items.length]
  );
  const next = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length]
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
        eyebrow={<><Newspaper size={14} /> Press</>}
        title="Press Clippings"
      />

      <section className="section">
        <div className="container">
          {loading ? (
            <p style={{ textAlign: "center", color: "var(--ink-400)" }}>Loading clippings...</p>
          ) : items.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 16px", color: "var(--ink-400)" }}>
              <Newspaper size={40} style={{ opacity: 0.4, marginBottom: 12 }} />
              <p style={{ margin: 0, fontWeight: 600 }}>No press clippings uploaded yet.</p>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: "18px",
              }}
            >
              {items.map((p, i) => (
                <button
                  key={p.id || i}
                  type="button"
                  onClick={() => setLightbox(i)}
                  style={{
                    position: "relative",
                    aspectRatio: "3 / 4",
                    borderRadius: "12px",
                    overflow: "hidden",
                    border: "1px solid rgba(201,154,58,0.3)",
                    background: "#0c1524",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.alt || p.titleEnglish || "Press clipping"}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {lightbox !== null && items[lightbox] && (
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
          {items.length > 1 && (
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
            src={items[lightbox].image}
            alt={items[lightbox].alt || items[lightbox].titleEnglish || "Press clipping"}
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
