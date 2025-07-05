import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BadgeCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Skills: React.FC = () => {
  const aiMlSkills = [
    { name: "Machine Learning", level: 88 },
    { name: "Deep Learning", level: 85 },
    { name: "AI Development", level: 82 },
    { name: "Python", level: 90 },
    { name: "TensorFlow", level: 80 },
  ];

  const devSkills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 88 },
    { name: "ASP.NET", level: 85 },
    { name: "C#", level: 90 },
    { name: "HTML/CSS", level: 95 },
    { name: "SQL", level: 80 },
  ];

  const toolsFrameworks = [
    "Git", "Docker", "Repository Pattern", "Angular", "Express.js", 
    "MongoDB", "Tailwind CSS", "Firebase", "Flutter"
  ];

  const softSkills = [
    "Problem Solving",
    "Communication",
    "Team Collaboration",
    "Time Management",
    "Project Management",
    "Critical Thinking"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-2">Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My technical expertise and professional competencies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-6">AI & Machine Learning Skills</h3>
                  <div className="space-y-6">
                    {aiMlSkills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-6">Software Development Skills</h3>
                  <div className="space-y-6">
                    {devSkills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-6">Tools & Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                    {toolsFrameworks.map((tool, index) => (
                      <Badge key={index} variant="secondary" className="text-sm py-1">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-6">Soft Skills</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3">
                    {softSkills.map((skill, index) => (
                      <div key={index} className="flex items-center">
                        <BadgeCheck className="text-primary w-5 h-5 mr-2" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;