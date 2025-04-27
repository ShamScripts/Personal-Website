
import { useState, useEffect, useRef } from "react";

const experienceData = [
  {
    id: 1,
    organization: "ACM-W at BITS Pilani, Dubai",
    position: "Executive",
    period: "May 2024 - Present",
    responsibilities: [
      "Organizing technical workshops and hackathons to promote diversity in computing.",
      "Leading initiatives under the ACM-W JuMP program, focusing on machine learning applications.",
      "Assisting in social media marketing and outreach to enhance community engagement.",
    ],
  },
  {
    id: 2,
    organization: "EvotAi",
    position: "Student Intern",
    period: "June 2024 - August 2024",
    location: "Noida, UP",
    responsibilities: [
      "Developed a cloud dashboard integrating ERP system data.",
      "Extracted, stored, and modeled data for analytics and visualization.",
      "Enhanced technical expertise in data integration and business intelligence tools.",
    ],
  },
  {
    id: 3,
    organization: "SUPERNOVA - The Astronomy Club",
    position: "Management Executive",
    period: "September 2024 - Present",
    responsibilities: [
      "Overseeing club activities, ensuring smooth event management operations.",
      "Organizing technical talks and outreach programs for astronomy enthusiasts.",
      "Hosting an Excel workshop focused on data analysis and visualization.",
    ],
  },
  {
    id: 4,
    organization: "SUPERNOVA - The Astronomy Club",
    position: "Treasurer",
    period: "February 2024 - June 2024",
    responsibilities: [
      "Managed financial records and budget allocations for club activities.",
      "Assisted in fundraising and sponsorship efforts.",
    ],
  },
];

const Experience = () => {
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
      id="experience"
      ref={sectionRef}
      className="py-20 bg-black"
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
              Work Experience
            </span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-purple-500 pl-8 ml-4">
              {experienceData.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`mb-10 transition-all duration-700 delay-${
                    index * 200
                  } transform ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                >
                  <div className="absolute -left-4 mt-1 h-8 w-8 rounded-full border-4 border-black bg-purple-500 flex items-center justify-center">
                    <span className="text-white text-sm">{exp.id}</span>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-6 shadow-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {exp.position}
                        </h3>
                        <p className="text-purple-400 font-medium">
                          {exp.organization}
                        </p>
                        {exp.location && (
                          <p className="text-gray-500">{exp.location}</p>
                        )}
                      </div>
                      <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium mt-2 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="mt-4 space-y-2 text-gray-300">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience;
