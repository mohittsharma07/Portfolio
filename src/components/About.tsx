import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaFolderOpen,
  FaCheckCircle,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-slate-900 overflow-hidden py-12 px-6"
    >
      {/* Background Glow  */}

      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-600/20 blur-[130px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-[150px] rounded-full" />

      <div className="max-w-5xl mx-auto text-center">
        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-white text-center leading-tight">
            About Me
            <span className="block mt-4 text-3xl md:text-4xl bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent">
              BCA Student & Frontend Developer
            </span>
          </h2>

          <p className="mt-8 text-slate-400 leading-8 text-lg">
            Hi, I'm
            <span className="text-blue-400 font-semibold"> Mohit Sharma</span>,
            a passionate Frontend Developer currently pursuing my
            <span className="text-white"> BCA (3rd Year)</span>. I enjoy
            building responsive and user-friendly web applications while
            continuously improving my skills through hands-on projects. My
            primary technologies include
            <span className="text-white">
              {" "}
              React, TypeScript, Tailwind CSS
            </span>{" "}
            and
            <span className="text-white"> Firebase</span>.
          </p>

          <p className="mt-6 text-slate-400 leading-8 text-lg">
            I'm currently focused on improving my frontend development skills by
            building personal projects and exploring modern web technologies.
            Every project helps me learn something new, and I'm continuously
            working on creating better, more practical applications.
          </p>

          {/* Info Cards */}

          <div className="grid sm:grid-cols-2 gap-5 mt-10">
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-slate-800/60 backdrop-blur-md border border-slate-700 rounded-2xl p-5"
            >
              <div className="flex items-center gap-3">
                <FaGraduationCap className="text-blue-400 text-2xl" />
                <h3 className="text-white font-semibold text-lg">Education</h3>
              </div>

              <p className="text-slate-400 mt-3">
                Bachelor of Computer Applications
              </p>

              <p className="text-slate-500 text-sm">
                {" "}
                Chhatrapati Shahu Ji Maharaj University,Kanpur
              </p>

              <p className="text-blue-400 font-medium">3rd Year</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-slate-800/60 backdrop-blur-md border border-slate-700 rounded-2xl p-5"
            >
              <div className="flex items-center gap-3">
                <FaLaptopCode className="text-cyan-400 text-2xl" />
                <h3 className="text-white font-semibold text-lg">Experience</h3>
              </div>

              <p className="text-slate-400 mt-3">Fresher</p>

              <p className="text-cyan-400 font-medium">
                Looking for Internship
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-slate-800/60 backdrop-blur-md border border-slate-700 rounded-2xl p-5"
            >
              <div className="flex items-center gap-3">
                <FaFolderOpen className="text-green-400 text-2xl" />
                <h3 className="text-white font-semibold text-lg">Projects</h3>
              </div>

              <p className="text-slate-400 mt-3">Personal Projects</p>

              <p className="text-green-400 font-medium">
                Building Real-World Projects
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-slate-800/60 backdrop-blur-md border border-slate-700 rounded-2xl p-5"
            >
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-pink-400 text-2xl" />
                <h3 className="text-white font-semibold text-lg">Location</h3>
              </div>

              <p className="text-slate-400 mt-3">Kanpur, Uttar Pradesh</p>

              <p className="text-pink-400 font-medium">India</p>
            </motion.div>
          </div>

          {/* Quick Facts */}

          <div className="mt-12 mb-16">
            <h3 className="text-4xl font-bold text-white mb-6">Quick Facts</h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "React.js",
                "Node.js",
                "TypeScript",
                "Tailwind CSS",
                "Firebase",
                "Responsive Design",
                "Git & GitHub",
                "Canva",
                "Problem Solving",
                "Currently Building Projects",
                "Open to Internship Opportunities",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-3 bg-slate-800/40 border border-slate-700 rounded-xl p-4"
                >
                  <FaCheckCircle className="text-green-400 text-lg flex-shrink-0" />

                  <span className="text-slate-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
