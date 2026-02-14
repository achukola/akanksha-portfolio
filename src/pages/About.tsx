import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div {...fadeUp}>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-2">
            About <span className="gradient-text">Me</span>
          </h1>
          <div className="flex items-center gap-2 text-muted-foreground mb-10">
            <MapPin size={16} />
            <span>Seattle, WA</span>
          </div>
        </motion.div>

        <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.6 }} className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-16">
          <p>
            I'm a Software Engineer at <span className="text-foreground font-medium">Amazon Web Services (AWS)</span> with
            2.5+ years of experience designing and building high-throughput distributed systems. My work on the
            Disbursement Platform directly impacts <span className="text-foreground font-medium">$1.5 billion+</span> in
            annual seller, vendor, and affiliate disbursements across global marketplaces.
          </p>
          <p>
            I specialize in <span className="text-foreground font-medium">Java, AWS cloud services, and microservice architectures</span>,
            and I'm deeply interested in GenAI and LLM-powered applications. I thrive at the intersection of
            reliability engineering, system design, and developer experience.
          </p>
          <p>
            Outside of work, I enjoy building side projects that blend AI with real-world utility — like
            FindYourCity, an AI-powered geospatial guessing game.
          </p>
        </motion.div>

        {/* Education */}
        <motion.div {...fadeUp} transition={{ delay: 0.2, duration: 0.6 }}>
          <h2 className="font-display text-2xl font-bold mb-8 flex items-center gap-3">
            <GraduationCap size={28} className="text-primary" />
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                school: "Syracuse University",
                degree: "Master of Science, Computer Science",
                period: "Aug 2021 – May 2023",
                location: "Syracuse, NY",
              },
              {
                school: "Mumbai University",
                degree: "Bachelor of Engineering, Computer Science",
                period: "Aug 2016 – Oct 2020",
                location: "Mumbai, India",
              },
            ].map((edu) => (
              <div
                key={edu.school}
                className="glass rounded-xl p-6 hover:border-primary/30 transition-colors"
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {edu.school}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">{edu.degree}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground/70">
                  <span>{edu.period}</span>
                  <span>{edu.location}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
