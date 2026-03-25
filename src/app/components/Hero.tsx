import { Mail, Phone, ExternalLink, ArrowDown } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  const handleScroll = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #08080f 0%, #0d0d1f 50%, #080814 100%)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(99,102,241,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border text-xs uppercase tracking-widest"
          style={{
            borderColor: "rgba(99,102,241,0.4)",
            background: "rgba(99,102,241,0.08)",
            color: "#a5b4fc",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "#818cf8" }}
          />
          Available for projects
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-white mb-4"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          Jayakrishnan
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #818cf8 0%, #c084fc 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Krishnakumar
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-10"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "rgba(255,255,255,0.5)",
            fontSize: "1.1rem",
            letterSpacing: "0.04em",
          }}
        >
          Senior UX/UI Designer &nbsp;·&nbsp; 14 Years Experience 
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          {[
            { value: "14+", label: "Years Experience" },
            { value: "8+", label: "Team Members Led" },
            { value: "40%", label: "Time-to-Edit Reduced" },
            { value: "35%", label: "Self-Service Increase" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "1.8rem",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #818cf8, #c084fc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
    
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={handleScroll}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
        style={{ color: "rgba(255,255,255,0.3)" }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
