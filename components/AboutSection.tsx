export default function AboutSection() {
  return (
    <section id="about" className="px-5 sm:px-10 py-10">
      <div className="grid sm:grid-cols-2 gap-6">
        {/* Photo / intro card */}
        <div className="relative bg-ink rounded-2xl overflow-hidden min-h-[380px] p-6 flex flex-col justify-between">
          <span className="text-paper/70 text-sm font-medium">Hello,</span>
          <h2 className="font-display font-bold text-paper leading-[0.95] text-4xl sm:text-5xl">
            My name
            <br />
            is Vikas
          </h2>
          <p className="text-paper/70 text-xs sm:text-sm leading-relaxed max-w-xs mt-6">
            I'm a full-stack developer who moves between enterprise systems
            and personal MERN projects, always looking for the next thing
            worth building.
          </p>
        </div>

        {/* Introduction + Get in touch */}
        <div className="flex flex-col gap-8">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-semibold text-xl">
                Introduction
              </h3>
            </div>
            <div className="border border-ink/20 rounded-2xl p-5">
              <p className="font-display font-semibold text-lg mb-2">
                A Full-Stack Developer based in Mumbai, Maharashtra
              </p>
              <p className="text-sm text-muted leading-relaxed">
                I work as a contractor at Bhabha Atomic Research Centre
                (BARC), building internal web applications with PHP,
                CodeIgniter,React.js,Next.js, and MySQL. Outside of that, I build
                personal projects on the MERN stack with Tailwind CSS and
                shadcn/ui — I enjoy the whole path from backend logic to
                interface polish.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-xl mb-3">
              Get In Touch
            </h3>
            <div className="grid grid-cols-3 gap-3">
              <a
                href="mailto:sharmavikaskumar95@gmail.com"
                className="bg-ink text-paper rounded-xl p-3 flex flex-col justify-between h-24 hover:opacity-90 transition-opacity focus-ring"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 6h18v12H3z M3 6l9 7 9-7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[11px] break-all opacity-80">
                  sharmavikaskumar95@gmail.com
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/vikas-kumar-sharma-dev/"
                target="_blank"
                rel="noreferrer"
                className="bg-blue text-paper rounded-xl p-3 flex flex-col justify-between h-24 hover:opacity-90 transition-opacity focus-ring"
              >
                <span className="font-display font-bold text-lg">in</span>
                <span className="text-[11px] break-all opacity-80">
                  linkedin.com/in/vikas-kumar-sharma-dev
                </span>
              </a>
              <a
                href="https://github.com/sharmavikaskumar"
                target="_blank"
                rel="noreferrer"
                className="border border-ink/20 rounded-xl p-3 flex flex-col justify-between h-24 hover:bg-ink hover:text-paper transition-colors focus-ring"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.94 3.2 9.13 7.65 10.61.56.1.76-.24.76-.53 0-.26-.01-1.13-.01-2.06-3.11.68-3.77-1.32-3.77-1.32-.51-1.3-1.24-1.64-1.24-1.64-1.02-.7.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.93.1-.72.39-1.21.71-1.49-2.48-.28-5.1-1.24-5.1-5.53 0-1.22.44-2.22 1.15-3-.11-.28-.5-1.42.11-2.96 0 0 .93-.3 3.05 1.15a10.6 10.6 0 0 1 5.56 0c2.12-1.45 3.05-1.15 3.05-1.15.61 1.54.22 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.63 5.24-5.13 5.52.4.35.76 1.03.76 2.08 0 1.5-.01 2.71-.01 3.08 0 .29.2.64.77.53 4.44-1.48 7.64-5.67 7.64-10.61C23.02 5.24 18.27.5 12 .5Z" />
                </svg>
                <span className="text-[11px] break-all opacity-80">
                  github.com/sharmavikaskumar
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
