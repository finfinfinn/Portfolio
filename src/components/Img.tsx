import { useState } from "react";
import "./Img.css";

type ImgProps = {
  src: string;
  alt: string;
  className?: string;
  /** Short label shown on the placeholder, e.g. "HERO PHOTO". */
  placeholderLabel: string;
  eager?: boolean;
};

/**
 * Image with a graceful, clearly-labelled placeholder.
 *
 * If the real photo at `src` is missing, instead of a broken-image icon we
 * render a styled placeholder that tells Samuel exactly which file to add and
 * where. Once the .jpg is dropped into /public at the given path, the photo
 * shows automatically with no code changes.
 */
export function Img({ src, alt, className, placeholderLabel, eager }: ImgProps) {
  const [failed, setFailed] = useState(false);

  // Resolve against Vite's base URL so paths work both locally ("/") and when
  // deployed under a sub-path on GitHub Pages ("/Portfolio/").
  const base = import.meta.env.BASE_URL;
  const resolvedSrc = `${base}${src.replace(/^\//, "")}`;

  if (failed) {
    return (
      <div
        className={`img-placeholder ${className ?? ""}`}
        role="img"
        aria-label={`Placeholder for ${alt}`}
      >
        <div className="img-placeholder__inner">
          <span className="img-placeholder__label">{placeholderLabel}</span>
          <span className="img-placeholder__hint">Add photo at</span>
          <code className="img-placeholder__path">public{src}</code>
        </div>
      </div>
    );
  }

  return (
    <img
      src={resolvedSrc}
      alt={alt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
