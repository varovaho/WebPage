import { Card } from "@/components/ui/card";
import { GraduationCap, Code, Database, Server } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Computer Science Student",
      description: "Currently pursuing my degree with focus on software engineering and backend systems"
    },
    {
      icon: Code,
      title: "Java Developer",
      description: "Experienced in object-oriented programming, Spring framework, and enterprise applications"
    },
    {
      icon: Database,
      title: "SQL Expert",
      description: "Proficient in database design, optimization, and working with various database systems"
    },
    {
      icon: Server,
      title: "Backend Specialist",
      description: "Passionate about building scalable APIs, microservices, and server-side architecture"
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

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-card border-border">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                As a computer science student, I've developed a strong foundation in programming principles 
                and software engineering practices. My focus on backend development stems from my fascination 
                with how complex systems work behind the scenes. I enjoy the challenge of creating efficient, 
                scalable solutions that can handle real-world demands.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Through academic projects and self-directed learning, I've gained hands-on experience with 
                Java ecosystem, database management, and modern development practices. I'm constantly 
                exploring new technologies and methodologies to stay current with industry trends.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;