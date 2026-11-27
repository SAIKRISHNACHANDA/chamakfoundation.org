"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { 
  Compass, 
  Smile, 
  Library, 
  ArrowRight,
  BookOpen
} from "lucide-react";

export default function ProgrammesPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const programmes = [
    {
      id: "career-guidance",
      num: "01",
      category: "Higher Ed & Careers",
      title: "Career Guidance Programmes",
      tagline: "Career counseling, competitive exams, and civil services mentoring",
      icon: Compass,
      cardBg: "#FFFDF7",
      cardBorder: "rgba(182, 132, 37, 0.35)",
      headerBg: "linear-gradient(135deg, #B68425 0%, #8E6414 100%)",
      headerBorder: "#E6C16E",
      boxBg: "#FEF7E5",
      boxBorder: "rgba(182, 132, 37, 0.3)",
      accentText: "#9E6F1B",
      whatWeDo: "We provide comprehensive career guidance, competitive examination awareness sessions, and dedicated civil services mentoring to guide students from early schooling through higher education.",
      whoItHelps: "School and college students, first-generation learners, and youth aspiring for competitive exams and civil services across rural, tribal, and underserved communities.",
      impactStat: "1,000+ Students Mentored",
    },
    {
      id: "life-skills",
      num: "02",
      category: "Youth & Leadership",
      title: "Life Skills Education",
      tagline: "Building resilient voices, emotional intelligence, and leadership competencies",
      icon: Smile,
      cardBg: "#F8FAFF",
      cardBorder: "rgba(11, 27, 56, 0.22)",
      headerBg: "linear-gradient(135deg, #0B1B38 0%, #163264 100%)",
      headerBorder: "#60A5FA",
      boxBg: "#EEF4FF",
      boxBorder: "rgba(37, 99, 235, 0.22)",
      accentText: "#1E40AF",
      whatWeDo: "Our life skills curriculum builds foundational personal and interpersonal competencies beyond standard textbooks, empowering young people to articulate thoughts, lead initiatives, and make sound life choices.",
      whoItHelps: "Students and young adults seeking to build self-worth, communication skills, emotional resilience, and executive life decisions.",
      impactStat: "500+ Youth Empowered",
    },
    {
      id: "community-libraries",
      num: "03",
      category: "Community & Literacy",
      title: "Community Library Initiatives",
      tagline: "Establishing knowledge havens and cultivating a vibrant reading culture",
      icon: Library,
      cardBg: "#F7FCFA",
      cardBorder: "rgba(15, 118, 110, 0.28)",
      headerBg: "linear-gradient(135deg, #0F766E 0%, #115E59 100%)",
      headerBorder: "#5EEAD4",
      boxBg: "#ECFDF5",
      boxBorder: "rgba(15, 118, 110, 0.25)",
      accentText: "#0F766E",
      whatWeDo: "We establish community libraries in rural, tribal, and minority areas, creating safe, quiet spaces stocked with literature, academic references, and general knowledge books to foster reading culture.",
      whoItHelps: "Children, youth, competitive examination aspirants, and entire communities who lack access to public libraries or quiet study spaces at home.",
      impactStat: "Thousands of Books Circulated",
    },
    {
      id: "education-dialogue",
      num: "04",
      category: "Policy & Development",
      title: "Education Dialogue, Policy & Professional Development Programme",
      tagline: "Convening educators, researchers, and policymakers for educational innovation",
      icon: BookOpen,
      cardBg: "#FAF8FF",
      cardBorder: "rgba(79, 70, 229, 0.25)",
      headerBg: "linear-gradient(135deg, #4338CA 0%, #312E81 100%)",
      headerBorder: "#A5B4FC",
      boxBg: "#EEF2FF",
      boxBorder: "rgba(79, 70, 229, 0.22)",
      accentText: "#4338CA",
      whatWeDo: "We organize seminars, symposiums, and consultative forums on critical educational issues, emerging pedagogical trends, and policy challenges, creating dedicated platforms for educators, researchers, and policymakers.",
      whoItHelps: "School teachers, college professors, educational researchers, policymakers, and civic leaders shaping the future of inclusive education.",
      impactStat: "Seminars & State Symposia",
    },
  ];

  const filterCategories = [
    { id: "all", label: "All Programmes" },
    { id: "Higher Ed & Careers", label: "Career Guidance" },
    { id: "Youth & Leadership", label: "Life Skills" },
    { id: "Community & Literacy", label: "Community Libraries" },
    { id: "Policy & Development", label: "Education Dialogue" },
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
            {filterCategories.map(f => (
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
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {filtered.map((p) => {
              const Icon = p.icon;

              return (
                <div
                  key={p.id}
                  id={p.id}
                  style={{
                    scrollMarginTop: "100px",
                    background: p.cardBg,
                    borderRadius: "16px",
                    border: `1.5px solid ${p.cardBorder}`,
                    boxShadow: "0 10px 28px rgba(11, 27, 56, 0.06)",
                    overflow: "hidden",
                  }}
                >
                  {/* Colored Box Header */}
                  <div
                    style={{
                      background: p.headerBg,
                      borderBottom: `4px solid ${p.headerBorder}`,
                      padding: "24px 28px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                      <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", flexShrink: 0 }}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <h2 style={{ fontFamily: "var(--serif)", fontSize: "1.75rem", color: "#FFFFFF", margin: 0, lineHeight: 1.25 }}>
                          {p.title}
                        </h2>
                        <p style={{ color: "rgba(255,255,255,0.85)", fontWeight: 500, fontSize: "0.95rem", margin: "4px 0 0" }}>
                          {p.tagline}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Box Body */}
                  <div style={{ padding: "24px 28px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
                      <div style={{ background: p.boxBg, padding: "18px 20px", borderRadius: "12px", border: `1px solid ${p.boxBorder}` }}>
                        <h4 style={{ fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.06em", color: p.accentText, margin: "0 0 8px", fontWeight: 700 }}>
                          What We Do
                        </h4>
                        <p style={{ fontSize: "0.95rem", color: "var(--navy-900)", lineHeight: 1.65, margin: 0 }}>
                          {p.whatWeDo}
                        </p>
                      </div>

                      <div style={{ background: p.boxBg, padding: "18px 20px", borderRadius: "12px", border: `1px solid ${p.boxBorder}` }}>
                        <h4 style={{ fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.06em", color: p.accentText, margin: "0 0 8px", fontWeight: 700 }}>
                          Who It Helps
                        </h4>
                        <p style={{ fontSize: "0.95rem", color: "var(--navy-900)", lineHeight: 1.65, margin: 0 }}>
                          {p.whoItHelps}
                        </p>
                      </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", marginTop: "20px", paddingTop: "18px", borderTop: `1px solid ${p.boxBorder}` }}>
                      <Link href="/get-involved" className="btn btn-navy btn-sm" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                        <span>Support this Programme</span>
                        <ArrowRight size={14} />
                      </Link>
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

    </>
  );
}
