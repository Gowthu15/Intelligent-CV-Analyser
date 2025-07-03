import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

const features = [
  "Contextual CV screening",
  "Intelligent ranking",
  "Fit reasoning",
  "AI interview questions",
  "Built into Zoho Recruit"
];

const plans = [
  {
    name: "Skanjo",
    color: "bg-blue-100 border-blue-500",
    cta: "Try Skanjo",
    values: [true, true, true, true, true],
  },
  {
    name: "Zoho Only",
    color: "bg-gray-100 border-gray-400",
    cta: "Use Zoho",
    values: [false, false, false, false, true],
  },
  {
    name: "Manual",
    color: "bg-yellow-100 border-yellow-500",
    cta: "Do it Yourself",
    values: [false, false, false, false, false],
  }
];

const ComparisonTable = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto overflow-x-auto">
        <table className="w-full border-separate border-spacing-x-4">
          <thead>
            <tr>
              <th className="text-left text-lg text-gray-600 font-semibold">Features</th>
              {plans.map((plan, idx) => (
                <th
                  key={idx}
                  className={`text-center rounded-t-xl p-4 text-lg font-bold border-t-4 ${plan.color}`}
                >
                  {plan.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, idx) => (
              <tr key={idx}>
                <td className="py-4 pr-4 text-gray-800 text-sm font-medium border-b border-gray-200">
                  {feature}
                </td>
                {plans.map((plan, pidx) => (
                  <td
                    key={pidx}
                    className="text-center border-b border-gray-200 py-4"
                  >
                    {plan.values[idx] ? (
                      <CheckCircle className="text-green-600 inline-block w-5 h-5" />
                    ) : (
                      <XCircle className="text-red-500 inline-block w-5 h-5" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
            {/* CTA Row */}
            <tr>
              <td></td>
              {plans.map((plan, idx) => (
                <td key={idx} className="text-center py-6">
                  <button
                    className={`px-5 py-2 rounded-lg font-semibold shadow-md text-white ${
                      idx === 0
                        ? "bg-blue-600 hover:bg-blue-700"
                        : idx === 1
                        ? "bg-gray-600 hover:bg-gray-700"
                        : "bg-yellow-500 hover:bg-yellow-600"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ComparisonTable;
