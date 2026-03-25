import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "SalesTarget.ai",
    subtitle: "End-to-End Platform Transformation",
    tags: ["Sales Automation", "Bento Grid", "3D Icons", "UX Audit"],
    color: "from-violet-600/20 to-indigo-600/20",
    accent: "#818cf8",
    result: "30% improvement in task completion speed",
    link: "https://www.salestarget.ai",
    situation:
      "The existing platform faced high drop-off rates due to a complex interface and a lack of visual hierarchy in the sales automation dashboard.",
    task:
      "As the UX & Product Design Consultant, the goal was to simplify the user journey for sales teams and refresh the brand's visual language.",
    action: [
      "Performed a UX Audit and stakeholder interviews to map out friction points",
      "Designed a Bento Grid-based dashboard to organize high-density data into digestible modules",
      "Developed a library of custom 3D icons for different outreach channels (Email, LinkedIn, Phone)",
    ],
    resultDetail:
      "Achieved a 30% improvement in task completion speed for setting up automation sequences and a significant uptick in user retention.",
  },
  {
    title: "LeasePoint",
    subtitle: "Enterprise UX & Interface Strategy",
    tags: ["Aviation", "Data Ingestion", "Design System", "$100B Assets"],
    color: "from-blue-600/20 to-cyan-600/20",
    accent: "#67e8f9",
    result: "2 weeks per month saved in analyst processing time",
    situation:
      "LeasePoint is a global leader in aircraft and engine asset management, handling over $100 billion in assets. The challenge was error-prone manual data capture from fragmented sources.",
    task:
      "Redesign the data ingestion and reporting interface to transition the platform from a static data repository into a real-time intelligence dashboard.",
    action: [
      "Designed an automated utilization integration UI replacing manual entry with direct data flows",
      "Developed visual exception-reporting dashboards highlighting anomalies in airline-reported vs satellite data",
      "Crafted a modular Design System for Technical Asset Management and Maintenance Reserve modules",
      "Simplified complex contract setup and payment schedule workflows for mid-market and enterprise users",
    ],
    resultDetail:
      "Reduced analyst processing time by two weeks per month and significantly improved invoicing accuracy, directly impacting global cash flow operations.",
  },
  {
    title: "One Housing",
    subtitle: "Service Design & Resident Portals",
    tags: ["WCAG 2.1", "Service Design", "Admin Dashboard", "Self-Service"],
    color: "from-emerald-600/20 to-teal-600/20",
    accent: "#6ee7b7",
    result: "35% increase in digital self-service adoption",
    situation:
      "Residents and staff faced fragmented communication across housing services, care applications, and maintenance requests, leading to high call-center volumes.",
    task:
      "Streamline digital touchpoints for residents and care providers with a unified, accessible service design framework.",
    action: [
      "Conducted User Journey Mapping for diverse personas including elderly residents and care workers",
      "Designed an Accessibility-First Resident Portal (WCAG 2.1) for repairs, rent payments, and tenancy management",
      "Developed an Internal Admin Dashboard for housing officers to track cases in real-time",
      "Applied a Clean UI Language to reduce cognitive load for sensitive health and housing information",
    ],
    resultDetail:
      "Increased digital self-service adoption by 35% and significantly reduced administrative overhead by automating routine maintenance scheduling.",
  },
  {
    title: "CLEAR® Content Creation",
    subtitle: "Media ERP & AI Workflows",
    tags: ["AI-Assisted", "Media ERP", "Video Platform", "Broadcast"],
    color: "from-orange-600/20 to-rose-600/20",
    accent: "#fca5a5",
    result: "40% reduction in time-to-edit",
    situation:
      "Media houses faced significant bottlenecks in the content supply chain—managing massive volumes of raw footage, metadata tagging, and collaborative editing across global teams.",
    task:
      "Design a unified Content ERP interface to streamline production management and leverage AI for automated metadata tagging and content discovery.",
    action: [
      "AI-Assisted Logging: Designed interface for AI-driven video analysis auto-tagging scenes, faces, and objects",
      "Collaborative Review UI: Frame-accurate video player with real-time annotation tools for remote teams",
      "Workflow Orchestration: Visualized complex MAM flows from ingest to final broadcast delivery",
      "Creative Dashboard: High-fidelity dashboard for production managers tracking budgets and timelines",
    ],
    resultDetail:
      "Reduced time-to-edit by 40% through automated logging and improved global collaboration efficiency for major broadcast networks and streaming platforms.",
  },
];

function ProjectCard({ project, index, inView }: { project: typeof projects[0]; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="rounded-2xl overflow-hidden group"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Card header */}
      <div
        className={`p-6 bg-gradient-to-br ${project.color} relative`}
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="flex items-start justify-between">
          <div>
            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "white",
                marginBottom: 4,
              }}
            >
              {project.title}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex ml-2 opacity-50 hover:opacity-100 transition-opacity"
                  style={{ color: project.accent }}
                >
                  <ArrowUpRight size={16} />
                </a>
              )}
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.82rem",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full text-xs"
              style={{
                background: "rgba(0,0,0,0.25)",
                color: project.accent,
                fontFamily: "'Inter', sans-serif",
                border: `1px solid ${project.accent}30`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card body */}
      <div className="p-6">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Situation */}
          <div>
            <div
              className="text-xs uppercase tracking-widest mb-2"
              style={{ color: project.accent, fontFamily: "'Inter', sans-serif" }}
            >
              Situation
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.82rem",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.75,
              }}
            >
              {project.situation}
            </p>
          </div>

          {/* Actions */}
          <div>
            <div
              className="text-xs uppercase tracking-widest mb-2"
              style={{ color: project.accent, fontFamily: "'Inter', sans-serif" }}
            >
              Actions
            </div>
            <ul className="flex flex-col gap-2">
              {project.action.map((a, i) => (
                <li
                  key={i}
                  className="flex gap-2 items-start"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.82rem",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.6,
                  }}
                >
                  <span
                    className="mt-1.5 shrink-0 w-1 h-1 rounded-full"
                    style={{ background: project.accent }}
                  />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* Result */}
          <div>
            <div
              className="text-xs uppercase tracking-widest mb-2"
              style={{ color: project.accent, fontFamily: "'Inter', sans-serif" }}
            >
              Result
            </div>
            <div
              className="p-4 rounded-xl mb-3"
              style={{
                background: `${project.accent}10`,
                border: `1px solid ${project.accent}25`,
              }}
            >
              <p
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: project.accent,
                }}
              >
                {project.result}
              </p>
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.82rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.75,
              }}
            >
              {project.resultDetail}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const { ref, inView } = useInView(0.05);

  return (
    <section
      id="projects"
      className="py-28"
      style={{ background: "linear-gradient(180deg, #0a0a16 0%, #08080f 100%)" }}
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
            Projects
          </div>
          <h2
            className="text-white"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
            }}
          >
            Featured Case Studies
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
