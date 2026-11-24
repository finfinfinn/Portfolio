import { innowave } from "../data/content";
import { Eyebrow, Reveal, Section } from "./Section";
import "./Innowave.css";

export function Innowave() {
  return (
    <Section id="innowave" className="innowave">
      <Reveal>
        <Eyebrow>{innowave.eyebrow}</Eyebrow>
        <h2 id="innowave-title" className="innowave__heading">
          {innowave.heading}
        </h2>
        <p className="innowave__intro">{innowave.intro}</p>
      </Reveal>

      <div className="innowave__cols">
        <Reveal className="innowave__col">
          <div className="innowave__panel innowave__panel--have">
            <h3 className="innowave__col-title">
              <span className="innowave__badge">Have exposure</span>
              {innowave.haveExposure.title}
            </h3>
            <ul className="innowave__list">
              {innowave.haveExposure.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={100} className="innowave__col">
          <div className="innowave__panel innowave__panel--learn">
            <h3 className="innowave__col-title">
              <span className="innowave__badge innowave__badge--learn">Want to learn</span>
              {innowave.wantToLearn.title}
            </h3>
            <ul className="innowave__list innowave__list--learn">
              {innowave.wantToLearn.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <p className="innowave__closing">{innowave.closingLine}</p>
      </Reveal>
    </Section>
  );
}
