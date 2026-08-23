const TAGS = [
  ["#ReactJS", "#NodeJS"],
  ["#MongoDB", "#Express"],
  ["#PHP", "#CodeIgniter"],
  ["#Tailwind_&_shadcn/ui"],
];

export default function Hero() {
  return (
    <section className="px-5 sm:px-10 pt-2 pb-10">
      <div className="grid sm:grid-cols-2 gap-6 items-stretch">
        {/* Tags + arrow */}
        <div className="flex flex-col justify-between py-4">
          <div>
            <svg
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
              className="text-ink mb-10 sm:mb-16"
              aria-hidden="true"
            >
              <path
                d="M18 18 L54 54 M54 54 V26 M54 54 H26"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <ul className="space-y-0 border-t border-ink/15 text-sm sm:text-base">
            {TAGS.map((row, i) => (
              <li
                key={i}
                className="flex gap-6 py-3 border-b border-ink/15 font-medium"
              >
                {row.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </li>
            ))}
          </ul>
        </div>

        {/* Blue signature block */}
        <div className="relative bg-blue rounded-2xl overflow-hidden min-h-[420px] flex flex-col justify-between p-6 sm:p-8">
          <div
            className="font-display font-bold text-paper leading-[0.85] select-none"
            style={{ fontSize: "clamp(3.2rem, 12vw, 5.5rem)" }}
          >
            <div className="rotate-[-3deg] translate-x-2">FULL</div>
            <div className="rotate-[2deg] translate-x-6">STACK</div>
            <div className="rotate-[-2deg]">DEV</div>
          </div>
          <div className="flex items-end justify-between mt-8">
            <span className="font-display font-bold text-paper text-2xl sm:text-3xl">
              2026
            </span>
            <span className="h-3 w-16 sm:w-24 bg-paper rounded-sm" />
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <a
          href="#about"
          className="flex items-center gap-2 text-sm font-medium text-ink hover:text-blue transition-colors focus-ring rounded"
        >
          See More
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 4v16m0 0l-6-6m6 6l6-6"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
