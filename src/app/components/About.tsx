import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";

export function About() {
  const { ref, inView } = useInView();

  const highlights = [
    { label: "Fintech" },
    { label: "Aviation" },
    { label: "Housing" },
    { label: "ERP Systems" },
    { label: "Public Sector" },
    { label: "Media & Broadcast" },
  ];

  return (
    <section
      id="about"
      className="py-28"
      style={{ background: "#08080f" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Section label */}
          <div
            className="inline-flex items-center gap-2 mb-6 text-xs uppercase tracking-widest"
            style={{ color: "#818cf8", fontFamily: "'Inter', sans-serif" }}
          >
            <span
              className="w-8 h-px"
              style={{ background: "linear-gradient(90deg, #818cf8, transparent)" }}
            />
            About
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left – summary text */}
            <div>
              <h2
                className="text-white mb-6"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                Crafting experiences that people{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #818cf8 0%, #c084fc 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  actually love
                </span>
              </h2>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.85,
                  fontSize: "0.95rem",
                }}
              >
                Senior UX/UI Designer with <strong style={{ color: "rgba(255,255,255,0.8)" }}>14 years</strong> of end-to-end experience delivering enterprise-scale,
                user-centric, and accessibility-compliant digital products. Proven expertise in
                Figma-driven design workflows, design systems, ADA/WCAG accessibility standards,
                and close collaboration with engineering teams.
              </p>
              <p
                className="mt-4"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.85,
                  fontSize: "0.95rem",
                }}
              >
                Strong background in UX research, stakeholder management, and leading
                high-performing design teams across fintech, aviation, housing, ERP, and
                public-sector–aligned platforms. Adept at solving complex design challenges
                in agile, fast-paced environments.
              </p>
            </div>

            {/* Right – industry tags */}
            <div>
              <p
                className="mb-5 text-xs uppercase tracking-widest"
                style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Inter', sans-serif" }}
              >
                Industries worked in
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {highlights.map((h) => (
                  <span
                    key={h.label}
                    className="px-4 py-2 rounded-full text-sm"
                    style={{
                      background: "rgba(99,102,241,0.1)",
                      border: "1px solid rgba(99,102,241,0.25)",
                      color: "#a5b4fc",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {h.label}
                  </span>
                ))}
              </div>

              {/* Quick facts */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "14 yrs", label: "Total Experience" },
                  { value: "8", label: "Max Team Size Led" },
                  { value: "WCAG 2.1", label: "Accessibility Standard" },
                  { value: "Figma", label: "Primary Design Tool" },
                ].map((fact) => (
                  <div
                    key={fact.label}
                    className="p-4 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        color: "white",
                      }}
                    >
                      {fact.value}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.75rem",
                        color: "rgba(255,255,255,0.4)",
                        marginTop: 2,
                      }}
                    >
                      {fact.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
