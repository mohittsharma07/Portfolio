import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-8 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}

        <a href="#home" className="text-4xl font-extrabold tracking-tight">
          <span className="text-white">Mohit</span>
          <span className="text-blue-400">Sharma</span>
        </a>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-slate-300 font-medium hover:text-white transition-all duration-300 group"
            >
              {item.name}

              <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Resume Button */}

        <a
          href="/mohitt-resume.pdf"
          download="Mohit-Sharma-Resume.pdf"
          className="hidden lg:inline-flex px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg shadow-blue-500/30 hover:scale-105 transition-all duration-300"
        >
          Download Resume
        </a>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
            className="lg:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl"
          >
            <div className="flex flex-col py-4">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-6 py-4 text-slate-300 hover:text-white hover:bg-slate-800 transition-all duration-300"
                >
                  {item.name}
                </a>
              ))}

              {/* Resume Button */}

              <div className="px-6 pt-4">
                <a
                  href="/mohitt-resume.pdf"
                  download="Mohit-Sharma-Resume.pdf"
                  onClick={() => setMenuOpen(false)}
                  className="block text-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg shadow-blue-500/30"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
