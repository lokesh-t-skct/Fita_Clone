import React, { useState } from "react";

const CoursesGrid = () => {
  const [hoveredCourse, setHoveredCourse] = useState(null);
  
  const courses = [
    { 
      title: "Python Training", 
      img: "/img/python.jpg",
      duration: "8 weeks",
      level: "Beginner",
      students: "2.5k+",
      rating: 4.8,
      description: "Master Python from basics to advanced concepts"
    },
    { 
      title: "Java Training", 
      img: "/img/java.jpg",
      duration: "10 weeks",
      level: "Intermediate",
      students: "1.8k+",
      rating: 4.7,
      description: "Build enterprise applications with Java"
    },
    { 
      title: "Full Stack Developer", 
      img: "/img/fullstack.jpg",
      duration: "16 weeks",
      level: "Advanced",
      students: "3.2k+",
      rating: 4.9,
      description: "Become a complete web development expert"
    },
    { 
      title: "Digital Marketing", 
      img: "/img/dm.jpg",
      duration: "6 weeks",
      level: "Beginner",
      students: "4.1k+",
      rating: 4.6,
      description: "Grow your brand with modern marketing strategies"
    },
  ];

  const getLevelColor = (level) => {
    switch(level) {
      case "Beginner": return "bg-green-100 text-green-700";
      case "Intermediate": return "bg-yellow-100 text-yellow-700";
      case "Advanced": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            POPULAR COURSES
          </span>
          <h2 className="text-4xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Top Trending Courses
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our most sought-after programs designed to boost your career
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.title}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredCourse(index)}
              onMouseLeave={() => setHoveredCourse(null)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Level Badge */}
                <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(course.level)}`}>
                  {course.level}
                </span>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                    View Details
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                    <span className="font-medium text-gray-700">{course.rating}</span>
                  </div>
                  <span>{course.students} students</span>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {course.duration}
                  </div>
                  <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors flex items-center gap-1">
                    Enroll
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            View All Courses
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default CoursesGrid;