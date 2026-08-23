"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import TabNav, { Tab } from "@/components/TabNav";
import AboutSection from "@/components/AboutSection";
import OfficeWorkSection from "@/components/OfficeWorkSection";
import ResumeSection from "@/components/ResumeSection";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  const [tab, setTab] = useState<Tab>("About me");

  return (
    <main className="min-h-screen bg-paper">
      <TopBar />
      <Hero />
      <TabNav active={tab} onChange={setTab} />
      {tab === "About me" && <AboutSection />}
      {tab === "Office Work" && <OfficeWorkSection />}
      {tab === "Resume" && <ResumeSection />}
      {tab === "Work" && <WorkSection />}
      <footer className="px-5 sm:px-10 py-10 text-xs text-muted border-t border-ink/15 mt-6">
        © 2026 Vikas. Built with Next.js & Tailwind CSS.
      </footer>
    </main>
  );
}
