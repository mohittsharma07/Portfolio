import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";

const projects = [
  {
    title: "NestMatch",
    description:
      "A Room & Roommate Finder web application built using React, TypeScript, Tailwind CSS and Firebase. It includes authentication, room listings and a responsive user interface.",
    tech: ["React", "TypeScript", "Tailwind", "Firebase"],
    github: "https://github.com/mohittsharma07/NestMatch",
    live: "https://nest-match-five.vercel.app/",
    featured: true,

    images: [
      "/projects/nestmatch-home.png",
      "/projects/nestmatch-rooms.png",
      "/projects/nestmatch-roommates.png",
      "/projects/nestmatch-matchfinder.png",
      "/projects/nestmatch-profile.png",
      "/projects/nestmatch-dropdown.png",
    ],
  },

  {
    title: "Netflix Clone",
    description:
      "A Netflix-inspired frontend clone built to practice responsive layouts and React components.",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/mohittsharma07/NETFLIX-CLONE",
    live: "https://netflix-clone-cx7g.vercel.app/",

    images: [
      "/projects/netflix-home.png",
      "/projects/netflix-login.png",
      "/projects/netflix-movie.png",
    ],
  },

  {
    title: "Smart Calculator",
    description:
      "A calculator that performs basic mathematical operations with a clean and responsive interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/mohittsharma07/Smart-Student-Calculator",
    live: "https://smart-student-calculator.vercel.app/index.html",
    images: ["/projects/smart-calculator.png"],
  },

  {
    title: "Currency Converter",
    description:
      "A currency converter that fetches live exchange rates using an API.",
    tech: ["React", "API", "CSS"],
    github: "https://github.com/mohittsharma07/live-currency-converter",
    live: "https://live-currency-converter-sigma.vercel.app/",
    images: ["/projects/currency-converter.png"],
  },

  {
    title: "Tic Tac Toe",
    description:
      "A simple Tic Tac Toe game built with JavaScript to practice game logic and DOM manipulation.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/mohittsharma07/Tic-Tac-Toe-Game",
    live: "https://tic-tac-toe-game-bay-eight.vercel.app/",
    images: ["/projects/tic-tac-toe.png"],
  },

  {
    title: "Rock Paper Scissors",
    description:
      "A Rock Paper Scissors game with score tracking and simple game logic.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/mohittsharma07/Rock-Paper-Scissors-Game",
    live: "https://rock-paper-scissors-game-ten-black.vercel.app/",
    images: ["/projects/rock-paper-scissors.png"],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-slate-900 overflow-hidden py-16 px-6"
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
          <h2 className="text-5xl md:text-7xl font-black text-center">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>

          <p className="mt-7 max-w-2xl mx-auto text-slate-400 leading-8 text-lg">
            These are some of the projects I've built while learning frontend
            development. Each project helped me improve my React, TypeScript and
            problem-solving skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="relative bg-slate-800/60 backdrop-blur-md border border-slate-700 rounded-3xl p-7 hover:border-blue-500/50 transition-all duration-300 shadow-lg"
            >
              {/* Featured Badge */}

              {project.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-blue-600/20 border border-blue-500/40 px-3 py-1 rounded-full text-sm text-blue-300">
                  <FaStar className="text-yellow-400" />
                  Featured
                </div>
              )}

              {/* Project Title */}

              {project.images && (
                <div className="mb-6">

                  {/* Main Image */}

                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-36 object-cover rounded-2xl border border-slate-700 mb-3"
                  />

                  {/* Thumbnails */}

                  <div className="grid grid-cols-5 gap-2">
                    {project.images.slice(1).map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${project.title} ${index + 2}`}
                        className="w-full h-9 object-cover rounded-lg border border-slate-700 hover:scale-105 transition-all duration-300 cursor-pointer"
                      />
                    ))}
                  </div>
                </div>
              )}

              <h3 className="text-2xl font-bold text-white">{project.title}</h3>

              {/* Description */}

              <p className="mt-5 text-slate-400 leading-7">
                {project.description}
              </p>

              {/* Tech Stack */}

              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}

              <div className="flex gap-4 mt-8">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-blue-500 hover:bg-slate-950 transition-all duration-300"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:scale-105 transition-all duration-300"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;
