import hamburgerIcon from "../../assets/hamburger.png";
import logoImg from "../../assets/logo-text.png";

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  navLinks: NavLink[];
}

const Navbar = ({ activeTab, setActiveTab, navLinks }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div className="flex w-1/3 items-center">
          <button type="button" className="md:hidden" aria-label="Menu">
            <img src={hamburgerIcon} alt="" className="h-6 w-6" />
          </button>

          <a href="#home" className="hidden md:block">
            <img src={logoImg} alt="Dev Stack" className="h-8 w-auto" />
          </a>
        </div>

        <div className="flex w-1/3 justify-center">
          <a href="#home" className="md:hidden">
            <img src={logoImg} alt="Dev Stack" className="h-7 w-auto" />
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setActiveTab(link.label)}
                  className={`text-sm font-semibold ${
                    activeTab === link.label
                      ? "text-pink-500"
                      : "text-slate-500"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex w-1/3 items-center justify-end gap-4">
          <button className="text-sm font-semibold text-slate-600">
            Sign In
          </button>

          <button className="rounded-full bg-pink-600 px-6 py-3 text-sm font-semibold text-white">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
