"use client";
import { motion } from "framer-motion";

const projects = [
  {
    client: "Charter Communications",
    tag: "Telecom",
    tagColor: "indigo",
    summary:
      "Real-time event-driven integration between Salesforce and Apache Kafka for distributed data synchronization.",
    highlights: [
      "Designed REST APIs & async apps integrating Salesforce + Apache Kafka for event-driven data sync",
      "Implemented Webex Alerts replacing email notifications — reduced notification noise by 90%",
      "Led end-to-end Production deployments with zero rollbacks via thorough sanity checks",
      "Resolved multiple high-priority P1 incidents ensuring business continuity; received client recognition",
    ],
    tech: ["Mule 4", "Salesforce", "Apache Kafka", "REST APIs", "Webex", "CloudHub"],
  },
  {
    client: "Mercedes-Benz",
    tag: "Automotive",
    tagColor: "cyan",
    summary:
      "Event notification system and bi-directional Salesforce integration for data migration and quote accuracy.",
    highlights: [
      "Developed an Event Notification System to transfer data from legacy systems to Salesforce",
      "Designed Early Termination Quotation System using Salesforce APIs — improved quote accuracy by 25%",
      "Built bi-directional API integration for seamless data migration between Salesforce & backend DBs",
      "Developed robust MUnit test cases covering all scenarios, ensuring defect-free deployments",
    ],
    tech: ["Mule 4", "Salesforce APIs", "DataWeave", "MUnit", "PostgreSQL", "REST APIs"],
  },
  {
    client: "KPMG",
    tag: "Consulting",
    tagColor: "purple",
    summary:
      "API design and batch integration pipelines from databases and file systems to Salesforce.",
    highlights: [
      "Participated in API design sessions defining resources, message schemas, and data formats via RAML",
      "Implemented data integration flows using Database, HTTP, and Salesforce connectors (PostgreSQL ↔ Salesforce)",
      "Developed batch data pipelines using scheduled jobs and watermarking for reliable data sync",
      "Resolved client-reported issues with timely fixes ensuring SLA compliance",
    ],
    tech: ["RAML", "Salesforce", "PostgreSQL", "Batch Processing", "Watermarking", "HTTP Connector"],
  },
  {
    client: "Gain",
    tag: "Healthcare",
    tagColor: "emerald",
    summary:
      "Scheduler-based batch integration to synchronize healthcare legacy system data with Salesforce.",
    highlights: [
      "Designed and developed scheduler-based batch integration to synchronize data from legacy systems to Salesforce via API requests, automating manual data entry and reducing processing time.",
    ],
    tech: ["Mule 4", "Salesforce", "Batch Processing", "Scheduler", "REST APIs"],
  },
];

const tagColors = {
  indigo: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
  cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
  purple: "bg-purple-500/10 text-purple-300 border-purple-500/30",
  emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-white/5">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Work
          </p>
          <h2 className="text-4xl font-bold text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white/3 border border-white/5 rounded-2xl p-7 hover:border-indigo-500/25 hover:bg-white/5 transition-all"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-white">{proj.client}</h3>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${tagColors[proj.tagColor]}`}
                  >
                    {proj.tag}
                  </span>
                </div>
              </div>

              <p className="text-slate-400 text-sm mb-5">{proj.summary}</p>

              <ul className="space-y-2 mb-6">
                {proj.highlights.map((h, hi) => (
                  <li key={hi} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                    <span className="text-indigo-500 mt-1.5 shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-400 border border-slate-700"
                  >
                    {t}
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
