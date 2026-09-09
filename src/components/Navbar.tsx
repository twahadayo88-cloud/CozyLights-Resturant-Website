/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Coffee, Menu, X, Landmark, Crown, ShieldAlert } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "3D Specials", href: "#specials-cube" },
    { name: "Menu", href: "#menu" },
    { name: "QR Menu", href: "#qr-menu" },
    { name: "Reservations", href: "#reservations" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link detection based on section bounds
      const scrollPosition = window.scrollY + 100;
      for (const link of navLinks) {
        const el = document.querySelector(link.href);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          const height = el.clientHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.href.substring(1));
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80; // height of navbar
      const elementPosition = (element as HTMLElement).offsetTop;
      const offsetPosition = elementPosition - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-[#1A1A1D]/95 backdrop-blur-md border-[#C3073F]/15 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Elite Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleSmoothScroll(e, "#home")}
          className="flex items-center gap-4 group"
        >
          <div className="w-9 h-9 border-2 border-[#C3073F] rotate-45 flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:rotate-90">
            <div className="w-5 h-5 bg-[#C3073F] rotate-45" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif tracking-[0.18em] text-[#C3073F] text-lg lg:text-xl uppercase transition-colors">
              Cozy Lights
            </span>
            <span className="text-[8px] font-mono tracking-[0.35em] text-neutral-400 uppercase">
              Imperial Gastronomy
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className={`text-[10px] uppercase tracking-[0.25em] font-medium transition-all duration-300 relative py-1 hover:text-[#C3073F] ${
                activeSection === link.href.substring(1)
                  ? "text-[#C3073F] border-b border-[#C3073F]"
                  : "text-neutral-400 opacity-80"
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Secure Table Booking CTA */}
          <a
            href="#reservations"
            onClick={(e) => handleSmoothScroll(e, "#reservations")}
            className="text-[10px] font-mono uppercase tracking-[0.25em] border border-[#C3073F] text-white bg-transparent px-6 py-2.5 rounded-none hover:bg-[#C3073F] hover:text-[#1A1A1D] transition-all duration-300 font-medium active:scale-95"
          >
            Inquire
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-white hover:text-[#C3073F] transition-colors cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[77px] bg-[#1A1A1D]/98 border-b border-[#C3073F]/15 backdrop-blur-lg animate-fade-in z-40 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`text-sm uppercase tracking-[2.5px] py-2 border-b border-[#4E4E50] transition-colors ${
                  activeSection === link.href.substring(1) ? "text-[#C3073F]" : "text-neutral-300"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#reservations"
              onClick={(e) => handleSmoothScroll(e, "#reservations")}
              className="text-center text-xs font-mono uppercase tracking-[2px] border border-[#C3073F] text-[#C3073F] bg-[#C3073F]/5 p-3 rounded-xl hover:bg-[#C3073F] hover:text-[#1A1A1D] transition-colors"
            >
              Reserve Table
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}