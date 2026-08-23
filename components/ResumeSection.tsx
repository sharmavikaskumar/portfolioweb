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
      <div className="grid sm:grid-cols-3 gap-10">
        {/* Experience */}
        <div>
          <h3 className="font-display font-semibold text-xl mb-4">
            Experience
          </h3>
          <div className="space-y-4">
            {EXPERIENCE.map((item) => (
              <div
                key={item.org}
                className="border border-ink/20 rounded-xl p-4"
              >
                <span className="inline-block bg-blue text-paper text-[11px] font-semibold px-2 py-1 rounded-full mb-2">
                  {item.period}
                </span>
                <p className="text-xs text-muted">{item.org}</p>
                <p className="font-display font-semibold">{item.role}</p>
                <p className="text-xs text-muted mt-1">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise */}
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
            {HARDSKILLS.map((s) => (
              <span
                key={s}
                className="bg-ink text-paper text-xs font-medium px-3 py-2 rounded-lg"
              >
                {s}
              </span>
            ))}
          </div>

          <h4 className="font-display font-semibold text-lg mb-3">
            Softskill
          </h4>
          <div className="flex flex-wrap gap-2">
            {SOFTSKILLS.map((s, i) => (
              <span
                key={s}
                className={`text-xs font-medium px-3 py-2 rounded-full border ${i % 2 === 0
                  ? "bg-blue text-paper border-blue"
                  : "border-ink/20"
                  }`}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Education */}
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
      </div>
    </section>
  );
}
