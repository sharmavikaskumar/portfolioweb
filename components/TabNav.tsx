"use client";

const TABS = ["About me", "Office Work", "Resume", "Work"] as const;
export type Tab = (typeof TABS)[number];

export default function TabNav({
  active,
  onChange,
}: {
  active: Tab;
  onChange: (tab: Tab) => void;
}) {
  return (
    <div className="sticky top-0 z-20 bg-paper/95 backdrop-blur-sm border-y border-ink/15">
      <div className="px-5 sm:px-10 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <div className="w-8 h-8 rounded-full bg-ink flex items-center justify-center text-paper text-xs font-display font-bold mr-3">
            V
          </div>
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => onChange(tab)}
              className={`relative px-3 sm:px-4 py-4 text-sm font-medium transition-colors focus-ring rounded ${
                active === tab ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {tab}
              {active === tab && (
                <span className="absolute left-3 right-3 sm:left-4 sm:right-4 -bottom-[1px] h-[2px] bg-ink" />
              )}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/sharmavikaskumar"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-8 h-8 rounded-full border border-ink/20 flex items-center justify-center hover:bg-ink hover:text-paper transition-colors focus-ring"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.94 3.2 9.13 7.65 10.61.56.1.76-.24.76-.53 0-.26-.01-1.13-.01-2.06-3.11.68-3.77-1.32-3.77-1.32-.51-1.3-1.24-1.64-1.24-1.64-1.02-.7.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.93.1-.72.39-1.21.71-1.49-2.48-.28-5.1-1.24-5.1-5.53 0-1.22.44-2.22 1.15-3-.11-.28-.5-1.42.11-2.96 0 0 .93-.3 3.05 1.15a10.6 10.6 0 0 1 5.56 0c2.12-1.45 3.05-1.15 3.05-1.15.61 1.54.22 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.63 5.24-5.13 5.52.4.35.76 1.03.76 2.08 0 1.5-.01 2.71-.01 3.08 0 .29.2.64.77.53 4.44-1.48 7.64-5.67 7.64-10.61C23.02 5.24 18.27.5 12 .5Z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/vikas-kumar-sharma-dev/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-8 h-8 rounded-full border border-ink/20 flex items-center justify-center hover:bg-blue hover:text-paper hover:border-blue transition-colors focus-ring text-xs font-bold font-display"
          >
            in
          </a>
          <a
            href="/vikas-resume.pdf"
            aria-label="Download resume"
            className="w-8 h-8 rounded-full border border-ink/20 flex items-center justify-center hover:bg-ink hover:text-paper transition-colors focus-ring"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
