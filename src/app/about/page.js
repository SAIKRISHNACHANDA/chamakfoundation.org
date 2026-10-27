import Link from "next/link";
import PageHero from "@/components/PageHero";
import {
  Compass,
  Smile,
  Library,
  BookOpenCheck,
  Award,
  Sparkles,
  Quote,
  GraduationCap,
  ShieldCheck,
  ArrowRight,
  MapPin,
  CheckCircle2,
  HeartHandshake,
  Users,
  Building,
} from "lucide-react";

export const metadata = {
  title: "About Us · Chamak Foundation (Chamak Padhai Se)",
  description:
    "Learn about Dr. Mohammad Azam Ali's journey, our mission, 4 core programmes, and ground-level educational impact across Telangana.",
};

const PROGRAMMES = [
  {
    num: "01",
    title: "Career Guidance Programmes",
    tag: "Future Readiness",
    icon: Compass,
    points: [
      "Career counseling for high school and college students.",
      "Competitive exam awareness sessions and strategy roadmaps.",
      "Civil Services awareness and dedicated mentoring initiatives.",
    ],
  },
  {
    num: "02",
    title: "Life Skills Education",
    tag: "Holistic Development",
    icon: Smile,
    points: [
      "Youth leadership development & confidence building.",
      "Public speaking, communication & emotional intelligence (EQ).",
      "Personality development & ethical decision-making skills.",
    ],
  },
  {
    num: "03",
    title: "Community Library Initiatives",
    tag: "Knowledge Access",
    icon: Library,
    points: [
      "Establishing vibrant libraries in rural, tribal & minority areas.",
      "Promoting a joyful reading culture & textbook accessibility.",
      "Active libraries: Rangapoor village (Huzurabad, Karimnagar) & Govt. High School Matwada.",
    ],
  },
  {
    num: "04",
    title: "Education Dialogue & Policy",
    tag: "Professional Growth",
    icon: BookOpenCheck,
    points: [
      "Organizing seminars and symposiums on educational issues & trends.",
      "Creating collaborative platforms for educators, researchers & policymakers.",
      "Professional development and pedagogue upskilling workshops.",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Chamak Padhai Se · Regd. No. 643/2023"
        title="Shine Through Education."
        subtitle="The establishment of Chamak Foundation is deeply rooted in resilience, transformation, and the unyielding belief that education is the light that illuminates lives."
      />

      {/* WHY CHAMAK FOUNDATION - THE FOUNDER'S JOURNEY */}
      <section className="section" id="founder" style={{ scrollMarginTop: "90px" }}>
        <div className="container">
          <div className="grid grid--2" style={{ alignItems: "center", gap: "48px" }}>
            <div>
              <div className="eyebrow" style={{ color: "var(--gold-600)" }}>
                <Sparkles size={14} /> Why Chamak Foundation?
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
                Born from Hardship. <br />
                <em>Powered by Resilience.</em>
              </h2>
              <p style={{ color: "var(--ink-600)", lineHeight: 1.8, fontSize: "1.05rem" }}>
                The establishment of <strong>Chamak Foundation (Chamak Padhai Se) NGO</strong> is deeply rooted in the life journey of <strong>Dr. Mohammad Azam Ali</strong>—a journey marked by hardship, resilience, and an unwavering commitment to education and social transformation.
              </p>
              <p style={{ color: "var(--ink-600)", lineHeight: 1.8, fontSize: "1.05rem" }}>
                Born into a very poor background, he faced severe financial constraints during his early life and was forced to discontinue his education at one point. However, transformative incidents reignited his determination. With remarkable perseverance, dedication, and hard work, he successfully completed his <strong>M.A., M.Ed., and Ph.D.</strong>, eventually achieving his goal of becoming an <strong>Assistant Professor</strong>.
              </p>
              <p style={{ color: "var(--ink-600)", lineHeight: 1.8, fontSize: "1.05rem" }}>
                His personal struggles helped him realize the true power of education as the ultimate tool for empowerment. On <strong>6th October 2023</strong>, he founded Chamak Foundation in Hyderabad in the presence of <strong>Prof. Shantha Sinha</strong>, renowned social activist and Ramon Magsaysay Awardee.
              </p>
            </div>

            {/* FOUNDER & FOUNDATION PROFILE CARD */}
            <div
              className="card"
              style={{
                background: "linear-gradient(145deg, var(--navy-950) 0%, var(--navy-900) 100%)",
                borderColor: "rgba(201,154,58,0.3)",
                padding: "44px 38px",
                color: "var(--cream-100)",
                boxShadow: "0 20px 40px rgba(11,27,56,0.18)",
              }}
            >
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(201,154,58,0.15)", color: "var(--gold-400)", padding: "4px 12px", borderRadius: "20px", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>
                <HeartHandshake size={14} /> Founder &amp; President
              </div>
              <h3 style={{ fontSize: "1.9rem", color: "var(--cream-100)", margin: "0 0 6px", fontFamily: "var(--serif)" }}>
                Dr. Mohammad Azam Ali
              </h3>
              <p style={{ color: "var(--gold-400)", fontSize: "0.92rem", fontWeight: 600, letterSpacing: "0.04em", margin: "0 0 20px" }}>
                M.A., M.Ed., Ph.D. · Assistant Professor &amp; Social Visionary
              </p>

              <div style={{ borderTop: "1px solid rgba(201,154,58,0.25)", paddingTop: "22px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--gold-400)", flexShrink: 0, marginTop: "3px" }} />
                  <span style={{ fontSize: "0.92rem", color: "rgba(250,247,239,0.9)", lineHeight: 1.5 }}>
                    Turned early educational discontinuation into academic triumph through perseverance.
                  </span>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--gold-400)", flexShrink: 0, marginTop: "3px" }} />
                  <span style={{ fontSize: "0.92rem", color: "rgba(250,247,239,0.9)", lineHeight: 1.5 }}>
                    Delivered 100+ motivational lectures and 70+ career sessions across Telangana.
                  </span>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--gold-400)", flexShrink: 0, marginTop: "3px" }} />
                  <span style={{ fontSize: "0.92rem", color: "rgba(250,247,239,0.9)", lineHeight: 1.5 }}>
                    Supported 20+ students in Pharmacy, B.Ed, M.A., and M.Phil to continue their higher studies.
                  </span>
                </div>
              </div>

              <div style={{ marginTop: "28px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
                <span style={{ fontSize: "0.8rem", color: "rgba(250,247,239,0.6)" }}>
                  Regd. No. 643/2023 · Telangana Societies Act
                </span>
                <span style={{ fontSize: "0.8rem", color: "var(--gold-400)", fontWeight: 600 }}>
                  Est. 6th October 2023
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSPIRATIONS & CORE PHILOSOPHY */}
      <section className="section section--cream2">
        <div className="container">
          <div className="section-head section-head--center">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <Quote size={14} /> Guiding Words
            </div>
            <h2>The Visionary Ideals That Guide Us</h2>
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

      {/* VISION & MISSION DUAL PILLARS */}
      <section className="section">
        <div className="container">
          <div className="grid grid--2" style={{ gap: "32px" }}>
            <div className="card" style={{ padding: "44px 38px", borderColor: "rgba(201,154,58,0.3)" }}>
              <div className="eyebrow" style={{ color: "var(--gold-600)" }}>Our Vision</div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.65rem", color: "var(--navy-900)", margin: "12px 0 16px", lineHeight: 1.35 }}>
                An inclusive, educated India where every child shines with dignity.
              </h3>
              <p style={{ color: "var(--ink-500)", lineHeight: 1.75, fontSize: "1rem", margin: 0 }}>
                To build an inclusive and educated India where every underprivileged child has access to quality education, equal opportunities, and the confidence to shine in life with dignity and self-reliance.
              </p>
            </div>

            <div className="card" style={{ padding: "44px 38px", borderColor: "rgba(11,27,56,0.15)", background: "linear-gradient(145deg, #FAF7EF 0%, #F3EDE0 100%)" }}>
              <div className="eyebrow" style={{ color: "var(--navy-800)" }}>Our Mission</div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.65rem", color: "var(--navy-900)", margin: "12px 0 16px", lineHeight: 1.35 }}>
                Dismantling barriers and nurturing tomorrow&apos;s value-driven leaders.
              </h3>
              <ul style={{ paddingLeft: "18px", color: "var(--ink-500)", lineHeight: 1.75, fontSize: "0.98rem", margin: 0 }}>
                <li style={{ marginBottom: "6px" }}>To empower marginalized and disadvantaged students through education.</li>
                <li style={{ marginBottom: "6px" }}>To promote equitable access to primary, secondary, and higher education.</li>
                <li style={{ marginBottom: "6px" }}>To create awareness about the transformative power of education in rural, tribal, and minority communities.</li>
                <li>To nurture socially responsible, skilled, and value-driven citizens for nation-building.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR CORE PROGRAMMES */}
      <section className="section section--cream2">
        <div className="container">
          <div className="section-head section-head--center">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <Award size={14} /> Our Programmes
            </div>
            <h2>Four Pillars of Practical Action</h2>
            <p>Targeted initiatives structured to mentor, educate, and empower every aspiring scholar.</p>
          </div>

          <div className="grid grid--2" style={{ gap: "28px", marginTop: "36px" }}>
            {PROGRAMMES.map((prog) => {
              const Icon = prog.icon;
              return (
                <div key={prog.num} className="card" style={{ padding: "34px", background: "#fff", boxShadow: "0 10px 30px rgba(11,27,56,0.04)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                    <div style={{ width: 46, height: 46, borderRadius: 12, background: "rgba(201,154,58,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--gold-600)" }}>
                      <Icon size={24} />
                    </div>
                    <span style={{ fontSize: "0.78rem", fontWeight: 700, padding: "5px 12px", borderRadius: 20, background: "var(--cream-100)", color: "var(--navy-900)", letterSpacing: "0.04em" }}>
                      {prog.tag}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "1.3rem", color: "var(--navy-900)", marginBottom: "14px", fontFamily: "var(--serif)" }}>
                    {prog.title}
                  </h3>
                  <ul style={{ paddingLeft: "18px", margin: 0, color: "var(--ink-500)", lineHeight: 1.65, fontSize: "0.94rem" }}>
                    {prog.points.map((pt, i) => (
                      <li key={i} style={{ marginBottom: "8px" }}>{pt}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MEASURABLE GROUND IMPACT */}
      <section className="section" style={{ background: "var(--navy-950)", color: "var(--cream-100)" }}>
        <div className="container">
          <div className="section-head section-head--center" style={{ color: "var(--cream-100)" }}>
            <div className="eyebrow" style={{ justifyContent: "center", color: "var(--gold-400)" }}>
              Ground Realities
            </div>
            <h2 style={{ color: "var(--cream-100)" }}>Our Impact in Numbers</h2>
            <p style={{ color: "rgba(250,247,239,0.7)" }}>Demonstrating real, measurable change across Telangana&apos;s youth.</p>
          </div>

          <div className="grid grid--4" style={{ gap: "20px", marginTop: "36px" }}>
            <div className="card" style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(201,154,58,0.25)", padding: "30px 24px", textAlign: "center" }}>
              <div style={{ fontSize: "3rem", fontWeight: 800, color: "var(--gold-400)", fontFamily: "var(--serif)" }}>100+</div>
              <h4 style={{ color: "var(--cream-100)", margin: "10px 0 6px", fontSize: "1.1rem" }}>Motivational Lectures</h4>
              <p style={{ fontSize: "0.85rem", color: "rgba(250,247,239,0.65)", margin: 0 }}>
                Organised 100+ motivational sessions across schools &amp; youth assemblies
              </p>
            </div>

            <div className="card" style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(201,154,58,0.25)", padding: "30px 24px", textAlign: "center" }}>
              <div style={{ fontSize: "3rem", fontWeight: 800, color: "var(--gold-400)", fontFamily: "var(--serif)" }}>70+</div>
              <h4 style={{ color: "var(--cream-100)", margin: "10px 0 6px", fontSize: "1.1rem" }}>Career Guidance Sessions</h4>
              <p style={{ fontSize: "0.85rem", color: "rgba(250,247,239,0.65)", margin: 0 }}>
                Guiding students toward professional courses and competitive examinations
              </p>
            </div>

            <div className="card" style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(201,154,58,0.25)", padding: "30px 24px", textAlign: "center" }}>
              <div style={{ fontSize: "3rem", fontWeight: 800, color: "var(--gold-400)", fontFamily: "var(--serif)" }}>2</div>
              <h4 style={{ color: "var(--cream-100)", margin: "10px 0 6px", fontSize: "1.1rem" }}>Rural Libraries Built</h4>
              <p style={{ fontSize: "0.85rem", color: "rgba(250,247,239,0.65)", margin: 0 }}>
                1. Rangapoor village (Karimnagar)<br />2. Govt. High School Matwada
              </p>
            </div>

            <div className="card" style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(201,154,58,0.25)", padding: "30px 24px", textAlign: "center" }}>
              <div style={{ fontSize: "3rem", fontWeight: 800, color: "var(--gold-400)", fontFamily: "var(--serif)" }}>20+</div>
              <h4 style={{ color: "var(--cream-100)", margin: "10px 0 6px", fontSize: "1.1rem" }}>Higher-Ed Students Funded</h4>
              <p style={{ fontSize: "0.85rem", color: "rgba(250,247,239,0.65)", margin: 0 }}>
                Direct financial assistance for Pharmacy, B.Ed, M.A., and M.Phil students
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REGISTRATION & CREDENTIAL CALL TO ACTION */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(201,154,58,0.12)", color: "var(--gold-700)", padding: "6px 18px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 700, marginBottom: "16px" }}>
            <ShieldCheck size={16} /> Registered Non-Profit · Reg. No. 643/2023
          </div>
          <h2 style={{ fontFamily: "var(--serif)", color: "var(--navy-900)", fontSize: "clamp(1.8rem, 2.6vw, 2.3rem)", marginBottom: "16px" }}>
            Join Us in Lighting Up a Child&apos;s Future
          </h2>
          <p style={{ color: "var(--ink-500)", lineHeight: 1.8, fontSize: "1rem", margin: "0 auto 28px" }}>
            Registered under the Telangana Societies Registration Act on 6th October 2023, Chamak Foundation ensures that every rupee contributed transforms directly into academic books, tuition fees, and mentorship.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/get-involved#donate" className="btn btn-gold">
              Support a Student <ArrowRight size={16} />
            </Link>
            <Link href="/programmes" className="btn btn-outline">
              Explore Our Programmes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
