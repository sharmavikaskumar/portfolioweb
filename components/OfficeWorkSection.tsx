"use client";

import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";

const ROLES = [
  {
    title: "Full Stack Engineer",
    period: "Nov 2025 – Present",
    type: "Full-time · On-site",
    system: "PTVC (Enterprise Procurement & Budgeting System)",
    summary:
      "Contributing core features and workflow enhancements to PTVC — BARC's live enterprise procurement platform managing company-wide annual budgets, employee records, tender applications, and indent tracking.",
    bullets: [
      "Extending the multi-stage approval workflow: added new approval stages and dynamic UI modules to the existing 7-level authorization system for tenders and indents.",
      "Working directly in a production codebase (PHP, CodeIgniter 3, MySQL) utilized across BARC departments, delivering features without disrupting live operational workflows.",
      "Collaborating with senior developers to analyze legacy architecture, adhere to enterprise security patterns, and integrate new modules cleanly into the system.",
    ],
    skills: ["PHP", "CodeIgniter 3", "MySQL", "Node.js", "Full-Stack Development", "Enterprise Workflows", "UI Modules"],
  },
  {
    title: "Back End Developer",
    period: "Aug 2025 – Nov 2025 · 4 mos",
    type: "Full-time · On-site",
    system: "Billing & Reporting System Architecture",
    summary:
      "Engineered backend application logic, structured database models, and optimized reporting pipelines for internal administrative operations.",
    bullets: [
      "CodeIgniter 3 and PHP application development for internal department operations.",
      "Designed billing platform architecture and high-performance reporting modules.",
      "Structured REST API endpoints and executed SQL query indexing and database optimization.",
    ],
    skills: ["CodeIgniter 3", "PHP", "MySQL", "Back-End Web Development", "API Design", "Database Optimization", "Billing Systems"],
  },
];

const QUICK_STATS = [
  { label: "Company", value: "Bhabha Atomic Research Centre (BARC)" },
  { label: "Location", value: "Tarapur, Maharashtra, India" },
  { label: "Tenure", value: "Full-time · 1 yr 1 mo" },
  { label: "Primary System", value: "PTVC Enterprise Procurement" },
];

export default function OfficeWorkSection() {
  return (
    <section id="office-work" className="px-5 sm:px-10 py-10">
      {/* Header Card */}
      <MotionWrapper type="fade-up" duration={0.6}>
        <div className="bg-ink text-paper rounded-2xl p-4 sm:p-8 mb-8 sm:mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block bg-blue text-paper text-xs font-semibold px-3 py-1 rounded-full">
                  Bhabha Atomic Research Centre (BARC)
                </span>
                <span className="text-xs text-paper/70">Tarapur, Maharashtra, India</span>
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl">
                Office Work & Corporate Experience
              </h2>
              <p className="text-paper/80 text-sm sm:text-base leading-relaxed max-w-3xl mt-3">
                Full-stack software engineering in live enterprise production systems, building 7-level authorization workflows, procurement management, and high-reliability backend billing & reporting architecture.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 shrink-0 w-full lg:min-w-[280px] lg:w-auto">
              {QUICK_STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="border border-paper/15 rounded-xl p-3 bg-paper/5"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + i * 0.08,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <span className="text-[11px] text-paper/60 block">{stat.label}</span>
                  <span className="font-display font-semibold text-xs sm:text-sm text-paper">{stat.value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </MotionWrapper>

      {/* Experience Roles Timeline / Grid */}
      <MotionWrapper type="fade-up" delay={0.1}>
        <h3 className="font-display font-semibold text-xl mb-6">BARC Roles & Key Contributions</h3>
      </MotionWrapper>

      <div className="space-y-8">
        {ROLES.map((role, roleIdx) => (
          <MotionWrapper key={role.title} type="fade-up" delay={0.15 * roleIdx} duration={0.6}>
            <div className="border border-ink/20 rounded-2xl p-4 sm:p-8 bg-paper hover:border-blue transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-ink/10">
                <div>
                  <span className="text-xs font-semibold text-blue uppercase tracking-wider">
                    {role.type}
                  </span>
                  <h4 className="font-display font-bold text-2xl text-ink mt-0.5">
                    {role.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted font-medium mt-0.5">
                    System: <span className="text-ink font-semibold">{role.system}</span>
                  </p>
                </div>
                <span className="inline-block px-3 py-1 rounded-full border border-ink/20 text-xs font-semibold text-ink bg-ink/5 self-start sm:self-auto">
                  {role.period}
                </span>
              </div>

              <p className="text-sm text-ink/90 leading-relaxed mb-4">
                {role.summary}
              </p>

              <h5 className="font-display font-semibold text-sm mb-3 text-ink">Key Responsibilities & Achievements:</h5>
              <ul className="space-y-2.5 mb-6">
                {role.bullets.map((bullet, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-muted flex items-start gap-2.5 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue mt-2 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-ink/10 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-muted mr-1">Skills & Tools:</span>
                {role.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-ink/5 border border-ink/15 text-ink"
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: 0.05 * skillIdx,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </MotionWrapper>
        ))}
      </div>
    </section>
  );
}
