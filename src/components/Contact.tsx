import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alvarocastisoto@gmail.com",
      href: "mailto:alvarocastisoto@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+34 690 29 50 10",
      href: "tel:+34690295010"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pontevedra, Spain",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/alvarocastisoto",
      color: "hover:text-foreground"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/alvaro-casti%C3%B1eira-soto-0a6a15275/",
      color: "hover:text-blue-500"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Contact <span className="bg-gradient-primary bg-clip-text text-transparent">Info</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-4">
          If you're hiring or looking for a motivated backend developer, feel free to get in touch.
        </p>
        <p className="text-muted-foreground mb-8">
          I'm open to new roles and always happy to connect with companies 
          or teams working on meaningful projects.
        </p>


        <div className="space-y-8">



          {contactInfo.map((item, index) => (
            <Card key={index} className="p-4 bg-gradient-card border-border hover:shadow-card transition-smooth">
              <a href={item.href} className="flex items-center space-x-4 group">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-medium group-hover:text-primary transition-smooth">{item.value}</p>
                </div>
              </a>
            </Card>
          ))}

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Follow Me</h4>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className={`${social.color} transition-smooth`}
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
