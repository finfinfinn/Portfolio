import { markets } from "../data/content";
import { Img } from "./Img";
import { Eyebrow, Reveal, Section } from "./Section";
import "./Markets.css";

export function Markets() {
  return (
    <Section id="markets" className="markets">
      <div className="markets__grid">
        <Reveal className="markets__text">
          <Eyebrow>{markets.eyebrow}</Eyebrow>
          <h2 id="markets-title" className="markets__heading">
            {markets.heading}
          </h2>
          <p className="markets__body">{markets.body}</p>
          <ul className="markets__tags">
            {markets.transfers.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100} className="markets__media">
          <figure className="markets__figure">
            <div className="markets__shot">
              <Img
                src="/images/interests/markets.jpg"
                alt="A chart from Samuel Ong's time learning about financial markets, with monetary figures blurred"
                placeholderLabel="Markets · Screenshot"
              />
              {/* Privacy blur: a clipped copy of the top of the screenshot,
                  blurred so the account value and returns aren't legible while
                  the rest of the shot stays sharp. Focus stays on the habit,
                  not the money. */}
              <span
                className="markets__blur"
                aria-hidden="true"
                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/interests/markets.jpg)` }}
              />
            </div>
            <figcaption>{markets.caption}</figcaption>
          </figure>
        </Reveal>
      </div>
    </Section>
  );
}
