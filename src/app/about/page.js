import Link from "next/link";
import Image from "next/image";
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
        title="Shine Through Education."
      />

      {/* WHY CHAMAK FOUNDATION - FOUNDER FULL CV & JOURNEY */}
      <section className="section founder-cv-section" id="founder" style={{ scrollMarginTop: "90px" }}>
        <div className="container">
          <div className="founder-cv-grid">
            {/* Left: Founder Portrait & Executive Sidebar */}
            <div className="founder-cv-sidebar">
              <div className="founder-cv-portrait-card">
                <div className="founder-cv-portrait">
                  <Image
                    src="/assets/team/dr-azam-ali-portrait.jpg"
                    alt="Dr. Mohammad Azam Ali - Founder & President, Chamak Foundation"
                    width={480}
                    height={580}
                    priority
                    className="founder-cv-portrait__img"
                  />
                  <div className="founder-cv-portrait__badge">
                    Founder &amp; President
                  </div>
                </div>

                <div className="founder-cv-card-body">
                  <h3 className="founder-cv-name">Dr. Mohammad Azam Ali</h3>
                  <p className="founder-cv-qualifications">M.A., M.Ed., Ph.D.</p>
                  <p className="founder-cv-role">Assistant Professor, Motivational Speaker &amp; Social Visionary</p>

                  <div className="founder-cv-meta-list">
                    <div className="founder-cv-meta-item">
                      <GraduationCap size={18} className="founder-cv-meta-icon" />
                      <div>
                        <strong>Doctorate &amp; Double Masters</strong>
                        <span>Ph.D. · M.Ed. · M.A. in English</span>
                      </div>
                    </div>
                    <div className="founder-cv-meta-item">
                      <Award size={18} className="founder-cv-meta-icon" />
                      <div>
                        <strong>National Honors</strong>
                        <span>Recognized at Rashtrapati Bhavan &amp; Union Ministry</span>
                      </div>
                    </div>
                    <div className="founder-cv-meta-item">
                      <Sparkles size={18} className="founder-cv-meta-icon" />
                      <div>
                        <strong>100+ Motivational Sessions</strong>
                        <span>Empowering thousands of rural &amp; underprivileged youth</span>
                      </div>
                    </div>
                    <div className="founder-cv-meta-item">
                      <ShieldCheck size={18} className="founder-cv-meta-icon" />
                      <div>
                        <strong>NGO Registration</strong>
                        <span>Telangana Regd. No. 643/2023 · Est. Oct 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Full Curriculum Vitae & Inspiring Narrative */}
            <div className="founder-cv-main">
              {/* Custom Header Eyebrow matching the exact design */}
              <div className="founder-cv-eyebrow">
                <span className="founder-cv-eyebrow__line" />
                <span className="founder-cv-eyebrow__icon">
                  <Sparkles size={18} />
                </span>
                <span>WHY CHAMAK FOUNDATION?</span>
              </div>

              <h2 className="founder-cv-heading">From Dropout to Doctorate</h2>
              <p className="founder-cv-lead">
                The establishment of <strong>Chamak Foundation (Chamak Padhai Se)</strong> is deeply rooted in the life journey of <strong>Dr. Mohammad Azam Ali</strong>—a true journey of transformation from severe hardship to academic triumph, higher education, and nation-building.
              </p>

              {/* CV Section 1: Biographical Overview & Early Struggle */}
              <div className="founder-cv-section-box">
                <div className="founder-cv-section-head">
                  <div className="founder-cv-section-icon">
                    <Sparkles size={20} />
                  </div>
                  <h3 className="founder-cv-section-title">The Struggle &amp; Turning Point</h3>
                </div>
                <p style={{ color: "var(--ink-600)", lineHeight: 1.75, fontSize: "0.96rem", margin: "0 0 14px" }}>
                  Born into a family facing severe financial constraints, Dr. Mohammad Azam Ali was forced to discontinue his schooling during his formative years. Experiencing firsthand the acute despair of poverty, the lack of textbooks, and denied opportunity, he understood the silent struggle that millions of Indian children face every day.
                </p>
                <p style={{ color: "var(--ink-600)", lineHeight: 1.75, fontSize: "0.96rem", margin: 0 }}>
                  A pivotal turning point reignited his fierce desire to learn. Driven by unbreakable resilience, he returned to studies against all odds, financing his schooling through persistent hard work and viewing every setback as a stepping stone toward excellence.
                </p>
              </div>

              {/* CV Section 2: Academic Qualifications */}
              <div className="founder-cv-section-box">
                <div className="founder-cv-section-head">
                  <div className="founder-cv-section-icon">
                    <GraduationCap size={20} />
                  </div>
                  <h3 className="founder-cv-section-title">Academic Qualifications &amp; Research</h3>
                </div>
                <div className="cv-timeline">
                  <div className="cv-item">
                    <div className="cv-item__header">
                      <h4 className="cv-item__title">Doctor of Philosophy (Ph.D.)</h4>
                      <span className="cv-item__badge">Doctorate</span>
                    </div>
                    <div className="cv-item__subtitle">English Literature &amp; Pedagogy</div>
                    <p className="cv-item__desc">
                      Completed advanced doctoral research, culminating the inspiring transition from a former school dropout to an accomplished doctor of letters and pedagogue.
                    </p>
                  </div>

                  <div className="cv-item">
                    <div className="cv-item__header">
                      <h4 className="cv-item__title">Master of Education (M.Ed.)</h4>
                      <span className="cv-item__badge">Post-Graduate</span>
                    </div>
                    <div className="cv-item__subtitle">Pedagogical Theory &amp; Educational Psychology</div>
                    <p className="cv-item__desc">
                      Specialized in modern curriculum design, student psychological counseling, and inclusive educational practices for marginalized youth.
                    </p>
                  </div>

                  <div className="cv-item">
                    <div className="cv-item__header">
                      <h4 className="cv-item__title">Master of Arts (M.A.) in English</h4>
                      <span className="cv-item__badge">Post-Graduate</span>
                    </div>
                    <div className="cv-item__subtitle">English Literature, Linguistics &amp; Communication</div>
                    <p className="cv-item__desc">
                      Mastered linguistic and communicative competencies, laying the foundation for his lectures, youth career mentorships, and state-wide public addresses.
                    </p>
                  </div>
                </div>
              </div>

              {/* CV Section 3: Professional Appointments */}
              <div className="founder-cv-section-box">
                <div className="founder-cv-section-head">
                  <div className="founder-cv-section-icon">
                    <Award size={20} />
                  </div>
                  <h3 className="founder-cv-section-title">Professional Appointments &amp; Leadership</h3>
                </div>
                <div className="cv-timeline">
                  <div className="cv-item">
                    <div className="cv-item__header">
                      <h4 className="cv-item__title">Assistant Professor in Higher Education</h4>
                      <span className="cv-item__badge">Academic Career</span>
                    </div>
                    <div className="cv-item__subtitle">University &amp; Degree College Level</div>
                    <p className="cv-item__desc">
                      Dedicated academician training undergraduate and post-graduate scholars, conducting research, and authoring educational papers.
                    </p>
                  </div>

                  <div className="cv-item">
                    <div className="cv-item__header">
                      <h4 className="cv-item__title">Founder &amp; President · Chamak Foundation</h4>
                      <span className="cv-item__badge">October 2023 – Present</span>
                    </div>
                    <div className="cv-item__subtitle">Chamak Padhai Se (Regd. No. 643/2023)</div>
                    <p className="cv-item__desc">
                      Established to institutionalize free educational support, student sponsorships, career counseling, and village community libraries across Telangana.
                    </p>
                  </div>
                </div>
              </div>

              {/* CV Section 4: National Dignitary Recognitions */}
              <div className="founder-cv-section-box">
                <div className="founder-cv-section-head">
                  <div className="founder-cv-section-icon">
                    <ShieldCheck size={20} />
                  </div>
                  <h3 className="founder-cv-section-title">National Recognitions &amp; Honors</h3>
                </div>
                <div className="founder-honors-grid">
                  <div className="founder-honor-card">
                    <div className="founder-honor-card__icon">
                      <Award size={18} />
                    </div>
                    <div>
                      <h5 className="founder-honor-card__name">Late Shri Pranab Mukherjee</h5>
                      <p className="founder-honor-card__role">Former President of India</p>
                    </div>
                  </div>

                  <div className="founder-honor-card">
                    <div className="founder-honor-card__icon">
                      <Award size={18} />
                    </div>
                    <div>
                      <h5 className="founder-honor-card__name">Smt. Droupadi Murmu</h5>
                      <p className="founder-honor-card__role">Hon&apos;ble President of India</p>
                    </div>
                  </div>

                  <div className="founder-honor-card">
                    <div className="founder-honor-card__icon">
                      <Award size={18} />
                    </div>
                    <div>
                      <h5 className="founder-honor-card__name">Shri M. Venkaiah Naidu</h5>
                      <p className="founder-honor-card__role">Former Vice President of India</p>
                    </div>
                  </div>

                  <div className="founder-honor-card">
                    <div className="founder-honor-card__icon">
                      <Award size={18} />
                    </div>
                    <div>
                      <h5 className="founder-honor-card__name">Shri Anurag Singh Thakur</h5>
                      <p className="founder-honor-card__role">Hon&apos;ble Union Minister</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CV Key Impact Metrics */}
              <div className="founder-cv-stats-grid">
                <div className="founder-cv-stat-box">
                  <span className="founder-cv-stat-num">100+</span>
                  <span className="founder-cv-stat-label">Motivational Lectures Across Telangana</span>
                </div>
                <div className="founder-cv-stat-box">
                  <span className="founder-cv-stat-num">70+</span>
                  <span className="founder-cv-stat-label">Career Guidance &amp; Civil Services Seminars</span>
                </div>
                <div className="founder-cv-stat-box">
                  <span className="founder-cv-stat-num">20+</span>
                  <span className="founder-cv-stat-label">Scholars Aided in Pharmacy, B.Ed, M.A. &amp; M.Phil</span>
                </div>
                <div className="founder-cv-stat-box">
                  <span className="founder-cv-stat-num">2</span>
                  <span className="founder-cv-stat-label">Libraries at Rangapoor &amp; Govt. HS Matwada</span>
                </div>
              </div>

              {/* Founder Motto Quote Card */}
              <div className="founder-cv-quote">
                <p>
                  &ldquo;Every child carries a spark—a Chamak. If we give them direction, mentorship, and support, no poverty can prevent them from shining.&rdquo;
                </p>
                <cite>— Dr. Mohammad Azam Ali</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSPIRATIONS & CORE PHILOSOPHY */}
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
          <div className="section-head section-head--center section-head--wide">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <Award size={14} /> Our Programmes
            </div>
            <h2 className="section-title--oneline">Four Pillars of Practical Action</h2>
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
          <div className="section-head section-head--center section-head--wide" style={{ color: "var(--cream-100)" }}>
            <div className="eyebrow" style={{ justifyContent: "center", color: "var(--gold-400)" }}>
              Ground Realities
            </div>
            <h2 className="section-title--oneline" style={{ color: "var(--cream-100)" }}>Our Impact in Numbers</h2>
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
