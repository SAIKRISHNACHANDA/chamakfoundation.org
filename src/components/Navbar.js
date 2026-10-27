"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Vision", href: "/vision-mission#vision" },
      { label: "Mission", href: "/vision-mission#mission" },
      { label: "Our Programmes", href: "/programmes" },
    ],
  },
  {
    label: "Our Team",
    href: "/team",
    children: [
      { label: "Our Founder", href: "/about#founder" },
      { label: "Our Team", href: "/team" },
      { label: "Impact", href: "/impact" },
    ],
  },
  {
    label: "Gallery",
    href: "/gallery",
    children: [
      { label: "Photos", href: "/gallery" },
      { label: "Press Clippings", href: "/gallery#press" },
    ],
  },
  {
    label: "Support",
    href: "/get-involved",
    children: [
      { label: "Support a Student", href: "/get-involved#donate" },
      { label: "Become a Volunteer", href: "/get-involved#volunteer" },
      { label: "Become a Resource Person", href: "/get-involved#resource-person" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
    document.body.style.overflow = "";
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMobileOpen) {
        setIsMobileOpen(false);
        document.body.style.overflow = "";
      }
    };
    const handleResize = () => {
      if (window.innerWidth > 1200 && isMobileOpen) {
        setIsMobileOpen(false);
        document.body.style.overflow = "";
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileOpen]);

  const toggleMenu = () => {
    const nextState = !isMobileOpen;
    setIsMobileOpen(nextState);
    document.body.style.overflow = nextState ? "hidden" : "";
  };

  const closeMenu = () => {
    setIsMobileOpen(false);
    document.body.style.overflow = "";
  };

  const toggleMobileSubmenu = (label) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const isLinkActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.split("#")[0]);
  };

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <>
      <nav className={`nav ${isScrolled ? "is-scrolled" : ""}`}>
        <div className="nav__inner">
          <Link href="/" className="nav__brand">
            <Image
              src="/assets/logo.jpeg"
              alt="Chamak Foundation logo"
              width={52}
              height={52}
              className="nav__logo"
              priority
            />
            <span className="nav__brandtext">
              <strong>Chamak Foundation</strong>
              <span>Chamak Padhai Se</span>
            </span>
          </Link>

          {/* Desktop Navigation with Dropdowns */}
          <div className="nav__links">
            {NAV_ITEMS.map((item) => {
              if (item.children) {
                const isParentActive = item.children.some((child) =>
                  isLinkActive(child.href)
                );
                return (
                  <div
                    key={item.label}
                    className="nav__item"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      type="button"
                      className={`nav__item-link ${isParentActive ? "is-active" : ""}`}
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === item.label}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={15}
                        strokeWidth={2.4}
                        style={{
                          transition: "transform 0.2s ease",
                          transform: activeDropdown === item.label ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      />
                    </button>

                    <div className={`nav__dropdown ${activeDropdown === item.label ? "is-open" : ""}`}>
                      {item.children.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className={isLinkActive(subItem.href) ? "is-active" : ""}
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span>{subItem.label}</span>
                          <ArrowRight size={14} style={{ opacity: 0.55 }} />
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav__item-link ${isLinkActive(item.href) ? "is-active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="nav__cta">
            <Link href="/get-involved#donate" className="btn btn-gold btn-sm">
              Donate Now
            </Link>
            <button
              className={`nav__burger ${isMobileOpen ? "is-active" : ""}`}
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop Scrim */}
      <div
        className={`nav__scrim ${isMobileOpen ? "is-open" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Slide-out Mobile Navigation Drawer */}
      <div
        className={`nav__mobile ${isMobileOpen ? "is-open" : ""}`}
        role="dialog"
        aria-label="Mobile Navigation"
      >
        <button
          className="nav__mobile-close"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          &times;
        </button>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "16px" }}>
          {NAV_ITEMS.map((item) => {
            if (item.children) {
              const isExpanded = !!mobileExpanded[item.label];
              return (
                <div key={item.label} className="nav__mobile-group">
                  <button
                    type="button"
                    className="nav__mobile-trigger"
                    onClick={() => toggleMobileSubmenu(item.label)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={16}
                      style={{
                        transition: "transform 0.25s ease",
                        transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </button>

                  {isExpanded && (
                    <div className="nav__mobile-sublinks">
                      {item.children.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className={isLinkActive(subItem.href) ? "is-active" : ""}
                          onClick={closeMenu}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={isLinkActive(item.href) ? "is-active" : ""}
                onClick={closeMenu}
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--navy-900)",
                  padding: "10px 0",
                  borderBottom: "1px solid rgba(11, 27, 56, 0.06)",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/get-involved#donate"
          className="btn btn-gold"
          onClick={closeMenu}
          style={{ marginTop: "24px", justifyContent: "center" }}
        >
          Donate Now
        </Link>
      </div>
    </>
  );
}
