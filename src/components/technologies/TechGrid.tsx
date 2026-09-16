import type { Technology } from "../../types/technology";
import TechCard from "./TechCard";

interface TechGridProps {
  technologies: Technology[];
  stackItemIds: string[];
  onAddToStack: (tech: Technology) => void;
}

const TechGrid = ({
  technologies,
  stackItemIds,
  onAddToStack,
}: TechGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {technologies.map((tech) => (
        <TechCard
          key={tech.id}
          tech={tech}
          isAdded={stackItemIds.includes(tech.id)}
          onAddToStack={onAddToStack}
        />
      ))}
    </div>
  );
};

export default TechGrid;
