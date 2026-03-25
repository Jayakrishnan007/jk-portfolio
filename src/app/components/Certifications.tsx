import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { Award, GraduationCap } from "lucide-react";

const certifications = [
  "Mobile User Experience (UX) Design",
  "Affordances: Designing Intuitive User Interfaces",
  "UX Management: Strategy & Tactics",
  "Dynamic User Experience: Design & Usability",
  "Information Visualization",
];

export function Certifications() {
  const { ref, inView } = useInView();

  return (
    <section
      id="certifications"
      className="py-28"
      style={{ background: "#08080f" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16" ref={ref}>
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div
              className="inline-flex items-center gap-2 mb-6 text-xs uppercase tracking-widest"
              style={{ color: "#818cf8", fontFamily: "'Inter', sans-serif" }}
            >
              <span
                className="w-8 h-px"
                style={{ background: "linear-gradient(90deg, #818cf8, transparent)" }}
              />
              Certifications
            </div>
            <h2
              className="text-white mb-8"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                fontWeight: 700,
              }}
            >
              Professional Credentials
            </h2>

            <div className="flex flex-col gap-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4 p-4 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    className="mt-0.5 p-2 rounded-lg shrink-0"
                    style={{ background: "rgba(99,102,241,0.12)" }}
                  >
                    <Award size={14} style={{ color: "#818cf8" }} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.88rem",
                        color: "rgba(255,255,255,0.8)",
                        lineHeight: 1.5,
                      }}
                    >
                      {cert}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.75rem",
                        color: "rgba(255,255,255,0.3)",
                        marginTop: 2,
                      }}
                    >
                      Interaction Design Foundation
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              className="inline-flex items-center gap-2 mb-6 text-xs uppercase tracking-widest"
              style={{ color: "#818cf8", fontFamily: "'Inter', sans-serif" }}
            >
              <span
                className="w-8 h-px"
                style={{ background: "linear-gradient(90deg, #818cf8, transparent)" }}
              />
              Education
            </div>
            <h2
              className="text-white mb-8"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                fontWeight: 700,
              }}
            >
              Academic Background
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(139,92,246,0.06) 100%)",
                border: "1px solid rgba(99,102,241,0.2)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(99,102,241,0.15)" }}
              >
                <GraduationCap size={20} style={{ color: "#818cf8" }} />
              </div>
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "white",
                  marginBottom: 4,
                }}
              >
                Specialization in Multimedia &amp; Web Technology
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.85rem",
                  color: "#818cf8",
                  marginBottom: 6,
                }}
              >
                Luna Institute of Management Studies &amp; Web Technology
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.78rem",
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                2005 – 2008
              </p>
            </motion.div>

            {/* AI Tools highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl mt-4"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <p
                className="text-xs uppercase tracking-widest mb-3"
                style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Inter', sans-serif" }}
              >
                Current AI Design Stack
              </p>
              <div className="flex flex-wrap gap-3">
                {["Figma Make", "Claude", "Google Stitch"].map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 rounded-full text-sm"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1))",
                      border: "1px solid rgba(99,102,241,0.3)",
                      color: "#c084fc",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
