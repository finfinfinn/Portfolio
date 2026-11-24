// src/components/Nav.tsx
import { useEffect as useEffect2, useState as useState2 } from "react";

// src/data/content.ts
var profile = {
  name: "Samuel Ong",
  fullName: "Samuel Ong Hong Yu",
  role: "Mechatronics Student  |  Aspiring IoT & Automation Engineer",
  tagline: ["BUILT TO ADAPT.", "DRIVEN TO IMPROVE."],
  heroIntro: "I enjoy understanding how systems work, building practical solutions and learning through challenges. I\u2019m constantly looking to improve \u2014 both technically and personally.",
  target: {
    role: "IoT & Automation Engineer Intern",
    company: "Innowave Tech",
    location: "Singapore"
  },
  contact: {
    email: "samfx5620@gmail.com",
    phone: "+65 8931 2561",
    linkedinLabel: "linkedin.com/in/samuelonghongyu",
    linkedinUrl: "https://www.linkedin.com/in/samuelonghongyu/"
  }
};
var nav = [
  { id: "about", label: "About" },
  { id: "foundation", label: "Foundation" },
  { id: "projects", label: "Projects" },
  { id: "approach", label: "Approach" },
  { id: "track", label: "Track & Field" },
  { id: "markets", label: "Markets" },
  { id: "innowave", label: "Why Innowave" },
  { id: "connect", label: "Connect" }
];
var about = {
  eyebrow: "ABOUT",
  heading: "A hands-on learner who likes to take things apart to understand them.",
  body: [
    "I\u2019m studying for a Diploma in Mechatronics at Temasek Polytechnic (since 2025). Most of what I enjoy about the course happens at the bench \u2014 wiring something up, watching how it behaves, and working out why it does what it does.",
    "I\u2019m curious about automation, robotics and the systems that connect sensors, logic and movement. I\u2019d rather understand a problem properly than rush past it, and I treat every setback as information about what to fix next."
  ],
  facts: [
    { label: "Study", value: "Diploma in Mechatronics" },
    { label: "Institution", value: "Temasek Polytechnic \xB7 2025\u2013present" },
    { label: "Focus", value: "IoT \xB7 Automation \xB7 Robotics" },
    { label: "Approach", value: "Hands-on & iterative" }
  ],
  modules: [
    "Control & Automation",
    "Robotics and Automation",
    "Computer Programming for Problem Solving",
    "Engineering Drawing",
    "Machining Technology"
  ],
  modulesLabel: "Relevant modules"
};
var capabilities = [
  {
    tag: "01",
    title: "Python",
    detail: "Basic programming, data processing and debugging \u2014 writing small scripts and working through errors to get the behaviour I expect."
  },
  {
    tag: "02",
    title: "Raspberry Pi Robotics",
    detail: "Robot movement and turning through motor control, working with onboard sensors and RGB lighting."
  },
  {
    tag: "03",
    title: "PLC & Pneumatics",
    detail: "Ladder logic in Omron Sysmac Studio to control pneumatic actuators as part of automation coursework."
  },
  {
    tag: "04",
    title: "Wiring & Troubleshooting",
    detail: "Practical exposure to pneumatic equipment and wiring, including investigating wiring issues when a system didn\u2019t behave as expected."
  },
  {
    tag: "05",
    title: "CAD",
    detail: "3D modelling in PTC Creo Parametric."
  },
  {
    tag: "06",
    title: "Engineering Fundamentals",
    detail: "Sensors, electronic components, wiring, and robotics / automation coursework."
  }
];
var projects = [
  {
    id: "rpi-robot",
    kicker: "RASPBERRY PI \xB7 ROBOTICS",
    title: "Mobile robot \u2014 movement & sensing",
    worked: "Programmed a Raspberry Pi robot to move and turn through motor control, and worked with its onboard sensors and RGB lighting.",
    challenge: "Getting movement and turning to respond the way I intended meant adjusting the motor control and checking how the sensors reported back.",
    learned: "How motor control, sensor input and simple logic come together to produce predictable physical behaviour.",
    illustration: "robot"
  },
  {
    id: "plc-pneumatics",
    kicker: "PLC \xB7 PNEUMATICS",
    title: "Pneumatic actuator control with ladder logic",
    worked: "Built ladder logic in Sysmac Studio to control pneumatic actuators.",
    challenge: "Translating a desired sequence of actuator actions into ladder logic that behaves reliably.",
    learned: "How control logic drives real actuators, and how to read a ladder program as a sequence of conditions and outputs.",
    illustration: "ladder"
  },
  {
    id: "troubleshooting",
    kicker: "PRACTICAL \xB7 TROUBLESHOOTING",
    title: "Investigating a pneumatic wiring issue",
    worked: "During a practical, a pneumatic setup didn\u2019t behave as expected, so I worked through the wiring to find the cause.",
    challenge: "Narrowing down where the fault was rather than guessing \u2014 checking connections methodically against what the system should be doing.",
    learned: "That careful, structured investigation usually beats trial and error, and that wiring faults are often found by following the signal step by step.",
    illustration: "wiring"
  },
  {
    id: "creo-cad",
    kicker: "CAD \xB7 PTC CREO",
    title: "3D modelling in Creo Parametric",
    worked: "Modelled parts in 3D using PTC Creo Parametric.",
    challenge: "Thinking through how a part is constructed so the model stays editable and reflects real geometry.",
    learned: "The basics of parametric modelling and how design intent is captured in a CAD model.",
    illustration: "cad"
  }
];
var projectsNote = "Diagrams on this page are original, conceptual illustrations drawn to explain the work \u2014 they are not photographs of the actual equipment.";
var approach = {
  eyebrow: "HOW I APPROACH CHALLENGES",
  heading: "OBSERVE \u2192 INVESTIGATE \u2192 TEST \u2192 IMPROVE",
  intro: "This isn\u2019t a formal methodology \u2014 it\u2019s simply how I tend to work through a problem at the bench. The pneumatic troubleshooting practical is a good example of it in action.",
  steps: [
    {
      n: "01",
      title: "Observe",
      body: "Notice what the system is actually doing versus what it should be doing."
    },
    {
      n: "02",
      title: "Investigate",
      body: "Work through the likely causes methodically \u2014 connections, logic, sensor input \u2014 instead of guessing."
    },
    {
      n: "03",
      title: "Test",
      body: "Make one change at a time and check whether the behaviour moves in the right direction."
    },
    {
      n: "04",
      title: "Improve",
      body: "Keep what works, learn from what didn\u2019t, and leave the system a little better understood than before."
    }
  ]
};
var track = {
  eyebrow: "BEYOND ENGINEERING \xB7 TRACK & FIELD",
  heading: "THE COMEBACK IS PART OF THE STORY.",
  body: [
    "Track & Field has taught me discipline, consistency and resilience. After a hamstring injury, returning to competition reminded me that progress is not always linear, and that persistence and patience matter.",
    "I\u2019ve stayed with the sport from secondary school through to Temasek Polytechnic, where I still train and compete, balancing it with my studies."
  ],
  teamHeading: "Leadership, as a former Vice-Captain",
  teamBody: "As Vice-Captain of my secondary school Track & Field team, I learned that leadership is mostly about responsibility and supporting the people around you \u2014 guiding and motivating teammates in training, backing up the captain in coordinating sessions, and working toward shared goals.",
  captionStart: "TRACK & FIELD \xB7 COMPETITION",
  highlights: [
    { label: "Then", value: "Vice-Captain \xB7 Secondary school" },
    { label: "Now", value: "Member \xB7 Temasek Polytechnic" },
    { label: "Lessons", value: "Discipline \xB7 Resilience \xB7 Teamwork" }
  ]
};
var markets = {
  eyebrow: "OUTSIDE ENGINEERING \xB7 INDEPENDENT INTEREST",
  heading: "A habit of thinking before deciding.",
  caption: "MARKETS \xB7 INDEPENDENT INTEREST",
  body: "Outside engineering, I have spent time learning about financial markets. It has encouraged me to analyse information, manage risk, stay disciplined, and make decisions under uncertainty \u2014 habits I also bring to technical problem-solving.",
  transfers: ["Analytical thinking", "Risk management", "Discipline", "Independent learning"]
};
var innowave = {
  eyebrow: "WHY INNOWAVE",
  heading: "Where my experience meets the role.",
  intro: "Innowave builds AI-driven solutions for semiconductor and advanced manufacturing. The IoT & Automation Engineer intern role is about installing and testing IoT devices and sensors, writing simple control logic and scripts, supporting data collection, and troubleshooting hardware under supervision. Here\u2019s what I already bring, and what I\u2019m keen to pick up on the job.",
  haveExposure: {
    title: "What I already bring",
    items: [
      "Basic Python programming, data processing and debugging",
      "PLC ladder logic to control pneumatic actuators (Omron Sysmac Studio)",
      "Raspberry Pi projects with motors, onboard sensors and RGB lighting",
      "Practical exposure to sensors, electronics and reading / tracing wiring",
      "Troubleshooting hardware and connectivity when a system misbehaves",
      "Willing to work on-site in production environments"
    ]
  },
  wantToLearn: {
    title: "What I\u2019m keen to learn under supervision",
    items: [
      "Installing and testing IoT devices and edge computers on equipment",
      "Communication protocols \u2014 RS232/RS485, Modbus, MQTT, TCP/UDP",
      "Industrial PLC platforms such as Siemens, Mitsubishi and Omron",
      "Basic Linux, and lab tools like the multimeter in a production setting",
      "Equipment data collection and checking data quality with a team"
    ]
  },
  closingLine: "I\u2019m honest about where my experience ends and where I want to grow. I\u2019d be joining to learn fast, contribute where I can, and follow the safety and cleanroom protocols the role calls for."
};
var awards = {
  eyebrow: "RECOGNITION & EXPERIENCE",
  items: [
    {
      title: "Half-Colours Award",
      org: "Temasek Polytechnic",
      year: "2026",
      note: "Recognition for achievement and service in a non-academic area."
    },
    {
      title: "EAGLES Award",
      org: "Changkat Changi Secondary School",
      year: "2023 & 2024",
      note: "For good conduct, leadership and service."
    },
    {
      title: "Stock Replenisher",
      org: "NTUC FairPrice",
      year: "2023",
      note: "Teamwork, communication and working to time in a busy setting."
    }
  ]
};
var closing = {
  eyebrow: "CLOSING",
  heading: ["BUILT TO ADAPT.", "DRIVEN TO IMPROVE."],
  body: "I\u2019m curious about how systems work, comfortable learning through challenges, and always looking for the next thing to improve. I\u2019d welcome the chance to bring that mindset to Innowave as an IoT & Automation Engineer intern.",
  cta: "Email me",
  ctaNote: "Happy to walk through any of this in the interview."
};

// src/hooks/useScrollSpy.ts
import { useEffect, useState } from "react";
function useScrollSpy(ids2, offset = 120) {
  const [activeId, setActiveId] = useState(ids2[0] ?? "");
  useEffect(() => {
    const handler = () => {
      const scrollPos = window.scrollY + offset;
      let current = ids2[0] ?? "";
      for (const id of ids2) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
        current = ids2[ids2.length - 1] ?? current;
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
  }, [ids2, offset]);
  return activeId;
}

// src/components/Nav.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var ids = nav.map((n) => n.id);
function Nav() {
  const active = useScrollSpy(ids);
  const [open, setOpen] = useState2(false);
  const [scrolled, setScrolled] = useState2(false);
  useEffect2(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect2(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const initials = profile.name.split(" ").map((p) => p[0]).join("");
  return /* @__PURE__ */ jsxs("header", { className: `nav ${scrolled ? "nav--scrolled" : ""}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "nav__inner", children: [
      /* @__PURE__ */ jsxs("a", { href: "#top", className: "nav__brand", "aria-label": `${profile.name} \u2014 back to top`, children: [
        /* @__PURE__ */ jsx("span", { className: "nav__mark", children: initials }),
        /* @__PURE__ */ jsx("span", { className: "nav__name", children: profile.name })
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "nav__links", "aria-label": "Section navigation", children: /* @__PURE__ */ jsx("ul", { children: nav.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        "a",
        {
          href: `#${item.id}`,
          className: active === item.id ? "is-active" : "",
          "aria-current": active === item.id ? "true" : void 0,
          children: item.label
        }
      ) }, item.id)) }) }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          className: "nav__toggle",
          "aria-expanded": open,
          "aria-controls": "mobile-menu",
          onClick: () => setOpen((v) => !v),
          children: [
            /* @__PURE__ */ jsx("span", { className: "nav__toggle-label", children: open ? "Close" : "Menu" }),
            /* @__PURE__ */ jsxs("span", { className: `nav__burger ${open ? "is-open" : ""}`, "aria-hidden": "true", children: [
              /* @__PURE__ */ jsx("span", {}),
              /* @__PURE__ */ jsx("span", {})
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        id: "mobile-menu",
        className: `nav__mobile ${open ? "nav__mobile--open" : ""}`,
        hidden: !open,
        children: /* @__PURE__ */ jsx("ul", { children: nav.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          "a",
          {
            href: `#${item.id}`,
            className: active === item.id ? "is-active" : "",
            onClick: () => setOpen(false),
            children: item.label
          }
        ) }, item.id)) })
      }
    )
  ] });
}

// src/components/Img.tsx
import { useState as useState3 } from "react";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function Img({ src, alt, className, placeholderLabel, eager }) {
  const [failed, setFailed] = useState3(false);
  const base = import.meta.env.BASE_URL;
  const resolvedSrc = `${base}${src.replace(/^\//, "")}`;
  if (failed) {
    return /* @__PURE__ */ jsx2(
      "div",
      {
        className: `img-placeholder ${className ?? ""}`,
        role: "img",
        "aria-label": `Placeholder for ${alt}`,
        children: /* @__PURE__ */ jsxs2("div", { className: "img-placeholder__inner", children: [
          /* @__PURE__ */ jsx2("span", { className: "img-placeholder__label", children: placeholderLabel }),
          /* @__PURE__ */ jsx2("span", { className: "img-placeholder__hint", children: "Add photo at" }),
          /* @__PURE__ */ jsxs2("code", { className: "img-placeholder__path", children: [
            "public",
            src
          ] })
        ] })
      }
    );
  }
  return /* @__PURE__ */ jsx2(
    "img",
    {
      src: resolvedSrc,
      alt,
      className,
      loading: eager ? "eager" : "lazy",
      decoding: "async",
      onError: () => setFailed(true)
    }
  );
}

// src/components/Hero.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function Hero() {
  return /* @__PURE__ */ jsxs3("section", { id: "top", className: "hero", "aria-label": "Introduction", children: [
    /* @__PURE__ */ jsxs3("div", { className: "hero__inner", children: [
      /* @__PURE__ */ jsxs3("div", { className: "hero__text", children: [
        /* @__PURE__ */ jsxs3("p", { className: "hero__kicker", children: [
          profile.name,
          " \xB7 Portfolio"
        ] }),
        /* @__PURE__ */ jsxs3("p", { className: "hero__role", children: [
          /* @__PURE__ */ jsx3("span", { className: "hero__dot", "aria-hidden": "true" }),
          profile.role
        ] }),
        /* @__PURE__ */ jsx3("h1", { className: "hero__title", children: profile.tagline.map((line, i) => /* @__PURE__ */ jsx3("span", { className: "hero__line", style: { animationDelay: `${0.1 + i * 0.12}s` }, children: line }, i)) }),
        /* @__PURE__ */ jsx3("p", { className: "hero__intro", children: profile.heroIntro }),
        /* @__PURE__ */ jsxs3("div", { className: "hero__ctas", children: [
          /* @__PURE__ */ jsx3("a", { href: "#projects", className: "btn btn--primary", children: "Explore my work" }),
          /* @__PURE__ */ jsx3("a", { href: "#contact", className: "btn btn--ghost", children: "Let\u2019s connect" })
        ] })
      ] }),
      /* @__PURE__ */ jsx3("div", { className: "hero__media", children: /* @__PURE__ */ jsx3("figure", { className: "hero__frame", children: /* @__PURE__ */ jsx3(
        Img,
        {
          src: "/images/me/hero-rooftop.jpg",
          alt: "Samuel Ong on a rooftop with a city skyline behind him",
          className: "hero__img",
          placeholderLabel: "Hero \xB7 Rooftop photo",
          eager: true
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsxs3("a", { href: "#about", className: "hero__scroll", "aria-label": "Scroll to About section", children: [
      /* @__PURE__ */ jsx3("span", { children: "Scroll" }),
      /* @__PURE__ */ jsx3("span", { className: "hero__scroll-line", "aria-hidden": "true" })
    ] })
  ] });
}

// src/hooks/useReveal.ts
import { useEffect as useEffect4, useRef, useState as useState5 } from "react";

// src/hooks/usePrefersReducedMotion.ts
import { useEffect as useEffect3, useState as useState4 } from "react";
function usePrefersReducedMotion() {
  const query = "(prefers-reduced-motion: reduce)";
  const [reduced, setReduced] = useState4(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia(query).matches;
  });
  useEffect3(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mql = window.matchMedia(query);
    const handler = (e) => setReduced(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);
  return reduced;
}

// src/hooks/useReveal.ts
function useReveal() {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();
  const [visible, setVisible] = useState5(reduced);
  useEffect4(() => {
    if (reduced) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced]);
  return { ref, visible };
}

// src/components/Section.tsx
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
function Section({ id, children, className }) {
  return /* @__PURE__ */ jsx4("section", { id, className: `section ${className ?? ""}`, "aria-labelledby": `${id}-title`, children: /* @__PURE__ */ jsx4("div", { className: "section__inner", children }) });
}
function Eyebrow({ children }) {
  return /* @__PURE__ */ jsxs4("p", { className: "eyebrow", children: [
    /* @__PURE__ */ jsx4("span", { className: "eyebrow__rule", "aria-hidden": "true" }),
    children
  ] });
}
function Reveal({
  children,
  delay = 0,
  className
}) {
  const { ref, visible } = useReveal();
  return /* @__PURE__ */ jsx4(
    "div",
    {
      ref,
      className: `reveal ${visible ? "reveal--in" : ""} ${className ?? ""}`,
      style: { transitionDelay: `${delay}ms` },
      children
    }
  );
}

// src/components/About.tsx
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
function About() {
  return /* @__PURE__ */ jsx5(Section, { id: "about", className: "about", children: /* @__PURE__ */ jsxs5("div", { className: "about__grid", children: [
    /* @__PURE__ */ jsx5("div", { className: "about__lead", children: /* @__PURE__ */ jsxs5(Reveal, { children: [
      /* @__PURE__ */ jsx5(Eyebrow, { children: about.eyebrow }),
      /* @__PURE__ */ jsx5("h2", { id: "about-title", className: "about__heading", children: about.heading })
    ] }) }),
    /* @__PURE__ */ jsxs5("div", { className: "about__body", children: [
      about.body.map((para, i) => /* @__PURE__ */ jsx5(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsx5("p", { className: "about__para", children: para }) }, i)),
      /* @__PURE__ */ jsx5(Reveal, { delay: 160, children: /* @__PURE__ */ jsx5("dl", { className: "about__facts", children: about.facts.map((f) => /* @__PURE__ */ jsxs5("div", { className: "about__fact", children: [
        /* @__PURE__ */ jsx5("dt", { children: f.label }),
        /* @__PURE__ */ jsx5("dd", { children: f.value })
      ] }, f.label)) }) }),
      /* @__PURE__ */ jsx5(Reveal, { delay: 200, children: /* @__PURE__ */ jsxs5("div", { className: "about__modules", children: [
        /* @__PURE__ */ jsx5("p", { className: "about__modules-label", children: about.modulesLabel }),
        /* @__PURE__ */ jsx5("ul", { className: "about__modules-list", children: about.modules.map((m) => /* @__PURE__ */ jsx5("li", { children: m }, m)) })
      ] }) })
    ] })
  ] }) });
}

// src/components/Foundation.tsx
import { jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
function Foundation() {
  return /* @__PURE__ */ jsxs6(Section, { id: "foundation", className: "foundation", children: [
    /* @__PURE__ */ jsxs6(Reveal, { children: [
      /* @__PURE__ */ jsx6(Eyebrow, { children: "TECHNICAL FOUNDATION" }),
      /* @__PURE__ */ jsx6("h2", { id: "foundation-title", className: "foundation__heading", children: "What I\u2019ve worked with so far" }),
      /* @__PURE__ */ jsx6("p", { className: "foundation__sub", children: "Hands-on exposure from my Mechatronics coursework \u2014 described honestly, at the level I\u2019ve actually practised." })
    ] }),
    /* @__PURE__ */ jsx6("div", { className: "foundation__grid", children: capabilities.map((cap, i) => /* @__PURE__ */ jsx6(Reveal, { delay: i % 3 * 70, className: "foundation__cell", children: /* @__PURE__ */ jsxs6("article", { className: "cap-card", children: [
      /* @__PURE__ */ jsx6("span", { className: "cap-card__tag", children: cap.tag }),
      /* @__PURE__ */ jsx6("h3", { className: "cap-card__title", children: cap.title }),
      /* @__PURE__ */ jsx6("p", { className: "cap-card__detail", children: cap.detail })
    ] }) }, cap.title)) })
  ] });
}

// src/components/Illustrations.tsx
import { jsx as jsx7, jsxs as jsxs7 } from "react/jsx-runtime";
var common = {
  width: "100%",
  height: "100%",
  viewBox: "0 0 320 200",
  role: "img",
  "aria-hidden": true,
  preserveAspectRatio: "xMidYMid meet"
};
var stroke = "var(--color-text-dim)";
var accent = "var(--color-accent)";
function RobotIllustration() {
  return /* @__PURE__ */ jsxs7("svg", { ...common, children: [
    /* @__PURE__ */ jsx7("rect", { x: "96", y: "70", width: "128", height: "62", rx: "10", fill: "none", stroke, strokeWidth: "2" }),
    /* @__PURE__ */ jsx7("circle", { cx: "116", cy: "146", r: "16", fill: "none", stroke, strokeWidth: "2" }),
    /* @__PURE__ */ jsx7("circle", { cx: "204", cy: "146", r: "16", fill: "none", stroke, strokeWidth: "2" }),
    /* @__PURE__ */ jsx7("circle", { cx: "116", cy: "146", r: "5", fill: accent }),
    /* @__PURE__ */ jsx7("circle", { cx: "204", cy: "146", r: "5", fill: accent }),
    /* @__PURE__ */ jsx7("line", { x1: "160", y1: "70", x2: "160", y2: "46", stroke, strokeWidth: "2" }),
    /* @__PURE__ */ jsx7("circle", { cx: "160", cy: "42", r: "7", fill: "none", stroke: accent, strokeWidth: "2" }),
    /* @__PURE__ */ jsx7("circle", { cx: "118", cy: "90", r: "4", fill: accent, opacity: "0.9" }),
    /* @__PURE__ */ jsx7("circle", { cx: "136", cy: "90", r: "4", fill: "var(--color-accent-soft)", opacity: "0.7" }),
    /* @__PURE__ */ jsx7("circle", { cx: "154", cy: "90", r: "4", fill: accent, opacity: "0.5" }),
    /* @__PURE__ */ jsx7("path", { d: "M232 100 q22 0 22 22", fill: "none", stroke: accent, strokeWidth: "2" }),
    /* @__PURE__ */ jsx7("path", { d: "M254 122 l-5 -6 M254 122 l6 -4", fill: "none", stroke: accent, strokeWidth: "2" }),
    /* @__PURE__ */ jsx7("path", { d: "M88 100 q-22 0 -22 22", fill: "none", stroke, strokeWidth: "2" })
  ] });
}
function LadderIllustration() {
  return /* @__PURE__ */ jsxs7("svg", { ...common, children: [
    /* @__PURE__ */ jsx7("line", { x1: "60", y1: "36", x2: "60", y2: "164", stroke, strokeWidth: "2" }),
    /* @__PURE__ */ jsx7("line", { x1: "260", y1: "36", x2: "260", y2: "164", stroke, strokeWidth: "2" }),
    /* @__PURE__ */ jsx7("line", { x1: "60", y1: "64", x2: "120", y2: "64", stroke, strokeWidth: "2" }),
    /* @__PURE__ */ jsx7("path", { d: "M120 56 v16 M136 56 v16", stroke: accent, strokeWidth: "2" }),
    /* @__PURE__ */ jsx7("line", { x1: "136", y1: "64", x2: "226", y2: "64", stroke, strokeWidth: "2" }),
    /* @__PURE__ */ jsx7("circle", { cx: "243", cy: "64", r: "13", fill: "none", stroke: accent, strokeWidth: "2" }),
    /* @__PURE__ */ jsx7("line", { x1: "60", y1: "104", x2: "120", y2: "104", stroke, strokeWidth: "2" }),
    /* @__PURE__ */ jsx7("path", { d: "M120 96 v16 M136 96 v16", stroke, strokeWidth: "2" }),
    /* @__PURE__ */ jsx7("line", { x1: "136", y1: "104", x2: "226", y2: "104", stroke, strokeWidth: "2" }),
    /* @__PURE__ */ jsx7("circle", { cx: "243", cy: "104", r: "13", fill: "none", stroke, strokeWidth: "2" }),
    /* @__PURE__ */ jsx7("line", { x1: "60", y1: "144", x2: "120", y2: "144", stroke, strokeWidth: "2" }),
    /* @__PURE__ */ jsx7("path", { d: "M120 136 v16 M136 136 v16", stroke, strokeWidth: "2" }),
    /* @__PURE__ */ jsx7("line", { x1: "136", y1: "144", x2: "226", y2: "144", stroke, strokeWidth: "2" }),
    /* @__PURE__ */ jsx7("circle", { cx: "243", cy: "144", r: "13", fill: "none", stroke, strokeWidth: "2" })
  ] });
}
function WiringIllustration() {
  return /* @__PURE__ */ jsxs7("svg", { ...common, children: [
    /* @__PURE__ */ jsx7("rect", { x: "40", y: "60", width: "40", height: "80", rx: "4", fill: "none", stroke, strokeWidth: "2" }),
    /* @__PURE__ */ jsx7("rect", { x: "240", y: "60", width: "40", height: "80", rx: "4", fill: "none", stroke, strokeWidth: "2" }),
    [78, 100, 122].map((y) => /* @__PURE__ */ jsxs7("g", { children: [
      /* @__PURE__ */ jsx7("circle", { cx: "80", cy: y, r: "4", fill: stroke }),
      /* @__PURE__ */ jsx7("circle", { cx: "240", cy: y, r: "4", fill: stroke })
    ] }, y)),
    /* @__PURE__ */ jsx7("path", { d: "M80 78 C 150 78, 170 78, 240 78", fill: "none", stroke, strokeWidth: "2" }),
    /* @__PURE__ */ jsx7("path", { d: "M80 122 C 150 122, 170 122, 240 122", fill: "none", stroke, strokeWidth: "2" }),
    /* @__PURE__ */ jsx7("path", { d: "M80 100 C 140 100, 150 100, 182 100", fill: "none", stroke: accent, strokeWidth: "2.5" }),
    /* @__PURE__ */ jsx7("path", { d: "M206 100 C 220 100, 230 100, 240 100", fill: "none", stroke: accent, strokeWidth: "2.5", strokeDasharray: "4 4" }),
    /* @__PURE__ */ jsx7("circle", { cx: "194", cy: "100", r: "16", fill: "none", stroke: accent, strokeWidth: "2" }),
    /* @__PURE__ */ jsx7("line", { x1: "205", y1: "111", x2: "218", y2: "124", stroke: accent, strokeWidth: "2.5" })
  ] });
}
function CadIllustration() {
  return /* @__PURE__ */ jsxs7("svg", { ...common, children: [
    /* @__PURE__ */ jsx7("polygon", { points: "120,70 180,50 240,70 180,90", fill: "none", stroke: accent, strokeWidth: "2" }),
    /* @__PURE__ */ jsx7("polygon", { points: "120,70 120,130 180,150 180,90", fill: "none", stroke, strokeWidth: "2" }),
    /* @__PURE__ */ jsx7("polygon", { points: "240,70 240,130 180,150 180,90", fill: "none", stroke, strokeWidth: "2" }),
    /* @__PURE__ */ jsx7("ellipse", { cx: "180", cy: "70", rx: "14", ry: "6", fill: "none", stroke, strokeWidth: "1.5" }),
    /* @__PURE__ */ jsx7("line", { x1: "120", y1: "166", x2: "240", y2: "166", stroke, strokeWidth: "1" }),
    /* @__PURE__ */ jsx7("path", { d: "M120 162 v8 M240 162 v8", stroke, strokeWidth: "1" }),
    /* @__PURE__ */ jsx7("circle", { cx: "180", cy: "166", r: "2", fill: accent })
  ] });
}
var map = {
  robot: RobotIllustration,
  ladder: LadderIllustration,
  wiring: WiringIllustration,
  cad: CadIllustration
};
function ProjectIllustration({ kind }) {
  const Cmp = map[kind];
  return /* @__PURE__ */ jsx7(Cmp, {});
}

// src/components/Projects.tsx
import { jsx as jsx8, jsxs as jsxs8 } from "react/jsx-runtime";
function Projects() {
  return /* @__PURE__ */ jsxs8(Section, { id: "projects", className: "projects", children: [
    /* @__PURE__ */ jsxs8(Reveal, { children: [
      /* @__PURE__ */ jsx8(Eyebrow, { children: "PROJECTS \xB7 HANDS-ON EXPERIENCE" }),
      /* @__PURE__ */ jsx8("h2", { id: "projects-title", className: "projects__heading", children: "Things I\u2019ve built and investigated" }),
      /* @__PURE__ */ jsx8("p", { className: "projects__note", children: projectsNote })
    ] }),
    /* @__PURE__ */ jsx8("div", { className: "projects__list", children: projects.map((p, i) => /* @__PURE__ */ jsx8(Reveal, { delay: i % 2 * 80, children: /* @__PURE__ */ jsxs8("article", { className: "project", children: [
      /* @__PURE__ */ jsxs8("div", { className: "project__visual", children: [
        /* @__PURE__ */ jsx8(ProjectIllustration, { kind: p.illustration }),
        /* @__PURE__ */ jsx8("span", { className: "project__visual-tag", children: "Conceptual illustration" })
      ] }),
      /* @__PURE__ */ jsxs8("div", { className: "project__body", children: [
        /* @__PURE__ */ jsx8("p", { className: "project__kicker", children: p.kicker }),
        /* @__PURE__ */ jsx8("h3", { className: "project__title", children: p.title }),
        /* @__PURE__ */ jsxs8("dl", { className: "project__steps", children: [
          /* @__PURE__ */ jsxs8("div", { children: [
            /* @__PURE__ */ jsx8("dt", { children: "What I worked on" }),
            /* @__PURE__ */ jsx8("dd", { children: p.worked })
          ] }),
          /* @__PURE__ */ jsxs8("div", { children: [
            /* @__PURE__ */ jsx8("dt", { children: "Challenge / investigation" }),
            /* @__PURE__ */ jsx8("dd", { children: p.challenge })
          ] }),
          /* @__PURE__ */ jsxs8("div", { children: [
            /* @__PURE__ */ jsx8("dt", { children: "What I learned" }),
            /* @__PURE__ */ jsx8("dd", { children: p.learned })
          ] })
        ] })
      ] })
    ] }) }, p.id)) })
  ] });
}

// src/components/Approach.tsx
import { jsx as jsx9, jsxs as jsxs9 } from "react/jsx-runtime";
function Approach() {
  return /* @__PURE__ */ jsxs9(Section, { id: "approach", className: "approach", children: [
    /* @__PURE__ */ jsxs9(Reveal, { children: [
      /* @__PURE__ */ jsx9(Eyebrow, { children: approach.eyebrow }),
      /* @__PURE__ */ jsx9("h2", { id: "approach-title", className: "approach__heading", children: approach.heading }),
      /* @__PURE__ */ jsx9("p", { className: "approach__intro", children: approach.intro })
    ] }),
    /* @__PURE__ */ jsx9("ol", { className: "approach__steps", children: approach.steps.map((step, i) => /* @__PURE__ */ jsx9(Reveal, { delay: i * 90, className: "approach__item-wrap", children: /* @__PURE__ */ jsxs9("li", { className: "approach__item", children: [
      /* @__PURE__ */ jsx9("span", { className: "approach__n", children: step.n }),
      /* @__PURE__ */ jsx9("h3", { className: "approach__title", children: step.title }),
      /* @__PURE__ */ jsx9("p", { className: "approach__body", children: step.body })
    ] }) }, step.n)) })
  ] });
}

// src/components/Track.tsx
import { jsx as jsx10, jsxs as jsxs10 } from "react/jsx-runtime";
function Track() {
  return /* @__PURE__ */ jsxs10(Section, { id: "track", className: "track", children: [
    /* @__PURE__ */ jsxs10(Reveal, { children: [
      /* @__PURE__ */ jsx10(Eyebrow, { children: track.eyebrow }),
      /* @__PURE__ */ jsx10("h2", { id: "track-title", className: "track__heading", children: track.heading })
    ] }),
    /* @__PURE__ */ jsx10(Reveal, { children: /* @__PURE__ */ jsxs10("figure", { className: "track__feature", children: [
      /* @__PURE__ */ jsx10(
        Img,
        {
          src: "/images/track/starting-line.jpg",
          alt: "Samuel Ong at the starting line of a Track & Field competition",
          placeholderLabel: "Track \xB7 Starting line"
        }
      ),
      /* @__PURE__ */ jsx10("div", { className: "track__feature-scrim", "aria-hidden": "true" }),
      /* @__PURE__ */ jsx10("figcaption", { className: "track__caption", children: track.captionStart })
    ] }) }),
    /* @__PURE__ */ jsxs10("div", { className: "track__grid", children: [
      /* @__PURE__ */ jsxs10(Reveal, { className: "track__story", children: [
        track.body.map((para, i) => /* @__PURE__ */ jsx10("p", { className: "track__para", children: para }, i)),
        /* @__PURE__ */ jsx10("ul", { className: "track__highlights", children: track.highlights.map((h) => /* @__PURE__ */ jsxs10("li", { children: [
          /* @__PURE__ */ jsx10("span", { className: "track__h-label", children: h.label }),
          /* @__PURE__ */ jsx10("span", { className: "track__h-value", children: h.value })
        ] }, h.label)) })
      ] }),
      /* @__PURE__ */ jsxs10(Reveal, { delay: 100, className: "track__team", children: [
        /* @__PURE__ */ jsx10("figure", { className: "track__team-figure", children: /* @__PURE__ */ jsx10(
          Img,
          {
            src: "/images/track/team.jpg",
            alt: "Samuel Ong with Track & Field teammates after an athletics event, wearing medals",
            placeholderLabel: "Track \xB7 Team photo"
          }
        ) }),
        /* @__PURE__ */ jsxs10("div", { className: "track__team-text", children: [
          /* @__PURE__ */ jsx10("h3", { className: "track__team-heading", children: track.teamHeading }),
          /* @__PURE__ */ jsx10("p", { className: "track__para", children: track.teamBody })
        ] })
      ] })
    ] })
  ] });
}

// src/components/Markets.tsx
import { jsx as jsx11, jsxs as jsxs11 } from "react/jsx-runtime";
function Markets() {
  return /* @__PURE__ */ jsx11(Section, { id: "markets", className: "markets", children: /* @__PURE__ */ jsxs11("div", { className: "markets__grid", children: [
    /* @__PURE__ */ jsxs11(Reveal, { className: "markets__text", children: [
      /* @__PURE__ */ jsx11(Eyebrow, { children: markets.eyebrow }),
      /* @__PURE__ */ jsx11("h2", { id: "markets-title", className: "markets__heading", children: markets.heading }),
      /* @__PURE__ */ jsx11("p", { className: "markets__body", children: markets.body }),
      /* @__PURE__ */ jsx11("ul", { className: "markets__tags", children: markets.transfers.map((t) => /* @__PURE__ */ jsx11("li", { children: t }, t)) })
    ] }),
    /* @__PURE__ */ jsx11(Reveal, { delay: 100, className: "markets__media", children: /* @__PURE__ */ jsxs11("figure", { className: "markets__figure", children: [
      /* @__PURE__ */ jsxs11("div", { className: "markets__shot", children: [
        /* @__PURE__ */ jsx11(
          Img,
          {
            src: "/images/interests/markets.jpg",
            alt: "A chart from Samuel Ong's time learning about financial markets, with monetary figures blurred",
            placeholderLabel: "Markets \xB7 Screenshot"
          }
        ),
        /* @__PURE__ */ jsx11(
          "span",
          {
            className: "markets__blur",
            "aria-hidden": "true",
            style: { backgroundImage: `url(${import.meta.env.BASE_URL}images/interests/markets.jpg)` }
          }
        )
      ] }),
      /* @__PURE__ */ jsx11("figcaption", { children: markets.caption })
    ] }) })
  ] }) });
}

// src/components/Innowave.tsx
import { jsx as jsx12, jsxs as jsxs12 } from "react/jsx-runtime";
function Innowave() {
  return /* @__PURE__ */ jsxs12(Section, { id: "innowave", className: "innowave", children: [
    /* @__PURE__ */ jsxs12(Reveal, { children: [
      /* @__PURE__ */ jsx12(Eyebrow, { children: innowave.eyebrow }),
      /* @__PURE__ */ jsx12("h2", { id: "innowave-title", className: "innowave__heading", children: innowave.heading }),
      /* @__PURE__ */ jsx12("p", { className: "innowave__intro", children: innowave.intro })
    ] }),
    /* @__PURE__ */ jsxs12("div", { className: "innowave__cols", children: [
      /* @__PURE__ */ jsx12(Reveal, { className: "innowave__col", children: /* @__PURE__ */ jsxs12("div", { className: "innowave__panel innowave__panel--have", children: [
        /* @__PURE__ */ jsxs12("h3", { className: "innowave__col-title", children: [
          /* @__PURE__ */ jsx12("span", { className: "innowave__badge", children: "Have exposure" }),
          innowave.haveExposure.title
        ] }),
        /* @__PURE__ */ jsx12("ul", { className: "innowave__list", children: innowave.haveExposure.items.map((item) => /* @__PURE__ */ jsx12("li", { children: item }, item)) })
      ] }) }),
      /* @__PURE__ */ jsx12(Reveal, { delay: 100, className: "innowave__col", children: /* @__PURE__ */ jsxs12("div", { className: "innowave__panel innowave__panel--learn", children: [
        /* @__PURE__ */ jsxs12("h3", { className: "innowave__col-title", children: [
          /* @__PURE__ */ jsx12("span", { className: "innowave__badge innowave__badge--learn", children: "Want to learn" }),
          innowave.wantToLearn.title
        ] }),
        /* @__PURE__ */ jsx12("ul", { className: "innowave__list innowave__list--learn", children: innowave.wantToLearn.items.map((item) => /* @__PURE__ */ jsx12("li", { children: item }, item)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx12(Reveal, { delay: 120, children: /* @__PURE__ */ jsx12("p", { className: "innowave__closing", children: innowave.closingLine }) })
  ] });
}

// src/components/Closing.tsx
import { jsx as jsx13, jsxs as jsxs13 } from "react/jsx-runtime";
function Closing() {
  const { contact } = profile;
  return /* @__PURE__ */ jsxs13(Section, { id: "connect", className: "closing", children: [
    /* @__PURE__ */ jsx13(Reveal, { children: /* @__PURE__ */ jsxs13("div", { className: "closing__awards", children: [
      /* @__PURE__ */ jsx13("p", { className: "closing__awards-eyebrow", children: awards.eyebrow }),
      /* @__PURE__ */ jsx13("ul", { className: "closing__awards-list", children: awards.items.map((a) => /* @__PURE__ */ jsxs13("li", { className: "closing__award", children: [
        /* @__PURE__ */ jsx13("span", { className: "closing__award-year", children: a.year }),
        /* @__PURE__ */ jsx13("span", { className: "closing__award-title", children: a.title }),
        /* @__PURE__ */ jsx13("span", { className: "closing__award-org", children: a.org }),
        /* @__PURE__ */ jsx13("span", { className: "closing__award-note", children: a.note })
      ] }, a.title)) })
    ] }) }),
    /* @__PURE__ */ jsxs13(Reveal, { delay: 80, children: [
      /* @__PURE__ */ jsx13("div", { id: "contact", className: "closing__anchor", "aria-hidden": "true" }),
      /* @__PURE__ */ jsx13("p", { className: "closing__eyebrow", children: closing.eyebrow }),
      /* @__PURE__ */ jsx13("h2", { id: "connect-title", className: "closing__heading", children: closing.heading.map((line, i) => /* @__PURE__ */ jsx13("span", { className: i === closing.heading.length - 1 ? "closing__accent" : "", children: line }, i)) }),
      /* @__PURE__ */ jsx13("p", { className: "closing__body", children: closing.body }),
      /* @__PURE__ */ jsxs13("div", { className: "closing__cta", children: [
        /* @__PURE__ */ jsx13("a", { href: `mailto:${contact.email}`, className: "btn btn--primary", children: closing.cta }),
        /* @__PURE__ */ jsx13("span", { className: "closing__cta-note", children: closing.ctaNote })
      ] }),
      /* @__PURE__ */ jsxs13("ul", { className: "closing__contacts", children: [
        /* @__PURE__ */ jsxs13("li", { children: [
          /* @__PURE__ */ jsx13("span", { className: "closing__contact-label", children: "Email" }),
          /* @__PURE__ */ jsx13("a", { href: `mailto:${contact.email}`, children: contact.email })
        ] }),
        /* @__PURE__ */ jsxs13("li", { children: [
          /* @__PURE__ */ jsx13("span", { className: "closing__contact-label", children: "Phone" }),
          /* @__PURE__ */ jsx13("a", { href: `tel:${contact.phone.replace(/\s+/g, "")}`, children: contact.phone })
        ] }),
        /* @__PURE__ */ jsxs13("li", { children: [
          /* @__PURE__ */ jsx13("span", { className: "closing__contact-label", children: "LinkedIn" }),
          /* @__PURE__ */ jsx13("a", { href: contact.linkedinUrl, target: "_blank", rel: "noreferrer", children: contact.linkedinLabel })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs13("footer", { className: "closing__footer", children: [
      /* @__PURE__ */ jsx13("span", { children: profile.fullName }),
      /* @__PURE__ */ jsxs13("span", { className: "closing__footer-role", children: [
        profile.target.role,
        " \xB7 ",
        profile.target.company,
        ", ",
        profile.target.location
      ] })
    ] })
  ] });
}

// src/App.tsx
import { Fragment, jsx as jsx14, jsxs as jsxs14 } from "react/jsx-runtime";
function App() {
  return /* @__PURE__ */ jsxs14(Fragment, { children: [
    /* @__PURE__ */ jsx14("a", { href: "#about", className: "skip-link", children: "Skip to content" }),
    /* @__PURE__ */ jsx14(Nav, {}),
    /* @__PURE__ */ jsxs14("main", { id: "main", children: [
      /* @__PURE__ */ jsx14(Hero, {}),
      /* @__PURE__ */ jsx14(About, {}),
      /* @__PURE__ */ jsx14(Foundation, {}),
      /* @__PURE__ */ jsx14(Projects, {}),
      /* @__PURE__ */ jsx14(Approach, {}),
      /* @__PURE__ */ jsx14(Track, {}),
      /* @__PURE__ */ jsx14(Markets, {}),
      /* @__PURE__ */ jsx14(Innowave, {}),
      /* @__PURE__ */ jsx14(Closing, {})
    ] })
  ] });
}
var App_default = App;
export {
  App_default as default
};
