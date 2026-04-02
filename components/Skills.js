"use client";
import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "MuleSoft Platform",
    color: "indigo",
    skills: [
      "Anypoint Studio",
      "Anypoint Platform",
      "Mule 4",
      "API Designer",
      "API Manager",
      "Runtime Manager",
      "CloudHub",
      "Anypoint Exchange",
      "Anypoint MQ",
      "Object Store",
      "MUnit",
    ],
  },
  {
    category: "API Design & Protocols",
    color: "purple",
    skills: [
      "RAML",
      "REST APIs",
      "HTTP/HTTPS",
      "SFTP",
      "JSON",
      "API-Led Connectivity",
      "Experience APIs",
      "Process APIs",
      "System APIs",
    ],
  },
  {
    category: "Data & Transformation",
    color: "cyan",
    skills: [
      "DataWeave 2.0",
      "Data Mapping",
      "JSON Transformations",
      "XML Transformations",
      "CSV Transformations",
    ],
  },
  {
    category: "Connectors & Integration",
    color: "emerald",
    skills: [
      "Salesforce Connector",
      "Database Connector",
      "SFTP Connector",
      "File Connector",
      "Kafka",
      "JMS",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    category: "DevOps & Tools",
    color: "amber",
    skills: [
      "GitHub",
      "Bitbucket",
      "CI/CD Pipelines",
      "Postman",
      "JIRA",
      "Confluence",
      "Splunk",
    ],
  },
  {
    category: "Languages & Methodologies",
    color: "rose",
    skills: ["Python", "SQL", "Agile", "Scrum", "Waterfall", "SDLC"],
  },
];

const colorMap = {
  indigo: "border-indigo-500/30 bg-indigo-500/10 text-indigo-300",
  purple: "border-purple-500/30 bg-purple-500/10 text-purple-300",
  cyan: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
  emerald: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  amber: "border-amber-500/30 bg-amber-500/10 text-amber-300",
  rose: "border-rose-500/30 bg-rose-500/10 text-rose-300",
};

const headingColor = {
  indigo: "text-indigo-400",
  purple: "text-purple-400",
  cyan: "text-cyan-400",
  emerald: "text-emerald-400",
  amber: "text-amber-400",
  rose: "text-rose-400",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-white/5">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Technical Skills
          </p>
          <h2 className="text-4xl font-bold text-white">
            Tools & <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="bg-white/3 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors"
            >
              <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${headingColor[group.color]}`}>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${colorMap[group.color]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
