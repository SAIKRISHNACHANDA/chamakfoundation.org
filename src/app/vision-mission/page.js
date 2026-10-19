import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Eye, Target, BookOpen, GraduationCap, Compass, Smile, Heart, Library, ShieldCheck, Award, Users } from "lucide-react";

export const metadata = {
  title: "Vision & Mission | Chamak Foundation",
  description: "Chamak Foundation's vision, mission, strategic objectives, and educational philosophy in Hyderabad, India.",
};

export default function VisionMissionPage() {
  const objectives = [
    {
      num: "01",
      title: "Quality education for all",
      desc: "Promote inclusive, high-quality education for every child regardless of socio-economic background or geography.",
      icon: BookOpen,
    },
    {
      num: "02",
      title: "Scholarships & Financial Aid",
      desc: "Provide targeted scholarships for meritorious and needy students so tuition fees are never an obstacle to learning.",
      icon: GraduationCap,
    },
    {
      num: "03",
      title: "Career guidance & Mentorship",
      desc: "Guide senior school and college youth through structured mentorship, industry exposure, and career planning.",
      icon: Compass,
    },
    {
      num: "04",
      title: "Life skills & Confidence",
      desc: "Develop communication, critical thinking, emotional resilience, and leadership skills in every child we nurture.",
      icon: Smile,
    },
    {
      num: "05",
      title: "Girl child education",
      desc: "Empower girls through targeted retention programs, academic sponsorships, and community mindset shifts.",
      icon: Heart,
    },
    {
      num: "06",
      title: "Community libraries",
      desc: "Build accessible, vibrant reading rooms and community libraries in underserved areas to keep curiosity alive.",
      icon: Library,
    },
  ];

  const coreValues = [
    {
      title: "Equity & Inclusion",
      desc: "We believe educational opportunity is an inalienable right, not a privilege reserved for the fortunate.",
      icon: Users,
    },
    {
      title: "Radical Transparency",
      desc: "Every rupee entrusted to us is stewarded with absolute financial ethics, measurable outcomes, and audit rigor.",
      icon: ShieldCheck,
    },
    {
      title: "Holistic Development",
      desc: "Beyond textbook marks, we nurture critical minds, compassionate hearts, and confident future community leaders.",
      icon: Award,
    },
    {
      title: "Community Ownership",
      desc: "Sustainable change happens when parents, local educators, and youth work as partners in the educational journey.",
      icon: Target,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Why We Exist"
        title="Vision. Mission. Purpose."
        subtitle="What Chamak Foundation stands for, and the generational change we are working to create every day."
      />

      {/* Vision & Mission Dual Pillars */}
      <section className="section">
        <div className="container">
          <div className="grid grid--2 reveal">
            <div className="card" style={{ borderColor: "rgba(201,154,58,0.3)" }}>
              <div className="card__body" style={{ padding: "44px 38px" }}>
                <div className="card__icon" style={{ background: "rgba(201,154,58,0.12)", color: "var(--gold-600)" }}>
                  <Eye size={26} strokeWidth={1.8} />
                </div>
                <div className="eyebrow" style={{ color: "var(--gold-600)" }}>Our Vision</div>
                <h2 style={{ fontFamily: "var(--serif)", fontSize: "1.75rem", lineHeight: 1.35, color: "var(--navy-900)", marginBottom: "16px" }}>
                  A society where every child has unhindered access to quality education and the opportunity to achieve their fullest potential.
                </h2>
                <p style={{ color: "var(--ink-500)", lineHeight: 1.7, margin: 0 }}>
                  We envision communities where poverty never acts as an educational ceiling, and where every child discovers the spark ("Chamak") of knowledge to transform their family&apos;s destiny.
                </p>
              </div>
            </div>

            <div className="card" style={{ borderColor: "rgba(11,27,56,0.15)", background: "linear-gradient(145deg, #FAF7EF 0%, #F3EDE0 100%)" }}>
              <div className="card__body" style={{ padding: "44px 38px" }}>
                <div className="card__icon" style={{ background: "var(--navy-900)", color: "var(--gold-400)" }}>
                  <Target size={26} strokeWidth={1.8} />
                </div>
                <div className="eyebrow" style={{ color: "var(--navy-800)" }}>Our Mission</div>
                <h2 style={{ fontFamily: "var(--serif)", fontSize: "1.75rem", lineHeight: 1.35, color: "var(--navy-900)", marginBottom: "16px" }}>
                  To empower underprivileged children through academic excellence, merit scholarships, personal guidance, and holistic life skills.
                </h2>
                <p style={{ color: "var(--ink-500)", lineHeight: 1.7, margin: 0 }}>
                  Through direct classroom support, scholarship funding, community libraries, and career navigation, we systematically dismantle the barriers between marginalized students and their aspirations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="section section--cream2">
        <div className="container">
          <div className="section-head section-head--center section-head--fit reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>Our Strategic Objectives</div>
            <h2 className="hdg-oneline">What we work toward, every day</h2>
            <p style={{ marginTop: "12px", color: "var(--ink-400)", maxWidth: "56ch", marginLeft: "auto", marginRight: "auto" }}>
              Our work is focused along six complementary intervention pillars designed to support a child from primary schooling through career entry.
            </p>
          </div>

          <div className="grid grid--3 reveal">
            {objectives.map((obj) => {
              const Icon = obj.icon;
              return (
                <div key={obj.num} className="obj">
                  <div className="obj__num">{obj.num}</div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                      <Icon size={18} style={{ color: "var(--gold-500)" }} />
                      <h4 style={{ margin: 0 }}>{obj.title}</h4>
                    </div>
                    <p style={{ margin: 0 }}>{obj.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>Our Guiding Values</div>
            <h2>The Principles that Define Our Work</h2>
          </div>

          <div className="grid grid--4 reveal">
            {coreValues.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="card" style={{ padding: "32px 24px" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "var(--cream-200)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--navy-900)", marginBottom: "18px" }}>
                    <Icon size={20} />
                  </div>
                  <h3 style={{ fontSize: "1.15rem", marginBottom: "8px" }}>{v.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--ink-400)", lineHeight: 1.6, margin: 0 }}>{v.desc}</p>
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
            <p>&ldquo;Education is not simply preparation for life. It can be the beginning of a different life.&rdquo;</p>
            <cite>&mdash; A founding principle Chamak Foundation is built on</cite>
          </div>
        </div>
      </section>

      {/* Call to Action Band */}
      <section className="section">
        <div className="container">
          <div className="cta-band reveal">
            <h2>Join our mission to educate and empower</h2>
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
