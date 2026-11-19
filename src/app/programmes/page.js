"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { 
  Compass, 
  Smile, 
  Library, 
  GraduationCap, 
  ArrowRight,
  Sparkles,
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
      whatWeDo: "We provide comprehensive career guidance, competitive examination awareness sessions, and dedicated civil services mentoring to guide students from early schooling through higher education.",
      whoItHelps: "School and college students, first-generation learners, and youth aspiring for competitive exams and civil services across rural, tribal, and underserved communities.",
      highlights: [
        "Career counseling for school and college students.",
        "Competitive exam awareness sessions.",
        "Civil Services awareness and mentoring initiatives.",
      ],
      impactStat: "1,000+ Students Mentored",
    },
    {
      id: "life-skills",
      num: "02",
      category: "Youth & Leadership",
      title: "Life Skills Education",
      tagline: "Building resilient voices, emotional intelligence, and leadership competencies",
      icon: Smile,
      whatWeDo: "Our life skills curriculum builds foundational personal and interpersonal competencies beyond standard textbooks, empowering young people to articulate thoughts, lead initiatives, and make sound life choices.",
      whoItHelps: "Students and young adults seeking to build self-worth, communication skills, emotional resilience, and executive life decisions.",
      highlights: [
        "Leadership development",
        "Communication skills",
        "Emotional intelligence",
        "Personality development",
        "Decision-making skills",
      ],
      impactStat: "500+ Youth Empowered",
    },
    {
      id: "community-libraries",
      num: "03",
      category: "Community & Literacy",
      title: "Community Library Initiatives",
      tagline: "Establishing knowledge havens and cultivating a vibrant reading culture",
      icon: Library,
      whatWeDo: "We establish community libraries in rural, tribal, and minority areas, creating safe, quiet spaces stocked with literature, academic references, and general knowledge books to foster reading culture.",
      whoItHelps: "Children, youth, competitive examination aspirants, and entire communities who lack access to public libraries or quiet study spaces at home.",
      highlights: [
        "Establishing libraries in rural, tribal, and minority areas.",
        "Promoting reading culture and knowledge accessibility.",
        "Curated multi-lingual reading collections (English, Telugu, Urdu).",
        "Dedicated quiet study zones for competitive exam candidates.",
      ],
      impactStat: "Thousands of Books Circulated",
    },
    {
      id: "education-dialogue",
      num: "04",
      category: "Policy & Development",
      title: "Education Dialogue, Policy & Professional Development Programme",
      tagline: "Convening educators, researchers, and policymakers for educational innovation",
      icon: BookOpen,
      whatWeDo: "We organize seminars, symposiums, and consultative forums on critical educational issues, emerging pedagogical trends, and policy challenges, creating dedicated platforms for educators, researchers, and policymakers.",
      whoItHelps: "School teachers, college professors, educational researchers, policymakers, and civic leaders shaping the future of inclusive education.",
      highlights: [
        "Organizing seminars and symposiums on educational issues, trends, and challenges.",
        "Creating platforms for educators, researchers, and policymakers.",
        "Pedagogical innovation and teacher capacity-building forums.",
        "Policy research, dialogue papers, and educational reform advocacy.",
      ],
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
          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            {filtered.map((p, index) => {
              const Icon = p.icon;
              const isEven = index % 2 === 1;

              return (
                <div 
                  key={p.id}
                  id={p.id}
                  className="card"
                  style={{
                    padding: "44px 38px",
                    borderColor: "rgba(11,27,56,0.12)",
                    background: isEven 
                      ? "linear-gradient(135deg, #FAF7EF 0%, #FFFFFF 100%)" 
                      : "linear-gradient(135deg, #FFFFFF 0%, #FAF7EF 100%)",
                    boxShadow: "0 10px 30px rgba(11,27,56,0.05)",
                  }}
                >
                  <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "28px" }}>
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
                          <h2 style={{ fontFamily: "var(--serif)", fontSize: "1.85rem", color: "var(--navy-900)", margin: 0, lineHeight: 1.25 }}>
                            {p.title}
                          </h2>
                          <p style={{ color: "var(--gold-700)", fontWeight: 500, fontSize: "0.95rem", margin: "4px 0 0" }}>
                            {p.tagline}
                          </p>
                        </div>
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginTop: "20px" }}>
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

                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", marginTop: "28px", paddingTop: "20px", borderTop: "1px solid rgba(11,27,56,0.08)" }}>
                        <div style={{ fontSize: "0.88rem", color: "var(--ink-400)" }}>
                          Want to support or collaborate on this initiative?
                        </div>
                        <Link href="/get-involved" className="btn btn-navy btn-sm" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                          <span>Support this Programme</span>
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

    </>
  );
}
