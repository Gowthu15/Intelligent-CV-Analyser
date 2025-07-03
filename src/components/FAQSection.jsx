import React, { useState } from "react";

const faqs = [
  {
    question: "Can I use Skanjo outside of Zoho?",
    answer:
      "No, Skanjo is designed to work exclusively within Zoho Recruit, so you don't need to switch platforms."
  },
  {
    question: "What types of roles does Skanjo support?",
    answer:
      "Skanjo works best for white-collar, high-volume, or context-heavy roles where resume interpretation matters most."
  },
  {
    question: "Will Skanjo change how I shortlist candidates?",
    answer:
      "No — you stay in control. Skanjo gives additional insights, not decisions. You approve every move."
  },
  {
    question: "Does Skanjo store any candidate data?",
    answer:
      "No, Skanjo does not store candidate data. All processing happens within your Zoho environment."
  }
];

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-left text-gray-800 font-medium text-lg"
      >
        {question}
        <span className="text-xl">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <p className="mt-3 text-gray-600 text-sm leading-relaxed">{answer}</p>
      )}
    </div>
  );
};

const FAQSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6" id="faq">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Frequently Asked Questions</h2>
        <div className="text-left">
          {faqs.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
