
import { useState, useEffect } from "react";
import { Github, Linkedin, Instagram, Mail, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md py-2 shadow-md"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Avatar + Name */}
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage 
              src="/lovable-uploads/29f486af-8a14-4d7c-a510-6568f90824d5.png" 
              alt="Shambhavi Jha"
            />
            <AvatarFallback>
              <User />
            </AvatarFallback>
          </Avatar>
          <Link to="/" className="text-2xl font-bold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Shambhavi Jha
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {[
                { id: "about", label: "About" },
                { id: "education", label: "Education" },
                { id: "skills", label: "Skills" },
                { id: "experience", label: "Experience" },
                { id: "projects", label: "Projects" },
                { id: "research", label: "Research" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <NavigationMenuItem key={item.label}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`${navigationMenuTriggerStyle()} story-link hover-scale transition-all duration-200 text-gray-200 hover:text-white bg-gray-800/50 hover:bg-gray-700/70`}
                  >
                    {item.label}
                  </button>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center space-x-3">
          <Button size="icon" variant="ghost" asChild>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button size="icon" variant="ghost" asChild>
            <a
              href="https://www.linkedin.com/in/shamscript009/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button size="icon" variant="ghost" asChild>
            <a
              href="https://www.instagram.com/love_shambhavi?igsh=MW43Mmpwd2kweGh2bA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </Button>
          <Button size="icon" variant="ghost" asChild>
            <a
              href="mailto:f20230009@dubai.bits-pilani.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gmail"
            >
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
