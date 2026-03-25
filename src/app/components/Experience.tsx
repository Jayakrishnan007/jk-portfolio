import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";

const experiences = [
  {
    role: "UI/UX Consultant",
    company: "Independent",
    period: "Aug 2024 – Present",
    tag: "Current",
    bullets: [
      "Providing UX/UI consulting for enterprise and product-driven platforms",
      "Creating scalable design systems and high-fidelity prototypes using Figma",
      "Collaborating closely with development teams to ensure accurate design implementation",
      "Driving accessibility-first design approaches aligned with ADA standards",
    ],
  },
  {
    role: "UX Manager",
    company: "Capita",
    period: "Aug 2022 – Aug 2024",
    bullets: [
      "Led a team of 8 UX/UI designers on the Leasepoint Airlines Leasing enterprise product",
      "Owned end-to-end UX strategy, design execution, and delivery",
      "Conducted extensive user research, usability testing, and stakeholder workshops",
      "Ensured ADA and accessibility compliance across enterprise and regulatory expectations",
      "Partnered with product owners, engineers, and business teams in an agile environment",
      "Improved internal and external stakeholder satisfaction through measurable UX improvements",
    ],
  },
  {
    role: "Associate UX Architect",
    company: "Capita",
    period: "May 2022 – Jul 2022",
    bullets: [
      "Analyzed and modernized a legacy Windows-based enterprise application",
      "Defined information architecture, UX writing standards, and design systems",
      "Worked closely with BAs and engineering teams to translate complex requirements into intuitive UI",
      "Supported accessibility and usability improvements for large-scale enterprise users",
    ],
  },
  {
    role: "Technical Lead (UI/UX)",
    company: "Capita",
    period: "Sep 2019 – Apr 2022",
    bullets: [
      "Led UX/UI design for the One Housing enterprise product",
      "Managed a team of 6 designers, overseeing quality and consistency",
      "Ensured designs adhered to UK accessibility and compliance standards",
      "Collaborated with front-end developers for seamless design-to-code execution",
      "Delivered user-focused solutions under tight timelines in agile sprints",
    ],
  },
  {
    role: "UI/UX Lead",
    company: "Prime Focus Technologies",
    period: "Nov 2018 – Aug 2019",
    bullets: [
      "Led UX/UI efforts for the Clear ERP enterprise platform",
      "Designed intuitive, scalable interfaces using Figma and prototyping tools",
      "Conducted usability testing, surveys, and user interviews",
      "Solved complex enterprise workflows with simplified UX solutions",
    ],
  },
  {
    role: "Systems Specialist (UI/UX Lead)",
    company: "Aricent Technologies",
    period: "Jul 2016 – Oct 2018",
    bullets: [
      "Designed and implemented the Aricent Intranet Portal design system",
      "Conducted internal user research and usability studies",
      "Worked with leadership and cross-functional stakeholders to define requirements",
      "Created structured, scalable design frameworks for enterprise usage",
    ],
  },
  {
    role: "UI/UX Lead",
    company: "Softway",
    period: "Jul 2013 – Jun 2016",
    bullets: [
      "Led a 15-member design team delivering UX for CMS-based enterprise websites",
      "Platforms: WordPress, Joomla, Drupal, Sitefinity",
      "Worked directly with global clients and technical teams",
      "Clients: Goodman Manufacturing, Baker Hughes, ExxonMobil, Samsung, Rice University",
    ],
  },
  {
    role: "Senior UI Designer",
    company: "Emart Solutions India",
    period: "Nov 2012 – May 2013",
    bullets: [
      "Designed UI/UX for microsites and digital platforms",
      "Created wireframes, prototypes, and visual designs",
      "Supported UX research and design documentation",
    ],
  },
  {
    role: "Senior UI Designer",
    company: "Colossal Software Technologies",
    period: "Sep 2011 – Oct 2012",
    bullets: [
      "Designed business websites, mobile apps, and marketing collateral",
      "Collaborated with stakeholders to align design with business goals",
    ],
  },
  {
    role: "Graphic Designer",
    company: "MacMillan Publishing Solutions",
    period: "Feb 2010 – Sep 2011",
    bullets: [
      "Designed web ads, WordPress themes, and digital creatives",
      "Created Flash animations and Yellow Pages ads for US clients",
    ],
  },
];

export function Experience() {
  const { ref, inView } = useInView(0.05);

  return (
    <section
      id="experience"
      className="py-28"
      style={{ background: "#08080f" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
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
            Experience
          </div>
          <h2
            className="text-white"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
            }}
          >
            14 Years of Impact
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-0 md:left-[200px] top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(180deg, rgba(99,102,241,0.5) 0%, rgba(99,102,241,0.1) 100%)",
            }}
          />

          <div className="flex flex-col gap-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.role}-${exp.company}`}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative flex flex-col md:flex-row gap-6 pb-12"
              >
                {/* Dot */}
                <div
                  className="absolute left-[-4px] md:left-[196px] w-2 h-2 rounded-full mt-1.5"
                  style={{
                    background: i === 0 ? "#818cf8" : "rgba(99,102,241,0.4)",
                    boxShadow: i === 0 ? "0 0 10px rgba(129,140,248,0.8)" : "none",
                  }}
                />

                {/* Date – left side on desktop */}
                <div
                  className="md:w-[185px] md:text-right shrink-0 pl-6 md:pl-0"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.35)",
                    paddingTop: 3,
                    letterSpacing: "0.03em",
                  }}
                >
                  <div>{exp.period}</div>
                  {exp.tag && (
                    <span
                      className="inline-block mt-1 px-2 py-0.5 rounded-full text-xs"
                      style={{
                        background: "rgba(99,102,241,0.15)",
                        color: "#a5b4fc",
                        border: "1px solid rgba(99,102,241,0.3)",
                      }}
                    >
                      {exp.tag}
                    </span>
                  )}
                </div>

                {/* Content – right side */}
                <div
                  className="pl-6 md:pl-10 flex-1 pb-2 group"
                  style={{
                    borderLeft: "none",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.92)",
                      marginBottom: 2,
                    }}
                  >
                    {exp.role}
                  </h3>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.82rem",
                      color: "#818cf8",
                      marginBottom: 10,
                    }}
                  >
                    {exp.company}
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {exp.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex gap-3 items-start"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.85rem",
                          color: "rgba(255,255,255,0.48)",
                          lineHeight: 1.7,
                        }}
                      >
                        <span
                          className="mt-2 shrink-0 w-1 h-1 rounded-full"
                          style={{ background: "rgba(99,102,241,0.5)" }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
