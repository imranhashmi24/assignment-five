import type { ReactNode } from "react";
import type { Technology } from "../../types/technology";
import TechGrid from "./TechGrid";

interface TechSectionProps {
  technologies: Technology[];
  stackItemIds: string[];
  onAddToStack: (tech: Technology) => void;
  sidebarSlot: ReactNode;
}

const TechSection = ({
  technologies,
  stackItemIds,
  onAddToStack,
  sidebarSlot,
}: TechSectionProps) => {
  return (
    <section id="technologies" className="pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-4xl font-extrabold text-slate-950">
            Explore the{" "}
            <span className="brand-gradient-text">Technologies</span>
          </h2>

          <p className="mt-3 text-base text-slate-400">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <TechGrid
              technologies={technologies}
              stackItemIds={stackItemIds}
              onAddToStack={onAddToStack}
            />
          </div>

          <aside className="lg:col-span-3">{sidebarSlot}</aside>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
