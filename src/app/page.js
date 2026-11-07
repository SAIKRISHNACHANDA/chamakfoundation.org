import Link from "next/link";
import Image from "next/image";
import StarfieldCanvas from "@/components/StarfieldCanvas";
import StatCounter from "@/components/StatCounter";
import HeroImageSlider from "@/components/HeroImageSlider";
import FounderGallery from "@/components/FounderGallery";


export const metadata = {
  title: "Home · Chamak Foundation",
  description:
    "Chamak Foundation — empowering underprivileged children through education, scholarships, mentorship, and opportunities.",
};

const STATS_DATA = [
  { target: 100, suffix: "+", label: "Motivational Lectures" },
  { target: 70, suffix: "+", label: "Career Guidance Sessions" },
  { target: 2, suffix: "", label: "Rural Libraries Established" },
  { target: 20, suffix: "+", label: "Higher-Ed Scholars" },
  { target: 100, suffix: "+", label: "Volunteers" },
  { target: 2, suffix: "+", label: "Years of Impact" },
];


export default function HomePage() {
  return (
    <>
      {/* Cinematic Hero */}
      <section className="hero">
        <StarfieldCanvas />
        <div className="hero__grid">
          <div>
            <div className="hero__eyebrow">Chamak Padhai Se</div>
            <h1 className="hero__title--fit">
              Every Child Deserves to Shine.
            </h1>
          </div>

          <div className="hero__media">
            <HeroImageSlider />
          </div>
        </div>
      </section>

      {/* Animated Live Metrics Strip */}
      <div className="container">
        <div className="stats">
          {STATS_DATA.map((item, idx) => (
            <StatCounter
              key={idx}
              target={item.target}
              suffix={item.suffix}
              label={item.label}
            />
          ))}
        </div>
      </div>

      {/* The Person Behind the Chamak - Founder Honors */}
      <section className="section founder-section">
        <div className="container">
          <div className="section-head section-head--center section-head--fit" style={{ marginBottom: "36px" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              Meet Our Founder
            </div>
            <h2 className="hdg-oneline">The Person Behind the Chamak</h2>
          </div>

          <FounderGallery />
        </div>
      </section>


      {/* Quote Section */}
      <section className="section section--navy">
        <div className="container">
          <div className="quote">
            <p>
              &ldquo;Education is the most powerful weapon which you can use to
              change the world.&rdquo;
            </p>
            <cite>— Nelson Mandela</cite>
          </div>
        </div>
      </section>

      {/* Call to Action Band */}
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div className="eyebrow" style={{ color: "var(--gold-300)", justifyContent: "center" }}>
              Make a Direct Difference
            </div>
            <h2>Be the Reason a Child Shines</h2>
            <p>
              Your monthly sponsorship or one-time donation provides textbooks,
              school fees, uniforms, and mentorship to an underprivileged student.
            </p>
            <div className="cta-band__ctas">
              <Link href="/get-involved#donate" className="btn btn-gold">
                Support a Student
              </Link>
              <Link href="/get-involved#volunteer" className="btn btn-outline-light">
                Join as a Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
