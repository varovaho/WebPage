import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Portfolio
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-primary"
              asChild
            >
              <a href="https://github.com/alvarocastisoto" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-primary"
              asChild
            >
              <a href="https://www.linkedin.com/in/alvaro-casti%C3%B1eira-soto-0a6a15275/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-primary"
              asChild
            >
              <a href="mailto:alvarocastisoto@gmail.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            <p>© {currentYear} Álvaro Castiñeira Soto. All rights reserved.</p>
            <p className="mt-1">Built with React, TypeScript, and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;