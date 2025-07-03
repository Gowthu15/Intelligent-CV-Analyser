import React from "react";
import { motion } from "framer-motion";

const problems = [
  "3–4 week delays per role",
  "Wasted job board spend",
  "Missed top talent",
  "Hiring manager frustration"
];

const ProblemSection = () => (
  <section className="py-20 px-6 bg-white" id="problems">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* LEFT TEXT */}
      <div className="text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-snug">
          You’re Paying to Post Jobs. So Why Are Applicants Being Ignored?
        </h2>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Recruiters inside Zoho Recruit often skip online applicants—too many resumes, too little time, no context.
          They're missing out on good resumes just because they didn’t have keywords associated with the job.
        </p>
      </div>

      {/* RIGHT CARDS */}
      <div className="grid grid-cols-1 gap-6 relative">
        {problems.map((text, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? 100 : -100, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`bg-blue-100 text-blue-900 font-semibold text-base rounded-xl w-[70%] sm:w-[60%] h-[80px] flex items-center justify-center text-center shadow-sm transition hover:shadow-md
              ${idx % 2 === 0 ? 'ml-auto' : 'mr-auto'}
            `}
          >
            {text}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
