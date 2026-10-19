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
          </div>

          <div>
            <h5>Quick Links</h5>
            <ul className="footer__links">
              <li><Link href="/">Home</Link></li>
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
              <a href="tel:+919100007768" style={{ color: "var(--gold-400)" }}>
                +91 91000 07768
              </a>
            </p>
            <p style={{ margin: "0 0 16px" }}>
              <a href="mailto:info@chamakfoundation.org" style={{ color: "var(--cream-100)" }}>
                info@chamakfoundation.org
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
