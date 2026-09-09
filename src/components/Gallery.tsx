/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { GALLERY_ITEMS } from "../data";
import { X, ZoomIn, Eye, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const categories = ["All", "Interiors", "Dishes", "Chef Moments", "Events"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filteredGallery = GALLERY_ITEMS.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIdx === null) return;
    setLightboxIdx((prev) => (prev !== null ? (prev + 1) % filteredGallery.length : 0));
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIdx === null) return;
    setLightboxIdx((prev) => (prev !== null ? (prev - 1 + filteredGallery.length) % filteredGallery.length : 0));
  };

  return (
    <section id="gallery" className="py-24 bg-[#1A1A1D] relative border-t border-[#F9F5EE]/10">
      {/* Background glow shadow */}
      <div className="absolute top-1/4 right-[10%] w-[450px] h-[450px] bg-[#C3073F]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#C3073F] font-serif tracking-[4px] text-[10px] uppercase block mb-3 italic">Esthetic Chronicles</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white uppercase leading-[1.1]">
            Visual Ambiance <span className="text-[#C3073F] font-serif italic normal-case tracking-normal">Gallery</span>
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto mt-4 text-xs leading-relaxed opacity-80">
            Take a visual tour around our main dining tables, active kitchen preparations, and high-stakes monthly wine-tasting banquets.
          </p>
        </div>

        {/* Filter categories sliders */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-none text-[10px] font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#C3073F] text-black font-semibold"
                  : "bg-[#1A1A1D] border border-[#F9F5EE]/10 text-neutral-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid Masonry */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredGallery.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIdx(idx)}
              className="group relative aspect-square rounded-none overflow-hidden border border-[#F9F5EE]/10 shadow-lg cursor-zoom-in hover:border-[#C3073F]/30 transition-colors duration-300"
            >
              {/* Blur backdrop overlay */}
              <div className="absolute inset-0 bg-[#1A1A1D]/40 group-hover:bg-[#1A1A1D]/10 transition-colors duration-400 z-10" />

              {/* Hover detail visual panel overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-20 flex flex-col justify-end p-6">
                <span className="text-[8px] font-mono text-[#C3073F] uppercase tracking-widest block bg-[#C3073F]/10 px-2 py-0.5 w-max border border-[#C3073F]/10">
                  {item.category}
                </span>
                <h3 className="text-sm font-serif uppercase tracking-wide text-white mt-3">
                  {item.title}
                </h3>
                <p className="text-[11px] text-neutral-300 font-light leading-relaxed mt-2 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#C3073F] mt-4">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Expand Glass Spec</span>
                </div>
              </div>

              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Lightbox Module View Overlay */}
        {lightboxIdx !== null && (
          <div
            onClick={() => setLightboxIdx(null)}
            className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4 animate-fade-in"
          >
            {/* Top close trigger overlay button */}
            <button
              onClick={() => setLightboxIdx(null)}
              className="absolute top-6 right-6 p-3 text-neutral-400 hover:text-white cursor-pointer hover:bg-[#4E4E50] rounded-none transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Slider container */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full flex flex-col items-center space-y-4"
            >
              <div className="relative w-full flex items-center justify-center">
                {/* Previous index button */}
                <button
                  onClick={handlePrev}
                  className="absolute left-2 md:left-4 p-3 bg-[#4E4E50]/60 hover:bg-[#4E4E50] border border-[#F9F5EE]/15 text-white rounded-none transition-colors cursor-pointer"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Center Image */}
                <div className="max-h-[60vh] md:max-h-[70vh] rounded-none overflow-hidden border border-[#F9F5EE]/15 bg-[#1A1A1D] shadow-2xl">
                  <img
                    src={filteredGallery[lightboxIdx].imageUrl}
                    alt={filteredGallery[lightboxIdx].title}
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-[60vh] md:max-h-[70vh] object-contain"
                  />
                </div>

                {/* Next index button */}
                <button
                  onClick={handleNext}
                  className="absolute right-2 md:right-4 p-3 bg-[#4E4E50]/60 hover:bg-[#4E4E50] border border-[#F9F5EE]/15 text-white rounded-none transition-colors cursor-pointer"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Sub-text information display */}
              <div className="text-center max-w-xl space-y-2">
                <span className="text-[8px] font-mono text-[#C3073F] uppercase tracking-widest block bg-[#C3073F]/10 px-2.5 py-1 rounded-none border border-[#C3073F]/25 w-max mx-auto">
                  {filteredGallery[lightboxIdx].category}
                </span>
                <h3 className="text-base font-serif uppercase tracking-wide text-white">
                  {filteredGallery[lightboxIdx].title}
                </h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {filteredGallery[lightboxIdx].description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}