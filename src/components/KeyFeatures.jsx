import React from "react";

const KeyFeatures = () => {
  const features = [
    { icon: "🎓", title: "Expert Trainers", desc: "Trainers from top MNCs." },
    { icon: "💼", title: "Placement Support", desc: "100% Job Guidance." },
    { icon: "🧠", title: "Hands-on Training", desc: "Real-time projects." },
    { icon: "🏢", title: "14+ Branches", desc: "Across Tamil Nadu." },
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose PYTHON ANYWHERE Academy?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.title} className="p-6 border rounded-lg">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
