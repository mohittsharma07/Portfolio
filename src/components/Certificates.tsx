import { motion } from "framer-motion";
import {
  FaAward,
  FaCalendarAlt,
  FaBuilding,
  FaExternalLinkAlt,
  FaCheckCircle,
} from "react-icons/fa";

const certificates = [
  {
    title: "Software Engineer",
    issuer: "HackerRank",
    date: "5 July 2026",
    image: "/certificates/hackerrank-software-engineer.png",
    description:
      "Verified HackerRank Software Engineer certificate earned by completing coding and problem-solving assessments.",
    verified: true,
  },

  {
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    date: "12 July 2026",
    image: "/certificates/HackerRank-Frontend-Developer.png",
    description:
      "Verified HackerRank Frontend Developer (React) role certification.",
    verified: true,
  },

  {
    title: "YUVA AI For All",
    issuer: "TCS iON × IndiaAI",
    date: "10 July 2026",
    image: "/certificates/TCS-iON-YUVA.png",
    description: "Certificate of Completion for YUVA AI For All.",
    verified: true,
  },
  {
    title: "Tata Crucible Campus Quiz",
    issuer: "Internshala × Tata Crucible",
    date: "12 November 2025",
    image: "/certificates/tata-crucibe-campus-quiz.png",
    description:
      "Certificate of Participation for taking part in the Tata Crucible Campus Quiz organized through Internshala.",
    verified: false,
  },
];

function Certificates() {
  return (
    <section
      id="certificates"
      className="relative bg-slate-950 overflow-hidden py-24 px-6"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-500/20 blur-[160px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-7xl font-black text-center">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent">
              Achievements & Certifications
            </span>
          </h2>

          <p className="mt-7 max-w-2xl mx-auto text-slate-400 leading-8 text-lg">
            These certificates reflect my learning journey and the skills I've
            gained through coding, problem solving, and continuous practice
            while exploring software development.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group overflow-hidden rounded-3xl bg-slate-900/60 backdrop-blur-md border border-slate-800 hover:border-blue-500/50 shadow-xl transition-all duration-300"
            >
              {/* Image */}

              <div className="relative overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Verified Badge */}

                {certificate.verified && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2">
                    <FaCheckCircle />
                    Verified
                  </div>
                )}
              </div>

              {/* Content */}

              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <FaAward className="text-blue-400 text-xl" />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {certificate.title}
                  </h3>
                </div>

                <div className="flex items-center gap-3 text-slate-300 mt-2">
                  <FaBuilding className="text-cyan-400" />

                  <span>{certificate.issuer}</span>
                </div>

                <div className="flex items-center gap-3 text-slate-400 mt-3">
                  <FaCalendarAlt className="text-blue-400" />

                  <span>Issued: {certificate.date}</span>
                </div>

                {/* Description */}

                <p className="mt-5 text-slate-400 leading-7">
                  {certificate.description}
                </p>

                {/* Button */}

                <motion.a
                  href={certificate.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="inline-flex items-center gap-3 mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg shadow-blue-500/20 hover:shadow-cyan-500/40 transition-all"
                >
                  View Certificate
                  <FaExternalLinkAlt className="text-sm" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
