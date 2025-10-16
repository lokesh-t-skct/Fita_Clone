import React from "react";

const PartnersCarousel = () => {
  const partners = [
    "/img/google.png",
    "/img/ibm.png",
    "/img/tcs.png",
    "/img/accenture.png",
  ];
  return (
    <section id="partners" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-8">Our Hiring Partners</h2>
        <div className="flex justify-center gap-8 flex-wrap">
          {partners.map((p, i) => (
            <img key={i} src={p} alt="Partner Logo" className="h-12 grayscale" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;
