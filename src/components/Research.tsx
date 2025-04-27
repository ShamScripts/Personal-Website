
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const researchData = [
  {
    id: 1,
    title: "Impact of Remote Work on Organizational Culture",
    period: "December 2024 - Present",
    description: [
      "Exploring the impact of remote work on organizational structure, employee dynamics, and productivity.",
      "Investigating the long-term effects of remote work on employee engagement, communication, and workplace culture.",
    ],
  },
  {
    id: 2,
    title: "Magnetic Field-Based Localization System for Real-Time Identification of Receiver Coils in Near-Field Wireless Power Transfer Applications",
    period: "February 2025 - Present",
    description: [
      "Investigating the use of magnetic field technology for precise real-time localization in wireless power systems.",
      "Developing an innovative system for enhancing the efficiency and accuracy of receiver coil identification in near-field wireless power transfer applications.",
    ],
  },
  {
    id: 3,
    title: "Hallucinatory Output in Large Language Models (LLMs): Technical and Ethical Solutions",
    period: "November 2024 - Present",
    description: [
      "Analyzing the causes of hallucinatory outputs in LLMs and exploring both technical and ethical approaches to mitigate them.",
      "Evaluating the challenges faced by LLMs in generating reliable outputs and proposing solutions for minimizing misinformation and bias.",
    ],
  },
];

const Research = () => {
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
      id="research"
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
              Research Projects
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchData.map((research, index) => (
              <Card
                key={research.id}
                className="bg-gray-800/60 backdrop-blur-sm border-gray-700 hover:border-purple-500/30 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-white hover:text-purple-400 transition-colors">
                      {research.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-purple-400 mt-2">
                    {research.period}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <ul className="space-y-2">
                    {research.description.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
