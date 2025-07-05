import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-2">Contact Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get in touch for opportunities, collaborations, or just to say hello
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>
                  Fill out the form and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Input placeholder="Name" required />
                    </div>
                    <div className="space-y-2">
                      <Input type="email" placeholder="Email" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Input placeholder="Subject" />
                  </div>
                  <div className="space-y-2">
                    <Textarea
                      placeholder="Your message"
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Here are a few ways you can reach me directly.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mr-3 text-muted-foreground" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:yousef.ahmedalgoahary@gmail.com" className="text-sm text-muted-foreground hover:text-primary">
                      yousef.ahmedalgoahary@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 mr-3 text-muted-foreground" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-sm text-muted-foreground">
                      01018463037
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-muted-foreground" />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-sm text-muted-foreground">
                      Egypt, October City
                    </p>
                  </div>
                </div>
                
                <div className="border-t pt-4 mt-6">
                  <h4 className="font-medium mb-3">Connect with me</h4>
                  <div className="flex space-x-3">
                    <Button asChild variant="outline" size="icon">
                      <a href="https://github.com/yousef-ahmed" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github size={18} />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="icon">
                      <a href="https://www.linkedin.com/in/yousefahmedalgohary/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin size={18} />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="icon">
                      <a href="mailto:yousef.ahmedalgoahary@gmail.com" aria-label="Email">
                        <Mail size={18} />
                      </a>
                    </Button>
                  </div>
                </div>
                
                <div className="border-t pt-4 mt-6">
                  <h4 className="font-medium mb-3">Resume</h4>
                  <Button asChild variant="outline" className="w-full">
                    <a href="/assets/yousef-cv.pdf" target="_blank" rel="noopener noreferrer">
                      Download CV
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;