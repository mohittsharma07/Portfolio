import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] bg-slate-950 overflow-hidden flex items-center"
    >
      {/* Background Glow */}

      <div className="absolute top-[-180px] left-[-150px] w-[350px] h-[350px] bg-blue-600/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-200px] right-[-100px] w-[400px] h-[400px] bg-cyan-500/20 blur-[150px] rounded-full" />

      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Side */}

          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="inline-block bg-blue-500/10 border border-blue-500/30 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
              👋 Hello, I'm
            </p>

            <h1 className="mt-6 text-5xl md:text-7xl font-black leading-tight">
              <span className="text-white">Mohit</span>

              <br />

              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent">
                Sharma
              </span>
            </h1>

            <h2 className="mt-6 text-xl md:text-3xl font-semibold text-slate-300">
              Aspiring Full Stack Developer
              <span className="text-blue-400">
                {" "}
                | React • TypeScript • Node.js{" "}
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-slate-400 leading-8 text-lg">
              I'm a{" "}
              <span className="text-white font-semibold">BCA 3rd Year</span>{" "}
              student with a strong interest in web development. I have learned
              <span className="text-white font-semibold">
                {" "}
                C, C++, Java, Python, Data Structures & Algorithms
              </span>
              and enjoy building web applications using
              <span className="text-white font-semibold">
                {" "}
                React, TypeScript, Node.js, Firebase, Tailwind CSS, and SQL
              </span>
              . I'm always learning new technologies by building personal
              projects and improving my problem-solving skills.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">
              <button
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all duration-300 font-semibold shadow-lg shadow-blue-600/30 hover:-translate-y-1"
              >
                View Projects
              </button>

              <a
                href="/mohitt-resume.pdf"
                download="Mohit-Sharma-Resume.pdf"
                className="px-7 py-3 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Resume
              </a>
            </div>

            {/* Social Icons */}

            <div className="flex items-center gap-6 mt-12 text-3xl text-slate-300">
              <a
                href="https://github.com/mohittsharma07"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white hover:scale-125 transition-all duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://learn.microsoft.com/en-us/users/MohitSharma-0482"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 hover:scale-125 transition-all duration-300"
              >
                <FaMicrosoft />
              </a>

              <a
                href="https://www.linkedin.com/in/mohit-sharma-2360b934a"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-500 hover:scale-125 transition-all duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:mohittt247@gmail.com"
                className="hover:text-red-500 hover:scale-125 transition-all duration-300"
              >
                <HiOutlineMail />
              </a>

              <a
                href="https://wa.me/918960177199"
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-500 hover:scale-125 transition-all duration-300"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://instagram.com/yours_mohitt"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-500 hover:scale-125 transition-all duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </motion.div>

          {/* Right Side */}

          <motion.div
            className="order-1 lg:order-2 flex justify-center mb-10 lg:mb-0"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-30 animate-pulse" />

              <div className="w-80 h-80 md:w-[360px] md:h-[360px] rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-600 p-1 shadow-[0_0_80px_rgba(59,130,246,0.4)]">
                <div className="w-full h-full rounded-full bg-slate-900 overflow-hidden">
                  <img
                    src="/images/profile.jpeg"
                    alt="Mohit Sharma"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
