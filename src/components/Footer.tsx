import { motion } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    link: "https://github.com/mohittsharma07",
    color: "hover:text-white",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/mohit-sharma-2360b934a",
    color: "hover:text-blue-400",
  },
  {
    icon: <FaInstagram />,
    link: "https://instagram.com/yours_mohitt",
    color: "hover:text-pink-400",
  },
  {
    icon: <FaWhatsapp />,
    link: "https://wa.me/918960177199",
    color: "hover:text-green-400",
  },
  {
    icon: <FaEnvelope />,
    link: "mailto:mohittt247@gmail.com",
    color: "hover:text-red-400",
  },
];

function Footer() {
  return (
    <footer className="relative bg-black overflow-hidden border-t border-slate-800">
      
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row justify-between items-center gap-10"
        >
          {/* Left */}

          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-black text-white">Mohit Sharma</h2>

            <p className="mt-3 text-slate-400 max-w-md leading-7">
              BCA student passionate about frontend development and continuously
              learning by building real-world projects with React, TypeScript,
              Tailwind CSS and Firebase.
            </p>
          </div>

          {/* Social Icons */}

          <div className="flex flex-wrap justify-center gap-5">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target={social.link.startsWith("mailto") ? "_self" : "_blank"}
                rel="noreferrer"
                whileHover={{
                  scale: 1.2,
                  y: -5,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className={`w-14 h-14 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-2xl text-slate-300 transition-all duration-300 ${social.color} hover:border-blue-500`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Divider */}

        <div className="border-t border-slate-800 my-10" />

        {/* Bottom */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">Mohit Sharma</span>. All
            Rights Reserved.
          </p>

          <p className="text-slate-500 text-center">
            Designed & Developrd by Mohit Sharma
            <span className="text-blue-400"> React</span>,
            <span className="text-cyan-400"> TypeScript</span> &
            <span className="text-green-400"> Tailwind CSS</span>
          </p>

          {/* Back To Top */}

          <motion.a
            href="#home"
            whileHover={{
              y: -4,
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30"
          >
            <FaArrowUp />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
