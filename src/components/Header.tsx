import React from "react";

//gatsby
import { Link } from "gatsby";

//hooks
import { useLocation } from "src/hooks";

//components
import AnimatedCross from "./AnimatedCross";

function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="p-5 bg-white shadow font-bold relative">
      <div className="absolute h-1 bg-primary-color inset-0"></div>
      <nav className="flex justify-between items-center container mx-auto">
        <Link to="/" className="text-xl">
          Nitin Jha
        </Link>

        <AnimatedCross
          state={isOpen}
          className={`md:hidden`}
          onClick={() => setIsOpen((state) => !state)}
        />

        <div
          className={`flex items-center gap-3 flex-col md:flex-row absolute md:static bg-white translate-y-full md:translate-y-0 bottom-0 left-0 z-10 overflow-y-hidden transition-all duration-500 ${
            isOpen ? "h-48" : "h-0"
          } md:h-full shadow md:shadow-none w-full md:w-auto`}
        >
          {headerOptions.map((option, i) => (
            <Link
              to={option.href}
              key={i}
              className={`transition-all duration-200 ${
                option.href == location?.pathname
                  ? "border-b-4 border-primary-color rounded-none"
                  : "hover:bg-primary-color hover:text-white"
              } rounded px-3 py-1.5`}
            >
              {option.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;

const headerOptions = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/skills/",
    label: "Skills",
  },
  {
    href: "/projects/",
    label: "Projects",
  },
  {
    href: "/contact-me/",
    label: "Contact Me",
  },
];
