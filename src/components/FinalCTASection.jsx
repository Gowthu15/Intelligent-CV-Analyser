import React from "react";

const FinalCTASection = () => {
  return (
    <section className="bg-blue-600 text-white py-20 px-6 text-center" id="cta">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-snug">
          You’re Already Paying for Job Boards. <br />
          Start Using Them Smarter.
        </h2>
        <p className="text-lg mb-8 text-blue-100">
          Skanjo helps you find the right candidates that your current workflow is missing — all inside Zoho Recruit.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl text-lg hover:bg-blue-100 transition">
          Try Skanjo Inside Zoho
        </button>
      </div>
    </section>
  );
};

export default FinalCTASection;
