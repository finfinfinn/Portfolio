import { about } from "../data/content";
import { Eyebrow, Reveal, Section } from "./Section";
import "./About.css";

export function About() {
  return (
    <Section id="about" className="about">
      <div className="about__grid">
        <div className="about__lead">
          <Reveal>
            <Eyebrow>{about.eyebrow}</Eyebrow>
            <h2 id="about-title" className="about__heading">
              {about.heading}
            </h2>
          </Reveal>
        </div>

        <div className="about__body">
          {about.body.map((para, i) => (
            <Reveal key={i} delay={i * 80}>
              <p className="about__para">{para}</p>
            </Reveal>
          ))}

          <Reveal delay={160}>
            <dl className="about__facts">
              {about.facts.map((f) => (
                <div className="about__fact" key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={200}>
            <div className="about__modules">
              <p className="about__modules-label">{about.modulesLabel}</p>
              <ul className="about__modules-list">
                {about.modules.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
