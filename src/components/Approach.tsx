import { approach } from "../data/content";
import { Eyebrow, Reveal, Section } from "./Section";
import "./Approach.css";

export function Approach() {
  return (
    <Section id="approach" className="approach">
      <Reveal>
        <Eyebrow>{approach.eyebrow}</Eyebrow>
        <h2 id="approach-title" className="approach__heading">
          {approach.heading}
        </h2>
        <p className="approach__intro">{approach.intro}</p>
      </Reveal>

      <ol className="approach__steps">
        {approach.steps.map((step, i) => (
          <Reveal key={step.n} delay={i * 90} className="approach__item-wrap">
            <li className="approach__item">
              <span className="approach__n">{step.n}</span>
              <h3 className="approach__title">{step.title}</h3>
              <p className="approach__body">{step.body}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
