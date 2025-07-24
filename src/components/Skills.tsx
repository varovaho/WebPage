import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: "Advanced" },
        { name: "SQL", level: "Advanced" },
        { name: "Python", level: "Intermediate" },
        { name: "XML/JSON", level: "Intermediate" },
        { name: "HTML", level: "Beginner" },
      ]
    },
    {
      title: "Frameworks & Technologies",
      skills: [
        { name: "Spring Boot", level: "Intermediate" },
        { name: "Hibernate/JPA", level: "Intermediate" },
        { name: "Maven/Gradle", level: "Intermediate" },
        { name: "RESTful APIs", level: "Advanced" },
        { name: "Microservices", level: "Beginner" },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: "Advanced" },
        { name: "PostgreSQL", level: "Intermediate" },
        { name: "MongoDB", level: "Beginner" },
        { name: "Database Design", level: "Advanced" },
        { name: "Query Optimization", level: "Intermediate" },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: "Advanced" },
        { name: "Docker", level: "Beginner" },
        { name: "Visual Studio", level: "Advanced" },
        { name: "Linux", level: "Intermediate" },
        { name: "Agile/Scrum", level: "Intermediate" },
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-primary text-primary-foreground";
      case "Intermediate":
        return "bg-accent text-accent-foreground";
      case "Beginner":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here's an overview of my technical expertise and proficiency levels across
            different technologies and tools I work with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-border hover:shadow-card transition-smooth">
              <h3 className="text-2xl font-semibold mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex justify-between items-center">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <Badge className={getLevelColor(skill.level)}>
                      {skill.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Learning Goals */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-card border-border text-center">
            <h3 className="text-2xl font-semibold mb-4">Currently Learning</h3>
            <p className="text-muted-foreground mb-6">
              I'm always expanding my backend and cloud skills to align with modern enterprise demands.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Spring Security", "Kafka", "Docker & Kubernetes", "AWS Core Services", "Redis"].map((tech) => (
                  <Badge key={tech} variant="outline" className="text-primary border-primary">
                    {tech}
                  </Badge>
                ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;