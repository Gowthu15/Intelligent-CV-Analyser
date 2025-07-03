import React from "react";

const features = [
  "Screens thousands of CVs in minutes",
  "Ranks them using 20+ intelligent contextual checks",
  "Explains WHY each candidate is a fit or not",
  "Generates custom interview questions"
];

const ProductSection = () => {
  return (
    <section id="product" className="bg-gray-100 px-6 py-16 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-gray-800">
        Meet Skanjo: The CV Intelligence Engine for Zoho Recruit
      </h2>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
        {features.map((text, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 text-gray-700 hover:shadow-lg transition duration-300"
          >
            {text}
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition text-lg">
        See How It Works
      </button>

      {/* Demo Video Placeholder */}
      <div className="mt-10 w-full max-w-3xl mx-auto">
        <div className="w-full aspect-video bg-gray-300 flex items-center justify-center rounded-xl text-gray-600 text-lg">
          Demo Video Placeholder
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
