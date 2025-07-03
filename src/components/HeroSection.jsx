import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="bg-blue-50 py-20 px-6 text-center">
      <motion.h1
        className="text-4xl sm:text-5xl font-bold mb-4 text-gray-800"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Stop Ignoring Your Best Candidates.
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl max-w-2xl mx-auto mb-6 text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        AI-powered CV screening for Zoho Recruit that helps recruiters rescue online
        applicants from being overlooked.
      </motion.p>

      <motion.button
        className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Try Free
      </motion.button>
    </section>
  );
};

export default HeroSection;
