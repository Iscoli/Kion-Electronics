import  { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Support", href: "/support" },
    { label: "Services", href: "/services" },
    // { label: "Account", href: "index.html" },
    { label: "About Us", href: "/about" },
  ];

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  return (
    <header className="bg-blue-500 text-white p-4 fixed top-0 left-0 w-full z-50 shadow-md flex justify-between items-center">
      <div className="logo text-xl font-bold">
        <a href="/">Kion Electric</a>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex space-x-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="hover:underline transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden cursor-pointer z-50" onClick={toggleMobileNav}>
        {isMobileNavActive ? <X size={24} /> : <Menu size={24} />}
      </div>

      {/* Mobile Navigation */}
      {isMobileNavActive && (
        <div className="fixed top-0 left-0 w-full h-full bg-blue-500 z-40 flex flex-col justify-center items-center">
          <ul className="text-center">
            {navItems.map((item, index) => (
              <li key={index} className="py-4">
                <a
                  href={item.href}
                  className="text-xl"
                  onClick={toggleMobileNav}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
