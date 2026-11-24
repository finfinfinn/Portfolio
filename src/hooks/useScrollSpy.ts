import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently considered "active" based on
 * which section occupies the viewport. Used to highlight nav links.
 */
export function useScrollSpy(ids: string[], offset = 120): string {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const handler = () => {
      const scrollPos = window.scrollY + offset;
      let current = ids[0] ?? "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }
      // If we're near the bottom, select the last section.
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
        current = ids[ids.length - 1] ?? current;
      }
      setActiveId(current);
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, [ids, offset]);

  return activeId;
}
