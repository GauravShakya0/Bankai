"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/70 shadow-sm z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold text-blue-700">
          Bankai
        </Link>

        <div className="md:hidden">
          {open ? (
            <X size={28} onClick={() => setOpen(false)} />
          ) : (
            <Menu size={28} onClick={() => setOpen(true)} />
          )}
        </div>

        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                className="hover:text-blue-700 transition"
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white border-t p-4 space-y-3 shadow">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                onClick={() => setOpen(false)}
                className="block text-lg font-medium hover:text-blue-700"
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
