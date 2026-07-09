import { motion, AnimatePresence } from "framer-motion";

type IntroProps = {
  isVisible: boolean;
};

function IntroScreen({ isVisible }: IntroProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
              delay: 2.8,
            },
          }}
        >
          <motion.div
            className="absolute w-[450px] h-[450px] rounded-full bg-blue-600/20 blur-[140px]"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          />

          <motion.div
            className="absolute w-[280px] h-[280px] rounded-full border border-cyan-400/30"
            animate={{ rotate: 360 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="text-center px-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-6xl md:text-8xl font-black"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <span className="text-white">Mohit</span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent">
                Sharma
              </span>
            </motion.div>

            <motion.p
              className="mt-6 text-xl md:text-2xl text-slate-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Frontend Developer Portfolio
            </motion.p>

            <div className="mt-10 w-72 h-[5px] rounded-full bg-slate-800 overflow-hidden mx-auto">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5 }}
              />
            </div>

            <motion.p
              className="mt-5 text-slate-300 tracking-[4px] uppercase text-xl md:text-2xl font-semibold"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              Crafting Your Experience...
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default IntroScreen;
