import RatingStar from "../common/RatingStar";
import type { Technology } from "../../types/technology";

interface TechCardProps {
  tech: Technology;
  isAdded: boolean;
  onAddToStack: (tech: Technology) => void;
}

const getBadgeClass = (badge: string) => {
  if (badge === "Versatile" || badge === "Standard") {
    return "bg-emerald-50 text-emerald-500";
  }

  if (badge === "Fast" || badge === "Ubiquitous") {
    return "bg-orange-50 text-orange-500";
  }

  if (badge === "Cache") {
    return "bg-red-50 text-red-500";
  }

  return "bg-sky-50 text-sky-500";
};

const TechCard = ({ tech, isAdded, onAddToStack }: TechCardProps) => {
  return (
    <div className="flex min-h-72 flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <div>
        <div className="flex items-start justify-between">
          <img
            src={tech.icon}
            alt={tech.name}
            className="h-9 w-9 object-contain"
          />

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${getBadgeClass(
              tech.badge,
            )}`}
          >
            {tech.badge}
          </span>
        </div>

        <h3 className="mt-7 text-xl font-bold text-slate-900">{tech.name}</h3>

        <p className="mt-3 h-16 overflow-hidden text-sm leading-6 text-slate-400 pb-22">
          {tech.description}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="rounded bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
            {tech.category}
          </span>

          <span className="text-xs font-medium text-slate-400">
            {tech.difficulty}
          </span>

          <RatingStar rating={tech.rating} />
        </div>

        <button
          type="button"
          onClick={() => onAddToStack(tech)}
          disabled={isAdded}
          className={`mt-5 h-11 w-full rounded-lg text-sm font-medium ${
            isAdded
              ? "cursor-not-allowed bg-slate-100 text-slate-400"
              : "bg-slate-950 text-white"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechCard;
