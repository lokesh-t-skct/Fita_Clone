import React from "react";

const HeroBanner = () => (
  <section
    className="bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center py-32 px-6"
    id="home"
  >
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      Get Your Dream IT Job in 60 Days
    </h1>
    <p className="text-lg mb-6">
      Industry Experts | Hands-on Learning | 100% Placement Support
    </p>
    <a
      href="#enquiry"
      className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-100"
    >
      Enquire Now
    </a>
  </section>
);

export default HeroBanner;
