import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaJava,
  FaPalette,
} from "react-icons/fa";

import { FaMicrosoft } from "react-icons/fa6";

import {
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiMysql,
  SiCloudinary,
  SiCplusplus,
  SiC,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400" },
  { name: "React", icon: <FaReact />, color: "text-cyan-400" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-300" },
  { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-500" },
  { name: "SQL", icon: <SiMysql />, color: "text-blue-500" },
  { name: "Python", icon: <FaPython />, color: "text-yellow-300" },
  { name: "Java", icon: <FaJava />, color: "text-red-500" },
  { name: "C", icon: <SiC />, color: "text-blue-400" },
  { name: "C++", icon: <SiCplusplus />, color: "text-blue-500" },
  { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
  { name: "GitHub", icon: <FaGithub />, color: "text-white" },
  { name: "Cloudinary", icon: <SiCloudinary />, color: "text-blue-300" },
  { name: "MS Office", icon: <FaMicrosoft />, color: "text-blue-400" },
  { name: "Canva", icon: <FaPalette />, color: "text-cyan-400" },

];

function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-slate-950 overflow-hidden py-12 px-6"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-600/20 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-[160px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-7xl font-black text-center">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent">
              My Skills
            </span>
          </h2>

          <p className="mt-7 max-w-2xl mx-auto text-slate-400 leading-8 text-lg">
            The technologies and tools I've been using to build frontend
            projects and improve my development skills.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="group bg-slate-900/60 backdrop-blur-md border border-slate-700 rounded-3xl p-8 text-center hover:border-blue-500/50 transition-all duration-300 shadow-lg"
            >
              <div
                className={`text-5xl ${skill.color} flex justify-center transition-transform duration-300 group-hover:scale-125`}
              >
                {skill.icon}
              </div>

              {/* Skill Name */}

              <h3 className="mt-6 text-xl font-bold text-white">
                {skill.name}
              </h3>

              {/* Small Label */}
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-8">
            I'm always learning new technologies and applying them in my
            personal projects. Building projects helps me improve my coding
            skills and gain practical experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
export default Skills;
