import React from "react";

const SuccessStoriesCarousel = () => {
  const stories = [
    {
      name: "John Doe",
      review: "PYTHON ANYWHERE helped me land my first job as a developer!",
      img: "/img/student1.jpg",
    },
    {
      name: "Priya Sharma",
      review: "Excellent mentorship and placement guidance!",
      img: "/img/student2.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-10">Success Stories</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {stories.map((s, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-6 max-w-xs">
              <img
                src={s.img}
                alt={s.name}
                className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
              />
              <p className="text-gray-600 mb-2 italic">"{s.review}"</p>
              <h4 className="font-semibold text-gray-800">{s.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesCarousel;
