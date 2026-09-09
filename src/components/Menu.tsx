/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { MENU_ITEMS } from "../data";
import { MenuItem } from "../types";
import { Search, Flame, Leaf, Utensils, Star, ShoppingBag, Sparkles } from "lucide-react";

export default function Menu() {
  const categories = ["All", "Starters", "Main Course", "Desserts", "Beverages", "Chef's Specials"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [dietFilter, setDietFilter] = useState<"All" | "Vegetarian" | "Non-Vegetarian">("All");

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.nativeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesDiet =
      dietFilter === "All" ||
      (dietFilter === "Vegetarian" && item.isVegetarian) ||
      (dietFilter === "Non-Vegetarian" && !item.isVegetarian);

    return matchesCategory && matchesSearch && matchesDiet;
  });

  return (
    <section id="menu" className="py-24 bg-[#1A1A1D] relative border-t border-[#F9F5EE]/10">
      {/* Background radial soft burgundy twilight */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#6F2232]/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#C3073F] font-serif tracking-[4px] text-[10px] uppercase block mb-3 italic">Immersive Digital Carte</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white uppercase leading-[1.1]">
            The Imperial Gastronomy <span className="text-[#C3073F] font-serif italic normal-case tracking-normal">Menu</span>
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto mt-4 text-xs leading-relaxed opacity-80">
            Feast your eyes upon our masterfully curated cross-overs. Filter by regal categories or search for specific culinary tag combinations.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#1A1A1D] border border-[#F9F5EE]/10 p-6 rounded-none mb-12 max-w-5xl mx-auto flex flex-col md:flex-row gap-6 justify-between items-center z-10 relative">
          {/* Category sliders */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-none text-[9px] font-mono uppercase tracking-widest transition-all duration-300 cursor-pointer border ${
                  selectedCategory === cat
                    ? "bg-[#C3073F] text-[#1A1A1D] font-semibold border-[#C3073F] shadow-[0_0_10px_rgba(195,7,63,0.15)]"
                    : "bg-[#4E4E50] border-[#F9F5EE]/10 text-neutral-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto items-center">
            {/* Diet Filter buttons */}
            <div className="flex bg-[#4E4E50] p-1 rounded-none border border-[#F9F5EE]/10 shrink-0">
              {(["All", "Vegetarian", "Non-Vegetarian"] as const).map((diet) => (
                <button
                   key={diet}
                   onClick={() => setDietFilter(diet)}
                   className={`px-3 py-1.5 rounded-none text-[9px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                     dietFilter === diet
                       ? "bg-[#C3073F]/10 text-[#C3073F] font-semibold"
                       : "text-neutral-500 hover:text-neutral-300"
                   }`}
                >
                  {diet === "All" ? "Both" : diet}
                </button>
              ))}
            </div>

            {/* Live Search input */}
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search wagyu, truffle, matcha..."
                className="w-full bg-[#1A1A1D] border border-[#F9F5EE]/10 focus:border-[#C3073F]/50 rounded-none py-2.5 pl-10 pr-4 text-xs text-white placeholder-neutral-500 focus:outline-none transition-colors"
              />
              <Search className="w-3.5 h-3.5 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>

        {/* Dynamic Menu Grid showcasing glassmorphism cards */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="group relative rounded-none bg-[#1A1A1D]/40 border border-[#F9F5EE]/10 hover:border-[#C3073F]/20 overflow-hidden transition-all duration-500 flex flex-col hover:shadow-[0_15px_35px_rgba(0,0,0,0.8)] cursor-pointer"
              >
                {/* Visual Image container */}
                <div className="relative h-60 w-full overflow-hidden shrink-0 select-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1D]/95 via-[#1A1A1D]/10 to-transparent z-10" />
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Top tags */}
                  <div className="absolute top-4 left-4 z-20 flex flex-col gap-1.5">
                    {item.isVegetarian && (
                      <span className="bg-[#6F2232]/10 text-[#C3073F] border border-[#6F2232]/20 text-[9px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-none flex items-center gap-1">
                        <Leaf className="w-2.5 h-2.5" />
                        Vegetarian
                      </span>
                    )}
                    {item.category === "Chef's Specials" && (
                      <span className="bg-[#C3073F]/15 text-[#C3073F] border border-[#C3073F]/35 text-[9px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-none flex items-center gap-1">
                        <Star className="w-2.5 h-2.5 fill-[#C3073F]/20" />
                        Imperial Star
                      </span>
                    )}
                  </div>

                  {/* Chef badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-black/80 backdrop-blur-md text-[9px] font-mono text-[#C3073F] px-3 py-1 rounded-none border border-[#C3073F]/20">
                      ${item.price}
                    </span>
                  </div>
                </div>

                {/* Content Description */}
                <div className="p-6 flex flex-col flex-grow bg-[#1A1A1D]/40 backdrop-blur-md">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-base font-serif text-white uppercase tracking-wide group-hover:text-[#C3073F] transition-colors duration-300">
                        {item.name}
                      </h3>
                      <p className="text-[10px] text-neutral-500 font-mono tracking-wider mt-1">
                        {item.nativeName}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-400 font-light mt-4 leading-relaxed flex-grow opacity-85">
                    {item.description}
                  </p>

                  {/* Spicy rating indicators & tags */}
                  <div className="border-t border-[#F9F5EE]/10 pt-4 mt-6 flex flex-wrap gap-1.5 justify-between items-center">
                    <div className="flex gap-1">
                      {item.spicyLevel !== undefined && item.spicyLevel > 0 && (
                        <div className="flex items-center gap-0.5 text-[#950740]/90 text-[9px] font-mono font-medium tracking-wider">
                          <Flame className="w-3 h-3" />
                          <span>SPICY x{item.spicyLevel}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {item.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-mono bg-[#4E4E50] text-neutral-500 border border-[#F9F5EE]/10 px-2 py-0.5 rounded-none uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#1A1A1D]/20 border border-[#F9F5EE]/10 rounded-none max-w-2xl mx-auto p-8">
            <Utensils className="w-8 h-8 text-[#4E4E50] mx-auto mb-4" />
            <h3 className="text-white font-medium text-base uppercase tracking-wider font-serif">Inward Culinary Silence...</h3>
            <p className="text-neutral-500 text-xs mt-2">
              We couldn't find menu choices aligning with those filters. Try searching for "gyoza" or resetting diet preferences.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}