"use client";

import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";

const EXPERIENCE = [
  {
    period: "2025 – Present",
    org: "BARC (Contractor)",
    role: "Full-Stack Developer",
    detail: "Internal web apps — PHP, CodeIgniter 3, jQuery, Next.js, Tailwind, MySQL,MUI",
  },
  {
    period: "2025 – Present",
    org: "Personal Projects",
    role: "MERN Stack Developer",
    detail: "LeadCRM, ResumeTeX — React, Node.js, MongoDB, Tailwind",
  },
];

const HARDSKILLS = ["React", "Node.js", "MongoDB", "Express", "PHP", "MySQL", "Next.js"];
const SOFTSKILLS = ["#Problem_Solving", "#Ownership", "#Curiosity", "#Communication"];

export default function ResumeSection() {
  return (
    <section id="resume" className="px-5 sm:px-10 py-10">
      <div className="grid sm:grid-cols-3 gap-6 sm:gap-10">
        {/* Experience */}
        <MotionWrapper type="fade-up" delay={0} duration={0.6}>
          <div>
            <h3 className="font-display font-semibold text-xl mb-4">
              Experience
            </h3>
            <div className="space-y-4">
              {EXPERIENCE.map((item, i) => (
                <motion.div
                  key={item.org}
                  className="border border-ink/20 rounded-xl p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 * i,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <span className="inline-block bg-blue text-paper text-[11px] font-semibold px-2 py-1 rounded-full mb-2">
                    {item.period}
                  </span>
                  <p className="text-xs text-muted">{item.org}</p>
                  <p className="font-display font-semibold">{item.role}</p>
                  <p className="text-xs text-muted mt-1">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </MotionWrapper>

        {/* Expertise */}
        <MotionWrapper type="fade-up" delay={0.15} duration={0.6}>
          <div>
            <h3 className="font-display font-semibold text-xl mb-4">
              Expertise
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-6">
              Full-stack web development, internal tooling, CRM systems,
              resume/document automation, responsive UI design.
            </p>

            <h4 className="font-display font-semibold text-lg mb-3">
              Hardskill
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {HARDSKILLS.map((s, i) => (
                <motion.span
                  key={s}
                  className="bg-ink text-paper text-xs font-medium px-3 py-2 rounded-lg"
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: 0.04 * i,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  {s}
                </motion.span>
              ))}
            </div>

            <h4 className="font-display font-semibold text-lg mb-3">
              Softskill
            </h4>
            <div className="flex flex-wrap gap-2">
              {SOFTSKILLS.map((s, i) => (
                <motion.span
                  key={s}
                  className={`text-xs font-medium px-3 py-2 rounded-full border ${i % 2 === 0
                    ? "bg-blue text-paper border-blue"
                    : "border-ink/20"
                    }`}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: 0.04 * i,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>
        </MotionWrapper>

        {/* Education */}
        <MotionWrapper type="fade-up" delay={0.3} duration={0.6}>
          <div>
            <h3 className="font-display font-semibold text-xl mb-4">
              Education
            </h3>
            <div className="border border-ink/20 rounded-xl p-4">
              <span className="inline-block bg-ink text-paper text-[11px] font-semibold px-2 py-1 rounded-full mb-2">
                2022-2025
              </span>
              <p className="font-display font-semibold">BSC IT </p>
              <p className="text-xs text-muted mt-1">MUMBAI UNIVERSITY</p>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
