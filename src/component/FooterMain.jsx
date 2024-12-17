import { Link } from "react-router-dom";

function FooterMain() {
  const socialLinks = [
    { icon: "fab fa-facebook", href: "#" },
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fab fa-linkedin", href: "#" },
    { icon: "fab fa-instagram", href: "#" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Support", path: "/support" },
  ];

  const contactInfo = [
    { icon: "fas fa-map-marker-alt", text: "Lagos, Nigeria" },
    { icon: "fas fa-phone", text: "+234 (0) 123 456 7890" },
    { icon: "fas fa-envelope", text: "info@kionelectric.com" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Warranty", path: "/warranty" },
    { name: "Return Policy", path: "/returns" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold mb-4 text-blue-500">
              Kion Electric
            </div>
            <p className="text-gray-400">
              Powering Nigeria`` sustainable future through innovative energy
              solutions.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-2xl text-gray-400 hover:text-blue-500 transition duration-300"
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-gray-400 hover:text-blue-500 transition duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-2">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center text-gray-400">
                  <i className={`${info.icon} mr-3`}></i>
                  {info.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Legal</h3>
            <nav className="space-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-gray-400 hover:text-blue-500 transition duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; 2024 Kion Electric. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterMain;
