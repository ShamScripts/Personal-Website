
import { useState, useEffect, useRef } from "react";

const About = () => {
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
      id="about"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-black to-gray-900"
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
              About Me
            </span>
          </h2>

          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 overflow-hidden flex items-center justify-center mx-auto">
                  <img 
                    src="/lovable-uploads/29f486af-8a14-4d7c-a510-6568f90824d5.png" 
                    alt="Shambhavi Jha" 
                    className="w-60 h-60 md:w-92 md:h-92 rounded-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-500/20 rounded-full blur-xl -z-10"></div>
              </div>
            </div>

            <div className="lg:w-1/2 text-gray-300">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Computer Science Student at BITS Pilani, Dubai
              </h3>
              <p className="mb-4">
                I'm a second-year Computer Science student with a passion for
                building impactful tech-driven solutions. My expertise spans
                Python, MySQL, machine learning, data visualization, and
                full-stack web development.
              </p>
              <p className="mb-4">
                I enjoy turning complex problems into streamlined systems. My
                work spans AI-powered healthcare tools, automation systems, and
                data-driven business insights.
              </p>
              <p>
                With a strong foundation in HR analytics, process optimization,
                and strategic management, I aim to bridge technology with
                innovation and contribute meaningfully to forward-thinking teams
                and real-world projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
