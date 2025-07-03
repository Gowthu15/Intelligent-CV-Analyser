import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Menon",
    role: "Senior Recruiter",
    text: "Skanjo helped us uncover candidates we would’ve missed. It’s changed how we screen resumes.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Ankit Rao",
    role: "Talent Lead",
    text: "Our shortlisting time has been cut in half. The match clarity is incredibly helpful.",
    image: "https://randomuser.me/api/portraits/men/34.jpg"
  },
  {
    name: "Meera Iyer",
    role: "HR Manager",
    text: "We’ve finally stopped skipping great candidates. Skanjo gave us back control and time.",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const TestimonialsSection = () => (
  <section className="bg-gray-50 py-20 px-6 relative" id="testimonials">
    <div className="max-w-7xl mx-auto text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-800">Testimonials</h2>
      <p className="text-gray-600 text-sm mt-2">What recruiters are saying about Skanjo</p>
    </div>

    <div className="relative max-w-6xl mx-auto h-[400px] flex justify-center items-center">
      {testimonials.map((testimonial, index) => {
        const position =
          index === 0
            ? "left-0 top-16 z-10 rotate-[-2deg]"
            : index === 1
            ? "z-20 scale-105"
            : "right-0 top-16 z-10 rotate-[2deg]";

        return (
          <div
            key={index}
            className={`absolute w-[320px] h-[300px] bg-white rounded-lg shadow-lg transition hover:bg-blue-600 hover:text-white hover:shadow-2xl duration-300 px-6 pt-6 pb-14 group flex flex-col justify-between ${position}`}
          >
            <div>
              <Quote className="w-8 h-8 text-blue-600 mb-4 group-hover:text-white" />
              <p className="text-sm leading-relaxed">{testimonial.text}</p>
            </div>

            {/* Avatar outside the box */}
            <div className="absolute left-1/2 -bottom-10 transform -translate-x-1/2">
              <div className="flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                />
                <p className="mt-2 font-semibold text-sm group-hover:text-white">
                  {testimonial.name}
                </p>
                <p className="text-xs text-gray-500 group-hover:text-blue-100">{testimonial.role}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

export default TestimonialsSection;
