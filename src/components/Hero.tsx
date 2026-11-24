import { profile } from "../data/content";
import { Img } from "./Img";
import "./Hero.css";

export function Hero() {
  return (
    <section id="top" className="hero" aria-label="Introduction">
      <div className="hero__inner">
        <div className="hero__text">
          <p className="hero__kicker">{profile.name} · Portfolio</p>

          <p className="hero__role">
            <span className="hero__dot" aria-hidden="true" />
            {profile.role}
          </p>

          <h1 className="hero__title">
            {profile.tagline.map((line, i) => (
              <span key={i} className="hero__line" style={{ animationDelay: `${0.1 + i * 0.12}s` }}>
                {line}
              </span>
            ))}
          </h1>

          <p className="hero__intro">{profile.heroIntro}</p>

          <div className="hero__ctas">
            <a href="#projects" className="btn btn--primary">
              Explore my work
            </a>
            <a href="#connect" className="btn btn--ghost">
              Let’s connect
            </a>
          </div>
        </div>

        <div className="hero__media">
          <figure className="hero__frame">
            <Img
              src="/images/me/hero-rooftop.jpg"
              alt="Samuel Ong on a rooftop with a city skyline behind him"
              className="hero__img"
              placeholderLabel="Hero · Rooftop photo"
              eager
            />
          </figure>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to About section">
        <span>Scroll</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}
