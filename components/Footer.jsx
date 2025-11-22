import { Facebook, Linkedin, Instagram, Github } from "lucide-react";
import Link from "next/link";


export default function Footer() {


  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-950 text-gray-300 pt-12 pb-6 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold text-white">Bankai Software Solutions</h2>
          <p className="mt-3 text-sm text-gray-400">
            Building fast, modern & scalable digital experiences.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                className="hover:text-white transition cursor-pointer"
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
          ))}
         
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-5 mt-4">
            <a className="hover:text-white transition cursor-pointer">
              <Facebook size={20} />
            </a>
            <a className="hover:text-white transition cursor-pointer">
              <Instagram size={20} />
            </a>
            <a className="hover:text-white transition cursor-pointer">
              <Linkedin size={20} />
            </a>
            <a className="hover:text-white transition cursor-pointer">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Bankai Software Solutions — All Rights Reserved.
      </div>
    </footer>
  );
}
