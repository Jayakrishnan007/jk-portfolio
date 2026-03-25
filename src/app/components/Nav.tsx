import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(8,8,16,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => handleClick("#hero")}
          className="font-syne text-white tracking-wider text-sm uppercase opacity-80 hover:opacity-100 transition-opacity"
          style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "0.12em" }}
        >
          Jayakrishnan Krishnakumar
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-sm text-white/60 hover:text-white transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: "rgba(8,8,16,0.97)" }}
        >
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-sm text-white/70 hover:text-white text-left transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
