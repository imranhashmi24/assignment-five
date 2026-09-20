import bannerImg from "../../assets/banner-stack.png";

const HeroBanner = () => {
  return (
    <section id="home" className="pt-36 pb-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <h1 className="max-w-2xl text-5xl font-extrabold leading-tight text-slate-950 md:text-6xl">
            Build Your Ideal{" "}
            <span className="brand-gradient-text">Development Stack</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-500">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-12 flex gap-4">
            <a
              href="#technologies"
              className="brand-gradient rounded-lg px-6 py-3 text-sm font-bold text-white"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-lg border border-slate-200 px-10 py-3 text-sm font-bold text-slate-500"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={bannerImg}
            alt="Development stack"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
