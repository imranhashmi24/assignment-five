import type { Technology } from "../../types/technology";
import EmptyStack from "./EmptyStack";
import StackItem from "./StackItem";

interface StackSidebarProps {
  selectedStack: Technology[];
  onRemoveItem: (id: string) => void;
  onClearStack: () => void;
}

const StackSidebar = ({
  selectedStack,
  onRemoveItem,
  onClearStack,
}: StackSidebarProps) => {
  const hasSelectedItem = selectedStack.length > 0;

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-950">Your Stack</h3>

      <p className="mt-2 text-sm text-slate-400">
        {hasSelectedItem
          ? `${selectedStack.length} Technology Selected`
          : "No technologies selected yet."}
      </p>

      {!hasSelectedItem ? (
        <EmptyStack />
      ) : (
        <div className="mt-5">
          <div className="space-y-2">
            {selectedStack.map((item) => (
              <StackItem key={item.id} item={item} onRemove={onRemoveItem} />
            ))}
          </div>

          <button
            type="button"
            onClick={onClearStack}
            className="mt-10 h-10 w-full rounded-lg border border-red-300 text-sm font-bold text-red-500"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default StackSidebar;
