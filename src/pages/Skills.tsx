import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "HTML/CSS"],
  },
  {
    title: "Backend & Frameworks",
    skills: ["Spring Boot", "FastAPI", "React", "REST APIs", "Microservices"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (Lambda, DynamoDB, S3, SQS, SNS, CloudWatch, CDK)", "CI/CD", "GitHub Actions", "Docker"],
  },
  {
    title: "AI & LLM",
    skills: ["OpenAI API", "LangChain", "Retrieval-Augmented Generation (RAG)", "Prompt Engineering"],
  },
  {
    title: "Databases & Data",
    skills: ["DynamoDB", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    title: "Tools & Practices",
    skills: ["Git", "Agile/Scrum", "System Design", "Unit & Integration Testing", "Monitoring & Observability"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Skills = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl md:text-5xl font-bold mb-12"
        >
          Technical <span className="gradient-text">Skills</span>
        </motion.h1>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={item}
              className="glass rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
