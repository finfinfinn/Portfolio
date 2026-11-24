import { track } from "../data/content";
import { Img } from "./Img";
import { Eyebrow, Reveal, Section } from "./Section";
import "./Track.css";

export function Track() {
  return (
    <Section id="track" className="track">
      <Reveal>
        <Eyebrow>{track.eyebrow}</Eyebrow>
        <h2 id="track-title" className="track__heading">
          {track.heading}
        </h2>
      </Reveal>

      <Reveal>
        <figure className="track__feature">
          <Img
            src="/images/track/starting-line.jpg"
            alt="Samuel Ong at the starting line of a Track & Field competition"
            placeholderLabel="Track · Starting line"
          />
          <div className="track__feature-scrim" aria-hidden="true" />
          <figcaption className="track__caption">{track.captionStart}</figcaption>
        </figure>
      </Reveal>

      <div className="track__grid">
        <Reveal className="track__story">
          {track.body.map((para, i) => (
            <p key={i} className="track__para">
              {para}
            </p>
          ))}
          <ul className="track__highlights">
            {track.highlights.map((h) => (
              <li key={h.label}>
                <span className="track__h-label">{h.label}</span>
                <span className="track__h-value">{h.value}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100} className="track__team">
          <figure className="track__team-figure">
            <Img
              src="/images/track/team.jpg"
              alt="Samuel Ong with Track & Field teammates after an athletics event, wearing medals"
              placeholderLabel="Track · Team photo"
            />
          </figure>
          <div className="track__team-text">
            <h3 className="track__team-heading">{track.teamHeading}</h3>
            <p className="track__para">{track.teamBody}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
