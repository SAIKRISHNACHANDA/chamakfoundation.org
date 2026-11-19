import Link from "next/link";
import PageHero from "@/components/PageHero";
import {
  Sparkles,
  Eye,
  Target,
  Compass,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Heart,
  BookOpen,
  Users,
} from "lucide-react";

export const metadata = {
  title: "Our Vision & Mission · Chamak Foundation",
  description:
    "Our Vision is to build an inclusive and educated India where every underprivileged child has access to quality education, equal opportunities, and the confidence to shine in life.",
};

export default function VisionMissionPage() {
  return (
    <>
      <PageHero
        eyebrow="Purpose & Direction"
        title="Our Vision & Mission"
      />

      {/* Main Vision & Mission Cards */}
      <section className="section" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
        <div className="container">
          <div className="grid grid--2" style={{ gap: "32px" }}>
            {/* Our Vision Card */}
            <div id="vision" className="pillar-card pillar-card--vision" style={{ scrollMarginTop: "100px" }}>
              <div className="pillar-card__header">
                <div className="pillar-card__icon">
                  <Eye size={28} strokeWidth={1.8} />
                </div>
                <span className="pillar-badge pillar-badge--gold">
                  <Sparkles size={13} /> The North Star
                </span>
              </div>

              <div className="pillar-card__eyebrow">Our Vision</div>
              <h2 className="pillar-card__title" style={{ fontSize: "clamp(1.35rem, 1.9vw, 1.65rem)", lineHeight: 1.5, color: "var(--navy-900)", fontWeight: 700 }}>
                To build an inclusive and educated India where every underprivileged child has access to quality education, equal opportunities, and the confidence to shine in life with dignity and self-reliance.
              </h2>

              <p style={{ color: "var(--ink-600)", lineHeight: 1.75, fontSize: "1rem", margin: "16px 0 24px" }}>
                We believe that education is the ultimate catalyst for human dignity and social justice. When an underprivileged child receives equal access to knowledge, the barrier of generational poverty is shattered forever.
              </p>

              <div className="pillar-card__footer" style={{ marginTop: "auto" }}>
                <span className="pillar-tag"><span className="dot" /> Inclusive India</span>
                <span className="pillar-tag"><span className="dot" /> Quality Education</span>
                <span className="pillar-tag"><span className="dot" /> Equal Opportunities</span>
                <span className="pillar-tag"><span className="dot" /> Dignity &amp; Self-Reliance</span>
              </div>
            </div>

            {/* Our Mission Card */}
            <div id="mission" className="pillar-card pillar-card--mission" style={{ scrollMarginTop: "100px" }}>
              <div className="pillar-card__header">
                <div className="pillar-card__icon">
                  <Target size={28} strokeWidth={1.8} />
                </div>
                <span className="pillar-badge pillar-badge--navy">
                  <Compass size={13} /> The Action Blueprint
                </span>
              </div>

              <div className="pillar-card__eyebrow">Our Mission</div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "1.02rem", color: "var(--ink-700)", lineHeight: 1.6 }}>
                  <CheckCircle2 size={20} style={{ color: "var(--gold-600)", flexShrink: 0, marginTop: "3px" }} />
                  <span>To empower marginalized and disadvantaged students through education.</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "1.02rem", color: "var(--ink-700)", lineHeight: 1.6 }}>
                  <CheckCircle2 size={20} style={{ color: "var(--gold-600)", flexShrink: 0, marginTop: "3px" }} />
                  <span>To promote equitable access to primary, secondary, and higher education.</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "1.02rem", color: "var(--ink-700)", lineHeight: 1.6 }}>
                  <CheckCircle2 size={20} style={{ color: "var(--gold-600)", flexShrink: 0, marginTop: "3px" }} />
                  <span>To create awareness about the transformative power of education in rural, tribal, and minority communities.</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "1.02rem", color: "var(--ink-700)", lineHeight: 1.6 }}>
                  <CheckCircle2 size={20} style={{ color: "var(--gold-600)", flexShrink: 0, marginTop: "3px" }} />
                  <span>To nurture socially responsible, skilled, and value-driven citizens for nation-building.</span>
                </li>
              </ul>

              <div className="pillar-card__footer" style={{ marginTop: "auto" }}>
                <span className="pillar-tag"><span className="dot" /> Marginalized Students</span>
                <span className="pillar-tag"><span className="dot" /> Equitable Access</span>
                <span className="pillar-tag"><span className="dot" /> Community Awareness</span>
                <span className="pillar-tag"><span className="dot" /> Nation Building</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section section--cream2">
        <div className="container">
          <div className="section-head section-head--center section-head--fit">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <ShieldCheck size={14} /> Guiding Principles
            </div>
            <h2 className="section-title--oneline">Core Values Behind Our Mission</h2>
            <p style={{ marginTop: "10px", color: "var(--ink-500)", maxWidth: "56ch", marginLeft: "auto", marginRight: "auto" }}>
              The non-negotiable principles that drive our community programs, volunteer initiatives, and policy engagements.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px", marginTop: "36px" }}>
            <div className="card" style={{ padding: "30px 24px", background: "#fff", border: "1px solid rgba(201,154,58,0.22)", borderRadius: "16px", boxShadow: "0 6px 20px rgba(11,27,56,0.04)" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(201,154,58,0.12)", color: "var(--gold-700)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <Heart size={22} />
              </div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.2rem", color: "var(--navy-900)", margin: "0 0 10px" }}>
                Equitable Access
              </h3>
              <p style={{ fontSize: "0.94rem", color: "var(--ink-600)", lineHeight: 1.65, margin: 0 }}>
                Every child, regardless of economic background, caste, religion, or geography, has an inherent right to first-rate learning environments and opportunities.
              </p>
            </div>

            <div className="card" style={{ padding: "30px 24px", background: "#fff", border: "1px solid rgba(201,154,58,0.22)", borderRadius: "16px", boxShadow: "0 6px 20px rgba(11,27,56,0.04)" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(11,27,56,0.08)", color: "var(--navy-900)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <BookOpen size={22} />
              </div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.2rem", color: "var(--navy-900)", margin: "0 0 10px" }}>
                Knowledge as Light
              </h3>
              <p style={{ fontSize: "0.94rem", color: "var(--ink-600)", lineHeight: 1.65, margin: 0 }}>
                True education (&ldquo;Chamak&rdquo;) goes beyond rote exams—it builds character, critical thinking, confidence, and civic responsibility.
              </p>
            </div>

            <div className="card" style={{ padding: "30px 24px", background: "#fff", border: "1px solid rgba(201,154,58,0.22)", borderRadius: "16px", boxShadow: "0 6px 20px rgba(11,27,56,0.04)" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(201,154,58,0.12)", color: "var(--gold-700)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <Users size={22} />
              </div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.2rem", color: "var(--navy-900)", margin: "0 0 10px" }}>
                Grassroots Empowerment
              </h3>
              <p style={{ fontSize: "0.94rem", color: "var(--ink-600)", lineHeight: 1.65, margin: 0 }}>
                We work directly with rural, tribal, and minority communities to ensure our interventions create lasting self-reliance rather than dependency.
              </p>
            </div>

            <div className="card" style={{ padding: "30px 24px", background: "#fff", border: "1px solid rgba(201,154,58,0.22)", borderRadius: "16px", boxShadow: "0 6px 20px rgba(11,27,56,0.04)" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(11,27,56,0.08)", color: "var(--navy-900)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <ShieldCheck size={22} />
              </div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.2rem", color: "var(--navy-900)", margin: "0 0 10px" }}>
                Nation-Building
              </h3>
              <p style={{ fontSize: "0.94rem", color: "var(--ink-600)", lineHeight: 1.65, margin: 0 }}>
                By nurturing disciplined, compassionate, and skilled youth, we contribute directly to the social and economic progress of the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Band */}
      <section className="section" style={{ paddingTop: "20px" }}>
        <div className="container">
          <div className="cta-band">
            <h2>Join Our Mission to Educate and Empower</h2>
            <p>Every mentor, volunteer, and donor helps us illuminate the path for one more student.</p>
            <div className="cta-band__ctas">
              <Link href="/get-involved" className="btn btn-gold">Support a Child</Link>
              <Link href="/programmes" className="btn btn-outline-cream">Explore Programmes</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

