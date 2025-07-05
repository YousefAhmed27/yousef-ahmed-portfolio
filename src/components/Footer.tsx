import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/40">
      <div className="container py-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Yousef Ahmed</h3>
            <p className="text-muted-foreground">Portfolio &copy; {currentYear}. All rights reserved.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/yousef-ahmed" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github size={20} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/yousefahmedalgohary/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:yousef.ahmedalgoahary@gmail.com" aria-label="Email">
                  <Mail size={20} />
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Made with React & Shadcn-UI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;