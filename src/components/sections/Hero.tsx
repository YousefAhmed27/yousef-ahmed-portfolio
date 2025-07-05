import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <Avatar className="w-32 h-32 border-4 border-primary/20">
            <AvatarFallback className="text-3xl">YA</AvatarFallback>
            <AvatarImage src="/assets/images/profile-picture.png" alt="Yousef Ahmed" />
          </Avatar>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Hi, I'm <span className="text-primary">Yousef Ahmed</span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-muted-foreground">
            Software Developer specializing in creating elegant, efficient, and user-friendly solutions.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button asChild size="lg">
            <a href="/assets/yousef-cv.pdf" target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex gap-6"
        >
          <Button asChild variant="ghost" size="icon">
            <a href="https://github.com/yousef-ahmed" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={24} />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a href="https://www.linkedin.com/in/yousefahmedalgohary/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
          </Button>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <Button variant="ghost" size="icon" asChild>
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="animate-bounce" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;