import type { Technology } from "../../types/technology";

interface StackItemProps {
  item: Technology;
  onRemove: (id: string) => void;
}

const StackItem = ({ item, onRemove }: StackItemProps) => {
  return (
    <div className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3">
      <div className="flex items-center gap-3">
        <img
          src={item.icon}
          alt={item.name}
          className="h-9 w-9 object-contain"
        />

        <div>
          <h4 className="text-sm font-bold leading-none text-slate-950">
            {item.name}
          </h4>
          <p className="mt-1 text-[10px] text-slate-400">{item.category}</p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onRemove(item.id)}
        className="text-2xl leading-none text-slate-400"
        aria-label={`Remove ${item.name}`}
      >
        ×
      </button>
    </div>
  );
};

export default StackItem;
