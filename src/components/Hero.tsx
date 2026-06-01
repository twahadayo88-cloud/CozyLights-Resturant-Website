/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { IMAGES } from "../data";
import { ArrowRight, ChevronDown, Award, Star } from "lucide-react";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="home"
      className="relative w-full min-h-screen bg-[#0A0A0A] flex items-center justify-center overflow-hidden pt-20"
    >
      {/* 1. Cinematic Background Image with Zoom and Pan Panning Overlay */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-[#0A0A0A]/85 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A] z-10" />
        <img
          src={IMAGES.heroBg}
          alt="Sakura Royale luxury hall with cherry blossoms"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover scale-110 animate-subtle-zoom brightness-75"
        />
      </div>

      {/* 2. Floating Particle Sakura Petals (Ethereal CSS Drifting Petals) */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden select-none">
        {[...Array(15)].map((_, i) => {
          const size = Math.random() * 8 + 6;
          const left = Math.random() * 100;
          const delay = Math.random() * 15;
          const duration = Math.random() * 8 + 10;
          return (
            <div
              key={i}
              className="absolute rounded-full bg-pink-400/35 blur-[1.5px] animate-fall"
              style={{
                width: `${size}px`,
                height: `${size * 1.3}px`,
                left: `${left}%`,
                top: `-20px`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          );
        })}
      </div>

      {/* Hero content aligned in the center structure - z-index: 20 */}
      <div className="max-w-5xl mx-auto px-6 text-center z-20 mt-8">
        {/* Imperial Award Emblem */}
        <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 px-5 py-2 rounded-none mb-10 animate-fade-in-up">
          <Award className="w-4 h-4 text-yellow-500" />
          <span className="text-[9px] font-mono tracking-[0.3em] text-yellow-500 uppercase font-semibold">
            Michelin Accredited Guide 2026
          </span>
        </div>

        {/* Elite Cinematic Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-[85px] font-serif leading-[0.85] uppercase tracking-tighter text-white animate-fade-in-up delay-150">
          Where <br className="hidden md:block" /> Culinary <br className="hidden md:block" /> Art Meets <br />
          <span className="text-yellow-500">Royalty</span>
        </h1>

        {/* Premium Description */}
        <p className="text-neutral-300 max-w-xl mx-auto mt-8 text-xs md:text-sm leading-relaxed tracking-[0.05em] font-light opacity-80 animate-fade-in-up delay-300">
          Step into a sovereign culinary temple. We fuse classical Japanese precision, aromatic royal Indian spices, and high-end French pastry craft in an immersive cherry-blossom interior.
        </p>

        {/* CTA Button Block */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-12 animate-fade-in-up delay-450 z-30">
          {/* Main Booking Trigger */}
          <button
            onClick={() => handleScrollTo("reservations")}
            className="w-full sm:w-auto px-10 py-4 bg-yellow-500 hover:bg-yellow-400 text-[#0A0A0A] text-xs font-mono uppercase tracking-[0.3em] font-bold rounded-none transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,215,0,0.15)] hover:scale-105 active:scale-95 cursor-pointer"
          >
            Book Your Table
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Secondary Menu Trigger */}
          <button
            onClick={() => handleScrollTo("menu")}
            className="w-full sm:w-auto px-10 py-4 bg-transparent hover:bg-neutral-900 border border-neutral-800 hover:border-yellow-500/30 text-white text-xs font-mono uppercase tracking-[0.3em] font-medium rounded-none transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            Explore Menu
          </button>
        </div>
      </div>

      {/* Decorative details inside corners */}
      <div className="hidden md:flex absolute bottom-8 left-12 z-20 items-center gap-3">
        <div className="w-10 h-[1px] bg-yellow-500/40" />
        <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-[4px]">
          TOKYO ✦ NEW DELHI ✦ PARIS
        </span>
      </div>

      {/* Arrow Scroll indicator */}
      <button
        onClick={() => handleScrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-neutral-500 hover:text-yellow-500 transition-colors animate-bounce cursor-pointer flex flex-col items-center gap-1"
        aria-label="Scroll to About segment"
      >
        <span className="font-mono text-[9px] uppercase tracking-[3px] opacity-70 mb-1">Begin Experience</span>
        <ChevronDown className="w-4 h-4" />
      </button>
    </header>
  );
}
