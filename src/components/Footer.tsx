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
    <footer id="main-footer" className="bg-[#1A1A1D] border-t border-[#4E4E50] py-16 relative overflow-hidden"> 
      <div className="max-w-7xl mx-auto px-6"> 
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start pb-12 border-b border-[#4E4E50]"> 
           
          {/* Logo & short brand credentials */} 
          <div className="space-y-4"> 
            <div className="flex items-center gap-3"> 
              <span className="font-sans font-semibold tracking-[3px] text-white text-sm uppercase"> 
                Cozy Lights 
              </span> 
            </div> 
            <p className="text-[11px] text-[#4E4E50] leading-relaxed font-light"> 
              An immersive 3-Michelin star culinary empire fusing classical Japanese dashi precision with tandoori clay-pot spices and high-stakes Parisian pastry art. 
            </p> 
            <div className="text-[10px] text-[#C3073F]/80 font-mono flex items-center gap-1"> 
              <Award className="w-3.5 h-3.5 text-[#C3073F]" /> 
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
                  className="text-[#4E4E50] hover:text-[#C3073F] text-left transition-colors cursor-pointer capitalize" 
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
                  className="text-[#4E4E50] hover:text-[#C3073F] text-left transition-colors cursor-pointer capitalize" 
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
            <p className="text-[11px] text-[#4E4E50] leading-relaxed font-light"> 
              Follow our aesthetic feed panels for active recipes, plating masterclasses, and visual art releases. 
            </p> 
            <div className="flex gap-4"> 
              <a 
                href="#" 
                onClick={(e) => e.preventDefault()} 
                className="p-2 border border-[#4E4E50] rounded-lg text-[#4E4E50] hover:text-[#C3073F] hover:border-[#C3073F]/20 transition-all cursor-pointer" 
                aria-label="Follow on Discord" 
              > 
                <div className="w-4 h-4 rounded-full bg-[#4E4E50]" /> 
              </a> 
              <a 
                href="#" 
                onClick={(e) => e.preventDefault()} 
                className="p-2 border border-[#4E4E50] rounded-lg text-[#4E4E50] hover:text-[#C3073F] hover:border-[#C3073F]/20 transition-all cursor-pointer" 
                aria-label="Follow on GitHub" 
              > 
                <Github className="w-4 h-4" /> 
              </a> 
            </div> 
          </div> 
        </div> 
 
        {/* Lower watermark footer line */} 
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-[#4E4E50] uppercase tracking-widest"> 
          <span>© 2026 Cozy Lights Corporate Hospitality Group. All Sovereign Rights Reserved | Copyright Arnav Sharma.</span> 
          <div className="flex gap-4"> 
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#C3073F] transition-colors">Privacy Charter</a> 
            <span>✦</span> 
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#C3073F] transition-colors">Culinary License Code</a> 
          </div> 
        </div> 
      </div> 
    </footer> 
  ); 
}