import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Users, Award, ShieldCheck, HeartHandshake, ArrowRight, Mail, Phone } from "lucide-react";

export const metadata = {
  title: "Our Team | Chamak Foundation",
  description: "Meet the executive board and leadership behind Chamak Foundation: Dr. Mohammed Azam Ali, Mohammed Yousuf Ali, Mohammed Abdul Hadi, and Syed Wajid Ali.",
};

export default function TeamPage() {
  const leaders = [
    {
      name: "Dr. Mohammed Azam Ali",
      role: "Founder & President",
      initials: "AA",
      bio: "Guiding Chamak Foundation's overarching vision and educational philanthropy. Dedicated to ensuring no meritorious student is denied schooling due to financial constraint.",
      focus: "Strategic Vision & Philanthropy",
    },
    {
      name: "Mohammed Yousuf Ali",
      role: "Vice President",
      initials: "YA",
      bio: "Directing strategic community partnerships, institutional outreach, and grassroots educational initiatives across Hyderabad and Telangana.",
      focus: "Institutional Outreach & Operations",
    },
    {
      name: "Mohammed Abdul Hadi",
      role: "General Secretary",
      initials: "AH",
      bio: "Overseeing day-to-day governance, volunteer mobilization, and program delivery to ensure every student receives targeted academic support.",
      focus: "Field Governance & Welfare",
    },
    {
      name: "Syed Wajid Ali",
      role: "Treasurer",
      initials: "WA",
      bio: "Stewarding financial integrity, regulatory compliance, audit rigor, and direct scholarship disbursements with absolute fiscal accountability.",
      focus: "Fiscal Stewardship & Audit",
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
        subtitle="Meet the passionate executive leadership and volunteers stewarding our educational mission."
      />

      {/* Executive Leadership Grid */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>Executive Board</div>
            <h2>Dedicated Leadership with a Shared Purpose</h2>
            <p style={{ color: "var(--ink-400)", maxWidth: "56ch", margin: "12px auto 0" }}>
              Our executive trustees bring dedication, deep community ties, and unwavering ethical commitment to every child we champion.
            </p>
          </div>

          <div className="grid grid--4 reveal">
            {leaders.map((leader, index) => (
              <div 
                key={index}
                className="card"
                style={{
                  padding: "36px 28px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  boxShadow: "0 8px 24px rgba(11,27,56,0.06)",
                }}
              >
                {/* Monogram Avatar */}
                <div
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--navy-900) 0%, var(--navy-800) 100%)",
                    border: "3px solid var(--gold-400)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--cream-100)",
                    fontFamily: "var(--serif)",
                    fontSize: "1.8rem",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    marginBottom: "20px",
                    boxShadow: "0 6px 16px rgba(11,27,56,0.18)",
                  }}
                >
                  {leader.initials}
                </div>

                <h3 style={{ fontSize: "1.25rem", color: "var(--navy-900)", marginBottom: "6px" }}>
                  {leader.name}
                </h3>
                <div style={{ color: "var(--gold-600)", fontWeight: 600, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "16px" }}>
                  {leader.role}
                </div>
                
                <p style={{ fontSize: "0.88rem", color: "var(--ink-500)", lineHeight: 1.65, margin: "0 0 18px", flexGrow: 1 }}>
                  {leader.bio}
                </p>

                <div style={{ width: "100%", paddingTop: "14px", borderTop: "1px solid rgba(11,27,56,0.08)", fontSize: "0.78rem", color: "var(--ink-400)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  {leader.focus}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="section section--cream2">
        <div className="container">
          <div className="section-head section-head--center section-head--fit reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>Advisory Guidance</div>
            <h2 className="hdg-oneline">Wisdom & Oversight from Experienced Hands</h2>
            <p style={{ color: "var(--ink-400)", maxWidth: "60ch", margin: "12px auto 0" }}>
              Chamak Foundation is supported by independent mentors, retired educators, and legal professionals who review our programs and fiscal rigor.
            </p>
          </div>

          <div className="grid grid--4 reveal">
            {advisoryPillars.map((adv, i) => (
              <div key={i} className="card" style={{ padding: "32px 24px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(201,154,58,0.14)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--gold-600)", marginBottom: "16px" }}>
                  <Award size={20} />
                </div>
                <h3 style={{ fontSize: "1.1rem", marginBottom: "10px", color: "var(--navy-900)" }}>{adv.domain}</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--ink-400)", lineHeight: 1.6, margin: 0 }}>
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteers Feature Split */}
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

      {/* Call to Action Band */}
      <section className="section section--navy">
        <div className="container">
          <div className="cta-band reveal" style={{ background: "transparent", border: "none", padding: 0 }}>
            <h2>Want to speak directly with our trustees?</h2>
            <p>We are always eager to connect with potential institutional partners, alumni, and donors.</p>
            <div className="cta-band__ctas">
              <Link href="/contact" className="btn btn-gold">Contact Leadership</Link>
              <a href="tel:+919100007768" className="btn btn-outline-cream">+91 91000 07768</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
