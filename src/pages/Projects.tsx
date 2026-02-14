import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "FindYourCity",
    tagline: "AI-Powered Geospatial Guessing Game",
    description:
      "A GeoGuessr-inspired web game that uses OpenAI to generate clues about real-world cities. Players guess locations based on AI-generated hints while learning geography interactively. Features CI/CD with GitHub Actions and containerized deployment.",
    tech: ["FastAPI", "React", "OpenAI API", "PostgreSQL", "Docker", "GitHub Actions"],
    github: "https://github.com/achukola",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl md:text-5xl font-bold mb-12"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h1>

        <div className="grid gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors group"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary">{project.tagline}</p>
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs">
                    {t}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mt-12 text-sm"
        >
          More projects coming soon — stay tuned!
        </motion.p>
      </div>
    </div>
  );
};

export default Projects;
