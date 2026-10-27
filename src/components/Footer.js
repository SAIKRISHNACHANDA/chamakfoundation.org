"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <div className="footer__brand">
              <Image
                src="/assets/logo.jpeg"
                alt="Chamak Foundation"
                width={54}
                height={54}
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
              <div>
                <strong>Chamak Foundation</strong>
                <span>Chamak Padhai Se</span>
              </div>
            </div>
            <p>
              Empowering underprivileged children through education, scholarships,
              and mentorship to help every child shine in life.
            </p>
            <div style={{ marginTop: "16px", fontSize: "0.84rem", color: "rgba(250,247,239,0.5)" }}>
              Registered Non-Profit Organisation · Hyderabad, India
            </div>
            <div style={{ marginTop: "20px", display: "flex", gap: "10px", alignItems: "center" }}>
              <a
                href="https://www.facebook.com/share/19rtbxWdR2/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid rgba(250,247,239,0.2)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--cream-100)",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--gold-400)";
                  e.currentTarget.style.color = "var(--gold-400)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(250,247,239,0.2)";
                  e.currentTarget.style.color = "var(--cream-100)";
                  e.currentTarget.style.transform = "none";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v7h4v-7h3l1-4h-4V9c0-.6.4-1 1-1z" fill="currentColor"/></svg>
              </a>
              <a
                href="https://www.instagram.com/chamakfoundation?exln=Z29va2p2Z2dmOXRn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid rgba(250,247,239,0.2)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--cream-100)",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--gold-400)";
                  e.currentTarget.style.color = "var(--gold-400)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(250,247,239,0.2)";
                  e.currentTarget.style.color = "var(--cream-100)";
                  e.currentTarget.style.transform = "none";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor"/></svg>
              </a>
              <a
                href="https://x.com/chamakNGO"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid rgba(250,247,239,0.2)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--cream-100)",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--gold-400)";
                  e.currentTarget.style.color = "var(--gold-400)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(250,247,239,0.2)";
                  e.currentTarget.style.color = "var(--cream-100)";
                  e.currentTarget.style.transform = "none";
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a
                href="https://www.linkedin.com/in/chamak-foundation-a6772a293"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid rgba(250,247,239,0.2)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--cream-100)",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--gold-400)";
                  e.currentTarget.style.color = "var(--gold-400)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(250,247,239,0.2)";
                  e.currentTarget.style.color = "var(--cream-100)";
                  e.currentTarget.style.transform = "none";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.6"/><path d="M7.5 10v6.5M7.5 7.5v.01M11.5 16.5V13c0-1.4 1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
              </a>
              <a
                href="https://youtube.com/@chamakfoundation?si=MH40n1P04JzHOGYM"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid rgba(250,247,239,0.2)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--cream-100)",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--gold-400)";
                  e.currentTarget.style.color = "var(--gold-400)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(250,247,239,0.2)";
                  e.currentTarget.style.color = "var(--cream-100)";
                  e.currentTarget.style.transform = "none";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="12" rx="4" stroke="currentColor" strokeWidth="1.6"/><path d="M11 10l4 2-4 2v-4z" fill="currentColor"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h5>Quick Links</h5>
            <ul className="footer__links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/vision-mission">Vision &amp; Mission</Link></li>
              <li><Link href="/programmes">Our Programmes</Link></li>
              <li><Link href="/gallery">Gallery &amp; Events</Link></li>
              <li><Link href="/team">Our Team</Link></li>
              <li><Link href="/impact">Impact &amp; Stories</Link></li>
            </ul>
          </div>

          <div>
            <h5>Get Involved</h5>
            <ul className="footer__links">
              <li><Link href="/get-involved#donate">Support a Student</Link></li>
              <li><Link href="/get-involved#volunteer">Become a Volunteer</Link></li>
              <li><Link href="/get-involved#partner">Corporate &amp; CSR</Link></li>
              <li><Link href="/contact">Contact Our Office</Link></li>
            </ul>
          </div>

          <div>
            <h5>Contact Us</h5>
            <p style={{ margin: "0 0 10px", color: "var(--cream-100)", fontWeight: 500 }}>
              Hyderabad, Telangana, India
            </p>
            <p style={{ margin: "0 0 6px" }}>
              <a href="tel:+919866129052" style={{ color: "var(--gold-400)" }}>
                +91 98661 29052
              </a>
            </p>
            <p style={{ margin: "0 0 16px" }}>
              <a href="mailto:chamakfoundation23@gmail.com" style={{ color: "var(--cream-100)" }}>
                chamakfoundation23@gmail.com
              </a>
            </p>
            <Link href="/get-involved#donate" className="btn btn-gold btn-sm" style={{ display: "inline-flex" }}>
              Donate Now
            </Link>
          </div>
        </div>

        <div className="footer__bottom">
          <div>
            &copy; 2026 Chamak Foundation. All rights reserved.
          </div>
          <div className="footer__legal">
            <Link href="/vision-mission">Transparency</Link>
            <Link href="/impact">Impact Metrics</Link>
            <Link href="/contact">Privacy &amp; Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
