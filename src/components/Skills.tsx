
import { useState, useEffect, useRef } from "react";

const skillsData = [
  {
    category: "Programming & Web Development",
    skills: [
      "Python",
      "Java",
      "Flask",
      "Django",
      "Streamlit",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    category: "Machine Learning & AI",
    skills: [
      "Scikit-learn",
      "Regression & Classification Models",
      "Model Evaluation",
      "Hyperparameter Tuning",
      "NLP (Natural Language Processing)",
    ],
  },
  {
    category: "Data Science & Analytics",
    skills: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Data Cleaning",
      "Feature Engineering",
      "EDA",
      "Automation",
      "Time Series Analysis",
    ],
  },
  {
    category: "Business Intelligence & HR Analytics",
    skills: [
      "Microsoft Power BI",
      "Excel Macros",
      "VLOOKUP",
      "Pivot Tables",
      "Formula Writing",
      "Dashboard Development",
    ],
  },
  {
    category: "Version Control & Deployment",
    skills: ["Git", "GitHub", "Streamlit Deployment"],
  },
  {
    category: "Soft Skills",
    skills: [
      "Team Collaboration",
      "Problem-Solving",
      "Adaptability",
      "Critical Thinking",
      "Effective Communication",
    ],
  },
];

const Skills = () => {
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
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
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
              Skills
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((category, index) => (
              <div
                key={index}
                className={`bg-gray-800/60 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10 group ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-400 transition-colors">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
