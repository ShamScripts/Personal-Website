
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projectsData = [
  {
    id: 1,
    title: "College Management System",
    period: "January 2025 - Present",
    description: "A comprehensive College Management System integrating ERP, LMS, and administrative features.",
    details: [
      "Developing a comprehensive College Management System integrating ERP, LMS, and administrative features, providing streamlined portals for students, faculty, parents, and admins.",
      "Creating a student, faculty, and a dashboard with modules for academics, administration, communication, canteen, clubs, and transport.",
      "Implementing data visualization and automation features for efficient management.",
      "It includes functionalities for attendance, grades, fee management, course scheduling, communication, and more, with secure authentication and real-time updates.",
    ],
    link: "#",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Magnetic Field-Based Localization System",
    period: "February 2025 - Present",
    description: "A Python-based system for precise receiver coil localization in wireless power transfer scenarios.",
    details: [
      "Developing a Python-based system for precise receiver coil localization in wireless power transfer scenarios.",
      "The project involved matrix manipulation, data analysis, and the design of innovative coil shapes for voltage detection.",
    ],
    link: "#",
    category: "Hardware & Python",
  },
  {
    id: 3,
    title: "Heart Disease Classification",
    period: "January 2025 - February 2025",
    description: "End-to-End ML Pipeline to classify heart disease based on clinical data.",
    details: [
      "Built a complete ML pipeline to classify heart disease based on clinical data.",
      "Applied logistic regression and random forest models with hyperparameter tuning.",
      "Conducted EDA, model evaluation, and deployed the project with an interactive frontend using Streamlit.",
    ],
    link: "#",
    category: "Machine Learning",
  },
  {
    id: 4,
    title: "Predicting Bulldozer Sale Prices",
    period: "February 2025 - March 2025",
    description: "Regression model to forecast bulldozer prices using historical data.",
    details: [
      "Developed a regression model to forecast bulldozer prices using historical data.",
      "Used Random Forest Regressor with feature engineering, date parsing, and RMSLE evaluation.",
      "Preprocessed large datasets from Kaggle and improved prediction accuracy through model tuning.",
    ],
    link: "#",
    category: "Machine Learning",
  },
  {
    id: 5,
    title: "ACM-W JuMP Machine Learning Project",
    period: "February 2025 - Present",
    description: "AI-powered drug recommendation system for personalized healthcare decisions.",
    details: [
      "Engaged in a Python and machine learning project under the ACM-W JuMP program.",
      "Currently developing an AI-powered drug recommendation system aimed at supporting personalized healthcare decisions.",
      "Designing machine learning models to analyze patient data such as symptoms, diagnosis, and medical history.",
      "Implementing classification algorithms to predict the most suitable medications with minimized side effects.",
      "Using natural language processing (NLP) to extract insights from clinical notes and symptom descriptions.",
      "Focused on improving drug recommendation accuracy through continuous model training and evaluation.",
    ],
    link: "#",
    category: "Machine Learning & Healthcare",
  },
  {
    id: 6,
    title: "FreeCodeCamp ML Projects",
    period: "November 2024 - March 2025",
    description: "Various machine learning and data analysis projects using Python and Scikit-learn.",
    details: [
      "Completed certification by building various ML and data analysis projects using Python and Scikit-learn:",
      "Cat and Dog Image Classifier: Built a CNN-based image classifier using TensorFlow/Keras to distinguish between cat and dog images.",
      "Book Recommendation Engine using KNN: Developed a content-based book recommendation system using K-Nearest Neighbors and cosine similarity.",
      "Linear Regression Health Costs Calculator: Predicted health insurance costs with a linear regression model based on demographic and health factors.",
      "Neural Network SMS Text Classifier: Implemented a neural network to classify SMS messages as spam or ham using NLP and deep learning.",
      "Rock Paper Scissors with Deep Learning: Trained a deep learning model to recognize hand gestures for a Rock Paper Scissors game using image classification.",
    ],
    link: "#",
    category: "Machine Learning",
  },
  {
    id: 7,
    title: "Data Analysis & Visualization Project",
    period: "September 2024 - December 2024",
    description: "Comprehensive data analysis project covering product sales, regional performance, IT services, HR, and finance.",
    details: [
      "Product Analysis: Analyzed product sales data and customer purchase behaviors, identifying trends and areas for product improvement.",
      "Regional Analysis: Assessed market trends and regional performance metrics to optimize business strategies and expand into profitable areas.",
      "IT Ticket Analysis: Automated the collection and visualization of IT service desk data, providing insights into issue resolution times and resource allocation.",
      "HR Report: Explored AI-driven analytics to optimize HR processes, improving hiring, training, and employee performance evaluations.",
      "Sales and Finance Report: Developed interactive dashboards to monitor key financial KPIs, enhancing decision-making for sales and budget planning.",
    ],
    link: "#",
    category: "Data Analysis",
  },
  {
    id: 8,
    title: "Dijkstra Algorithm for Tokyo Metro",
    period: "October 2024 - November 2024",
    description: "Java-based shortest path algorithm for Tokyo Metro routes.",
    details: [
      "Developed a Java-based shortest path algorithm for Tokyo Metro routes.",
      "Implemented Dijkstra's algorithm for efficient and optimized metro navigation.",
    ],
    link: "#",
    category: "Algorithms",
  },
  {
    id: 9,
    title: "Hackathon Projects",
    period: "2023 - 2025",
    description: "Collection of projects developed during various hackathons.",
    details: [
      "Chatbot-Integrated E-commerce Webpage (ACM-W x MTC Hackathon 2025): Enhanced user interaction with dynamic responses.",
      "SuzieAI (ACM x E-Cell Hackathon 2024): Developed a generative AI-powered application for personalized robotic avatars.",
      "Unicare (ACM x E-Cell Hackathon 2023): Built a healthcare app for insurance management, health screenings, and appointment scheduling.",
    ],
    link: "#",
    category: "Hackathons",
  },
  {
    id: 10,
    title: "Employee Management System",
    period: "October 2022 - January 2023",
    description: "Python-based system for employee data management, record-keeping, and reporting.",
    details: [
      "Developed a comprehensive Employee Management System using Python, designed to streamline employee data management, including details such as personal information, job roles, salary, and attendance.",
      "The system allows for easy record management, data updates, and report generation, enhancing organizational efficiency.",
    ],
    link: "#",
    category: "Python",
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const sectionRef = useRef<HTMLDivElement>(null);

  const categories = ["All", ...new Set(projectsData.map(project => project.category))];

  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  const toggleProject = (id: number) => {
    if (expandedProject === id) {
      setExpandedProject(null);
    } else {
      setExpandedProject(id);
    }
  };

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
      id="projects"
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
          <h2 className="text-4xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Projects
            </span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full",
                  activeCategory === category
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "border-purple-500 text-purple-500 hover:bg-purple-500/10"
                )}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className={`bg-gray-800/90 border-gray-700 hover:border-purple-500/30 overflow-hidden transition-all duration-500 ${
                  expandedProject === project.id
                    ? "md:col-span-2 lg:col-span-3 row-span-2"
                    : ""
                } transform hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                <CardHeader className="group cursor-pointer" onClick={() => toggleProject(project.id)}>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <span className="px-3 py-1 text-xs bg-purple-500/20 text-purple-400 rounded-full">
                      {project.period}
                    </span>
                  </div>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    expandedProject === project.id
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <CardContent className="text-gray-300">
                    <ul className="space-y-2">
                      {project.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full mt-2 border-purple-500 text-purple-400 hover:bg-purple-500/10"
                      asChild
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
