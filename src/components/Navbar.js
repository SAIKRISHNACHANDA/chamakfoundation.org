"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/vision-mission", label: "Vision & Mission" },
  { href: "/programmes", label: "Our Programmes" },
  { href: "/gallery", label: "Gallery & Events" },
  { href: "/team", label: "Our Team" },
  { href: "/impact", label: "Impact" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setIsMobileOpen(false);
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

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
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

          <div className="nav__links">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={isActive(link.href) ? "is-active" : ""}
              >
                {link.label}
              </Link>
            ))}
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

        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={isActive(link.href) ? "is-active" : ""}
            onClick={closeMenu}
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="/get-involved#donate"
          className="btn btn-gold"
          onClick={closeMenu}
        >
          Donate Now
        </Link>
      </div>
    </>
  );
}
