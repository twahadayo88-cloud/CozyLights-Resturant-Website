/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { REVIEWS_LIST } from "../data";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Reviews() {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % REVIEWS_LIST.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + REVIEWS_LIST.length) % REVIEWS_LIST.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-24 bg-[#1A1A1D]/40 relative border-t border-[#F9F5EE]/10 overflow-hidden">
      {/* Background aesthetic decorative blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#6F2232]/3 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#C3073F] font-serif tracking-[4px] text-[10px] uppercase block mb-3 italic">Patron Testimony</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white uppercase leading-[1.1]">
            Chronicles of <span className="text-[#C3073F] font-serif italic normal-case tracking-normal">Exquisite Patronage</span>
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto mt-4 text-xs leading-relaxed opacity-80">
            Read critical notes shared by our Michelin reviewers, culinary historians, and distinguished collectors of high culinary art.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative bg-[#1A1A1D] border border-[#F9F5EE]/10 rounded-none p-8 md:p-12 shadow-2xl backdrop-blur-md">
          {/* Quote logo backdrop */}
          <Quote className="absolute top-6 right-8 w-24 h-24 text-[#4E4E50]/15 pointer-events-none" />

          {/* Review sliding block */}
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between text-left">
            {/* Patron Portrait */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-none border border-[#C3073F]/30 overflow-hidden shrink-0 shadow-lg select-none">
              <img
                src={REVIEWS_LIST[activeIdx].avatarUrl}
                alt={REVIEWS_LIST[activeIdx].name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Critique Specs */}
            <div className="space-y-4 flex-grow">
              {/* Star group */}
              <div className="flex gap-1 text-[#C3073F]">
                {[...Array(REVIEWS_LIST[activeIdx].rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C3073F] text-[#C3073F]" />
                ))}
              </div>

              {/* Text comment quote */}
              <blockquote className="text-neutral-200 text-xs md:text-sm leading-relaxed tracking-wide font-light italic min-h-[90px] opacity-90">
                “{REVIEWS_LIST[activeIdx].text}”
              </blockquote>

              {/* Patron credentials info */}
              <div className="pt-4 border-t border-[#F9F5EE]/10 flex justify-between items-center flex-wrap gap-2 text-xs">
                <div>
                  <span className="font-serif uppercase tracking-wider text-white block">
                    {REVIEWS_LIST[activeIdx].name}
                  </span>
                  <span className="text-[9px] font-mono text-neutral-500 block uppercase tracking-widest mt-0.5">
                    {REVIEWS_LIST[activeIdx].role}
                  </span>
                </div>
                <span className="text-[8px] font-mono text-[#C3073F]/80 bg-[#C3073F]/5 px-2.5 py-0.5 rounded-none border border-[#C3073F]/20">
                  {REVIEWS_LIST[activeIdx].date}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Controls arrows absolutely placed */}
          <div className="flex justify-between items-center mt-8 pt-4 border-t border-[#F9F5EE]/10">
            {/* Dots representation */}
            <div className="flex gap-2">
              {REVIEWS_LIST.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`w-2 h-2 rounded-none transition-all duration-300 cursor-pointer ${
                    activeIdx === i ? "bg-[#C3073F] w-5" : "bg-[#4E4E50] hover:bg-[#950740]"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="p-2.5 border border-[#F9F5EE]/10 hover:border-[#C3073F]/30 hover:bg-[#4E4E50] rounded-none text-white transition-colors cursor-pointer"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 border border-[#F9F5EE]/10 hover:border-[#C3073F]/30 hover:bg-[#4E4E50] rounded-none text-white transition-colors cursor-pointer"
                aria-label="Next Review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}