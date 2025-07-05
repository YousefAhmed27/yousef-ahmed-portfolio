import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-xl font-bold text-primary">
            Yousef Ahmed
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <Button asChild size="sm">
            <a href="/assets/yousef-cv.pdf" target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "absolute top-16 left-0 right-0 bg-background border-b md:hidden",
        isOpen ? "block" : "hidden"
      )}>
        <nav className="container flex flex-col py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-3 text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              {item.label}
            </a>
          ))}
          <Button className="mt-3" asChild>
            <a href="/assets/yousef-cv.pdf" target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;