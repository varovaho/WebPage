import { Card } from "@/components/ui/card";
import { GraduationCap, Code, Database, Server } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Computer Science Student",
      description: "Actively pursuing a degree in software development with a strong interest in backend systems and architecture."
    },
    {
      icon: Code,
      title: "Java Developer",
      description: "Hands-on experience with object-oriented programming, Spring framework, and building reliable enterprise applications."
    },
    {
      icon: Database,
      title: "Skilled in SQL",
      description: "Comfortable working with relational databases, focusing on design, performance tuning, and data integrity."
    },
    {
      icon: Server,
      title: "Backend Specialist",
      description: "Driven by the challenge of building scalable APIs, microservices, and clean backend solutions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a backend-focused software developer passionate about building efficient, scalable, and maintainable applications. 
            With a strong background in Java, SQL, and cross-platform development, I enjoy solving complex problems and automating processes. 
            I'm also a long-distance triathlete, which has taught me discipline, resilience, and a strong work ethic—qualities 
            I apply to every project I take on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-border hover:shadow-card transition-smooth group">
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;