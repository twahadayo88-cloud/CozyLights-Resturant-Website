/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Github, CircleUser, Landmark, Award, ShieldAlert } from "lucide-react";

export default function Footer() {
  const scrollSmoothTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      window.scrollTo({
        top: (el as HTMLElement).offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#0A0A0A] border-t border-neutral-900 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start pb-12 border-b border-neutral-900">
          
          {/* Logo & short brand credentials */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-sans font-semibold tracking-[3px] text-white text-sm uppercase">
                Sakura Royale
              </span>
            </div>
            <p className="text-[11px] text-neutral-500 leading-relaxed font-light">
              An immersive 3-Michelin star culinary empire fusing classical Japanese dashi precision with tandoori clay-pot spices and high-stakes Parisian pastry art.
            </p>
            <div className="text-[10px] text-yellow-500/80 font-mono flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-yellow-500" />
              <span>Imperial Gastronomy ✦ 2026</span>
            </div>
          </div>

          {/* Quick links navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white font-mono">
              The Experience
            </h4>
            <div className="flex flex-col space-y-2 text-xs">
              {["#about", "#specials-cube", "#menu", "#qr-menu"].map((link) => (
                <button
                  key={link}
                  onClick={() => scrollSmoothTo(link)}
                  className="text-neutral-400 hover:text-yellow-500 text-left transition-colors cursor-pointer capitalize"
                >
                  {link.substring(1).replace("-", " ")}
                </button>
              ))}
            </div>
          </div>

          {/* Table links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white font-mono">
              Secures & Bookings
            </h4>
            <div className="flex flex-col space-y-2 text-xs">
              {["#reservations", "#gallery", "#reviews", "#contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => scrollSmoothTo(link)}
                  className="text-neutral-400 hover:text-yellow-500 text-left transition-colors cursor-pointer capitalize"
                >
                  {link.substring(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Social credentials and newsletter details */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white font-mono">
              Social Spheres
            </h4>
            <p className="text-[11px] text-neutral-500 leading-relaxed font-light">
              Follow our aesthetic feed panels for active recipes, plating masterclasses, and visual art releases.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="p-2 border border-neutral-900 rounded-lg text-neutral-400 hover:text-yellow-500 hover:border-yellow-500/20 transition-all cursor-pointer"
                aria-label="Follow on Discord"
              >
                <div className="w-4 h-4 rounded-full bg-neutral-900" />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="p-2 border border-neutral-900 rounded-lg text-neutral-400 hover:text-yellow-500 hover:border-yellow-500/20 transition-all cursor-pointer"
                aria-label="Follow on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Lower watermark footer line */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
          <span>© 2026 Sakura Royale Corporate Hospitality Group. All Sovereign Rights Reserved | Copyright Arnav Sharma.</span>
          <div className="flex gap-4">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-yellow-500 transition-colors">Privacy Charter</a>
            <span>✦</span>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-yellow-500 transition-colors">Culinary License Code</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
