import Link from "next/link";
import PageHero from "@/components/PageHero";
import {
  Sparkles,
  Eye,
  Target,
  Compass,
  CheckCircle2,
  Globe,
  Quote,
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
        subtitle="The foundational commitments that guide Chamak Foundation's daily efforts and long-term service to society."
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

      {/* Sustainable Development Goals Teaser Banner */}
      <section className="section section--tight" style={{ paddingTop: "50px", paddingBottom: "40px" }}>
        <div className="container">
          <div
            style={{
              background: "linear-gradient(135deg, #0b1b38 0%, #122349 100%)",
              borderRadius: "var(--radius-lg)",
              padding: "36px 32px",
              color: "#fff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "24px",
              boxShadow: "0 12px 36px rgba(11,27,56,0.16)",
              border: "1px solid rgba(217,175,82,0.3)",
            }}
          >
            <div style={{ maxWidth: "620px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--gold-400)", fontSize: "0.82rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
                <Globe size={15} /> UN Agenda 2030 Alignment
              </div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.4rem, 2vw, 1.8rem)", color: "#fff", margin: "0 0 10px", lineHeight: 1.3 }}>
                Advancing the United Nations Sustainable Development Goals
              </h3>
              <p style={{ color: "rgba(250,247,239,0.78)", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
                Discover how Chamak Foundation champions <strong>SDG 4 (Quality Education)</strong>, <strong>SDG 5 (Gender Equality)</strong>, and <strong>SDG 10 (Reduced Inequalities)</strong> across Telangana.
              </p>
            </div>
            <div>
              <Link href="/sustainable-development-goals" className="btn btn-gold" style={{ whiteSpace: "nowrap" }}>
                Explore SDG Action <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Words Section */}
      <section className="section section--cream2">
        <div className="container">
          <div className="section-head section-head--center section-head--wide">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <Quote size={14} /> Guiding Words
            </div>
            <h2 className="section-title--oneline">The Visionary Ideals That Guide Us</h2>
            <p>Dr. Azam Ali was moved by two profound philosophical statements that became the bedrock of Chamak Foundation.</p>
          </div>

          <div className="grid grid--2" style={{ gap: "28px", marginTop: "32px" }}>
            <div className="card" style={{ padding: "38px", background: "#fff", borderLeft: "5px solid var(--gold-500)", boxShadow: "0 10px 30px rgba(11,27,56,0.05)" }}>
              <p style={{ fontFamily: "var(--serif)", fontSize: "1.22rem", lineHeight: 1.6, color: "var(--navy-900)", fontStyle: "italic", margin: 0 }}>
                &ldquo;Agar tum sirf apne liye zinda ho toh iska matlab yahi hai ke tum apni qaum ke liye zinda laash ho.&rdquo;
              </p>
              <div style={{ marginTop: "18px", fontSize: "0.88rem", fontWeight: 700, color: "var(--gold-700)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                — Maulana Abul Kalam Azad
              </div>
              <span style={{ fontSize: "0.82rem", color: "var(--ink-400)", display: "block", marginTop: "4px" }}>
                First Minister of Education of Independent India &amp; Visionary Leader
              </span>
            </div>

            <div className="card" style={{ padding: "38px", background: "#fff", borderLeft: "5px solid var(--navy-800)", boxShadow: "0 10px 30px rgba(11,27,56,0.05)" }}>
              <p style={{ fontFamily: "var(--serif)", fontSize: "1.22rem", lineHeight: 1.6, color: "var(--navy-900)", fontStyle: "italic", margin: 0 }}>
                &ldquo;Aap badho, desh ko badhao.&rdquo;
              </p>
              <div style={{ marginTop: "18px", fontSize: "0.88rem", fontWeight: 700, color: "var(--navy-900)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                — Dr. A. P. J. Abdul Kalam
              </div>
              <span style={{ fontSize: "0.82rem", color: "var(--ink-400)", display: "block", marginTop: "4px" }}>
                Former President of India &amp; Visionary Scientist
              </span>
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
