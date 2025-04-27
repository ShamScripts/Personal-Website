
import { useState, useEffect, useRef } from "react";

const educationData = [
  {
    id: 1,
    institution: "BIRLA INSTITUTE OF TECHNOLOGY AND SCIENCE",
    degree: "Bachelor of Engineering",
    major: "Computer Science",
    location: "Dubai, UAE",
    period: "2023 - 2027",
  },
  {
    id: 2,
    institution: "DPS Dubai",
    degree: "High School Diploma",
    location: "Dubai, UAE",
    period: "2023",
  },
];

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-20 bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Education
            </span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-purple-500 pl-8 ml-4">
              {educationData.map((item, index) => (
                <div
                  key={item.id}
                  className={`mb-10 transition-all duration-700 delay-${
                    index * 200
                  } transform ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                >
                  <div className="absolute -left-4 mt-1 h-8 w-8 rounded-full border-4 border-gray-900 bg-purple-500 flex items-center justify-center">
                    <span className="text-white text-sm">{item.id}</span>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-6 shadow-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <h3 className="text-xl font-bold text-white">
                        {item.institution}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-gray-300 mt-2">{item.degree}</p>
                    {item.major && (
                      <p className="text-gray-400">Major: {item.major}</p>
                    )}
                    <p className="text-gray-500 mt-1">{item.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
