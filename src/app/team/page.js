import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Users, Award, ShieldCheck, HeartHandshake, ArrowRight, BookOpen, GraduationCap, Sparkles, Building2, MapPin } from "lucide-react";

export const metadata = {
  title: "Our Team | Chamak Foundation",
  description:
    "Meet the executive board and advisory committee behind Chamak Foundation: Dr. Mohammad Azam Ali, Munukuntla Raju, Madhu Ontela, Vajja Raju, R. Venkat Reddy, and Dr. Riyaz.",
};

export default function TeamPage() {
  const leaders = [
    {
      name: "Dr. Mohammad Azam Ali",
      role: "Founder & President",
      qualification: "M.A., M.Ed., Ph.D.",
      designation: "Assistant Professor",
      institution: "Philanthropist & Social Visionary",
      image: "/assets/team/dr-azam-ali.png",
      initials: "AA",
      bio: "Overcoming early poverty and schooling discontinuation through sheer perseverance, he achieved his dream of becoming an Assistant Professor and founded Chamak Foundation to ensure no student is left behind.",
      focus: "Strategic Vision & Philanthropy",
    },
    {
      name: "Munukuntla Raju",
      role: "Vice President",
      qualification: "M.A., B.Ed.",
      designation: "Asst. Prof of English",
      institution: "Balaji Inst. of Tech. & Science, Warangal",
      image: "/assets/team/munukuntla-raju.png",
      initials: "MR",
      bio: "Passionate educator directing community partnerships, student career guidance sessions, and academic mentorship initiatives across Warangal, Hyderabad, and Telangana.",
      focus: "Academic Outreach & Mentorship",
    },
    {
      name: "Madhu Ontela",
      role: "General Secretary",
      qualification: "M.A., B.Ed., (Ph.D.)",
      designation: "Asst. Prof of English",
      institution: "Sree Chaitanya Engg. College, Karimnagar",
      image: "/assets/team/madhu-ontela.png",
      initials: "MO",
      bio: "Directing field operations, rural library activations, volunteer coordination, and academic support roadmaps across rural and marginalized learning communities.",
      focus: "Field Governance & Operations",
    },
    {
      name: "Vajja Raju",
      role: "Treasurer",
      qualification: "M.A.",
      designation: "Lecturer in English",
      institution: "Fiscal Stewardship & Operations",
      image: "/assets/team/vajja-raju.png",
      initials: "VR",
      bio: "Dedicated educator stewarding financial transparency, scholarship disbursements, and ethical accountability across all Chamak Foundation initiatives.",
      focus: "Fiscal Stewardship & Governance",
    },
  ];

  const advisors = [
    {
      name: "R. Venkat Reddy",
      role: "Academic Advisor",
      image: "/assets/team/r-venkat-reddy.png",
      initials: "VR",
      office1: "National Convenor, M.V. Foundation, India",
      office2: "Advisory Committee Member, Telangana Education Commission",
      bio: "Renowned educationist and champion for child rights, guiding Chamak Foundation's educational policy dialogue, school-retention models, and grassroots equity strategy.",
    },
    {
      name: "Dr. Riyaz",
      role: "Academic Advisor",
      qualification: "M.A., M.Ed., M.Phil., Ph.D. · NET Qualified & Gold Medalist",
      image: "/assets/team/dr-riyaz.png",
      initials: "DR",
      office1: "Chairman, Telangana Rashtra Grandalaya Parishad",
      office2: "Eminent Academician & Library Development Leader",
      bio: "Guiding Chamak Foundation's rural community library movement and knowledge accessibility initiatives across rural, tribal, and minority communities.",
    },
  ];

  const advisoryPillars = [
    {
      domain: "Pedagogy & Curriculum",
      description: "Advising on foundational literacy benchmarks, bilingual teaching methods, and student learning assessments.",
    },
    {
      domain: "Legal & Regulatory Compliance",
      description: "Ensuring exemplary institutional governance, trust documentation, and transparent non-profit operations.",
    },
    {
      domain: "Youth Mentorship & Psychology",
      description: "Structuring mental wellness, emotional resilience workshops, and confidence-building modules for adolescents.",
    },
    {
      domain: "Digital Literacy & Tech Access",
      description: "Guiding our digital learning tools and community library computerization strategies for modern education.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Our People"
        title="The People Behind the Chamak."
        subtitle="Meet the passionate executive leadership, distinguished advisors, and volunteers stewarding our educational mission."
      />

      {/* EXECUTIVE BOARD */}
      <section className="section" style={{ background: "var(--cream-50, #FAF8F5)" }}>
        <div style={{ width: "100%", maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(16px, 3.5vw, 40px)" }}>
          <div className="section-head section-head--center section-head--fit reveal" style={{ maxWidth: "100%", margin: "0 auto 44px" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>Executive Board</div>
            <h2
              className="hdg-oneline"
              style={{
                whiteSpace: "nowrap",
                fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)",
                letterSpacing: "-0.015em",
                margin: "8px 0 12px",
              }}
            >
              Dedicated Leadership with a Shared Purpose
            </h2>
            <p style={{ color: "var(--ink-400)", maxWidth: "62ch", margin: "0 auto", fontSize: "0.98rem" }}>
              Our executive board brings together educators, professors, and community leaders with deep grassroots ties and an unwavering commitment to youth empowerment.
            </p>
          </div>

          <div className="grid grid--4 reveal" style={{ gap: "24px" }}>
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="card team-exec-card"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(201,154,58,0.22)",
                  borderRadius: "20px",
                  padding: "36px 26px 26px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxShadow: "0 10px 30px rgba(11,27,56,0.05)",
                  position: "relative",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  overflow: "hidden",
                }}
              >
                {/* Top decorative gold line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: "linear-gradient(90deg, rgba(201,154,58,0.2), var(--gold-500), rgba(201,154,58,0.2))",
                  }}
                />

                {/* Top Section: Avatar & Titles */}
                <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  {/* Photo or Monogram Avatar */}
                  <div
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      border: "3.5px solid var(--gold-400)",
                      boxShadow: "0 8px 24px rgba(201,154,58,0.22), 0 4px 12px rgba(11,27,56,0.12)",
                      marginBottom: "16px",
                      position: "relative",
                      background: "linear-gradient(135deg, var(--navy-950) 0%, var(--navy-900) 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {leader.image ? (
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        width={120}
                        height={120}
                        style={{ objectFit: "cover", width: "100%", height: "100%" }}
                        priority
                      />
                    ) : (
                      <span
                        style={{
                          color: "var(--cream-100)",
                          fontFamily: "var(--serif)",
                          fontSize: "2rem",
                          fontWeight: 700,
                          letterSpacing: "0.04em",
                        }}
                      >
                        {leader.initials}
                      </span>
                    )}
                  </div>

                  {/* Role Pill Badge */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      background: "rgba(11,27,56,0.06)",
                      color: "var(--navy-900)",
                      border: "1px solid rgba(201,154,58,0.3)",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      padding: "4px 12px",
                      borderRadius: "20px",
                      marginBottom: "12px",
                    }}
                  >
                    {leader.role}
                  </div>

                  {/* Name (Single-line fit) */}
                  <h3
                    style={{
                      fontSize: "clamp(1.1rem, 1.25vw, 1.25rem)",
                      color: "var(--navy-900)",
                      margin: "0 0 10px",
                      fontFamily: "var(--serif)",
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      width: "100%",
                      letterSpacing: "-0.01em",
                    }}
                    title={leader.name}
                  >
                    {leader.name}
                  </h3>

                  {/* Clean Credentials Display */}
                  <div style={{ width: "100%", marginBottom: "14px" }}>
                    {leader.qualification && leader.qualification !== leader.designation && (
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "5px",
                          color: "var(--navy-900)",
                          fontWeight: 700,
                          fontSize: "0.8rem",
                          background: "rgba(11,27,56,0.04)",
                          padding: "3px 10px",
                          borderRadius: "12px",
                          border: "1px solid rgba(11,27,56,0.08)",
                        }}
                      >
                        <GraduationCap size={13} style={{ color: "var(--gold-600)" }} />
                        {leader.qualification}
                      </span>
                    )}
                    <div style={{ fontSize: "0.82rem", color: "var(--navy-900)", fontWeight: 600, marginTop: "6px", lineHeight: 1.35 }}>
                      {leader.designation}
                    </div>
                    {leader.institution && (
                      <div style={{ fontSize: "0.76rem", color: "var(--gold-700)", marginTop: "2px", fontWeight: 600, lineHeight: 1.3 }}>
                        {leader.institution}
                      </div>
                    )}
                  </div>

                  {/* Bio */}
                  <p
                    style={{
                      fontSize: "0.86rem",
                      color: "var(--ink-500)",
                      lineHeight: 1.6,
                      margin: "0 0 16px",
                      textAlign: "center",
                    }}
                  >
                    {leader.bio}
                  </p>
                </div>

                {/* Bottom Strategic Focus Tag */}
                <div
                  style={{
                    width: "100%",
                    paddingTop: "12px",
                    borderTop: "1px solid rgba(11,27,56,0.08)",
                    fontSize: "0.73rem",
                    color: "var(--gold-700)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                  }}
                >
                  <Sparkles size={12} />
                  <span>{leader.focus}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVISORY COMMITTEE */}
      <section className="section section--cream2">
        <div className="container">
          <div className="section-head section-head--center section-head--fit reveal" style={{ maxWidth: "100%", margin: "0 auto 40px" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <Award size={14} /> Advisory Committee
            </div>
            <h2
              className="hdg-oneline"
              style={{
                whiteSpace: "nowrap",
                fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)",
                letterSpacing: "-0.015em",
                margin: "8px 0 12px",
              }}
            >
              Distinguished Academic Advisors
            </h2>
            <p style={{ color: "var(--ink-400)", maxWidth: "62ch", margin: "0 auto", fontSize: "0.98rem" }}>
              Visionary guidance and institutional wisdom from eminent educationists and state commission leaders.
            </p>
          </div>

          <div className="grid grid--2 reveal" style={{ gap: "28px", maxWidth: "1100px", margin: "0 auto" }}>
            {advisors.map((adv, index) => (
              <div key={index} className="advisor-card">
                {/* Advisor Photo & Role */}
                <div className="advisor-card__media">
                  <div className="advisor-card__photo">
                    <Image
                      src={adv.image}
                      alt={adv.name}
                      width={130}
                      height={155}
                      style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    />
                  </div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      background: "rgba(201,154,58,0.12)",
                      color: "var(--gold-700)",
                      padding: "4px 10px",
                      borderRadius: "16px",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      marginTop: "12px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Award size={12} /> {adv.role}
                  </div>
                </div>

                {/* Advisor Details */}
                <div className="advisor-card__content">
                  <h3
                    style={{
                      fontSize: "1.35rem",
                      color: "var(--navy-900)",
                      margin: "0 0 4px",
                      fontFamily: "var(--serif)",
                      fontWeight: 700,
                    }}
                  >
                    {adv.name}
                  </h3>

                  {adv.qualification && (
                    <div
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--gold-700)",
                        fontWeight: 700,
                        marginBottom: "6px",
                      }}
                    >
                      {adv.qualification}
                    </div>
                  )}

                  <div style={{ margin: "6px 0 10px" }}>
                    <div style={{ fontSize: "0.86rem", fontWeight: 700, color: "var(--navy-900)", lineHeight: 1.4 }}>
                      {adv.office1}
                    </div>
                    {adv.office2 && (
                      <div style={{ fontSize: "0.8rem", color: "var(--ink-400)", marginTop: "2px", lineHeight: 1.35 }}>
                        {adv.office2}
                      </div>
                    )}
                  </div>

                  <div style={{ height: "1px", background: "linear-gradient(90deg, rgba(201,154,58,0.35), transparent)", margin: "12px 0" }} />

                  <p style={{ fontSize: "0.85rem", color: "var(--ink-500)", lineHeight: 1.6, margin: 0 }}>
                    {adv.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Core Advisory Domains */}
          <div style={{ marginTop: "56px" }}>
            <h3 style={{ textAlign: "center", fontFamily: "var(--serif)", color: "var(--navy-900)", fontSize: "1.35rem", marginBottom: "24px" }}>
              Core Advisory Domains
            </h3>
            <div className="grid grid--4 reveal" style={{ gap: "20px" }}>
              {advisoryPillars.map((domain, i) => (
                <div key={i} className="card" style={{ padding: "28px 20px", background: "#FFFFFF", borderRadius: "16px", border: "1px solid rgba(11,27,56,0.06)" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "rgba(201,154,58,0.14)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--gold-600)", marginBottom: "14px" }}>
                    <Award size={18} />
                  </div>
                  <h4 style={{ fontSize: "1.02rem", marginBottom: "8px", color: "var(--navy-900)" }}>{domain.domain}</h4>
                  <p style={{ fontSize: "0.84rem", color: "var(--ink-400)", lineHeight: 1.6, margin: 0 }}>
                    {domain.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VOLUNTEERS */}
      <section className="section">
        <div className="container">
          <div className="split reveal">
            <div>
              <div className="eyebrow">The Driving Force</div>
              <h2 className="hdg-oneline hdg-oneline--split">The Heart of Chamak Foundation</h2>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--ink-600)", marginBottom: "20px" }}>
                Our 100+ volunteers are university students, young corporate professionals, retired teachers, and local youth advocates who dedicate their weekends to tutoring, organizing library book clubs, and mentoring.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "32px" }}>
                <div style={{ background: "var(--cream-100)", padding: "18px", borderRadius: "12px", border: "1px solid rgba(11,27,56,0.08)" }}>
                  <div style={{ fontFamily: "var(--num)", fontSize: "2rem", fontWeight: 800, color: "var(--navy-900)", letterSpacing: "-0.02em" }}>100+</div>
                  <div style={{ fontSize: "0.82rem", color: "var(--ink-400)", textTransform: "uppercase", letterSpacing: "0.04em", fontWeight: 600 }}>Active Volunteers</div>
                </div>
                <div style={{ background: "var(--cream-100)", padding: "18px", borderRadius: "12px", border: "1px solid rgba(11,27,56,0.08)" }}>
                  <div style={{ fontFamily: "var(--num)", fontSize: "2rem", fontWeight: 800, color: "var(--navy-900)", letterSpacing: "-0.02em" }}>5,000+</div>
                  <div style={{ fontSize: "0.82rem", color: "var(--ink-400)", textTransform: "uppercase", letterSpacing: "0.04em", fontWeight: 600 }}>Mentoring Hours</div>
                </div>
              </div>
              <Link href="/get-involved" className="btn btn-navy" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <span>Join Our Volunteer Team</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="split__media">
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: "340px",
                  background: "linear-gradient(145deg, var(--navy-900) 0%, var(--navy-950) 100%)",
                  borderRadius: "20px",
                  padding: "48px 36px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  color: "var(--cream-100)",
                  position: "relative",
                  border: "1px solid rgba(201,154,58,0.25)",
                }}
              >
                <HeartHandshake size={48} style={{ color: "var(--gold-400)", marginBottom: "20px" }} />
                <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.8rem", color: "var(--cream-100)", marginBottom: "12px" }}>
                  &ldquo;A small act of teaching creates an infinite ripple.&rdquo;
                </h3>
                <p style={{ color: "rgba(250,247,239,0.7)", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
                  Whether you can spend two hours every Saturday coaching mathematics or conduct monthly career webinars, we welcome your dedication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="section section--navy">
        <div className="container">
          <div className="cta-band reveal" style={{ background: "transparent", border: "none", padding: 0 }}>
            <h2>Want to speak directly with our trustees?</h2>
            <p>We are always eager to connect with potential institutional partners, alumni, and donors.</p>
            <div className="cta-band__ctas">
              <Link href="/contact" className="btn btn-gold">Contact Leadership</Link>
              <a href="tel:+919866129052" className="btn btn-outline-cream">+91 98661 29052</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
