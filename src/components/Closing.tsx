import { awards, closing, profile } from "../data/content";
import { Reveal, Section } from "./Section";
import "./Closing.css";

export function Closing() {
  const { contact } = profile;
  return (
    <Section id="connect" className="closing">
      <Reveal>
        <div className="closing__awards">
          <p className="closing__awards-eyebrow">{awards.eyebrow}</p>
          <ul className="closing__awards-list">
            {awards.items.map((a) => (
              <li key={a.title} className="closing__award">
                <span className="closing__award-year">{a.year}</span>
                <span className="closing__award-title">{a.title}</span>
                <span className="closing__award-org">{a.org}</span>
                <span className="closing__award-note">{a.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <p className="closing__eyebrow">{closing.eyebrow}</p>
        <h2 id="connect-title" className="closing__heading">
          {closing.heading.map((line, i) => (
            <span key={i} className={i === closing.heading.length - 1 ? "closing__accent" : ""}>
              {line}
            </span>
          ))}
        </h2>
        <p className="closing__body">{closing.body}</p>

        <div className="closing__cta">
          <a href={`mailto:${contact.email}`} className="btn btn--primary">
            {closing.cta}
          </a>
          <span className="closing__cta-note">{closing.ctaNote}</span>
        </div>

        <ul className="closing__contacts">
          <li>
            <span className="closing__contact-label">Email</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </li>
          <li>
            <span className="closing__contact-label">Phone</span>
            <a href={`tel:${contact.phone.replace(/\s+/g, "")}`}>{contact.phone}</a>
          </li>
          <li>
            <span className="closing__contact-label">LinkedIn</span>
            <a href={contact.linkedinUrl} target="_blank" rel="noreferrer">
              {contact.linkedinLabel}
            </a>
          </li>
        </ul>
      </Reveal>

      <footer className="closing__footer">
        <span>{profile.fullName}</span>
        <span className="closing__footer-role">
          {profile.target.role} · {profile.target.company}, {profile.target.location}
        </span>
      </footer>
    </Section>
  );
}
