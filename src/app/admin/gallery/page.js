"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Trash2,
  ExternalLink,
  X,
  Check,
  AlertTriangle,
  Camera,
  RefreshCw,
  LogOut,
  UploadCloud,
  Newspaper,
} from "lucide-react";

export default function GalleryAdminPage() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [notification, setNotification] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [deleteCandidate, setDeleteCandidate] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const res = await fetch("/api/admin/me");
        if (!res.ok) {
          window.location.href = "/admin/login?from=/admin/gallery";
          return;
        }
        const data = await res.json();
        if (!data.authenticated) {
          window.location.href = "/admin/login?from=/admin/gallery";
          return;
        }
        if (isMounted) {
          setCurrentUser(data.user || { username: "Admin" });
          setAuthChecked(true);
        }
      } catch {
        window.location.href = "/admin/login?from=/admin/gallery";
      }
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  const showToast = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 4000);
  };

  const fetchEvents = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/gallery?t=${Date.now()}`, {
        cache: "no-store",
        headers: { "Cache-Control": "no-cache" },
      });
      const json = await res.json();
      if (json.success && Array.isArray(json.data)) {
        setEvents(json.data);
      }
    } catch {
      showToast("Error connecting to server.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
    } catch {}
    window.location.href = "/admin/login";
  };

  const handleBulkUpload = async (e) => {
    const files = Array.from(e.target.files || []);
    e.target.value = "";
    if (files.length === 0) return;

    setIsUploading(true);
    try {
      const fd = new FormData();
      for (const f of files) fd.append("files", f);

      const uploadRes = await fetch("/api/admin/upload", { method: "POST", body: fd });
      const uploadJson = await uploadRes.json();
      if (!uploadJson.success) {
        showToast(uploadJson.error || "Upload failed", "error");
        return;
      }

      const uploaded = Array.isArray(uploadJson.data) ? uploadJson.data : [uploadJson.data];
      const images = uploaded.map((u) => ({
        src: u.url,
        alt: u.name || "Gallery photo",
        caption: (u.name || "").replace(/\.[^/.]+$/, ""),
      }));

      const today = new Date();
      const ymd = today.toISOString().split("T")[0];
      const title = `Field Update · ${today.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })}`;

      const payload = {
        title,
        date: ymd,
        dateFormatted: today.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }),
        category: "Daily Field Updates",
        badge: "Daily Field Update",
        location: "Karimnagar, Telangana",
        metric: "Field Impact Verified",
        summary: "",
        gridStyle:
          images.length >= 3 ? "trio-strip" : images.length === 2 ? "split-duo" : "featured-mosaic",
        images,
      };

      const saveRes = await fetch("/api/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const saveJson = await saveRes.json();
      if (saveJson.success) {
        showToast(`Uploaded ${images.length} photo(s) to gallery.`);
        fetchEvents();
      } else {
        showToast(saveJson.error || "Could not create gallery entry.", "error");
      }
    } catch (err) {
      showToast("Upload failed: " + err.message, "error");
    } finally {
      setIsUploading(false);
    }
  };

  const handleConfirmDelete = async () => {
    if (!deleteCandidate || isDeleting) return;
    const target = deleteCandidate;
    setIsDeleting(true);
    setEvents((prev) => prev.filter((ev) => ev.id !== target.id));
    setDeleteCandidate(null);
    try {
      const res = await fetch(`/api/gallery?id=${encodeURIComponent(target.id)}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        showToast(`"${target.title}" deleted.`);
      } else {
        showToast(data.error || "Failed to delete.", "error");
        fetchEvents();
      }
    } catch {
      showToast("Network error during delete.", "error");
      fetchEvents();
    } finally {
      setIsDeleting(false);
    }
  };

  const filteredEvents = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return events;
    return events.filter(
      (ev) =>
        ev.title?.toLowerCase().includes(q) ||
        ev.location?.toLowerCase().includes(q) ||
        ev.id?.toLowerCase().includes(q)
    );
  }, [events, searchQuery]);

  if (!authChecked) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b1b38",
          color: "#faf7ef",
          fontFamily: "var(--font-outfit), sans-serif",
        }}
      >
        <RefreshCw size={24} className="spin" style={{ color: "#c99a3a" }} />
        <span style={{ marginLeft: 12 }}>Verifying session...</span>
      </div>
    );
  }

  return (
    <div className="admin-page">
      {notification && (
        <div className={`admin-toast admin-toast--${notification.type}`}>
          {notification.type === "success" ? <Check size={18} /> : <AlertTriangle size={18} />}
          <span>{notification.message}</span>
        </div>
      )}

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
                  <h1 className="admin-header__title">Gallery Admin</h1>
                  <span className="admin-badge admin-badge--gold">Live</span>
                </div>
                <p className="admin-header__sub">Upload photos — they appear on /gallery immediately.</p>
              </div>
            </div>

            <div className="admin-header__actions">
              <Link href="/admin/press" className="btn btn-outline-light btn-sm">
                <Newspaper size={14} /> Press Clips Admin
              </Link>
              <Link href="/gallery" target="_blank" className="btn btn-outline-light btn-sm">
                View Gallery <ExternalLink size={13} />
              </Link>

              <label
                className="btn btn-gold btn-sm"
                style={{ cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6 }}
              >
                {isUploading ? (
                  <>
                    <RefreshCw size={14} className="spin" /> Uploading...
                  </>
                ) : (
                  <>
                    <UploadCloud size={14} /> Bulk Upload Photos
                  </>
                )}
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleBulkUpload}
                  disabled={isUploading}
                  style={{ display: "none" }}
                />
              </label>

              <div className="admin-user-pill">
                <span className="admin-user-avatar">A</span>
                <span className="admin-user-name">{currentUser?.username || "Admin"}</span>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="admin-btn-logout"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "#dc2626",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "8px 16px",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                <LogOut size={14} /> <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="section section--admin-body">
        <div className="admin-fluid-container">
          <div className="admin-table-card">
            <div className="admin-table-toolbar">
              <div className="admin-table-search">
                <Search size={16} className="admin-table-search__icon" />
                <input
                  type="text"
                  placeholder="Search by title, location, id..."
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
                <button
                  type="button"
                  onClick={fetchEvents}
                  className="btn btn-outline-light btn-sm"
                >
                  <RefreshCw size={14} className={isLoading ? "spin" : ""} /> Refresh
                </button>
              </div>
            </div>

            <div className="admin-table-responsive">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th style={{ width: 32, textAlign: "center" }}>#</th>
                    <th style={{ width: 54 }}>Photo</th>
                    <th style={{ minWidth: 220 }}>Event</th>
                    <th style={{ width: 150 }}>Date</th>
                    <th style={{ width: 70, textAlign: "center" }}>Photos</th>
                    <th style={{ width: 110, textAlign: "center" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <tr>
                      <td colSpan={6} className="admin-table__loading">
                        <RefreshCw size={24} className="spin" />
                        <p>Loading events...</p>
                      </td>
                    </tr>
                  ) : filteredEvents.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="admin-table__empty">
                        <p>No gallery entries yet. Use "Bulk Upload Photos" to add some.</p>
                      </td>
                    </tr>
                  ) : (
                    filteredEvents.map((ev, index) => {
                      const firstPhoto =
                        ev.images?.[0]?.src || "/assets/img/classroom-students.jpg";
                      return (
                        <tr key={ev.id} className="admin-table__row">
                          <td className="admin-table__index">{index + 1}</td>
                          <td>
                            <div className="admin-thumb-box">
                              <Image
                                src={firstPhoto}
                                alt={ev.title}
                                width={48}
                                height={34}
                                unoptimized
                                className="admin-thumb"
                              />
                            </div>
                          </td>
                          <td className="admin-table__cell-main">
                            <strong className="admin-table__event-title">{ev.title}</strong>
                            <div className="admin-table__meta-sub">
                              <span className="admin-table__slug">id: {ev.id}</span>
                            </div>
                          </td>
                          <td>{ev.dateFormatted || ev.date}</td>
                          <td style={{ textAlign: "center" }}>
                            <span className="admin-photo-count">
                              <Camera size={13} /> {ev.images?.length || 0}
                            </span>
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <div className="admin-action-btns">
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
                                title="View Gallery"
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

            <div className="admin-table-footer">
              <span>
                Showing <strong>{filteredEvents.length}</strong> of{" "}
                <strong>{events.length}</strong> entries
              </span>
            </div>
          </div>
        </div>
      </main>

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
              Remove <strong>"{deleteCandidate.title}"</strong> from the gallery database?
            </p>
            <div className="admin-modal-actions" style={{ justifyContent: "center" }}>
              <button
                type="button"
                onClick={() => setDeleteCandidate(null)}
                disabled={isDeleting}
                className="btn btn-outline-light"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                disabled={isDeleting}
                className="btn btn-danger"
              >
                {isDeleting ? (
                  <>
                    <RefreshCw size={14} className="spin" /> Deleting...
                  </>
                ) : (
                  <>
                    <Trash2 size={16} /> Confirm Delete
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
