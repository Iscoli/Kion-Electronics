
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "index.html" },
    { label: "Products", href: "products.html" },
    { label: "Services", href: "services.html" },
    { label: "About Us", href: "company.html" },
    { label: "Support", href: "support.html" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Warranty", href: "#" },
    { label: "Return Policy", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-blue-500 mb-4">
              Kion Electric
            </div>
            <p className="mb-6">
              Powering Nigerias sustainable future through innovative energy
              solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-white hover:text-blue-500 transition-colors"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b-2 border-blue-500 pb-2">
              Quick Links
            </h3>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={link.href}
                    className="hover:text-blue-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b-2 border-blue-500 pb-2">
              Contact Us
            </h3>
            <ul>
              <li className="flex items-center mb-3">
                <MapPin size={20} className="mr-3 text-blue-500" />
                Lagos, Nigeria
              </li>
              <li className="flex items-center mb-3">
                <Phone size={20} className="mr-3 text-blue-500" />
                +234 (0) 123 456 7890
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-blue-500" />
                info@kionelectric.com
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b-2 border-blue-500 pb-2">
              Legal
            </h3>
            <ul>
              {legalLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={link.href}
                    className="hover:text-blue-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-gray-700 text-center">
          <p>&copy; 2024 Kion Electric. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
