"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { 
  BookOpen, 
  GraduationCap, 
  Compass, 
  Smile, 
  Heart, 
  Library, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Users,
  Target
} from "lucide-react";

export default function ProgrammesPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const programmes = [
    {
      id: "education",
      num: "01",
      category: "foundational",
      title: "Foundational Education",
      tagline: "Bridging the literacy gap from primary classrooms upward",
      icon: BookOpen,
      whatWeDo: "Promote quality education for all children through direct classroom support, curated bilingual learning materials, after-school tutoring, and strategic partnerships with local government and low-income private schools.",
      whoItHelps: "Underprivileged children aged 6–14 who lack consistent access to classroom resources, personal academic attention, or stable learning environments.",
      highlights: [
        "Daily remedial and foundational literacy sessions",
        "Free provision of textbooks, workbooks, and stationery kits",
        "Teacher enablement workshops and pedagogical support",
        "Regular baseline and endline learning assessments",
      ],
      impactStat: "500+ Students Supported",
    },
    {
      id: "scholarships",
      num: "02",
      category: "higher-ed",
      title: "Merit & Need Scholarships",
      tagline: "Ensuring financial barriers never interrupt academic brilliance",
      icon: GraduationCap,
      whatWeDo: "Provide critical direct financial sponsorship to meritorious and economically vulnerable students so that school fees, intermediate college tuition, and examination costs are never the reason a dream terminates.",
      whoItHelps: "High-potential students from single-parent families, daily wage earners, and vulnerable communities across Hyderabad and Telangana.",
      highlights: [
        "100% transparent need and merit assessment verification",
        "Direct school/college fee disbursements to institutions",
        "Coverage for uniforms, textbooks, and transport subsidies",
        "Continuous academic tracking and milestone encouragement",
      ],
      impactStat: "100+ Scholarships Awarded",
    },
    {
      id: "career-guidance",
      num: "03",
      category: "higher-ed",
      title: "Career Guidance & Mentorship",
      tagline: "Navigating the leap from school corridors to professional careers",
      icon: Compass,
      whatWeDo: "Help senior school and college-age students plan their future with clarity through structured 1-on-1 career counselling, psychometric aptitude tests, stream selection guidance, and corporate industry exposure visits.",
      whoItHelps: "10th and 12th grade students and first-generation college aspirants standing at the crossroads of pivotal career decisions.",
      highlights: [
        "One-on-one mentorship pairing with young professionals",
        "Orientation on emerging fields in STEM, commerce, and public service",
        "Entrance examination prep advice and scholarship coaching",
        "Mock interviews and resume-building workshops",
      ],
      impactStat: "50+ Guidance Sessions Conducted",
    },
    {
      id: "life-skills",
      num: "04",
      category: "foundational",
      title: "Life Skills & Leadership",
      tagline: "Building resilient voices, self-worth, and character",
      icon: Smile,
      whatWeDo: "Build fluent communication, emotional intelligence, critical inquiry, and self-confidence through interactive weekend workshops that extend far beyond textbook curricula.",
      whoItHelps: "Children and young adults striving to overcome social hesitation and cultivate the courage to express themselves in academic and civic arenas.",
      highlights: [
        "Spoken English fluency and public speaking forums",
        "Financial literacy basics and digital security training",
        "Creative problem solving and collaborative team tasks",
        "Conflict resolution and emotional wellness circles",
      ],
      impactStat: "25+ Communities Enriched",
    },
    {
      id: "girl-child",
      num: "05",
      category: "community",
      title: "Girl Child Education",
      tagline: "Removing societal and financial bottlenecks for young girls",
      icon: Heart,
      whatWeDo: "Empower girls to stay enrolled, thrive, and complete secondary and higher education by actively removing financial, cultural, and safety barriers that disproportionately force girls out of the classroom.",
      whoItHelps: "Adolescent girls at high risk of academic drop-out due to domestic expectations, family financial distress, or lack of sanitary infrastructure.",
      highlights: [
        "Targeted retention stipends and academic book grants",
        "Community and parental counselling on the value of girls' education",
        "Safe commute support and hygiene awareness drives",
        "Female mentor circles and leadership spotlight sessions",
      ],
      impactStat: "60% Female Enrollment Maintained",
    },
    {
      id: "community-libraries",
      num: "06",
      category: "community",
      title: "Community Libraries",
      tagline: "Sanctuaries of quiet reading and boundless imagination",
      icon: Library,
      whatWeDo: "Set up and curate community reading rooms in underserved bastis and neighbourhoods, stocking diverse literature in English, Urdu, and Telugu alongside quiet study desks and reference volumes.",
      whoItHelps: "Entire neighbourhood families, aspiring competitive exam test-takers, and children who lack quiet study spaces at home.",
      highlights: [
        "Open-access reading collections and weekend story hours",
        "Dedicated quiet hours for competitive exam aspirants",
        "Community-led book donation and lending drives",
        "Digital reading terminals and audio-visual storytelling",
      ],
      impactStat: "Hundreds of Books Circulated",
    },
  ];

  const filtered = activeFilter === "all" 
    ? programmes 
    : programmes.filter(p => p.category === activeFilter);

  return (
    <>
      <PageHero
        eyebrow="What We Run"
        title="Our Flagship Programmes"
        subtitle="Creating equitable opportunities. Building unshakeable confidence. Helping dreams move forward."
      />

      {/* Filter Bar */}
      <section className="section" style={{ paddingBottom: "32px", paddingTop: "48px" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "40px" }}>
            <span style={{ fontSize: "0.86rem", color: "var(--ink-400)", fontWeight: 600, marginRight: "8px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Filter Initiatives:</span>
            {[
              { id: "all", label: "All Programmes" },
              { id: "foundational", label: "Foundational & Literacy" },
              { id: "higher-ed", label: "Higher Ed & Careers" },
              { id: "community", label: "Community & Inclusion" },
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`btn btn-sm ${activeFilter === f.id ? "btn-navy" : "btn-outline-navy"}`}
                style={{
                  borderRadius: "30px",
                  padding: "8px 18px",
                  transition: "all 0.25s ease",
                  cursor: "pointer",
                }}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Programmes List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
            {filtered.map((p, index) => {
              const Icon = p.icon;
              const isEven = index % 2 === 1;

              return (
                <div 
                  key={p.id}
                  id={p.id}
                  className="card"
                  style={{
                    padding: "48px 42px",
                    borderColor: "rgba(11,27,56,0.12)",
                    background: isEven 
                      ? "linear-gradient(135deg, #FAF7EF 0%, #FFFFFF 100%)" 
                      : "linear-gradient(135deg, #FFFFFF 0%, #FAF7EF 100%)",
                    boxShadow: "0 10px 30px rgba(11,27,56,0.05)",
                  }}
                >
                  <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "32px" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", marginBottom: "16px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <span style={{ fontFamily: "var(--num)", fontSize: "1.15rem", fontWeight: 700, color: "var(--gold-600)", letterSpacing: "-0.01em" }}>
                            Programme {p.num}
                          </span>
                          <span style={{ height: "4px", width: "4px", borderRadius: "50%", background: "var(--ink-300)" }}></span>
                          <span style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, color: "var(--navy-800)", background: "rgba(201,154,58,0.15)", padding: "4px 10px", borderRadius: "12px" }}>
                            {p.category}
                          </span>
                        </div>

                        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--navy-900)", color: "var(--gold-400)", padding: "6px 14px", borderRadius: "20px", fontSize: "0.84rem", fontWeight: 600 }}>
                          <Sparkles size={14} />
                          <span>{p.impactStat}</span>
                        </div>
                      </div>

                      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
                        <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "var(--cream-200)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--navy-900)", flexShrink: 0 }}>
                          <Icon size={24} />
                        </div>
                        <div>
                          <h2 style={{ fontFamily: "var(--serif)", fontSize: "2rem", color: "var(--navy-900)", margin: 0 }}>
                            {p.title}
                          </h2>
                          <p style={{ color: "var(--gold-700)", fontWeight: 500, fontSize: "0.95rem", margin: "4px 0 0" }}>
                            {p.tagline}
                          </p>
                        </div>
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginTop: "24px" }}>
                        <div style={{ background: "rgba(255,255,255,0.7)", padding: "20px", borderRadius: "12px", border: "1px solid rgba(11,27,56,0.06)" }}>
                          <h4 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--ink-400)", margin: "0 0 8px" }}>
                            What We Do
                          </h4>
                          <p style={{ fontSize: "0.95rem", color: "var(--navy-900)", lineHeight: 1.65, margin: 0 }}>
                            {p.whatWeDo}
                          </p>
                        </div>

                        <div style={{ background: "rgba(255,255,255,0.7)", padding: "20px", borderRadius: "12px", border: "1px solid rgba(11,27,56,0.06)" }}>
                          <h4 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--ink-400)", margin: "0 0 8px" }}>
                            Who It Helps
                          </h4>
                          <p style={{ fontSize: "0.95rem", color: "var(--navy-900)", lineHeight: 1.65, margin: 0 }}>
                            {p.whoItHelps}
                          </p>
                        </div>
                      </div>

                      <div style={{ marginTop: "24px" }}>
                        <h4 style={{ fontSize: "0.88rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--ink-500)", marginBottom: "12px" }}>
                          Key Intervention Pillars:
                        </h4>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "10px" }}>
                          {p.highlights.map((h, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.9rem", color: "var(--ink-600)" }}>
                              <CheckCircle2 size={16} style={{ color: "var(--gold-600)", flexShrink: 0, marginTop: "3px" }} />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", marginTop: "32px", paddingTop: "20px", borderTop: "1px solid rgba(11,27,56,0.08)" }}>
                        <div style={{ fontSize: "0.88rem", color: "var(--ink-400)" }}>
                          Want to sponsor this specific programme?
                        </div>
                        <Link href="/get-involved" className="btn btn-navy btn-sm" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                          <span>Sponsor this Initiative</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="section section--navy">
        <div className="container">
          <div className="quote reveal">
            <div className="motif-divider">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 6c2-1.2 5-1.6 8 0 3-1.6 6-1.2 8 0v12c-2-1.2-5-1.6-8 0-3-1.6-6-1.2-8 0V6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
            </div>
            <p>&ldquo;Education is the most powerful weapon which you can use to change the world.&rdquo;</p>
            <cite>&mdash; Nelson Mandela</cite>
          </div>
        </div>
      </section>

      {/* Collaboration Call to Action */}
      <section className="section">
        <div className="container">
          <div className="cta-band reveal">
            <h2>Partner with us in your community or school</h2>
            <p>We work collaboratively with educators, volunteer tutors, and local institutions across Hyderabad to multiply educational outcomes.</p>
            <div className="cta-band__ctas">
              <Link href="/contact" className="btn btn-gold">Propose a Partnership</Link>
              <Link href="/get-involved" className="btn btn-outline-cream">Volunteer as a Tutor</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
