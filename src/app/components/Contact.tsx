import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { Mail, Phone, ExternalLink } from "lucide-react";

export function Contact() {
  const { ref, inView } = useInView();

  return (
    <section
      id="contact"
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #08080f 0%, #0d0d1f 100%)" }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 80%, rgba(99,102,241,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div
            className="inline-flex items-center gap-2 mb-6 text-xs uppercase tracking-widest"
            style={{ color: "#818cf8", fontFamily: "'Inter', sans-serif" }}
          >
            <span
              className="w-8 h-px"
              style={{ background: "linear-gradient(90deg, #818cf8, transparent)" }}
            />
            Get In Touch
            <span
              className="w-8 h-px"
              style={{ background: "linear-gradient(270deg, #818cf8, transparent)" }}
            />
          </div>

          <h2
            className="text-white mb-4"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            Let's Build Something{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #818cf8 0%, #c084fc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Remarkable
            </span>
          </h2>

          <p
            className="mb-12"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.8,
              fontSize: "1rem",
            }}
          >
            Open to consulting projects, enterprise design roles, and collaborations.
            Whether it's a design system overhaul or a brand-new product, let's talk.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:jegu.jk@gmail.com"
              className="flex items-center gap-3 px-7 py-4 rounded-full text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                fontFamily: "'Inter', sans-serif",
                boxShadow: "0 8px 32px rgba(99,102,241,0.3)",
              }}
            >
              <Mail size={16} />
              Email Me
            </a>

           
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div
        className="mt-20 pt-8 text-center"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.2)",
          }}
        >
          © 2025 Jayakrishnan Krishnakumar · Senior UX/UI Designer | Build With Claude
        </p>
      </div>
    </section>
  );
}
