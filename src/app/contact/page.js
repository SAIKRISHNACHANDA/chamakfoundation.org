"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import {
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Clock,
  MessageCircle,
  ArrowRight,
  Sparkles,
  HeartHandshake,
  GraduationCap,
  Users,
  Compass
} from "lucide-react";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "How does a student apply for a Chamak Foundation scholarship?",
      a: "Students or their guardians can apply directly by reaching out via our contact email or phone with academic transcripts and proof of family income. Our welfare committee reviews applications twice yearly before school terms commence.",
    },
    {
      q: "How can I verify how my donation is utilized?",
      a: "Chamak Foundation operates with radical financial transparency. 100% of educational donations are disbursed directly to accredited educational institutions and certified book vendors. Donors receive student progress reports and audit confirmation statements.",
    },
    {
      q: "Can working professionals and college students volunteer on weekends?",
      a: "Yes! The majority of our tutoring and library sessions occur on Saturday mornings and Sunday afternoons to accommodate corporate employees and university students. We provide tutor training and structured workbooks.",
    },
    {
      q: "How can our school or basti community partner with Chamak?",
      a: "Government and low-income private schools can write to chamakfoundation23@gmail.com. We evaluate pupil strength, infrastructural readiness, and teacher availability before rolling out remedial coaching or a community library nook.",
    },
    {
      q: "Can I sponsor a specific child or community library?",
      a: "Yes. Donors can choose to sponsor a specific high school scholar or fund an entire community library unit. You will receive direct periodic updates on the student's academic marks or the library's daily footfall.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Create More Chamaks."
        subtitle="We would love to hear from you. Reach out with questions, collaboration ideas, or sponsorship inquiries."
      />

      {/* Main Split: Contact Details & Direct Assistance Hub */}
      <section className="section">
        <div className="container">
          <div className="split reveal">
            {/* Left: Official Contact Information */}
            <div>
              <div className="eyebrow" style={{ color: "var(--gold-600)" }}>
                <Sparkles size={14} /> Official Contact Channels
              </div>
              <h2 style={{ marginBottom: "20px", color: "var(--navy-900)" }}>Reach Our Team</h2>
              <p style={{ color: "var(--ink-500)", marginBottom: "32px", fontSize: "1.02rem", lineHeight: 1.65 }}>
                Our leadership and coordinator team are centrally based in Hyderabad, Telangana. We welcome visits, phone conversations, and direct emails.
              </p>

              <div className="info-row">
                <div className="info-row__icon"><MapPin size={20} /></div>
                <div>
                  <h4>Registered Location</h4>
                  <p>Hyderabad, Telangana, India</p>
                </div>
              </div>

              <div className="info-row">
                <div className="info-row__icon"><Phone size={20} /></div>
                <div>
                  <h4>Phone &amp; WhatsApp Hotline</h4>
                  <p><a href="tel:+919866129052" style={{ color: "inherit", textDecoration: "none" }}>+91 98661 29052</a></p>
                </div>
              </div>

              <div className="info-row">
                <div className="info-row__icon"><Mail size={20} /></div>
                <div>
                  <h4>Official Email</h4>
                  <p><a href="mailto:chamakfoundation23@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>chamakfoundation23@gmail.com</a></p>
                </div>
              </div>

              <div className="info-row">
                <div className="info-row__icon"><Globe size={20} /></div>
                <div>
                  <h4>Official Website</h4>
                  <p>www.chamakfoundation.org</p>
                </div>
              </div>

              <div className="info-row">
                <div className="info-row__icon"><Clock size={20} /></div>
                <div>
                  <h4>Operating Hours</h4>
                  <p>Monday – Saturday: 9:00 AM – 6:00 PM IST</p>
                </div>
              </div>

              <h4 style={{ marginTop: "32px", fontFamily: "var(--sans)", fontSize: "0.82rem", letterSpacing: "0.06em", color: "var(--ink-400)", textTransform: "uppercase", fontWeight: 700 }}>
                Social Channels
              </h4>
              <div className="social-row">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v7h4v-7h3l1-4h-4V9c0-.6.4-1 1-1z" fill="currentColor"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor"/></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.6"/><path d="M7.5 10v6.5M7.5 7.5v.01M11.5 16.5V13c0-1.4 1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="12" rx="4" stroke="currentColor" strokeWidth="1.6"/><path d="M11 10l4 2-4 2v-4z" fill="currentColor"/></svg>
                </a>
              </div>
            </div>

            {/* Right: Direct Assistance Hub (Replacing Generic Form) */}
            <div
              className="card"
              style={{
                background: "#FFFFFF",
                borderRadius: "20px",
                padding: "40px 36px",
                border: "1px solid rgba(201,154,58,0.25)",
                boxShadow: "0 12px 36px rgba(11,27,56,0.06)",
                display: "flex",
                flexDirection: "column",
                gap: "28px",
              }}
            >
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(37,211,102,0.12)", color: "#1E8E3E", padding: "4px 12px", borderRadius: "16px", fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "12px" }}>
                  <MessageCircle size={14} /> Instant Direct Access
                </div>
                <h3 style={{ fontSize: "1.6rem", color: "var(--navy-900)", margin: "0 0 8px", fontFamily: "var(--serif)" }}>
                  Connect Directly with Our Leadership
                </h3>
                <p style={{ color: "var(--ink-500)", fontSize: "0.93rem", lineHeight: 1.6, margin: 0 }}>
                  Skip waiting for email queues. Reach our team directly via WhatsApp or telephone for urgent queries, student sponsorships, or institutional partnerships.
                </p>
              </div>

              {/* Instant WhatsApp Action Card */}
              <div
                style={{
                  background: "linear-gradient(135deg, #0b1b38 0%, #162a52 100%)",
                  borderRadius: "16px",
                  padding: "24px",
                  color: "#FAF7EF",
                  border: "1px solid rgba(201,154,58,0.3)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                  <span style={{ fontSize: "0.8rem", color: "var(--gold-400)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Founder &amp; President Desk
                  </span>
                  <span style={{ fontSize: "0.75rem", background: "rgba(37,211,102,0.2)", color: "#25D366", padding: "2px 8px", borderRadius: "10px", fontWeight: 700 }}>
                    Online
                  </span>
                </div>
                <h4 style={{ fontSize: "1.2rem", color: "#FFFFFF", margin: "0 0 6px", fontFamily: "var(--serif)" }}>
                  Dr. Mohammad Azam Ali
                </h4>
                <p style={{ fontSize: "0.86rem", color: "rgba(250,247,239,0.78)", margin: "0 0 16px", lineHeight: 1.5 }}>
                  Assistant Professor, Founder &amp; President — Chamak Foundation
                </p>
                <a
                  href="https://wa.me/919866129052?text=Hello%20Dr.%20Azam%20Ali,%20I%20would%20like%20to%20connect%20regarding%20Chamak%20Foundation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold btn--full"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
                >
                  <MessageCircle size={18} /> Chat Directly on WhatsApp
                </a>
              </div>

              {/* Direct Pathways Grid */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <h4 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink-400)", margin: 0, fontWeight: 700 }}>
                  Direct Assistance by Topic
                </h4>

                <Link
                  href="/get-involved#donate"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 18px",
                    borderRadius: "12px",
                    background: "var(--cream-100, #F7F3EE)",
                    border: "1px solid rgba(11,27,56,0.06)",
                    textDecoration: "none",
                    color: "var(--navy-900)",
                    transition: "all 0.2s ease",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <GraduationCap size={20} style={{ color: "var(--gold-600)" }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "0.92rem" }}>Support or Sponsor a Student</div>
                      <div style={{ fontSize: "0.78rem", color: "var(--ink-400)" }}>Verified tuition aid, books, &amp; uniform kit distribution</div>
                    </div>
                  </div>
                  <ArrowRight size={16} style={{ color: "var(--navy-900)" }} />
                </Link>

                <Link
                  href="/get-involved#volunteer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 18px",
                    borderRadius: "12px",
                    background: "var(--cream-100, #F7F3EE)",
                    border: "1px solid rgba(11,27,56,0.06)",
                    textDecoration: "none",
                    color: "var(--navy-900)",
                    transition: "all 0.2s ease",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <Users size={20} style={{ color: "var(--gold-600)" }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "0.92rem" }}>Become a Weekend Volunteer</div>
                      <div style={{ fontSize: "0.78rem", color: "var(--ink-400)" }}>Tutoring, library organizing, &amp; events across Hyderabad</div>
                    </div>
                  </div>
                  <ArrowRight size={16} style={{ color: "var(--navy-900)" }} />
                </Link>

                <Link
                  href="/get-involved#resource-person"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 18px",
                    borderRadius: "12px",
                    background: "var(--cream-100, #F7F3EE)",
                    border: "1px solid rgba(11,27,56,0.06)",
                    textDecoration: "none",
                    color: "var(--navy-900)",
                    transition: "all 0.2s ease",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <Compass size={20} style={{ color: "var(--gold-600)" }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "0.92rem" }}>Join as a Resource Person</div>
                      <div style={{ fontSize: "0.78rem", color: "var(--ink-400)" }}>Guest lectures, career roadmaps, &amp; teacher workshops</div>
                    </div>
                  </div>
                  <ArrowRight size={16} style={{ color: "var(--navy-900)" }} />
                </Link>
              </div>

              {/* Direct Email Link Strip */}
              <div
                style={{
                  padding: "14px 16px",
                  borderRadius: "12px",
                  background: "rgba(201,154,58,0.1)",
                  border: "1px solid rgba(201,154,58,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "0.88rem",
                }}
              >
                <span style={{ color: "var(--navy-900)", fontWeight: 600 }}>Prefer sending documents or proposals?</span>
                <a
                  href="mailto:chamakfoundation23@gmail.com"
                  style={{
                    color: "var(--gold-700)",
                    fontWeight: 700,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  chamakfoundation23@gmail.com <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="section section--cream2">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>FAQ</div>
            <h2>Frequently Asked Questions</h2>
            <p style={{ color: "var(--ink-400)", maxWidth: "56ch", margin: "10px auto 0" }}>
              Quick answers about student eligibility, donor accountability, and our community programs.
            </p>
          </div>

          <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "14px" }}>
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className="card"
                  style={{
                    padding: "24px 28px",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    border: isOpen ? "1.5px solid var(--gold-500)" : "1px solid rgba(11,27,56,0.1)",
                    background: isOpen ? "#FFFFFF" : "rgba(255,255,255,0.7)",
                  }}
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
                    <h3 style={{ fontSize: "1.08rem", color: "var(--navy-900)", margin: 0, fontFamily: "var(--sans)", fontWeight: 600 }}>
                      {faq.q}
                    </h3>
                    <div style={{ color: isOpen ? "var(--gold-600)" : "var(--ink-400)", flexShrink: 0 }}>
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>

                  {isOpen && (
                    <div style={{ marginTop: "14px", paddingTop: "14px", borderTop: "1px solid rgba(11,27,56,0.06)", color: "var(--ink-500)", lineHeight: 1.65, fontSize: "0.93rem" }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
