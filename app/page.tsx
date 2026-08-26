"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import TabNav, { Tab } from "@/components/TabNav";
import AboutSection from "@/components/AboutSection";
import OfficeWorkSection from "@/components/OfficeWorkSection";
import ResumeSection from "@/components/ResumeSection";
import WorkSection from "@/components/WorkSection";

const tabContent: Record<Tab, React.ReactNode> = {
  "About me": <AboutSection />,
  "Office Work": <OfficeWorkSection />,
  Resume: <ResumeSection />,
  Work: <WorkSection />,
};

export default function Home() {
  const [tab, setTab] = useState<Tab>("About me");

  return (
    <main className="min-h-screen bg-paper">
      <TopBar />
      <Hero />
      <TabNav active={tab} onChange={setTab} />
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {tabContent[tab]}
        </motion.div>
      </AnimatePresence>
      <footer className="px-5 sm:px-10 py-10 text-xs text-muted border-t border-ink/15 mt-6">
        © 2026 Vikas. Built with Next.js & Tailwind CSS.
      </footer>
    </main>
  );
}
