import { capabilities } from "../data/content";
import { Eyebrow, Reveal, Section } from "./Section";
import "./Foundation.css";

export function Foundation() {
  return (
    <Section id="foundation" className="foundation">
      <Reveal>
        <Eyebrow>TECHNICAL FOUNDATION</Eyebrow>
        <h2 id="foundation-title" className="foundation__heading">
          What I’ve worked with so far
        </h2>
        <p className="foundation__sub">
          Hands-on exposure from my Mechatronics coursework — described honestly, at the level I’ve
          actually practised.
        </p>
      </Reveal>

      <div className="foundation__grid">
        {capabilities.map((cap, i) => (
          <Reveal key={cap.title} delay={(i % 3) * 70} className="foundation__cell">
            <article className="cap-card">
              <span className="cap-card__tag">{cap.tag}</span>
              <h3 className="cap-card__title">{cap.title}</h3>
              <p className="cap-card__detail">{cap.detail}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
