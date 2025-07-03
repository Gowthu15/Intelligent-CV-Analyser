import React from "react";
import { motion } from "framer-motion";
import { Search, Timer, Eye, Settings, UserCheck } from "lucide-react";

const pillars = [
  {
    icon: <Search className="w-10 h-10 text-blue-600" />,
    title: "Relevance over Keywords",
    description:
      "Evaluates context—not just skills—using role, domain, and company-specific intelligence.",
  },
  {
    icon: <Timer className="w-10 h-10 text-blue-600" />,
    title: "Speed That Matters",
    description:
      "Shortlists 1000+ CVs in minutes. No more 'will screen later' fatigue.",
  },
  {
    icon: <Eye className="w-10 h-10 text-blue-600" />,
    title: "Insight That Helps Close",
    description:
      "Understand the “why” behind every match—not just the percentage.",
  },
  {
    icon: <Settings className="w-10 h-10 text-blue-600" />,
    title: "Native Integration",
    description:
      "Works 100% inside Zoho Recruit—no toggling, exporting, or syncing.",
  },
  {
    icon: <UserCheck className="w-10 h-10 text-blue-600" />,
    title: "Human in Control",
    description:
      "Skanjo gives clarity, not conclusions. Recruiters remain the decision-makers.",
  }
];

const PillarsSection = () => {
  return (
    <section className="bg-white py-20 px-6" id="features">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-14">
          Why Skanjo? A Tool for Recruiters, by Recruiters
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 w-full max-w-[320px] text-center flex flex-col items-center hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4">{pillar.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
