interface LoaderProps {
  message?: string;
}

const Loader = ({ message = "Loading..." }: LoaderProps) => {
  return (
    <div className="flex items-center justify-center py-16">
      <span className="loading loading-spinner loading-lg text-primary"></span>
      <p className="ml-3 text-sm text-slate-500">{message}</p>
    </div>
  );
};

export default Loader;
