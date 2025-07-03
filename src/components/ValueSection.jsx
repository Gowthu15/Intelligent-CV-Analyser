import React from "react";

const ValueSection = () => {
  return (
    <section className="bg-blue-50 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
          You’re Already Paying for Job Boards.
          <br className="hidden sm:block" />
          Don’t Let Great Candidates Slip Through.
        </h2>
        <p className="text-gray-700 text-base sm:text-lg mb-8">
          Skanjo helps recruiters uncover high-potential applicants that usually get ignored—
          all inside Zoho Recruit. No toggling. No confusion. Just smarter decisions.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition">
          Start Saving Great Candidates
        </button>
      </div>
    </section>
  );
};

export default ValueSection;
