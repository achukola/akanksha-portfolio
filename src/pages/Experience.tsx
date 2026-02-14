import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Amazon Web Services (AWS)",
    role: "Software Development Engineer",
    period: "Aug 2023 – Present",
    location: "Seattle, WA",
    highlights: [
      "Built and maintained high-throughput Java microservices on the Disbursement Platform, processing $1.5B+ in annual disbursements across global marketplaces.",
      "Designed and implemented a reconciliation framework reducing payment discrepancies by 40%, improving financial accuracy for sellers and vendors.",
      "Led migration of legacy payment workflows to event-driven architecture using AWS Lambda, SQS, and DynamoDB, improving system resilience and reducing latency by 30%.",
      "Implemented comprehensive monitoring and alerting using CloudWatch, reducing mean time to detection (MTTD) for critical payment issues by 50%.",
      "Collaborated cross-functionally with finance, product, and partner teams to deliver features supporting new marketplace launches.",
    ],
  },
  {
    company: "iConsult Collaborative — Syracuse University",
    role: "Technology Consultant",
    period: "Nov 2021 – Sept 2022",
    location: "Syracuse, NY",
    highlights: [
      "Developed full-stack web applications using React and Node.js for university clients, improving operational workflows.",
      "Led a team of 4 consultants to deliver a data analytics dashboard, reducing manual reporting time by 60%.",
      "Conducted stakeholder interviews and translated business requirements into technical specifications.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl md:text-5xl font-bold mb-12"
        >
          Work <span className="gradient-text">Experience</span>
        </motion.h1>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-[12px] top-2 w-[15px] h-[15px] rounded-full bg-primary border-4 border-background hidden md:block" />

                <div className="glass rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <Briefcase size={18} className="text-primary" />
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {exp.company}
                      </h3>
                    </div>
                    <span className="text-xs text-muted-foreground mt-1 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-primary mb-1">{exp.role}</p>
                  <p className="text-xs text-muted-foreground/70 mb-4">{exp.location}</p>

                  <ul className="space-y-3">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
