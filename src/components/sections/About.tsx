import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-2">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn more about my background, experience, and what drives me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-tr from-primary/20 to-secondary/20 aspect-square flex items-center justify-center text-6xl font-bold text-primary">
                  YA
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold">
              Software Engineer with a passion for creating innovative solutions
            </h3>
            <p className="text-muted-foreground">
              I am a dedicated software engineer with experience in building web applications, mobile solutions, 
              and AI/ML systems. My expertise spans across software development and artificial intelligence,
              allowing me to tackle diverse and challenging projects.
            </p>
            <p className="text-muted-foreground">
              I'm passionate about developing clean, efficient code and creating solutions that solve real-world problems.
              My interests include both traditional software development technologies like ASP.NET and modern
              AI/ML approaches for innovative applications.
            </p>
            <p className="text-muted-foreground">
              I continuously expand my knowledge across multiple domains, with a particular focus on the 
              intersection of software engineering and artificial intelligence to build next-generation applications.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <Card>
            <CardContent className="pt-6">
              <h4 className="text-xl font-semibold mb-2">Education</h4>
              <p className="text-sm text-muted-foreground mb-1">Bachelor's Degree in Computer Engineering</p>
              <p className="text-sm text-muted-foreground">MSA University October University for Modern Sciences & Arts, 2018-2025</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h4 className="text-xl font-semibold mb-2">Experience</h4>
              <p className="text-sm text-muted-foreground mb-1">Software Developer at Hassan Allam Holding</p>
              <p className="text-sm text-muted-foreground">June 2022 - September 2025</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h4 className="text-xl font-semibold mb-2">Interests</h4>
              <p className="text-sm text-muted-foreground">
                Web Development, Mobile Apps, UI/UX Design, Cloud Computing, Open Source, AI, Machine Learning, ASP.NET
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;