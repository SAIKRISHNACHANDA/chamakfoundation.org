"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import StatCounter from "@/components/StatCounter";
import { 
  GraduationCap, 
  BookOpen, 
  Compass, 
  Users, 
  Sparkles, 
  Download, 
  CheckCircle2, 
  FileText, 
  TrendingUp,
  Heart,
  Quote
} from "lucide-react";

export default function ImpactPage() {
  const [downloadModal, setDownloadModal] = useState(false);

  const impactStories = [
    {
      title: "From Daily Wage Uncertainty to Engineering College",
      student: "Mohd. Rehan, 19",
      location: "Hyderabad",
      programme: "Scholarship & Career Guidance",
      body: "When Rehan scored 94% in his intermediate exams, his father, an auto-rickshaw driver, worried they could never pay engineering college counseling fees. Through Chamak Foundation's merit scholarship and senior mentorship, Rehan secured admission to a top engineering institution in Telangana.",
      quote: "Chamak gave me the confidence that poverty would not write the final chapter of my career.",
    },
    {
      title: "Defying the Drop-out Odds in Class 9",
      student: "Fatima Begum, 15",
      location: "Charminar Area",
      programme: "Girl Child Education",
      body: "After losing her mother, Fatima was on the verge of being withdrawn from school to manage domestic responsibilities. Chamak volunteers intervened with targeted family counseling, sponsored her tuition fees and school supplies, and paired her with a woman mentor. Today, she is top of her class.",
      quote: "My teachers told me I had wings; Chamak made sure I had the sky to fly in.",
    },
    {
      title: "A Neighbourhood Transformed by Books",
      student: "Syed Ayan & Friends",
      location: "Yakutpura Community Library",
      programme: "Community Libraries",
      body: "Before Chamak established a quiet reading room in their basti, local school students had no desk or quiet place to study in their one-room homes. Today, the community library serves over 60 children daily, stocked with textbooks, storybooks, and competitive exam guides.",
      quote: "The library is our second home. We study together, read novels, and dream bigger.",
    },
  ];

  const metrics = [
    { value: 500, suffix: "+", label: "Students Supported", desc: "Across primary schools, high schools, and degree colleges." },
    { value: 100, suffix: "+", label: "Scholarships Awarded", desc: "Direct tuition assistance disbursed to educational institutions." },
    { value: 50, suffix: "+", label: "Career Guidance Sessions", desc: "Interactive career mapping, entrance test prep, and coaching." },
    { value: 25, suffix: "+", label: "Communities Reached", desc: "Grassroots presence in marginalized pockets of Hyderabad." },
    { value: 100, suffix: "+", label: "Active Volunteers", desc: "Dedicated educators, students, and professionals giving time." },
    { value: 2, suffix: "+", label: "Years of Impact", desc: "Building sustainable, transparent generational change." },
  ];

  return (
    <>
      <PageHero
        eyebrow="The Numbers"
        title="Our Measurable Impact"
        subtitle="Every single metric represents a life touched, an ambition preserved, and a family uplifted through education."
      />

      {/* Main Stats Grid */}
      <section className="section" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
        <div className="container">
          <div className="stats reveal">
            {metrics.map((m, idx) => (
              <div key={idx} className="stat">
                <div className="stat__num">
                  <StatCounter target={m.value} suffix={m.suffix} duration={1800} />
                </div>
                <div className="stat__label">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact by Programme Pillar */}
      <section className="section section--cream2">
        <div className="container">
          <div className="section-head section-head--fit reveal">
            <div className="eyebrow">Programmatic Footprint</div>
            <h2 className="hdg-oneline">Where our impact creates lasting roots</h2>
            <p style={{ color: "var(--ink-400)", maxWidth: "58ch", marginTop: "10px" }}>
              Our work spans the entire spectrum of educational interventions—from early foundational literacy to career launchpads.
            </p>
          </div>

          <div className="grid grid--3 reveal">
            <div className="card" style={{ padding: "36px 30px" }}>
              <div className="card__icon" style={{ background: "rgba(11,27,56,0.06)", color: "var(--navy-900)" }}>
                <BookOpen size={22} />
              </div>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>Primary & High Schooling</h3>
              <p style={{ fontSize: "0.92rem", color: "var(--ink-500)", lineHeight: 1.65, marginBottom: "16px" }}>
                Over 500+ students receive regular remedial tutoring, foundational math and reading instruction, and complete academic book kits.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.82rem", fontWeight: 600, color: "var(--gold-600)" }}>
                <TrendingUp size={16} />
                <span>92% Annual Grade Promotion Rate</span>
              </div>
            </div>

            <div className="card" style={{ padding: "36px 30px" }}>
              <div className="card__icon" style={{ background: "rgba(201,154,58,0.12)", color: "var(--gold-600)" }}>
                <GraduationCap size={22} />
              </div>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>Merit Scholarships</h3>
              <p style={{ fontSize: "0.92rem", color: "var(--ink-500)", lineHeight: 1.65, marginBottom: "16px" }}>
                100+ meritorious students have received full and partial tuition scholarships directly paid to certified educational colleges and schools.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.82rem", fontWeight: 600, color: "var(--navy-800)" }}>
                <TrendingUp size={16} />
                <span>Zero Dropouts Among Scholars</span>
              </div>
            </div>

            <div className="card" style={{ padding: "36px 30px" }}>
              <div className="card__icon" style={{ background: "rgba(11,27,56,0.06)", color: "var(--navy-900)" }}>
                <Compass size={22} />
              </div>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>Career Mentorship</h3>
              <p style={{ fontSize: "0.92rem", color: "var(--ink-500)", lineHeight: 1.65, marginBottom: "16px" }}>
                50+ interactive guidance clinics covering competitive exam strategies, computer literacy, spoken English, and professional vocational paths.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.82rem", fontWeight: 600, color: "var(--gold-600)" }}>
                <TrendingUp size={16} />
                <span>100% Transition to Higher Studies</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories of Real Change */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow">Real Stories, Real Lives</div>
            <h2>Voices of Transformation</h2>
            <p style={{ color: "var(--ink-400)", maxWidth: "56ch", marginTop: "8px" }}>
              Behind every aggregated number is an individual human story of resilience, courage, and triumph over circumstance.
            </p>
          </div>

          <div className="grid grid--3 reveal">
            {impactStories.map((story, idx) => (
              <div 
                key={idx}
                className="card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "36px 30px",
                  background: "linear-gradient(145deg, #FAF7EF 0%, #FFFFFF 100%)",
                  boxShadow: "0 8px 24px rgba(11,27,56,0.05)",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
                    <span style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--gold-600)", background: "rgba(201,154,58,0.14)", padding: "3px 10px", borderRadius: "10px" }}>
                      {story.programme}
                    </span>
                    <span style={{ fontSize: "0.84rem", color: "var(--ink-400)", fontWeight: 500 }}>
                      {story.location}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", color: "var(--navy-900)", lineHeight: 1.35, marginBottom: "14px" }}>
                    {story.title}
                  </h3>
                  
                  <p style={{ fontSize: "0.92rem", color: "var(--ink-500)", lineHeight: 1.65, marginBottom: "20px" }}>
                    {story.body}
                  </p>
                </div>

                <div style={{ background: "rgba(11,27,56,0.04)", padding: "16px", borderRadius: "12px", borderLeft: "3px solid var(--gold-500)" }}>
                  <Quote size={18} style={{ color: "var(--gold-600)", marginBottom: "4px" }} />
                  <p style={{ fontStyle: "italic", fontSize: "0.88rem", color: "var(--navy-900)", lineHeight: 1.5, margin: "0 0 6px" }}>
                    &ldquo;{story.quote}&rdquo;
                  </p>
                  <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--ink-400)" }}>
                    — {story.student}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Report Download CTA */}
      <section className="section section--navy">
        <div className="container">
          <div 
            className="cta-band reveal" 
            style={{ 
              background: "transparent", 
              border: "1px solid rgba(201,154,58,0.3)", 
              padding: "48px 40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "28px",
              textAlign: "left"
            }}
          >
            <div style={{ maxWidth: "560px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--gold-400)", fontSize: "0.85rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px" }}>
                <FileText size={16} />
                <span>Audited Transparency</span>
              </div>
              <h2 style={{ color: "var(--cream-100)", margin: "0 0 8px" }}>Download Our Annual Impact Report</h2>
              <p style={{ color: "rgba(250,247,239,0.7)", margin: 0, fontSize: "0.96rem" }}>
                Read our complete breakdown of student enrollment, gender equity statistics, financial allocations, and governance documentation.
              </p>
            </div>

            <div>
              <button 
                onClick={() => setDownloadModal(true)}
                className="btn btn-gold" 
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "14px 28px", cursor: "pointer" }}
              >
                <Download size={18} />
                <span>View Impact Report Summary</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Download Modal / Snapshot */}
      {downloadModal && (
        <div 
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(7,15,34,0.75)",
            backdropFilter: "blur(6px)",
            zIndex: 999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setDownloadModal(false)}
        >
          <div 
            style={{
              background: "var(--cream-100)",
              borderRadius: "18px",
              padding: "40px",
              maxWidth: "580px",
              width: "100%",
              boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
              border: "1px solid var(--gold-400)",
              position: "relative",
            }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--gold-600)", fontWeight: 700, fontSize: "0.88rem", textTransform: "uppercase" }}>
                <CheckCircle2 size={18} />
                <span>Impact Dossier · 2026</span>
              </div>
              <button 
                onClick={() => setDownloadModal(false)}
                style={{ background: "none", border: "none", fontSize: "1.6rem", color: "var(--navy-900)", cursor: "pointer", lineHeight: 1 }}
              >
                &times;
              </button>
            </div>

            <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.6rem", color: "var(--navy-900)", marginBottom: "12px" }}>
              Chamak Foundation Highlights
            </h3>

            <p style={{ color: "var(--ink-500)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "20px" }}>
              Our formal audited PDF report is currently being prepared for our annual trustee filing. Below is our verified impact summary for immediate review:
            </p>

            <div style={{ background: "white", padding: "18px", borderRadius: "12px", border: "1px solid rgba(11,27,56,0.1)", marginBottom: "24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(11,27,56,0.06)", fontSize: "0.9rem" }}>
                <span style={{ color: "var(--ink-500)" }}>Total Beneficiaries:</span>
                <strong style={{ color: "var(--navy-900)" }}>500+ Students</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(11,27,56,0.06)", fontSize: "0.9rem" }}>
                <span style={{ color: "var(--ink-500)" }}>Scholarships Disbursed:</span>
                <strong style={{ color: "var(--navy-900)" }}>100+ Grants</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(11,27,56,0.06)", fontSize: "0.9rem" }}>
                <span style={{ color: "var(--ink-500)" }}>Direct Allocation to Education:</span>
                <strong style={{ color: "var(--gold-600)" }}>100% of Educational Donations</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", fontSize: "0.9rem" }}>
                <span style={{ color: "var(--ink-500)" }}>Primary Geography:</span>
                <strong style={{ color: "var(--navy-900)" }}>Hyderabad & Telangana, India</strong>
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end" }}>
              <button 
                onClick={() => setDownloadModal(false)}
                className="btn btn-outline-navy btn-sm"
              >
                Close
              </button>
              <Link 
                href="/contact" 
                className="btn btn-gold btn-sm"
                onClick={() => setDownloadModal(false)}
              >
                Request Full Audit Copy
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
