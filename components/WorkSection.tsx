const PROJECTS = [
  {
    name: "LeadCRM",
    tag: "MERN Stack",
    desc: "A CRM for small businesses with a Kanban pipeline board, bulk WhatsApp messaging with dynamic templates, and an admin analytics dashboard.",
    stack: ["React", "Node.js", "MongoDB", "Tailwind", "shadcn/ui"],
  },
  {
    name: "ResumeTeX",
    tag: "React",
    desc: "A multi-step form that generates LaTeX resumes and redirects users straight to Overleaf to compile and download.",
    stack: ["React", "LaTeX", "Overleaf API"],
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="px-5 sm:px-10 py-10">
      <h3 className="font-display font-semibold text-xl mb-6"> Personal Work</h3>
      <div className="grid sm:grid-cols-2 gap-6">
        {PROJECTS.map((p) => (
          <div
            key={p.name}
            className="border border-ink/20 rounded-2xl p-6 flex flex-col justify-between min-h-[260px] hover:border-blue transition-colors"
          >
            <div>
              <span className="inline-block bg-blue text-paper text-[11px] font-semibold px-2 py-1 rounded-full mb-3">
                {p.tag}
              </span>
              <h4 className="font-display font-bold text-2xl mb-2">
                {p.name}
              </h4>
              <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="text-[11px] font-medium px-2.5 py-1 rounded-full border border-ink/20"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
