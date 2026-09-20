interface RatingStarProps {
  rating: number;
}

const RatingStar = ({ rating }: RatingStarProps) => {
  return (
    <span className="flex items-center gap-1 text-xs font-semibold text-slate-600">
      <span className="text-yellow-400">★</span>
      {rating}
    </span>
  );
};

export default RatingStar;
