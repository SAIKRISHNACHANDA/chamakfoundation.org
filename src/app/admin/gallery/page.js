"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Calendar,
  MapPin,
  Sparkles,
  Search,
  Filter,
  Plus,
  Edit2,
  Trash2,
  ExternalLink,
  X,
  Check,
  AlertTriangle,
  Camera,
  RefreshCw,
  LayoutGrid,
  Columns,
  Image as ImageIcon,
  ArrowRight,
  ShieldCheck,
  Download,
  Copy,
  Maximize2,
  Minimize2,
  LogOut,
} from "lucide-react";
import { GALLERY_CATEGORIES } from "@/data/galleryEvents";

const AVAILABLE_PRESET_IMAGES = [
  {
    name: "Scholarship Ceremony",
    url: "/assets/img/scholarship-ceremony.jpg",
    desc: "Annual scholarship distribution & bags",
  },
  {
    name: "Classroom & Students",
    url: "/assets/img/classroom-students.jpg",
    desc: "Remedial coaching & students in class",
  },
  {
    name: "Book Reading Camp",
    url: "/assets/img/book-reading-camp.jpg",
    desc: "Outdoor neem tree reading camp",
  },
  {
    name: "Career Mentorship",
    url: "/assets/img/career-mentorship-session.jpg",
    desc: "Counselor presentation & auditorium",
  },
  {
    name: "Science & Robotics Fair",
    url: "/assets/img/science-robotics-fair.jpg",
    desc: "Students assembling solar car models",
  },
  {
    name: "Digital Lab",
    url: "/assets/img/digital-lab.jpg",
    desc: "Students practicing on computer terminals",
  },
  {
    name: "Foundation Launch",
    url: "/assets/img/founder-president.jpg",
    desc: "Prof. Shanta Sinha & Dr. Mohammad Azam Ali",
  },
];

const GRID_STYLE_OPTIONS = [
  {
    id: "featured-mosaic",
    label: "Featured Mosaic",
    desc: "1 Hero Showcase Photo + 2 Stacked Photos",
    icon: LayoutGrid,
  },
  {
    id: "split-duo",
    label: "Split Duo",
    desc: "2 Equal Side-by-Side Panoramic Photos",
    icon: Columns,
  },
  {
    id: "trio-strip",
    label: "Trio Strip",
    desc: "3 Balanced Action Columns in a Row",
    icon: LayoutGrid,
  },
];

export default function GalleryAdminPage() {
  const router = useRouter();
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [notification, setNotification] = useState(null);

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
    } catch (err) {
      // ignore network errors
    } finally {
      router.push("/admin/login");
      router.refresh();
    }
  };

  // Modal States
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingEventId, setEditingEventId] = useState(null);
  const [deleteCandidate, setDeleteCandidate] = useState(null);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Fullscreen Handler
  const toggleFullScreen = async () => {
    try {
      if (typeof document === "undefined") return;
      if (!document.fullscreenElement) {
        if (document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          await document.documentElement.webkitRequestFullscreen();
        }
        setIsFullscreen(true);
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          await document.webkitExitFullscreen();
        }
        setIsFullscreen(false);
      }
    } catch (err) {
      console.warn("Fullscreen toggle warning:", err);
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener("fullscreenchange", handleFsChange);
    document.addEventListener("webkitfullscreenchange", handleFsChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFsChange);
      document.removeEventListener("webkitfullscreenchange", handleFsChange);
    };
  }, []);

  // Form Fields State
  const initialForm = {
    title: "",
    date: "",
    dateFormatted: "",
    badge: "Daily Field Update",
    category: "Daily Field Updates",
    location: "Hyderabad, Telangana",
    metric: "Field Impact Verified",
    summary: "",
    gridStyle: "split-duo",
    images: [
      {
        src: "/assets/img/classroom-students.jpg",
        alt: "Field update photo",
        caption: "Students engaged in learning activities.",
      },
    ],
  };
  const [formData, setFormData] = useState(initialForm);

  // Load events from API
  const fetchEvents = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/gallery");
      const json = await res.json();
      if (json.success && Array.isArray(json.data)) {
        setEvents(json.data);
      }
    } catch (err) {
      showToast("Error connecting to server. Using local cache.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const showToast = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 4000);
  };

  // Filtered Events
  const filteredEvents = useMemo(() => {
    return events.filter((ev) => {
      const matchCat =
        selectedCategory === "All" || ev.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        ev.title?.toLowerCase().includes(q) ||
        ev.location?.toLowerCase().includes(q) ||
        ev.id?.toLowerCase().includes(q) ||
        ev.category?.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [events, selectedCategory, searchQuery]);

  // Statistics
  const stats = useMemo(() => {
    const totalEvents = events.length;
    const totalPhotos = events.reduce(
      (acc, ev) => acc + (ev.images?.length || 0),
      0
    );
    const uniqueCats = new Set(events.map((e) => e.category)).size;
    const latestDate = events[0]?.dateFormatted || "N/A";
    return { totalEvents, totalPhotos, uniqueCats, latestDate };
  }, [events]);

  // Open Create Form
  const handleOpenCreate = () => {
    setEditingEventId(null);
    setFormData({
      ...initialForm,
      date: new Date().toISOString().split("T")[0],
    });
    setIsFormOpen(true);
  };

  // Open Edit Form
  const handleOpenEdit = (ev) => {
    setEditingEventId(ev.id);
    setFormData({
      title: ev.title || "",
      date: ev.date || new Date().toISOString().split("T")[0],
      dateFormatted: ev.dateFormatted || "",
      badge: ev.badge || "Daily Field Update",
      category: ev.category || "Daily Field Updates",
      location: ev.location || "",
      metric: ev.metric || "",
      summary: ev.summary || "",
      gridStyle: ev.gridStyle || "split-duo",
      images:
        ev.images && ev.images.length > 0
          ? JSON.parse(JSON.stringify(ev.images))
          : [
              {
                src: "/assets/img/classroom-students.jpg",
                alt: ev.title,
                caption: ev.summary,
              },
            ],
    });
    setIsFormOpen(true);
  };

  // Save Event (Create or Update)
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      showToast("Please provide an event title.", "error");
      return;
    }
    if (formData.images.length === 0) {
      showToast("Please include at least one photo.", "error");
      return;
    }

    setIsSubmitting(true);
    try {
      const isEdit = Boolean(editingEventId);
      const url = "/api/gallery";
      const method = isEdit ? "PUT" : "POST";
      const payload = isEdit
        ? { ...formData, id: editingEventId }
        : { ...formData };

      // Generate dateFormatted if blank
      if (!payload.dateFormatted) {
        payload.dateFormatted = new Date(payload.date).toLocaleDateString(
          "en-GB",
          {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }
        );
      }

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (data.success) {
        showToast(
          isEdit ? "Event updated successfully!" : "New event created successfully!"
        );
        setIsFormOpen(false);
        fetchEvents();
      } else {
        showToast(data.error || "Failed to save event.", "error");
      }
    } catch (err) {
      showToast("Network error. Please try again.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete Event
  const handleConfirmDelete = async () => {
    if (!deleteCandidate) return;
    try {
      const res = await fetch(`/api/gallery?id=${encodeURIComponent(deleteCandidate.id)}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        showToast(`"${deleteCandidate.title}" deleted.`);
        setDeleteCandidate(null);
        fetchEvents();
      } else {
        showToast(data.error || "Failed to delete.", "error");
      }
    } catch (err) {
      showToast("Network error during delete.", "error");
    }
  };

  // Image Array Manipulations
  const handleAddImage = () => {
    setFormData((prev) => ({
      ...prev,
      images: [
        ...prev.images,
        {
          src: "/assets/img/classroom-students.jpg",
          alt: "Event activity",
          caption: "Event highlight photograph",
        },
      ],
    }));
  };

  const handleRemoveImage = (idx) => {
    if (formData.images.length <= 1) {
      showToast("At least one photograph is required.", "error");
      return;
    }
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== idx),
    }));
  };

  const handleImageChange = (idx, field, value) => {
    setFormData((prev) => {
      const updated = [...prev.images];
      updated[idx] = { ...updated[idx], [field]: value };
      return { ...prev, images: updated };
    });
  };

  return (
    <div className={`admin-page ${isFullscreen ? "is-fullscreen" : ""}`}>
      {/* Toast Notification */}
      {notification && (
        <div className={`admin-toast admin-toast--${notification.type}`}>
          {notification.type === "success" ? (
            <Check size={18} />
          ) : (
            <AlertTriangle size={18} />
          )}
          <span>{notification.message}</span>
        </div>
      )}

      {/* Top Admin Navigation Header */}
      <header className="admin-header">
        <div className="admin-fluid-container">
          <div className="admin-header__inner">
            <div className="admin-header__brand">
              <Link href="/" className="admin-header__logo-link">
                <Image
                  src="/assets/logo.jpeg"
                  alt="Chamak Foundation"
                  width={42}
                  height={42}
                  className="admin-header__logo"
                />
              </Link>
              <div>
                <div className="admin-header__title-row">
                  <h1 className="admin-header__title">Gallery &amp; Events Admin Portal</h1>
                  <span className="admin-badge admin-badge--gold">Live Management</span>
                  {isFullscreen && (
                    <span className="admin-badge admin-badge--category">Fullscreen Active</span>
                  )}
                </div>
                <p className="admin-header__sub">
                  Add, update, or remove daily events and photo grids shown on the public website.
                </p>
              </div>
            </div>

            <div className="admin-header__actions">
              <button
                type="button"
                onClick={toggleFullScreen}
                className="btn btn-outline-light btn-sm"
                title={isFullscreen ? "Exit Fullscreen (Esc)" : "Expand to Fullscreen"}
              >
                {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                <span>{isFullscreen ? "Exit Fullscreen" : "Full Screen"}</span>
              </button>

              <Link href="/gallery" target="_blank" className="btn btn-outline-light btn-sm">
                View Live Gallery <ExternalLink size={13} />
              </Link>
              <button
                type="button"
                onClick={handleOpenCreate}
                className="btn btn-gold btn-sm"
              >
                <Plus size={16} /> Add New Event
              </button>

              <div className="admin-user-pill">
                <span className="admin-user-avatar">A</span>
                <span className="admin-user-name">Admin</span>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="admin-btn-logout"
                title="Sign out of Admin Dashboard"
              >
                <LogOut size={13} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="section section--admin-body">
        <div className="admin-fluid-container">
          {/* Metrics Overview Cards */}
          <div className="admin-metrics-grid">
            <div className="admin-metric-card">
              <span className="admin-metric-card__label">Total Events</span>
              <span className="admin-metric-card__value">{stats.totalEvents}</span>
              <span className="admin-metric-card__hint">Live in database</span>
            </div>
            <div className="admin-metric-card">
              <span className="admin-metric-card__label">Total Photos</span>
              <span className="admin-metric-card__value">{stats.totalPhotos}</span>
              <span className="admin-metric-card__hint">High-res images</span>
            </div>
            <div className="admin-metric-card">
              <span className="admin-metric-card__label">Active Categories</span>
              <span className="admin-metric-card__value">{stats.uniqueCats}</span>
              <span className="admin-metric-card__hint">Filterable tags</span>
            </div>
            <div className="admin-metric-card">
              <span className="admin-metric-card__label">Latest Update</span>
              <span className="admin-metric-card__value admin-metric-card__value--sm">
                {stats.latestDate}
              </span>
              <span className="admin-metric-card__hint">Most recent entry</span>
            </div>
          </div>

          {/* Table Controls (Search, Filter, Refresh, Export) */}
          <div className="admin-table-card">
            <div className="admin-table-toolbar">
              <div className="admin-table-search">
                <Search size={16} className="admin-table-search__icon" />
                <input
                  type="text"
                  placeholder="Filter table by title, location, slug..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="admin-table-search__input"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="admin-table-search__clear"
                  >
                    <X size={13} />
                  </button>
                )}
              </div>

              <div className="admin-table-filters">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="admin-select"
                >
                  <option value="All">All Categories</option>
                  {GALLERY_CATEGORIES.filter((c) => c !== "All Updates").map(
                    (cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    )
                  )}
                </select>

                <button
                  type="button"
                  onClick={toggleFullScreen}
                  className="btn btn-outline-light btn-sm"
                  title={isFullscreen ? "Exit Fullscreen" : "Full Screen Mode"}
                >
                  {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                  <span>{isFullscreen ? "Exit Fullscreen" : "Full Screen"}</span>
                </button>

                <button
                  type="button"
                  onClick={fetchEvents}
                  className="btn btn-outline-light btn-sm"
                  title="Reload table"
                >
                  <RefreshCw size={14} className={isLoading ? "spin" : ""} /> Refresh
                </button>

                <button
                  type="button"
                  onClick={() => setIsExportOpen(true)}
                  className="btn btn-outline-light btn-sm"
                  title="View JSON database"
                >
                  <Download size={14} /> Export JSON
                </button>
              </div>
            </div>

            {/* The Main Admin Table */}
            <div className="admin-table-responsive">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th style={{ width: "32px", textAlign: "center" }}>#</th>
                    <th style={{ width: "54px" }}>Photo</th>
                    <th style={{ minWidth: "200px" }}>Event Details</th>
                    <th style={{ width: "135px" }}>Category &amp; Badge</th>
                    <th style={{ width: "145px" }}>Location</th>
                    <th style={{ width: "160px" }}>Metric Beacon</th>
                    <th style={{ width: "95px" }}>Grid Style</th>
                    <th style={{ width: "50px", textAlign: "center" }}>Photos</th>
                    <th className="admin-table__th-actions" style={{ width: "110px", textAlign: "center" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <tr>
                      <td colSpan={9} className="admin-table__loading">
                        <RefreshCw size={24} className="spin" />
                        <p>Loading events from database...</p>
                      </td>
                    </tr>
                  ) : filteredEvents.length === 0 ? (
                    <tr>
                      <td colSpan={9} className="admin-table__empty">
                        <p>No events found matching your filter.</p>
                        <button
                          type="button"
                          onClick={() => {
                            setSearchQuery("");
                            setSelectedCategory("All");
                          }}
                          className="btn btn-outline-light btn-sm"
                        >
                          Clear Filters
                        </button>
                      </td>
                    </tr>
                  ) : (
                    filteredEvents.map((ev, index) => {
                      const firstPhoto = ev.images?.[0]?.src || "/assets/img/classroom-students.jpg";

                      return (
                        <tr key={ev.id} className="admin-table__row">
                          <td className="admin-table__index">{index + 1}</td>

                          {/* Thumbnail */}
                          <td>
                            <div className="admin-thumb-box">
                              <Image
                                src={firstPhoto}
                                alt={ev.title}
                                width={48}
                                height={34}
                                className="admin-thumb"
                              />
                            </div>
                          </td>

                          {/* Event Details */}
                          <td className="admin-table__cell-main">
                            <strong className="admin-table__event-title">{ev.title}</strong>
                            <div className="admin-table__meta-sub">
                              <span>📅 {ev.dateFormatted || ev.date}</span>
                              <span className="admin-table__slug">id: {ev.id}</span>
                            </div>
                          </td>

                          {/* Category & Badge */}
                          <td>
                            <div className="admin-badge-stack">
                              <span className="admin-badge admin-badge--category">
                                {ev.category}
                              </span>
                              <span className="admin-badge admin-badge--pill">
                                {ev.badge}
                              </span>
                            </div>
                          </td>

                          {/* Location */}
                          <td className="admin-table__cell-location">
                            <span className="admin-location-pill">
                              <MapPin size={12} /> {ev.location}
                            </span>
                          </td>

                          {/* Metric Beacon */}
                          <td>
                            <span className="admin-metric-pill">
                              <span className="admin-metric-dot" /> {ev.metric}
                            </span>
                          </td>

                          {/* Grid Style */}
                          <td>
                            <span className={`admin-layout-badge admin-layout-badge--${ev.gridStyle}`}>
                              {ev.gridStyle === "featured-mosaic" && "Mosaic"}
                              {ev.gridStyle === "split-duo" && "Split Duo"}
                              {ev.gridStyle === "trio-strip" && "Trio Strip"}
                              {!["featured-mosaic", "split-duo", "trio-strip"].includes(ev.gridStyle) &&
                                ev.gridStyle}
                            </span>
                          </td>

                          {/* Photos Count */}
                          <td style={{ textAlign: "center" }}>
                            <span className="admin-photo-count">
                              <Camera size={13} /> {ev.images?.length || 0}
                            </span>
                          </td>

                          {/* Actions */}
                          <td className="admin-table__td-actions" style={{ textAlign: "center" }}>
                            <div className="admin-action-btns">
                              <button
                                type="button"
                                onClick={() => handleOpenEdit(ev)}
                                className="admin-icon-btn admin-icon-btn--edit"
                                title="Edit Event"
                              >
                                <Edit2 size={14} />
                              </button>

                              <button
                                type="button"
                                onClick={() => setDeleteCandidate(ev)}
                                className="admin-icon-btn admin-icon-btn--delete"
                                title="Delete Event"
                              >
                                <Trash2 size={14} />
                              </button>

                              <Link
                                href="/gallery"
                                target="_blank"
                                className="admin-icon-btn admin-icon-btn--view"
                                title="View in Public Gallery"
                              >
                                <ExternalLink size={14} />
                              </Link>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            {/* Table Footer info */}
            <div className="admin-table-footer">
              <span>
                Showing <strong>{filteredEvents.length}</strong> of <strong>{events.length}</strong> total events
              </span>
              <span className="admin-table-footer__note">
                ⚡ Any changes made here are immediately live on <code>/gallery</code>.
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* ========================================================
          ADD / EDIT EVENT MODAL
          ======================================================== */}
      {isFormOpen && (
        <div className="admin-modal-backdrop" onClick={() => setIsFormOpen(false)}>
          <div
            className="admin-modal-dialog admin-modal-dialog--large"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="admin-modal-header">
              <div>
                <span className="admin-badge admin-badge--gold">
                  {editingEventId ? "Edit Event" : "Create New Event"}
                </span>
                <h3 className="admin-modal-title">
                  {editingEventId ? "Update Event Details" : "Publish Daily Update or Event"}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="admin-modal-close"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmitForm} className="admin-modal-form">
              <div className="admin-form-grid">
                {/* Title */}
                <div className="admin-form-group admin-form-group--full">
                  <label>Event Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Annual Scholarship & Academic Kit Distribution Drive"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    className="admin-form-input"
                  />
                </div>

                {/* Date */}
                <div className="admin-form-group">
                  <label>Event Date (YYYY-MM-DD) *</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => {
                      const newDate = e.target.value;
                      const formatted = new Date(newDate).toLocaleDateString(
                        "en-GB",
                        { day: "2-digit", month: "long", year: "numeric" }
                      );
                      setFormData({
                        ...formData,
                        date: newDate,
                        dateFormatted: formatted,
                      });
                    }}
                    className="admin-form-input"
                  />
                </div>

                {/* Formatted Date */}
                <div className="admin-form-group">
                  <label>Display Date (e.g. 18 October 2026)</label>
                  <input
                    type="text"
                    placeholder="Auto-generated if left blank"
                    value={formData.dateFormatted}
                    onChange={(e) =>
                      setFormData({ ...formData, dateFormatted: e.target.value })
                    }
                    className="admin-form-input"
                  />
                </div>

                {/* Category */}
                <div className="admin-form-group">
                  <label>Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className="admin-form-input"
                  >
                    {GALLERY_CATEGORIES.filter((c) => c !== "All Updates").map(
                      (cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      )
                    )}
                  </select>
                </div>

                {/* Badge Label */}
                <div className="admin-form-group">
                  <label>Badge Pill Tag</label>
                  <input
                    type="text"
                    placeholder="e.g. Daily Field Update, Flagship Event, Milestone"
                    value={formData.badge}
                    onChange={(e) =>
                      setFormData({ ...formData, badge: e.target.value })
                    }
                    className="admin-form-input"
                  />
                </div>

                {/* Location */}
                <div className="admin-form-group">
                  <label>Location / Venue *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hyderabad Central Auditorium, Telangana"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    className="admin-form-input"
                  />
                </div>

                {/* Metric */}
                <div className="admin-form-group">
                  <label>Highlight Metric Beacon</label>
                  <input
                    type="text"
                    placeholder="e.g. 120+ Students Sponsored"
                    value={formData.metric}
                    onChange={(e) =>
                      setFormData({ ...formData, metric: e.target.value })
                    }
                    className="admin-form-input"
                  />
                </div>

                {/* Summary */}
                <div className="admin-form-group admin-form-group--full">
                  <label>Event Summary / Narrative Description</label>
                  <textarea
                    rows={3}
                    placeholder="Write a clear summary of what happened, who attended, and the direct impact on underprivileged children..."
                    value={formData.summary}
                    onChange={(e) =>
                      setFormData({ ...formData, summary: e.target.value })
                    }
                    className="admin-form-textarea"
                  />
                </div>

                {/* Grid Layout Style Selector */}
                <div className="admin-form-group admin-form-group--full">
                  <label>Card Grid Layout Style *</label>
                  <div className="admin-layout-selector">
                    {GRID_STYLE_OPTIONS.map((opt) => {
                      const Icon = opt.icon;
                      const isSel = formData.gridStyle === opt.id;
                      return (
                        <div
                          key={opt.id}
                          onClick={() =>
                            setFormData({ ...formData, gridStyle: opt.id })
                          }
                          className={`admin-layout-option ${
                            isSel ? "is-selected" : ""
                          }`}
                        >
                          <div className="admin-layout-option__icon">
                            <Icon size={20} />
                          </div>
                          <div>
                            <strong>{opt.label}</strong>
                            <span>{opt.desc}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Photographs Section */}
                <div className="admin-form-group admin-form-group--full">
                  <div className="admin-photos-header">
                    <div>
                      <label style={{ margin: 0 }}>Event Photographs ({formData.images.length}) *</label>
                      <p className="admin-photos-hint">
                        Choose from high-res library presets or enter custom photo URLs.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleAddImage}
                      className="btn btn-outline-light btn-sm"
                    >
                      <Plus size={14} /> Add Another Photo
                    </button>
                  </div>

                  <div className="admin-photos-list">
                    {formData.images.map((img, i) => (
                      <div key={i} className="admin-photo-item">
                        <div className="admin-photo-item__index">{i + 1}</div>

                        <div className="admin-photo-item__preview">
                          <Image
                            src={img.src}
                            alt={img.alt || "Preview"}
                            width={72}
                            height={52}
                            className="admin-photo-item__img"
                          />
                        </div>

                        <div className="admin-photo-item__fields">
                          <div className="admin-photo-row">
                            <select
                              value={
                                AVAILABLE_PRESET_IMAGES.some((p) => p.url === img.src)
                                  ? img.src
                                  : "custom"
                              }
                              onChange={(e) => {
                                if (e.target.value !== "custom") {
                                  handleImageChange(i, "src", e.target.value);
                                }
                              }}
                              className="admin-select admin-select--sm"
                            >
                              <option value="custom">Preset Image Library...</option>
                              {AVAILABLE_PRESET_IMAGES.map((p) => (
                                <option key={p.url} value={p.url}>
                                  📷 {p.name}
                                </option>
                              ))}
                            </select>

                            <input
                              type="text"
                              placeholder="Image URL (e.g. /assets/img/scholarship-ceremony.jpg)"
                              value={img.src}
                              onChange={(e) =>
                                handleImageChange(i, "src", e.target.value)
                              }
                              className="admin-form-input admin-form-input--sm"
                            />
                          </div>

                          <div className="admin-photo-row">
                            <input
                              type="text"
                              placeholder="Photo caption (displayed in lightbox and on hover)..."
                              value={img.caption}
                              onChange={(e) =>
                                handleImageChange(i, "caption", e.target.value)
                              }
                              className="admin-form-input admin-form-input--sm"
                            />
                            <input
                              type="text"
                              placeholder="Alt text"
                              value={img.alt}
                              onChange={(e) =>
                                handleImageChange(i, "alt", e.target.value)
                              }
                              className="admin-form-input admin-form-input--sm"
                              style={{ maxWidth: "160px" }}
                            />
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleRemoveImage(i)}
                          className="admin-icon-btn admin-icon-btn--delete"
                          title="Remove photo"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form Action Buttons */}
              <div className="admin-modal-actions">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="btn btn-outline-light"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-gold"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw size={15} className="spin" /> Saving...
                    </>
                  ) : editingEventId ? (
                    <>
                      <Check size={16} /> Save Changes
                    </>
                  ) : (
                    <>
                      <Plus size={16} /> Publish Event to Gallery
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================
          DELETE CONFIRMATION DIALOG
          ======================================================== */}
      {deleteCandidate && (
        <div className="admin-modal-backdrop" onClick={() => setDeleteCandidate(null)}>
          <div
            className="admin-modal-dialog admin-modal-dialog--danger"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="admin-danger-icon">
              <AlertTriangle size={32} />
            </div>
            <h3>Delete this event?</h3>
            <p>
              Are you sure you want to remove <strong>"{deleteCandidate.title}"</strong> from the gallery database? This will immediately remove it from the live website.
            </p>
            <div className="admin-modal-actions" style={{ justifyContent: "center" }}>
              <button
                type="button"
                onClick={() => setDeleteCandidate(null)}
                className="btn btn-outline-light"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                className="btn btn-danger"
              >
                <Trash2 size={16} /> Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          EXPORT JSON MODAL
          ======================================================== */}
      {isExportOpen && (
        <div className="admin-modal-backdrop" onClick={() => setIsExportOpen(false)}>
          <div
            className="admin-modal-dialog admin-modal-dialog--large"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="admin-modal-header">
              <div>
                <span className="admin-badge admin-badge--gold">Database Backup</span>
                <h3 className="admin-modal-title">Gallery Events JSON Export</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsExportOpen(false)}
                className="admin-modal-close"
              >
                <X size={18} />
              </button>
            </div>
            <div style={{ padding: "20px 24px" }}>
              <p style={{ fontSize: "0.88rem", color: "var(--ink-600)", margin: "0 0 14px" }}>
                This is the raw JSON array representing all current events in <code>src/data/events.json</code>.
              </p>
              <textarea
                readOnly
                rows={16}
                value={JSON.stringify(events, null, 2)}
                className="admin-json-box"
              />
            </div>
            <div className="admin-modal-actions">
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(JSON.stringify(events, null, 2));
                  showToast("JSON copied to clipboard!");
                }}
                className="btn btn-gold"
              >
                <Copy size={16} /> Copy to Clipboard
              </button>
              <button
                type="button"
                onClick={() => setIsExportOpen(false)}
                className="btn btn-outline-light"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
