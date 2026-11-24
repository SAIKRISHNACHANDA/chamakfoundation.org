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
  RefreshCw,
  LogOut,
  UploadCloud,
  LayoutGrid,
  Newspaper,
} from "lucide-react";

export default function PressAdminPage() {
  const [items, setItems] = useState([]);
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
          window.location.href = "/admin/login?from=/admin/press";
          return;
        }
        const data = await res.json();
        if (!data.authenticated) {
          window.location.href = "/admin/login?from=/admin/press";
          return;
        }
        if (isMounted) {
          setCurrentUser(data.user || { username: "Admin" });
          setAuthChecked(true);
        }
      } catch {
        window.location.href = "/admin/login?from=/admin/press";
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

  const fetchItems = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/press?t=${Date.now()}`, {
        cache: "no-store",
        headers: { "Cache-Control": "no-cache" },
      });
      const json = await res.json();
      if (json.success && Array.isArray(json.data)) setItems(json.data);
    } catch {
      showToast("Error loading press clippings.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
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
      const pressItems = uploaded.map((u) => ({
        image: u.url,
        name: u.name,
        filename: u.filename,
      }));

      const saveRes = await fetch("/api/press", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: pressItems }),
      });
      const saveJson = await saveRes.json();
      if (saveJson.success) {
        showToast(`Uploaded ${uploaded.length} press clipping(s).`);
        fetchItems();
      } else {
        showToast(saveJson.error || "Could not save clippings.", "error");
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
    setItems((prev) => prev.filter((p) => p.id !== target.id));
    setDeleteCandidate(null);
    try {
      const res = await fetch(`/api/press?id=${encodeURIComponent(target.id)}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        showToast("Press clipping deleted.");
      } else {
        showToast(data.error || "Failed to delete.", "error");
        fetchItems();
      }
    } catch {
      showToast("Network error during delete.", "error");
      fetchItems();
    } finally {
      setIsDeleting(false);
    }
  };

  const filteredItems = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return items;
    return items.filter(
      (p) =>
        p.titleEnglish?.toLowerCase().includes(q) ||
        p.id?.toLowerCase().includes(q)
    );
  }, [items, searchQuery]);

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
                  <h1 className="admin-header__title">Press Clips Admin</h1>
                  <span className="admin-badge admin-badge--gold">Live</span>
                </div>
                <p className="admin-header__sub">
                  Upload newspaper clippings — they appear in the Press section of /gallery.
                </p>
              </div>
            </div>

            <div className="admin-header__actions">
              <Link href="/admin/gallery" className="btn btn-outline-light btn-sm">
                <LayoutGrid size={14} /> Gallery Admin
              </Link>
              <Link href="/gallery#press" target="_blank" className="btn btn-outline-light btn-sm">
                View Press Section <ExternalLink size={13} />
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
                    <UploadCloud size={14} /> Bulk Upload Clippings
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
                  placeholder="Search clippings..."
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
                  onClick={fetchItems}
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
                    <th style={{ width: 70 }}>Clipping</th>
                    <th style={{ minWidth: 220 }}>Title</th>
                    <th style={{ width: 150 }}>Uploaded</th>
                    <th style={{ width: 110, textAlign: "center" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <tr>
                      <td colSpan={5} className="admin-table__loading">
                        <RefreshCw size={24} className="spin" />
                        <p>Loading press clippings...</p>
                      </td>
                    </tr>
                  ) : filteredItems.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="admin-table__empty">
                        <Newspaper size={28} style={{ opacity: 0.4, marginBottom: 8 }} />
                        <p>No press clippings uploaded yet.</p>
                      </td>
                    </tr>
                  ) : (
                    filteredItems.map((p, index) => (
                      <tr key={p.id} className="admin-table__row">
                        <td className="admin-table__index">{index + 1}</td>
                        <td>
                          <div className="admin-thumb-box">
                            <Image
                              src={p.image}
                              alt={p.titleEnglish || "Press clipping"}
                              width={56}
                              height={40}
                              unoptimized
                              className="admin-thumb"
                            />
                          </div>
                        </td>
                        <td className="admin-table__cell-main">
                          <strong className="admin-table__event-title">
                            {p.titleEnglish || "Press Clipping"}
                          </strong>
                          <div className="admin-table__meta-sub">
                            <span className="admin-table__slug">id: {p.id}</span>
                          </div>
                        </td>
                        <td>{p.dateFormatted || p.date || "—"}</td>
                        <td style={{ textAlign: "center" }}>
                          <div className="admin-action-btns">
                            <button
                              type="button"
                              onClick={() => setDeleteCandidate(p)}
                              className="admin-icon-btn admin-icon-btn--delete"
                              title="Delete clipping"
                            >
                              <Trash2 size={14} />
                            </button>
                            <Link
                              href="/gallery#press"
                              target="_blank"
                              className="admin-icon-btn admin-icon-btn--view"
                              title="View on Gallery"
                            >
                              <ExternalLink size={14} />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="admin-table-footer">
              <span>
                Showing <strong>{filteredItems.length}</strong> of{" "}
                <strong>{items.length}</strong> clippings
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
            <h3>Delete this clipping?</h3>
            <p>
              Remove <strong>"{deleteCandidate.titleEnglish || "clipping"}"</strong> from the press section?
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
