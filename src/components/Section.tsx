import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";
import "./Section.css";

type SectionProps = {
  id: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
  as?: "section";
  labelledBy?: string;
};

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={`section ${className ?? ""}`} aria-labelledby={`${id}-title`}>
      <div className="section__inner">{children}</div>
    </section>
  );
}

/** Eyebrow label with a short accent rule — a repeated editorial detail. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow">
      <span className="eyebrow__rule" aria-hidden="true" />
      {children}
    </p>
  );
}

/** A block that fades/slides in when scrolled into view. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal--in" : ""} ${className ?? ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
