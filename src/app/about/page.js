import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  GraduationCap,
  Compass,
  Users,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "About Us · Chamak Foundation",
  description:
    "Chamak Foundation (Chamak Padhai Se) Non-Profit Organization was launched on 6th October 2023 in Hyderabad by Professor Shantha Sinha. Regd. No. 643/2023 under Telangana Societies Registration Act, 2001.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Chamak Padhai Se · Shine Through Education"
        title="About Chamak Foundation"
        subtitle="Chamak Foundation stands as a symbol of hope, resilience, and transformation—believing firmly that education is the light (“Chamak”) that can illuminate lives and build a better society."
      />

      {/* SECTION 1: THE STORY OF CHAMAK & OFFICIAL LAUNCH */}
      <section className="section" style={{ paddingTop: "72px", paddingBottom: "72px" }}>
        <div className="container" style={{ maxWidth: "1140px" }}>
          <div className="grid grid--2" style={{ alignItems: "center", gap: "48px" }}>
            {/* Left Column: Narrative */}
            <div>
              <div className="eyebrow" style={{ color: "var(--gold-600)", marginBottom: "14px" }}>
                <Sparkles size={14} /> Established 6th October 2023 · Hyderabad
              </div>
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(2rem, 3.2vw, 2.7rem)",
                  color: "var(--navy-900)",
                  lineHeight: 1.25,
                  marginBottom: "20px",
                }}
              >
                A Symbol of Hope, Resilience &amp; Transformation
              </h2>

              <div
                style={{
                  background: "rgba(217, 175, 82, 0.08)",
                  borderLeft: "4px solid var(--gold-500)",
                  borderRadius: "10px",
                  padding: "16px 20px",
                  marginBottom: "22px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "1.1rem",
                    lineHeight: 1.65,
                    color: "var(--navy-900)",
                    margin: 0,
                    fontWeight: 600,
                  }}
                >
                  The word &ldquo;Chamak&rdquo; means &ldquo;Shine&rdquo; in Hindi (Shine through Education). Education is the light that illuminates lives.
                </p>
              </div>

              <p style={{ color: "var(--ink-700)", lineHeight: 1.8, fontSize: "1.04rem", marginBottom: "18px" }}>
                <strong>Chamak Foundation (Chamak Padhai Se) Non-Profit Organization</strong> was launched on <strong>6th October 2023</strong> in Hyderabad by <strong>Professor Shantha Sinha</strong>, a renowned social activist, Ramon Magsaysay Award winner and Former ChairPerson for National Commission for Protection of Child Rights ( NCPCR ) .
              </p>

              <p style={{ color: "var(--ink-700)", lineHeight: 1.8, fontSize: "1.04rem", marginBottom: "26px" }}>
                The NGO is registered with the number <strong>643/2023</strong> under the <strong>Telangana Societies Registration Act, 2001</strong>. Chamak Foundation stands as a symbol of hope, resilience, and transformation—believing firmly that education is the light (&ldquo;Chamak&rdquo;) that can illuminate lives and build a better society.
              </p>

              {/* Registration & Launch Badges */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "14px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    background: "#ffffff",
                    border: "1px solid rgba(11,27,56,0.12)",
                    borderRadius: "12px",
                    padding: "12px 16px",
                    boxShadow: "0 4px 14px rgba(11,27,56,0.04)",
                  }}
                >
                  <ShieldCheck size={26} style={{ color: "var(--navy-800)", flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--gold-700)", fontWeight: 700 }}>
                      Official Registration
                    </div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--navy-950)" }}>
                      Regd. No. 643/2023
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    background: "#ffffff",
                    border: "1px solid rgba(11,27,56,0.12)",
                    borderRadius: "12px",
                    padding: "12px 16px",
                    boxShadow: "0 4px 14px rgba(11,27,56,0.04)",
                  }}
                >
                  <Award size={26} style={{ color: "var(--gold-600)", flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--gold-700)", fontWeight: 700 }}>
                      Inaugurated By
                    </div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--navy-950)" }}>
                      Prof. Shantha Sinha
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Launch Ceremony Photo */}
            <div>
              <div
                style={{
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid rgba(201,154,58,0.35)",
                  boxShadow: "0 18px 45px rgba(11,27,56,0.12)",
                  background: "#ffffff",
                }}
              >
                <div style={{ position: "relative", width: "100%", height: "380px" }}>
                  <Image
                    src="/assets/img/founder-president.jpg"
                    alt="Chamak Foundation Launch Ceremony in Hyderabad with Prof. Shantha Sinha"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      left: "16px",
                      background: "rgba(11, 27, 56, 0.88)",
                      backdropFilter: "blur(8px)",
                      color: "var(--gold-300)",
                      padding: "6px 14px",
                      borderRadius: "30px",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                      border: "1px solid rgba(217, 175, 82, 0.4)",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <Sparkles size={13} /> Official Launch · 6 October 2023
                  </div>
                </div>
                <div
                  style={{
                    padding: "16px 22px",
                    background: "var(--cream-100)",
                    borderTop: "1px solid rgba(11,27,56,0.08)",
                    fontSize: "0.88rem",
                    color: "var(--navy-900)",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    lineHeight: 1.5,
                  }}
                >
                  <Award size={18} style={{ color: "var(--gold-600)", flexShrink: 0 }} />
                  <span>
                    Formal foundation inauguration in Hyderabad with <strong>Prof. Shantha Sinha</strong> (Ramon Magsaysay Awardee &amp; Former Chairperson, NCPCR).
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: BEACON OF HOPE & NURTURING LEADERS */}
      <section className="section section--cream2" style={{ paddingTop: "72px", paddingBottom: "72px" }}>
        <div className="container" style={{ maxWidth: "1140px" }}>
          <div className="grid grid--2" style={{ alignItems: "center", gap: "48px" }}>
            {/* Left Column: Mentorship Session Photo */}
            <div style={{ order: 1 }}>
              <div
                style={{
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid rgba(11,27,56,0.12)",
                  boxShadow: "0 18px 45px rgba(11,27,56,0.08)",
                  background: "#ffffff",
                }}
              >
                <div style={{ position: "relative", width: "100%", height: "360px" }}>
                  <Image
                    src="/assets/img/career-mentorship-session.jpg"
                    alt="Chamak Foundation Career Guidance and Student Mentorship Session"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "16px",
                      left: "16px",
                      right: "16px",
                      background: "rgba(11, 27, 56, 0.88)",
                      backdropFilter: "blur(8px)",
                      color: "#ffffff",
                      padding: "10px 16px",
                      borderRadius: "12px",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                    }}
                  >
                    Mentorship, tutoring, and career guidance for aspiring scholars.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Mission Narrative */}
            <div style={{ order: 2 }}>
              <div className="eyebrow" style={{ color: "var(--gold-600)", marginBottom: "14px" }}>
                <Compass size={14} /> Our Mission in Action
              </div>
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(2rem, 3.2vw, 2.7rem)",
                  color: "var(--navy-900)",
                  lineHeight: 1.25,
                  marginBottom: "20px",
                }}
              >
                Lighting Up the Futures of Disadvantaged Students
              </h2>

              <p style={{ color: "var(--ink-700)", lineHeight: 1.8, fontSize: "1.04rem", marginBottom: "16px" }}>
                <strong>Chamak Foundation</strong>, a beacon of hope in the realm of education, is a non-profit organization dedicated to lighting up the futures of disadvantaged students. Founded on the belief that education is the key to unlocking one&apos;s full potential, we are on a mission to remove the barriers that often stand in the way of aspiring scholars.
              </p>

              <p style={{ color: "var(--ink-700)", lineHeight: 1.8, fontSize: "1.04rem", marginBottom: "24px" }}>
                With a passionate team of educators, volunteers, and advocates, Chamak Foundation offers a comprehensive range of services to nurture the talents of tomorrow&apos;s leaders. Our core programs include, mentorship, tutoring, career guidance, and more, all designed to empower students to achieve academic excellence and realize their dreams.
              </p>

              {/* 4 Feature Cards */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "14px" }}>
                <div
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(11,27,56,0.08)",
                    borderRadius: "12px",
                    padding: "14px 16px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 700, color: "var(--navy-900)", fontSize: "0.95rem" }}>
                    <GraduationCap size={18} style={{ color: "var(--gold-600)" }} /> Mentorship &amp; Tutoring
                  </div>
                  <p style={{ fontSize: "0.84rem", color: "var(--ink-500)", margin: "4px 0 0", lineHeight: 1.4 }}>
                    Nurturing academic excellence.
                  </p>
                </div>

                <div
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(11,27,56,0.08)",
                    borderRadius: "12px",
                    padding: "14px 16px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 700, color: "var(--navy-900)", fontSize: "0.95rem" }}>
                    <Compass size={18} style={{ color: "var(--gold-600)" }} /> Career Guidance
                  </div>
                  <p style={{ fontSize: "0.84rem", color: "var(--ink-500)", margin: "4px 0 0", lineHeight: 1.4 }}>
                    Empowering career realization.
                  </p>
                </div>

                <div
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(11,27,56,0.08)",
                    borderRadius: "12px",
                    padding: "14px 16px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 700, color: "var(--navy-900)", fontSize: "0.95rem" }}>
                    <HeartHandshake size={18} style={{ color: "var(--gold-600)" }} /> Removing Barriers
                  </div>
                  <p style={{ fontSize: "0.84rem", color: "var(--ink-500)", margin: "4px 0 0", lineHeight: 1.4 }}>
                    Unlocking scholars&apos; full potential.
                  </p>
                </div>

                <div
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(11,27,56,0.08)",
                    borderRadius: "12px",
                    padding: "14px 16px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 700, color: "var(--navy-900)", fontSize: "0.95rem" }}>
                    <Users size={18} style={{ color: "var(--gold-600)" }} /> Dedicated Team
                  </div>
                  <p style={{ fontSize: "0.84rem", color: "var(--ink-500)", margin: "4px 0 0", lineHeight: 1.4 }}>
                    Educators, volunteers &amp; advocates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROFOUND IMPACT ON HUNDREDS OF STUDENTS */}
      <section className="section" style={{ paddingTop: "72px", paddingBottom: "80px" }}>
        <div className="container" style={{ maxWidth: "1140px" }}>
          <div
            style={{
              background: "linear-gradient(145deg, var(--navy-950) 0%, var(--navy-900) 100%)",
              borderRadius: "24px",
              padding: "clamp(32px, 4.5vw, 56px)",
              color: "#ffffff",
              boxShadow: "0 24px 60px rgba(11,27,56,0.22)",
              border: "1px solid rgba(217, 175, 82, 0.28)",
            }}
          >
            <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(217, 175, 82, 0.15)",
                  color: "var(--gold-400)",
                  padding: "6px 16px",
                  borderRadius: "30px",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "18px",
                  border: "1px solid rgba(217, 175, 82, 0.3)",
                }}
              >
                <Sparkles size={14} /> Ground Realities &amp; Success Stories
              </div>

              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(1.9rem, 3.2vw, 2.6rem)",
                  color: "#ffffff",
                  lineHeight: 1.3,
                  marginBottom: "20px",
                }}
              >
                Profound Impact on Hundreds of Students
              </h2>

              <p
                style={{
                  fontSize: "1.12rem",
                  lineHeight: 1.85,
                  color: "rgba(250, 247, 239, 0.88)",
                  marginBottom: "36px",
                }}
              >
                Since our inception, Chamak Foundation has made a profound impact on the lives of hundreds of students, enabling them to pursue higher education, overcome financial hardships, and reach their career aspirations. Our success stories are a testament to the life-changing work we do.
              </p>

              {/* 3 Impact Pillars */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "20px",
                  textAlign: "left",
                  marginBottom: "40px",
                }}
              >
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "16px",
                    padding: "24px 22px",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                    <CheckCircle2 size={20} style={{ color: "var(--gold-400)" }} />
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                      Higher Education
                    </h3>
                  </div>
                  <p style={{ fontSize: "0.92rem", color: "rgba(250, 247, 239, 0.72)", margin: 0, lineHeight: 1.6 }}>
                    Enabling disadvantaged youth to pursue college degrees and university admissions.
                  </p>
                </div>

                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "16px",
                    padding: "24px 22px",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                    <CheckCircle2 size={20} style={{ color: "var(--gold-400)" }} />
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                      Overcoming Hardships
                    </h3>
                  </div>
                  <p style={{ fontSize: "0.92rem", color: "rgba(250, 247, 239, 0.72)", margin: 0, lineHeight: 1.6 }}>
                    Removing financial barriers and empowering scholars to study with dignity.
                  </p>
                </div>

                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "16px",
                    padding: "24px 22px",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                    <CheckCircle2 size={20} style={{ color: "var(--gold-400)" }} />
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                      Career Aspirations
                    </h3>
                  </div>
                  <p style={{ fontSize: "0.92rem", color: "rgba(250, 247, 239, 0.72)", margin: 0, lineHeight: 1.6 }}>
                    Empowering students to achieve academic excellence and realize their dreams.
                  </p>
                </div>
              </div>

              {/* Action Links */}
              <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/vision-mission" className="btn btn-gold">
                  Our Vision &amp; Mission <ArrowRight size={14} style={{ marginLeft: "4px" }} />
                </Link>
                <Link href="/programmes" className="btn btn-outline-light">
                  Our Programmes
                </Link>
                <Link href="/get-involved" className="btn btn-outline-light">
                  Support Our Mission
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
