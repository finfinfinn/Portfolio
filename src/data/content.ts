/**
 * Single source of truth for all portfolio copy.
 * Content is grounded in the portfolio brief / resume facts for Samuel Ong.
 * Keep claims accurate: do NOT add skills, outcomes, or details that are not
 * supported by the source documents.
 */

export const profile = {
  name: "Samuel Ong",
  fullName: "Samuel Ong Hong Yu",
  role: "Mechatronics Student  |  Aspiring IoT & Automation Engineer",
  tagline: ["BUILT TO ADAPT.", "DRIVEN TO IMPROVE."],
  heroIntro:
    "I enjoy understanding how systems work, building practical solutions and learning through challenges. I’m constantly looking to improve — both technically and personally.",
  target: {
    role: "IoT & Automation Engineer Intern",
    company: "Innowave Tech",
    location: "Singapore",
  },
  contact: {
    email: "samfx5620@gmail.com",
    phone: "+65 8931 2561",
    linkedinLabel: "linkedin.com/in/samuelonghongyu",
    linkedinUrl: "https://www.linkedin.com/in/samuelonghongyu/",
  },
};

export const nav = [
  { id: "about", label: "About" },
  { id: "foundation", label: "Foundation" },
  { id: "projects", label: "Projects" },
  { id: "approach", label: "Approach" },
  { id: "track", label: "Track & Field" },
  { id: "markets", label: "Markets" },
  { id: "innowave", label: "Why Innowave" },
  { id: "connect", label: "Connect" },
];

export const about = {
  eyebrow: "ABOUT",
  heading: "A hands-on learner who likes to take things apart to understand them.",
  body: [
    "I’m studying for a Diploma in Mechatronics at Temasek Polytechnic (since 2025). Most of what I enjoy about the course happens at the bench — wiring something up, watching how it behaves, and working out why it does what it does.",
    "I’m curious about automation, robotics and the systems that connect sensors, logic and movement. I’d rather understand a problem properly than rush past it, and I treat every setback as information about what to fix next.",
  ],
  facts: [
    { label: "Study", value: "Diploma in Mechatronics" },
    { label: "Institution", value: "Temasek Polytechnic · 2025–present" },
    { label: "Focus", value: "IoT · Automation · Robotics" },
    { label: "Approach", value: "Hands-on & iterative" },
  ],
  modules: [
    "Control & Automation",
    "Robotics and Automation",
    "Computer Programming for Problem Solving",
    "Engineering Drawing",
    "Machining Technology",
  ],
  modulesLabel: "Relevant modules",
};

export type Capability = {
  tag: string;
  title: string;
  detail: string;
};

export const capabilities: Capability[] = [
  {
    tag: "01",
    title: "Python",
    detail:
      "Basic programming, data processing and debugging — writing small scripts and working through errors to get the behaviour I expect.",
  },
  {
    tag: "02",
    title: "Raspberry Pi Robotics",
    detail:
      "Robot movement and turning through motor control, working with onboard sensors and RGB lighting.",
  },
  {
    tag: "03",
    title: "PLC & Pneumatics",
    detail:
      "Ladder logic in Omron Sysmac Studio to control pneumatic actuators as part of automation coursework.",
  },
  {
    tag: "04",
    title: "Wiring & Troubleshooting",
    detail:
      "Practical exposure to pneumatic equipment and wiring, including investigating wiring issues when a system didn’t behave as expected.",
  },
  {
    tag: "05",
    title: "CAD",
    detail: "3D modelling in PTC Creo Parametric.",
  },
  {
    tag: "06",
    title: "Engineering Fundamentals",
    detail:
      "Sensors, electronic components, wiring, and robotics / automation coursework.",
  },
];

export type Project = {
  id: string;
  kicker: string;
  title: string;
  worked: string;
  challenge: string;
  learned: string;
  illustration: "robot" | "ladder" | "wiring" | "cad";
  note?: string;
};

export const projects: Project[] = [
  {
    id: "rpi-robot",
    kicker: "RASPBERRY PI · ROBOTICS",
    title: "Mobile robot — movement & sensing",
    worked:
      "Programmed a Raspberry Pi robot to move and turn through motor control, and worked with its onboard sensors and RGB lighting.",
    challenge:
      "Getting movement and turning to respond the way I intended meant adjusting the motor control and checking how the sensors reported back.",
    learned:
      "How motor control, sensor input and simple logic come together to produce predictable physical behaviour.",
    illustration: "robot",
  },
  {
    id: "plc-pneumatics",
    kicker: "PLC · PNEUMATICS",
    title: "Pneumatic actuator control with ladder logic",
    worked:
      "Built ladder logic in Sysmac Studio to control pneumatic actuators.",
    challenge:
      "Translating a desired sequence of actuator actions into ladder logic that behaves reliably.",
    learned:
      "How control logic drives real actuators, and how to read a ladder program as a sequence of conditions and outputs.",
    illustration: "ladder",
  },
  {
    id: "troubleshooting",
    kicker: "PRACTICAL · TROUBLESHOOTING",
    title: "Investigating a pneumatic wiring issue",
    worked:
      "During a practical, a pneumatic setup didn’t behave as expected, so I worked through the wiring to find the cause.",
    challenge:
      "Narrowing down where the fault was rather than guessing — checking connections methodically against what the system should be doing.",
    learned:
      "That careful, structured investigation usually beats trial and error, and that wiring faults are often found by following the signal step by step.",
    illustration: "wiring",
  },
  {
    id: "creo-cad",
    kicker: "CAD · PTC CREO",
    title: "3D modelling in Creo Parametric",
    worked: "Modelled parts in 3D using PTC Creo Parametric.",
    challenge:
      "Thinking through how a part is constructed so the model stays editable and reflects real geometry.",
    learned:
      "The basics of parametric modelling and how design intent is captured in a CAD model.",
    illustration: "cad",
  },
];

export const projectsNote =
  "Diagrams on this page are original, conceptual illustrations drawn to explain the work — they are not photographs of the actual equipment.";

export const approach = {
  eyebrow: "HOW I APPROACH CHALLENGES",
  heading: "OBSERVE → INVESTIGATE → TEST → IMPROVE",
  intro:
    "This isn’t a formal methodology — it’s simply how I tend to work through a problem at the bench. The pneumatic troubleshooting practical is a good example of it in action.",
  steps: [
    {
      n: "01",
      title: "Observe",
      body: "Notice what the system is actually doing versus what it should be doing.",
    },
    {
      n: "02",
      title: "Investigate",
      body: "Work through the likely causes methodically — connections, logic, sensor input — instead of guessing.",
    },
    {
      n: "03",
      title: "Test",
      body: "Make one change at a time and check whether the behaviour moves in the right direction.",
    },
    {
      n: "04",
      title: "Improve",
      body: "Keep what works, learn from what didn’t, and leave the system a little better understood than before.",
    },
  ],
};

export const track = {
  eyebrow: "BEYOND ENGINEERING · TRACK & FIELD",
  heading: "THE COMEBACK IS PART OF THE STORY.",
  body: [
    "Track & Field has taught me discipline, consistency and resilience. After a hamstring injury, returning to competition reminded me that progress is not always linear — and that persistence and patience matter.",
    "I’ve stayed with the sport from secondary school through to Temasek Polytechnic, where I still train and compete, balancing it with my studies.",
  ],
  teamHeading: "Leadership, as a former Vice-Captain",
  teamBody:
    "As Vice-Captain of my secondary school Track & Field team, I learned that leadership is mostly about responsibility and supporting the people around you — guiding and motivating teammates in training, backing up the captain in coordinating sessions, and working toward shared goals.",
  captionStart: "TRACK & FIELD · COMPETITION",
  highlights: [
    { label: "Then", value: "Vice-Captain · Secondary school" },
    { label: "Now", value: "Member · Temasek Polytechnic" },
    { label: "Lessons", value: "Discipline · Resilience · Teamwork" },
  ],
};

export const markets = {
  eyebrow: "OUTSIDE ENGINEERING · INDEPENDENT INTEREST",
  heading: "A habit of thinking before deciding.",
  caption: "MARKETS · INDEPENDENT INTEREST",
  body:
    "Outside engineering, I have spent time learning about financial markets. It has encouraged me to analyse information, manage risk, stay disciplined, and make decisions under uncertainty — habits I also bring to technical problem-solving.",
  transfers: ["Analytical thinking", "Risk management", "Discipline", "Independent learning"],
};

export const innowave = {
  eyebrow: "WHY INNOWAVE",
  heading: "Where my experience meets the role.",
  intro:
    "Innowave builds AI-driven solutions for semiconductor and advanced manufacturing. The IoT & Automation Engineer intern role is about installing and testing IoT devices and sensors, writing simple control logic and scripts, supporting data collection, and troubleshooting hardware under supervision. Here’s what I already bring, and what I’m keen to pick up on the job.",
  haveExposure: {
    title: "What I already bring",
    items: [
      "Basic Python programming, data processing and debugging",
      "PLC ladder logic to control pneumatic actuators (Omron Sysmac Studio)",
      "Raspberry Pi projects with motors, onboard sensors and RGB lighting",
      "Practical exposure to sensors, electronics and reading / tracing wiring",
      "Troubleshooting hardware and connectivity when a system misbehaves",
      "Willing to work on-site in production environments",
    ],
  },
  wantToLearn: {
    title: "What I’m keen to learn under supervision",
    items: [
      "Installing and testing IoT devices and edge computers on equipment",
      "Communication protocols — RS232/RS485, Modbus, MQTT, TCP/UDP",
      "Industrial PLC platforms such as Siemens, Mitsubishi and Omron",
      "Basic Linux, and lab tools like the multimeter in a production setting",
      "Equipment data collection and checking data quality with a team",
    ],
  },
  closingLine:
    "I’m honest about where my experience ends and where I want to grow. I’d be joining to learn fast, contribute where I can, and follow the safety and cleanroom protocols the role calls for.",
};

export const awards = {
  eyebrow: "RECOGNITION & EXPERIENCE",
  items: [
    {
      title: "Half-Colours Award",
      org: "Temasek Polytechnic",
      year: "2026",
      note: "Recognition for achievement and service in a non-academic area.",
    },
    {
      title: "EAGLES Award",
      org: "Changkat Changi Secondary School",
      year: "2023 & 2024",
      note: "For good conduct, leadership and service.",
    },
    {
      title: "Stock Replenisher",
      org: "NTUC FairPrice",
      year: "2023",
      note: "Teamwork, communication and working to time in a busy setting.",
    },
  ],
};

export const closing = {
  eyebrow: "CLOSING",
  heading: ["BUILT TO ADAPT.", "DRIVEN TO IMPROVE."],
  body:
    "I’m curious about how systems work, comfortable learning through challenges, and always looking for the next thing to improve. I’d welcome the chance to bring that mindset to Innowave as an IoT & Automation Engineer intern.",
  cta: "Email me",
  ctaNote: "Happy to walk through any of this in the interview.",
};
