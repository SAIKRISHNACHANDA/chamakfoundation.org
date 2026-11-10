import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function HeroImageSlider() {
  return (
    <div className="hero-slider" style={{ cursor: "default" }}>
      <Image
        src="/assets/img/rural-library-inauguration.jpg"
        alt="Chamak Foundation and Hilltop Education Center rural library inauguration and educational awareness campaign with students in Telangana"
        fill
        priority
        sizes="(max-width: 960px) 100vw, 55vw"
        className="hero-slider__img"
        style={{ objectPosition: "center 20%" }}
      />
      <div className="hero__media-chip">
        <Sparkles size={16} className="hero__media-chip-icon" />
        <div>
          <strong>Rural Library &amp; Awareness Campaign</strong>
          <span>Ground educational empowerment across Telangana</span>
        </div>
      </div>
    </div>
  );
}
