import { motion } from "framer-motion";
import { FaGlobe } from "react-icons/fa";
import {
  FaWhatsapp,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const contacts = [
  {
    title: "WhatsApp",
    icon: <FaWhatsapp />,
    link: "https://wa.me/918960177199",
    color: "hover:text-green-400",
  },
  {
    title: "Email",
    icon: <FaEnvelope />,
    link: "mailto:mohittt247@gmail.com",
    color: "hover:text-red-400",
  },
  {
    title: "Instagram",
    icon: <FaInstagram />,
    link: "https://instagram.com/yours_mohitt",
    color: "hover:text-pink-400",
  },
  {
    title: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/mohittsharma07",
    color: "hover:text-white",
  },

  {
    title: "Microsoft Learn",
    icon: <FaGlobe />,
    link: "https://learn.microsoft.com/en-us/users/MohitSharma-0482/",
    color: "hover:text-cyan-400",
  },
  {
    title: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/mohit-sharma-2360b934a",
    color: "hover:text-blue-400",
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-slate-900 overflow-hidden py-24 px-6"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-600/20 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-[160px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-7xl font-black text-center">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent">
              Let's Contact
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-slate-400 leading-8 text-lg">
            Feel free to reach out if you'd like to discuss projects, internship
            opportunities, or just connect. I'm always happy to learn from other
            developers and build meaningful connections.
          </p>
        </motion.div>

        {/* Contact Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target={contact.link.startsWith("mailto") ? "_self" : "_blank"}
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group bg-slate-800/60 backdrop-blur-md border border-slate-700 hover:border-blue-500/50 rounded-2xl p-8 text-center transition-all duration-300"
            >
              <div
                className={`text-5xl text-slate-300 ${contact.color} transition-all duration-300 flex justify-center`}
              >
                {contact.icon}
              </div>

              <h3 className="mt-5 text-xl font-semibold text-white">
                {contact.title}
              </h3>

              <p className="mt-2 text-slate-400 text-sm">Open Profile</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
