
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const certificationsData = [
  {
    id: 1,
    title: "Complete A.I. & Machine Learning, Data Science Bootcamp",
    provider: "Udemy",
    certificateId: "UC-0e9a8b1a-8b1a-4b1a-9b1a-8b1a4b1a9b1a",
    link: "https://www.udemy.com/certificate/UC-0e9a8b1a-8b1a-4b1a-9b1a-8b1a4b1a9b1a/",
    image: "photo-1488590528505-98d2b5aba04b",
  },
  {
    id: 2,
    title: "Machine Learning with Python",
    provider: "freeCodeCamp",
    certificateId: "FCC-ML-2023",
    link: "https://www.freecodecamp.org/certification/fcc-ml-2023",
    image: "photo-1461749280684-dccba630e2f6",
  },
  {
    id: 3,
    title: "Web Designing and Development",
    provider: "Aptech",
    certificateId: "APTECH-WD-2023",
    link: "https://aptech-education.com/certificate/APTECH-WD-2023",
    image: "photo-1486312338219-ce68d2c6f44d",
  },
  {
    id: 4,
    title: "Cybersecurity Fundamentals",
    provider: "IBM",
    certificateId: "IBM-CF-2023",
    link: "https://www.ibm.com/training/certification/IBM-CF-2023",
    image: "photo-1581091226825-a6a2a5aee158",
  },
  {
    id: 5,
    title: "Power BI - Business Intelligence for Beginners to Advance",
    provider: "Udemy",
    certificateId: "UC-powerbi-2023",
    link: "https://www.udemy.com/certificate/UC-powerbi-2023",
    image: "photo-1498050108023-c5249f4df085",
  },
  {
    id: 6,
    title: "Human Resource Management (HRM)",
    provider: "Teachnook",
    certificateId: "TN-HRM-2023",
    link: "https://teachnook.com/certificate/TN-HRM-2023",
    image: "photo-1488590528505-98d2b5aba04b",
  },
];

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCert, setSelectedCert] = useState<typeof certificationsData[0] | null>(null);
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
      id="certifications"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Certifications
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsData.map((cert, index) => (
              <Card
                key={cert.id}
                className="bg-gray-800/60 backdrop-blur-sm border-gray-700 hover:border-purple-500/30 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 cursor-pointer"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
                onClick={() => setSelectedCert(cert)}
              >
                <CardHeader>
                  <CardTitle className="text-xl text-white">
                    {cert.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-400">{cert.provider}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="bg-gray-800 text-white border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-purple-400">
              {selectedCert?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            <div className="aspect-video relative overflow-hidden rounded-lg">
              <img
                src={`https://images.unsplash.com/${selectedCert?.image}`}
                alt={selectedCert?.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-2">
              <p><span className="font-semibold text-purple-400">Provider:</span> {selectedCert?.provider}</p>
              <p><span className="font-semibold text-purple-400">Certificate ID:</span> {selectedCert?.certificateId}</p>
              <a
                href={selectedCert?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline block"
              >
                View Certificate
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Certifications;
