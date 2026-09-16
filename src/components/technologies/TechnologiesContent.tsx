import { use, useState } from "react";
import { toast } from "react-toastify";

import StackSidebar from "../stack/StackSidebar";
import TechSection from "./TechSection";
import type { Technology } from "../../types/technology";

interface TechnologiesContentProps {
  technologiesPromise: Promise<Technology[]>;
}

const TechnologiesContent = ({
  technologiesPromise,
}: TechnologiesContentProps) => {
  const technologies = use(technologiesPromise);
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);

  const handleAddToStack = (tech: Technology) => {
    const isAlreadyAdded = selectedStack.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      toast.warning(`${tech.name} is already added to your stack!`);
      return;
    }

    setSelectedStack([...selectedStack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemoveItem = (id: string) => {
    const removedItem = selectedStack.find((item) => item.id === id);
    setSelectedStack(selectedStack.filter((item) => item.id !== id));

    if (removedItem) {
      toast.info(`${removedItem.name} removed from your stack.`);
    }
  };

  const handleClearStack = () => {
    setSelectedStack([]);
    toast.error("All technologies removed from your stack.");
  };

  return (
    <TechSection
      technologies={technologies}
      stackItemIds={selectedStack.map((item) => item.id)}
      onAddToStack={handleAddToStack}
      sidebarSlot={
        <StackSidebar
          selectedStack={selectedStack}
          onRemoveItem={handleRemoveItem}
          onClearStack={handleClearStack}
        />
      }
    />
  );
};

export default TechnologiesContent;
