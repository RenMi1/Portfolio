import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <div id="home"><HeroSection /></div>
      <div id="stats"><StatsSection /></div>
      <div id="projects"><FeaturedProjects /></div>
      <div id="skills"><SkillsSection /></div>
      <div id="contact"><CTASection /></div>
    </>
  );
}