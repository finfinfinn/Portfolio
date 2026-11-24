import { projects, projectsNote } from "../data/content";
import { ProjectIllustration } from "./Illustrations";
import { Eyebrow, Reveal, Section } from "./Section";
import "./Projects.css";

export function Projects() {
  return (
    <Section id="projects" className="projects">
      <Reveal>
        <Eyebrow>PROJECTS · HANDS-ON EXPERIENCE</Eyebrow>
        <h2 id="projects-title" className="projects__heading">
          Things I’ve built and investigated
        </h2>
        <p className="projects__note">{projectsNote}</p>
      </Reveal>

      <div className="projects__list">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={(i % 2) * 80}>
            <article className="project">
              <div className="project__visual">
                <ProjectIllustration kind={p.illustration} />
                <span className="project__visual-tag">Conceptual illustration</span>
              </div>

              <div className="project__body">
                <p className="project__kicker">{p.kicker}</p>
                <h3 className="project__title">{p.title}</h3>

                <dl className="project__steps">
                  <div>
                    <dt>What I worked on</dt>
                    <dd>{p.worked}</dd>
                  </div>
                  <div>
                    <dt>Challenge / investigation</dt>
                    <dd>{p.challenge}</dd>
                  </div>
                  <div>
                    <dt>What I learned</dt>
                    <dd>{p.learned}</dd>
                  </div>
                </dl>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
