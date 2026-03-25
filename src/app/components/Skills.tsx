import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";

const skillGroups = [
  {
    category: "UX / UI Design",
    icon: "✦",
    skills: [
      "User Experience (UX)",
      "User Interface (UI)",
      "Enterprise Application Design",
      "Responsive Design",
      "Mobile-First Design",
      "Interaction Design",
      "Information Architecture",
      "UX Writing",
      "Design Systems",
      "Component Libraries",
    ],
  },
  {
    category: "Design Tools",
    icon: "◈",
    skills: [
      "Figma",
      "InVision",
      "Adobe XD",
      "Photoshop",
      "Illustrator",
      "Sketch",
    ],
  },
  {
    category: "AI Design Tools",
    icon: "◉",
    skills: ["Figma Make", "Claude", "Google Stitch"],
  },
  {
    category: "Accessibility & Compliance",
    icon: "⬡",
    skills: [
      "ADA Compliance",
      "WCAG 2.1",
      "Inclusive Design",
      "Accessibility Audits",
      "UK Accessibility Standards",
    ],
  },
  {
    category: "UX Research",
    icon: "◎",
    skills: [
      "User Research",
      "Usability Testing",
      "User Interviews",
      "Surveys",
      "Personas",
      "Journey Mapping",
      "Heuristic Evaluation",
    ],
  },
  {
    category: "Collaboration & Delivery",
    icon: "◐",
    skills: [
      "Agile / Scrum",
      "Design-to-Dev Handoff",
      "Front-End Collaboration",
      "Stakeholder Communication",
      "Requirements Analysis",
    ],
  },
  {
    category: "Leadership & Management",
    icon: "◆",
    skills: [
      "Team Leadership",
      "Mentoring",
      "Design Reviews",
      "Stakeholder Management",
      "Project Prioritization",
    ],
  },
];

export function Skills() {
  const { ref, inView } = useInView();

  return (
    <section
      id="skills"
      className="py-28"
      style={{ background: "linear-gradient(180deg, #08080f 0%, #0a0a16 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div
            className="inline-flex items-center gap-2 mb-6 text-xs uppercase tracking-widest"
            style={{ color: "#818cf8", fontFamily: "'Inter', sans-serif" }}
          >
            <span
              className="w-8 h-px"
              style={{ background: "linear-gradient(90deg, #818cf8, transparent)" }}
            />
            Skills
          </div>
          <h2
            className="text-white"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
            }}
          >
            Areas of Expertise
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.07 }}
              className="p-6 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  style={{
                    color: "#818cf8",
                    fontSize: "1.1rem",
                    fontFamily: "'Syne', sans-serif",
                  }}
                >
                  {group.icon}
                </span>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.9)",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs"
                    style={{
                      background: "rgba(99,102,241,0.08)",
                      border: "1px solid rgba(99,102,241,0.2)",
                      color: "rgba(165,180,252,0.85)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
