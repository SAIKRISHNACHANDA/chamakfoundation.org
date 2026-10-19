import StarfieldCanvas from "./StarfieldCanvas";

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="hero">
      <StarfieldCanvas />
      <div className="hero__grid hero__grid--center">
        {eyebrow && <div className="hero__eyebrow">{eyebrow}</div>}
        <h1>{title}</h1>
        {subtitle && <p className="hero__desc">{subtitle}</p>}
      </div>
    </section>
  );
}
