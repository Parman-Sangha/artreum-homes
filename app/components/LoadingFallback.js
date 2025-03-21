"use client";

import { motion } from "framer-motion";

const LoadingFallback = ({ message = "Loading..." }) => {
  return (
    <div className="min-h-[400px] flex items-center justify-center bg-[#141414] p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center"
      >
        <div className="relative w-16 h-16 mx-auto mb-4">
          <motion.div
            className="absolute inset-0 border-4 border-[#CDB937] rounded-full"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute inset-0 border-4 border-[#CDB937] rounded-full opacity-30"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400"
        >
          {message}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoadingFallback;
