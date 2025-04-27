
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Computer Science Student | Developer | Researcher";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [index, fullText]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.1),rgba(0,0,0,0)_70%)]"></div>
          <div className="grid grid-cols-8 grid-rows-8 gap-4 opacity-20">
            {Array.from({ length: 64 }).map((_, i) => (
              <div
                key={i}
                className="h-10 w-10 rounded-full bg-purple-500 animate-pulse"
                style={{
                  animationDuration: `${3 + (i % 5)}s`,
                  animationDelay: `${(i % 10) * 0.1}s`,
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="space-y-6 z-10 max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Shambhavi Jha
            </span>
          </h1>
          <div className="h-8">
            <p className="text-xl md:text-2xl text-gray-300">{text}</p>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Building impactful tech-driven solutions with expertise in Python,
            Machine Learning, and Web Development.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-500 hover:bg-purple-500/10"
            >
              Contact Me
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
