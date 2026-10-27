"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { GALLERY_EVENTS, GALLERY_CATEGORIES } from "@/data/galleryEvents";
import {
  Calendar,
  MapPin,
  Sparkles,
  Search,
  Filter,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  TrendingUp,
  Camera,
  Share2,
  CheckCircle2,
  PlusCircle,
  MessageCircle,
  ShieldCheck,
  Newspaper,
  FileText,
  ExternalLink,
} from "lucide-react";

export default function GalleryPage() {
  const [eventsList, setEventsList] = useState(GALLERY_EVENTS);
  const [activeCategory, setActiveCategory] = useState("All Updates");
  const [searchQuery, setSearchQuery] = useState("");
  const [lightbox, setLightbox] = useState(null); // { eventIndex, imageIndex }

  // Sync with live /api/gallery with real-time cache busting
  useEffect(() => {
    fetch("/api/gallery?t=" + Date.now(), { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          setEventsList(data.data);
        }
      })
      .catch((err) => console.warn("Using fallback gallery events", err));
  }, []);

  // Filtered events
  const filteredEvents = useMemo(() => {
    return eventsList.filter((ev) => {
      const matchCat =
        activeCategory === "All Updates" || ev.category === activeCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchSearch =
        !query ||
        ev.title?.toLowerCase().includes(query) ||
        ev.summary?.toLowerCase().includes(query) ||
        ev.location?.toLowerCase().includes(query) ||
        ev.category?.toLowerCase().includes(query) ||
        ev.badge?.toLowerCase().includes(query);
      return matchCat && matchSearch;
    });
  }, [eventsList, activeCategory, searchQuery]);

  // Total images count
  const totalImages = useMemo(() => {
    return eventsList.reduce((acc, ev) => acc + (ev.images?.length || 0), 0);
  }, [eventsList]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightbox) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") handleNextPhoto();
      if (e.key === "ArrowLeft") handlePrevPhoto();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox]);

  const handleOpenPhoto = (eventIndex, imageIndex) => {
    setLightbox({ eventIndex, imageIndex });
  };

  const currentEvent = lightbox ? filteredEvents[lightbox.eventIndex] : null;
  const currentPhoto =
    currentEvent && lightbox ? currentEvent.images[lightbox.imageIndex] : null;

  const handleNextPhoto = () => {
    if (!lightbox || !currentEvent) return;
    const totalInEvent = currentEvent.images.length;
    setLightbox({
      ...lightbox,
      imageIndex: (lightbox.imageIndex + 1) % totalInEvent,
    });
  };

  const handlePrevPhoto = () => {
    if (!lightbox || !currentEvent) return;
    const totalInEvent = currentEvent.images.length;
    setLightbox({
      ...lightbox,
      imageIndex: (lightbox.imageIndex - 1 + totalInEvent) % totalInEvent,
    });
  };

  return (
    <>
      <PageHero
        eyebrow="Moments of Transformation"
        title="Gallery & Live Field Updates"
        subtitle="A real-time visual journal of our daily grassroots initiatives, scholarship drives, STEM innovation labs, and community milestones."
      />

      {/* Quick Impact Metric Strip */}
      <section className="gallery-stats-strip">
        <div className="container">
          <div className="gallery-stats-grid">
            <div className="gallery-stat-item">
              <span className="gallery-stat-num">{GALLERY_EVENTS.length}</span>
              <span className="gallery-stat-label">Documented Events</span>
            </div>
            <div className="gallery-stat-item">
              <span className="gallery-stat-num">{totalImages}+</span>
              <span className="gallery-stat-label">Archived Photos</span>
            </div>
            <div className="gallery-stat-item">
              <span className="gallery-stat-num">25+</span>
              <span className="gallery-stat-label">Communities Documented</span>
            </div>
            <div className="gallery-stat-item">
              <span className="gallery-stat-num">100%</span>
              <span className="gallery-stat-label">Authentic Field Work</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Gallery Workspace */}
      <section className="section section--gallery-main">
        <div className="container">
          {/* Controls: Search + Categories */}
          <div className="gallery-controls">
            <div className="gallery-search-wrap">
              <Search size={18} className="gallery-search-icon" />
              <input
                type="text"
                placeholder="Search events by title, city, program, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="gallery-search-input"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="gallery-search-clear"
                  title="Clear search"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="gallery-pills">
              {GALLERY_CATEGORIES.map((cat) => {
                const count =
                  cat === "All Updates"
                    ? eventsList.length
                    : eventsList.filter((ev) => ev.category === cat).length;
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`gallery-pill ${isActive ? "is-active" : ""}`}
                  >
                    <span>{cat}</span>
                    <span className="gallery-pill__count">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Summary & Admin Link */}
          <div className="gallery-results-meta">
            <span>
              Showing <strong>{filteredEvents.length}</strong> {filteredEvents.length === 1 ? "event" : "events"}
              {activeCategory !== "All Updates" && ` under "${activeCategory}"`}
              {searchQuery && ` matching "${searchQuery}"`}
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              {(activeCategory !== "All Updates" || searchQuery) && (
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory("All Updates");
                    setSearchQuery("");
                  }}
                  className="gallery-reset-btn"
                >
                  Reset filters
                </button>
              )}
              <Link
                href="/admin/gallery"
                className="btn btn-outline-light btn-sm"
                style={{ padding: "5px 12px", fontSize: "0.78rem" }}
              >
                <ShieldCheck size={14} /> Open Admin Table
              </Link>
            </div>
          </div>

          {/* Events Stream with Multiple Grid Styles */}
          {filteredEvents.length === 0 ? (
            <div className="gallery-empty-state">
              <Camera size={44} className="gallery-empty-icon" />
              <h3>No events found</h3>
              <p>Try adjusting your search query or selecting a different category filter.</p>
              <button
                type="button"
                className="btn btn-gold"
                onClick={() => {
                  setActiveCategory("All Updates");
                  setSearchQuery("");
                }}
              >
                View All Updates
              </button>
            </div>
          ) : (
            <div className="events-stream">
              {filteredEvents.map((ev, eventIdx) => {
                const dateParts = ev.dateFormatted.split(" ");
                const day = dateParts[0];
                const monthYear = dateParts.slice(1).join(" ");

                return (
                  <article key={ev.id} className="event-card">
                    {/* Event Header Banner */}
                    <div className="event-card__header">
                      <div className="event-card__date-box">
                        <span className="event-card__day">{day}</span>
                        <span className="event-card__my">{monthYear}</span>
                      </div>

                      <div className="event-card__info">
                        <div className="event-card__meta-row">
                          <span className="event-card__badge">{ev.badge}</span>
                          <span className="event-card__category">{ev.category}</span>
                          <span className="event-card__metric">
                            <span className="event-card__metric-dot" /> {ev.metric}
                          </span>
                        </div>

                        <h2 className="event-card__title">{ev.title}</h2>

                        <div className="event-card__location">
                          <MapPin size={15} />
                          <span>{ev.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Event Description */}
                    <p className="event-card__summary">{ev.summary}</p>

                    {/* Dynamic Image Grid by Grid Style */}
                    <div className={`event-grid event-grid--${ev.gridStyle}`}>
                      {ev.gridStyle === "featured-mosaic" && (
                        <div className="grid-mosaic">
                          {ev.images[0] && (
                            <div
                              className="grid-item grid-item--large"
                              onClick={() => handleOpenPhoto(eventIdx, 0)}
                            >
                              <Image
                                src={ev.images[0].src}
                                alt={ev.images[0].alt}
                                width={800}
                                height={520}
                                className="grid-img"
                              />
                              <div className="grid-overlay">
                                <span className="grid-overlay__caption">
                                  {ev.images[0].caption}
                                </span>
                                <span className="grid-overlay__action">
                                  <Maximize2 size={16} /> Expand
                                </span>
                              </div>
                            </div>
                          )}

                          <div className="grid-mosaic__sidebar">
                            {ev.images.slice(1, 3).map((img, i) => (
                              <div
                                key={i}
                                className="grid-item grid-item--stacked"
                                onClick={() => handleOpenPhoto(eventIdx, i + 1)}
                              >
                                <Image
                                  src={img.src}
                                  alt={img.alt}
                                  width={450}
                                  height={260}
                                  className="grid-img"
                                />
                                <div className="grid-overlay">
                                  <span className="grid-overlay__caption">
                                    {img.caption}
                                  </span>
                                  <span className="grid-overlay__action">
                                    <Maximize2 size={16} /> Expand
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {ev.gridStyle === "split-duo" && (
                        <div className="grid-duo">
                          {ev.images.slice(0, 2).map((img, i) => (
                            <div
                              key={i}
                              className="grid-item grid-item--half"
                              onClick={() => handleOpenPhoto(eventIdx, i)}
                            >
                              <Image
                                src={img.src}
                                alt={img.alt}
                                width={600}
                                height={380}
                                className="grid-img"
                              />
                              <div className="grid-overlay">
                                <span className="grid-overlay__caption">
                                  {img.caption}
                                </span>
                                <span className="grid-overlay__action">
                                  <Maximize2 size={16} /> Expand
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {ev.gridStyle === "trio-strip" && (
                        <div className="grid-trio">
                          {ev.images.slice(0, 3).map((img, i) => (
                            <div
                              key={i}
                              className="grid-item grid-item--third"
                              onClick={() => handleOpenPhoto(eventIdx, i)}
                            >
                              <Image
                                src={img.src}
                                alt={img.alt}
                                width={420}
                                height={300}
                                className="grid-img"
                              />
                              <div className="grid-overlay">
                                <span className="grid-overlay__caption">
                                  {img.caption}
                                </span>
                                <span className="grid-overlay__action">
                                  <Maximize2 size={16} /> Expand
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Card Footer */}
                    <div className="event-card__footer">
                      <span className="event-card__count">
                        <Camera size={14} /> {ev.images.length} Photographs Captured
                      </span>
                      <button
                        type="button"
                        onClick={() => handleOpenPhoto(eventIdx, 0)}
                        className="event-card__view-all"
                      >
                        View Photo Showcase <Maximize2 size={13} />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* Dedicated "How to Update Daily Events" Callout Card */}
          <div className="event-update-helper">
            <div className="event-update-helper__badge">
              <Sparkles size={14} /> Developer & Volunteer Guide
            </div>
            <div className="event-update-helper__grid">
              <div>
                <h3>How to update events every day:</h3>
                <p>
                  Our gallery is engineered with a modular, scalable architecture. Whenever an event happens:
                </p>
                <ol className="event-update-helper__steps">
                  <li>
                    Place your high-resolution event photographs into <code>public/assets/img/</code>.
                  </li>
                  <li>
                    Open <code>src/data/galleryEvents.js</code> and append a new event object with the title, date, location, and photos.
                  </li>
                  <li>
                    Choose your favorite card grid style: <code>featured-mosaic</code> (1 hero + 2 stacked), <code>split-duo</code> (2 equal), or <code>trio-strip</code> (3 action tiles).
                  </li>
                </ol>
              </div>

              <div className="event-update-helper__card">
                <h4>Have field photos or daily reports?</h4>
                <p>
                  Send high-resolution photos and brief event notes directly to the Chamak Foundation media team for instant publication.
                </p>
                <a
                  href="https://wa.me/919866129052?text=Hello%20Chamak%20Foundation,%20I%20have%20event%20photos%20and%20field%20updates%20to%20share."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold btn--full"
                >
                  <MessageCircle size={17} /> Submit Event Photos via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Clippings & Media Coverage Section */}
      <section className="section section--cream2" id="press" style={{ scrollMarginTop: "90px" }}>
        <div className="container">
          <div className="section-head section-head--center section-head--fit">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <Newspaper size={15} /> Press &amp; Media Highlights
            </div>
            <h2 className="hdg-oneline" style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.2rem)", margin: "8px 0 12px" }}>
              Press Clippings &amp; Public Recognition
            </h2>
            <p style={{ color: "var(--ink-400)", maxWidth: "62ch", margin: "0 auto", fontSize: "0.98rem" }}>
              Coverage of Chamak Foundation&apos;s grassroots launches, library inaugurations, and scholarship drives across regional and national media.
            </p>
          </div>

          <div className="grid grid--2" style={{ gap: "24px", marginTop: "36px" }}>
            <div
              className="card"
              style={{
                background: "#FFFFFF",
                borderRadius: "18px",
                padding: "36px 32px",
                border: "1px solid rgba(201,154,58,0.25)",
                boxShadow: "0 8px 24px rgba(11,27,56,0.04)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--gold-600)", background: "rgba(201,154,58,0.12)", padding: "4px 10px", borderRadius: "12px" }}>
                    Foundation Launch
                  </span>
                  <span style={{ fontSize: "0.82rem", color: "var(--ink-400)", fontWeight: 600 }}>
                    Namasthe Telangana · Oct 2023
                  </span>
                </div>
                <h3 style={{ fontSize: "1.25rem", color: "var(--navy-900)", marginBottom: "12px", fontFamily: "var(--serif)", lineHeight: 1.35 }}>
                  Chamak Foundation Unveiled in Hyderabad by Prof. Shantha Sinha
                </h3>
                <p style={{ fontSize: "0.92rem", color: "var(--ink-500)", lineHeight: 1.65, margin: 0 }}>
                  Ramon Magsaysay Awardee and prominent child rights crusader Prof. Shantha Sinha formally launched Chamak Foundation (Chamak Padhai Se) founded by Dr. Mohammad Azam Ali, commending the mission to transform underprivileged youth through quality education and scholarships.
                </p>
              </div>
              <div style={{ marginTop: "20px", paddingTop: "14px", borderTop: "1px solid rgba(11,27,56,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.78rem", color: "var(--navy-900)", fontWeight: 700 }}>Inaugural Press Coverage</span>
                <span style={{ fontSize: "0.8rem", color: "var(--gold-600)", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  Archived Daily <ExternalLink size={12} />
                </span>
              </div>
            </div>

            <div
              className="card"
              style={{
                background: "#FFFFFF",
                borderRadius: "18px",
                padding: "36px 32px",
                border: "1px solid rgba(201,154,58,0.25)",
                boxShadow: "0 8px 24px rgba(11,27,56,0.04)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--gold-600)", background: "rgba(201,154,58,0.12)", padding: "4px 10px", borderRadius: "12px" }}>
                    Library Initiative
                  </span>
                  <span style={{ fontSize: "0.82rem", color: "var(--ink-400)", fontWeight: 600 }}>
                    The Hans India · March 2024
                  </span>
                </div>
                <h3 style={{ fontSize: "1.25rem", color: "var(--navy-900)", marginBottom: "12px", fontFamily: "var(--serif)", lineHeight: 1.35 }}>
                  Rural Community Library Inaugurated at Rangapoor, Huzurabad
                </h3>
                <p style={{ fontSize: "0.92rem", color: "var(--ink-500)", lineHeight: 1.65, margin: 0 }}>
                  A transformative community library housing over 1,000 foundational, school, and competitive examination books was dedicated to rural youth and students in Rangapoor village (Karimnagar dist) by Chamak Foundation in collaboration with local community leaders.
                </p>
              </div>
              <div style={{ marginTop: "20px", paddingTop: "14px", borderTop: "1px solid rgba(11,27,56,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.78rem", color: "var(--navy-900)", fontWeight: 700 }}>Knowledge Access Movement</span>
                <span style={{ fontSize: "0.8rem", color: "var(--gold-600)", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  Archived Daily <ExternalLink size={12} />
                </span>
              </div>
            </div>

            <div
              className="card"
              style={{
                background: "#FFFFFF",
                borderRadius: "18px",
                padding: "36px 32px",
                border: "1px solid rgba(201,154,58,0.25)",
                boxShadow: "0 8px 24px rgba(11,27,56,0.04)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--gold-600)", background: "rgba(201,154,58,0.12)", padding: "4px 10px", borderRadius: "12px" }}>
                    Scholarship Drive
                  </span>
                  <span style={{ fontSize: "0.82rem", color: "var(--ink-400)", fontWeight: 600 }}>
                    Eenadu Daily · July 2024
                  </span>
                </div>
                <h3 style={{ fontSize: "1.25rem", color: "var(--navy-900)", marginBottom: "12px", fontFamily: "var(--serif)", lineHeight: 1.35 }}>
                  Annual Aid &amp; School Supply Distribution to Over 120 Meritorious Students
                </h3>
                <p style={{ fontSize: "0.92rem", color: "var(--ink-500)", lineHeight: 1.65, margin: 0 }}>
                  Spotlighting the foundation&apos;s annual sponsorship drive in Hyderabad, delivering academic fees, uniforms, textbooks, and essential backpacks to economically disadvantaged students with stellar academic records.
                </p>
              </div>
              <div style={{ marginTop: "20px", paddingTop: "14px", borderTop: "1px solid rgba(11,27,56,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.78rem", color: "var(--navy-900)", fontWeight: 700 }}>Direct Student Aid</span>
                <span style={{ fontSize: "0.8rem", color: "var(--gold-600)", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  Archived Daily <ExternalLink size={12} />
                </span>
              </div>
            </div>

            <div
              className="card"
              style={{
                background: "#FFFFFF",
                borderRadius: "18px",
                padding: "36px 32px",
                border: "1px solid rgba(201,154,58,0.25)",
                boxShadow: "0 8px 24px rgba(11,27,56,0.04)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--gold-600)", background: "rgba(201,154,58,0.12)", padding: "4px 10px", borderRadius: "12px" }}>
                    Career Guidance
                  </span>
                  <span style={{ fontSize: "0.82rem", color: "var(--ink-400)", fontWeight: 600 }}>
                    Vaartha News · Sept 2024
                  </span>
                </div>
                <h3 style={{ fontSize: "1.25rem", color: "var(--navy-900)", marginBottom: "12px", fontFamily: "var(--serif)", lineHeight: 1.35 }}>
                  Over 70 Career Guidance &amp; Civil Services Sessions Across Telangana
                </h3>
                <p style={{ fontSize: "0.92rem", color: "var(--ink-500)", lineHeight: 1.65, margin: 0 }}>
                  Detailed report on the foundation&apos;s wide-ranging career roadmaps conducted across government junior colleges and high schools, helping youth understand competitive examinations and higher education options.
                </p>
              </div>
              <div style={{ marginTop: "20px", paddingTop: "14px", borderTop: "1px solid rgba(11,27,56,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.78rem", color: "var(--navy-900)", fontWeight: 700 }}>Mentorship &amp; Counseling</span>
                <span style={{ fontSize: "0.8rem", color: "var(--gold-600)", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  Archived Daily <ExternalLink size={12} />
                </span>
              </div>
            </div>
          </div>

          {/* Media Contact Strip */}
          <div
            style={{
              marginTop: "36px",
              padding: "24px 30px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, var(--navy-900) 0%, var(--navy-950) 100%)",
              color: "var(--cream-100)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              border: "1px solid rgba(201,154,58,0.3)",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--gold-400)", fontWeight: 700, fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "4px" }}>
                <FileText size={15} /> Media &amp; Journalist Inquiries
              </div>
              <p style={{ margin: 0, fontSize: "0.92rem", color: "rgba(250,247,239,0.85)" }}>
                For press releases, high-resolution media photos, or interviews with Dr. Mohammad Azam Ali, contact our media desk.
              </p>
            </div>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <a
                href="mailto:chamakfoundation23@gmail.com?subject=Press%20Inquiry%20-%20Chamak%20Foundation"
                className="btn btn-outline-cream btn-sm"
              >
                chamakfoundation23@gmail.com
              </a>
              <a
                href="https://wa.me/919866129052?text=Hello%20Chamak%20Foundation,%20I%20am%20from%20the%20press/media%20and%20would%20like%20information."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold btn-sm"
              >
                WhatsApp Media Desk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Photo Lightbox Modal */}
      {lightbox && currentEvent && currentPhoto && (
        <div className="gallery-lightbox" onClick={() => setLightbox(null)}>
          <div
            className="gallery-lightbox__dialog"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Header */}
            <div className="gallery-lightbox__header">
              <div>
                <span className="gallery-lightbox__badge">{currentEvent.category}</span>
                <h4 className="gallery-lightbox__title">{currentEvent.title}</h4>
              </div>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="gallery-lightbox__close"
                title="Close Lightbox (Esc)"
              >
                <X size={20} />
              </button>
            </div>

            {/* Lightbox Image Stage */}
            <div className="gallery-lightbox__stage">
              {currentEvent.images.length > 1 && (
                <button
                  type="button"
                  onClick={handlePrevPhoto}
                  className="gallery-lightbox__nav gallery-lightbox__nav--prev"
                  title="Previous Photo"
                >
                  <ChevronLeft size={28} />
                </button>
              )}

              <div className="gallery-lightbox__image-wrapper">
                <Image
                  src={currentPhoto.src}
                  alt={currentPhoto.alt}
                  width={1100}
                  height={700}
                  className="gallery-lightbox__img"
                />
              </div>

              {currentEvent.images.length > 1 && (
                <button
                  type="button"
                  onClick={handleNextPhoto}
                  className="gallery-lightbox__nav gallery-lightbox__nav--next"
                  title="Next Photo"
                >
                  <ChevronRight size={28} />
                </button>
              )}
            </div>

            {/* Lightbox Footer */}
            <div className="gallery-lightbox__footer">
              <p className="gallery-lightbox__caption">{currentPhoto.caption}</p>
              <div className="gallery-lightbox__meta">
                <span className="gallery-lightbox__location">
                  <MapPin size={13} /> {currentEvent.location} · {currentEvent.dateFormatted}
                </span>
                <span className="gallery-lightbox__counter">
                  Photo {lightbox.imageIndex + 1} of {currentEvent.images.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div className="eyebrow" style={{ color: "var(--gold-300)", justifyContent: "center" }}>
              Join the Movement
            </div>
            <h2>Be the Reason a Child Shines Today</h2>
            <p>
              Behind every photograph in our gallery is an underprivileged student whose destiny was transformed through quality education, sponsorships, and care.
            </p>
            <div className="cta-band__ctas">
              <Link href="/get-involved#donate" className="btn btn-gold">
                Support a Student
              </Link>
              <Link href="/get-involved#volunteer" className="btn btn-outline-light">
                Volunteer at Our Next Event
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
