import logoImg from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <img src={logoImg} alt="Dev Stack" className="h-8 w-auto" />

            <p className="mt-6 text-sm leading-6 text-slate-400">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-8 flex gap-6">
              <a href="#" className="text-sm font-bold text-slate-500">
                GitHub
              </a>
              <a href="#" className="text-sm font-bold text-slate-500">
                Twitter
              </a>
              <a href="#" className="text-sm font-bold text-slate-500">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 md:gap-28">
            <div>
              <h3 className="text-sm font-extrabold uppercase text-slate-900">
                Product
              </h3>
              <ul className="mt-5 space-y-3">
                <li>
                  <a href="#home" className="text-sm text-slate-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#technologies" className="text-sm text-slate-400">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-sm text-slate-400">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-extrabold uppercase text-slate-900">
                Company
              </h3>
              <ul className="mt-5 space-y-3">
                <li>
                  <a href="#about" className="text-sm text-slate-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-slate-400">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#careers" className="text-sm text-slate-400">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-extrabold uppercase text-slate-900">
                Legal
              </h3>
              <ul className="mt-5 space-y-3">
                <li>
                  <a href="#privacy-policy" className="text-sm text-slate-400">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#terms-of-service"
                    className="text-sm text-slate-400"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-slate-100 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-300">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-8">
            <a href="#privacy" className="text-sm text-slate-400">
              Privacy
            </a>
            <a href="#terms" className="text-sm text-slate-400">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
