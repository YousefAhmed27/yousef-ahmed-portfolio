import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github } from "lucide-react";

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const projects = [
    {
      title: "E-commerce Project",
      description: "A comprehensive e-commerce platform built with HTML, CSS, JavaScript, and Angular, featuring product listings, shopping cart functionality, and user authentication.",
      image: "project-placeholder.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "Angular"],
      demoUrl: "https://example.com/ecommerce-demo",
      githubUrl: "https://github.com/yousef-ahmed/ecommerce-project",
      category: "web"
    },
    {
      title: "AI Agent Template for Workflow",
      description: "A modular AI Agent Template that automates business workflows, including event triggers, lead data collection, CRM integration, and status notifications. Built with FastAPI, LangChain, PostgreSQL, and React.",
      image: "project-placeholder.jpg",
      technologies: ["Python", "FastAPI", "LangChain", "PostgreSQL", "React", "TailwindCSS"],
      demoUrl: "https://example.com/ai-agent-demo",
      githubUrl: "https://github.com/yousef-ahmed/ai-agent-template",
      category: "web"
    },
    {
      title: "Employee Attendance System",
      description: "An attendance tracking system for employees built with C# and ASP.NET backend, with a React frontend. Features include check-in/check-out functionality, attendance reporting, and admin dashboard.",
      image: "project-placeholder.jpg",
      technologies: ["C#", "ASP.NET", "React", "SQL Server"],
      demoUrl: "https://example.com/attendance-demo",
      githubUrl: "https://github.com/yousef-ahmed/attendance-system",
      category: "web"
    },
    {
      title: "Tomato Leaf Disease Recognition",
      description: "A mobile application for precision agriculture that uses machine learning to detect tomato leaf diseases early. Implemented with deep learning models (VGG19, CNN, ANN) and developed with Flutter for cross-platform compatibility.",
      image: "project-placeholder.jpg",
      technologies: ["Python", "TensorFlow", "Flutter", "Deep Learning", "Machine Learning"],
      demoUrl: "https://example.com/tomato-disease-demo",
      githubUrl: "https://github.com/yousef-ahmed/tomato-disease-recognition",
      category: "mobile"
    }
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-2">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my latest works and projects I've contributed to
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="mb-8">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setActiveCategory("all")}>All</TabsTrigger>
              <TabsTrigger value="web" onClick={() => setActiveCategory("web")}>Web</TabsTrigger>
              <TabsTrigger value="mobile" onClick={() => setActiveCategory("mobile")}>Mobile</TabsTrigger>
            </TabsList>
          </div>
        </Tabs>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center text-4xl text-muted-foreground font-light">
                  Project Preview
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="mt-auto pt-6">
                  <div className="flex gap-4">
                    <Button asChild size="sm" variant="outline">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;