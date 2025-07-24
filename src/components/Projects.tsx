import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Database, Code, Server } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Backend API",
      description: "A complete RESTful API for an e-commerce platform built with Spring Boot. Features include user authentication, product management, order processing, and payment integration.",
      technologies: ["Java", "Spring Boot", "MySQL", "JPA/Hibernate", "JWT"],
      features: [
        "User authentication & authorization",
        "Product catalog management",
        "Order processing system",
        "RESTful API design",
        "Database optimization"
      ],
      icon: Server,
      status: "Completed"
    },
    {
      title: "Library Management System",
      description: "A comprehensive database-driven application for managing library operations including book inventory, member management, and borrowing system.",
      technologies: ["Java", "MySQL", "JDBC", "Maven", "JUnit"],
      features: [
        "Book inventory management",
        "Member registration system",
        "Borrowing & return tracking",
        "Fine calculation system",
        "Search & filter functionality"
      ],
      icon: Database,
      status: "Completed"
    },
    {
      title: "Student Information System",
      description: "A backend system for managing student records, course enrollment, and grade tracking with role-based access control.",
      technologies: ["Java", "Spring Framework", "PostgreSQL", "Thymeleaf"],
      features: [
        "Student record management",
        "Course enrollment system",
        "Grade tracking & reporting",
        "Role-based access control",
        "Data validation & security"
      ],
      icon: Code,
      status: "In Progress"
    }
  ];

  const getStatusColor = (status: string) => {
    return status === "Completed" 
      ? "bg-primary text-primary-foreground" 
      : "bg-accent text-accent-foreground";
  };

  return (
    <section id="projects" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of the backend projects I've worked on, showcasing my skills in 
            Java development, database design, and API creation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-border hover:shadow-card transition-smooth group">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-medium mb-2 text-foreground">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-sm font-medium mb-2 text-foreground">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;