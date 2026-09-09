/** 
 * @license 
 * SPDX-License-Identifier: Apache-2.0 
 */ 
 
import { IMAGES } from "../data"; 
import { Sparkles, Compass, ShieldCheck, Heart } from "lucide-react"; 
 
export default function SignatureDishes() { 
  const spotlights = [ 
    { 
      name: "The Golden Saffron Ramen", 
      nativeName: "極上サフラン和牛ラーメン", 
      img: "src/assets/images/dish_ramen_1780226896014.png", 
      price: 68, 
      philosophy: "Japanese dashi is cold-infused with Spanish crimson saffron for 72 hours. Plated with paper-thin ribbons of marbled A5 Wagyu and crowned in 24K edible gold sheets.", 
      metrics: ["72h Broth Infusion", "A5 Wagyu Marble Score 12", "Hand-gilded Finish"] 
    }, 
    { 
      name: "Ceremonial Matcha Soufflé", 
      nativeName: "金粉宇治抹茶スフレ", 
      img: "src/assets/images/dish_dessert_1780226915206.png", 
      price: 25, 
      philosophy: "A rising hot pastry featuring highest-grade Uji matcha whisked with organic duck eggs. Surrounded by hand-painted white chocolate cozy branches and raspberry nectar droplets.", 
      metrics: ["Ceremonial Uji Matcha", "Duck Egg Rise Formula", "Hand-painted Stems"] 
    }, 
    { 
      name: "Cozy Royal Shimmering Elixir", 
      nativeName: "桜ロワイヤル・カクテル", 
      img: "src/assets/images/dish_cocktail_1780226933463.png", 
      price: 28, 
      philosophy: "Our signature high-end mocktail, featuring pure cherry blossom petals botanical steam, sparkling French bubbles, and suspended particles of gold leaf sliding in dry ice fog.", 
      metrics: ["Botanical Steam Extraction", "Real Petals Infusion", "Lunar Dry Ice Pours"] 
    } 
  ]; 
 
  return ( 
    <section id="chef-specials" className="py-24 bg-[#1A1A1D]/40 relative overflow-hidden border-b border-[#F9F5EE]/10"> 
      {/* Decorative background orbs */} 
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-[#C3073F]/3 rounded-full blur-[110px] pointer-events-none" /> 
      <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-[#6F2232]/3 rounded-full blur-[110px] pointer-events-none" /> 
 
      <div className="max-w-7xl mx-auto px-6"> 
        <div className="text-center mb-20"> 
          <span className="text-[#C3073F] font-serif tracking-[4px] text-[10px] uppercase block mb-3 italic">Signature Spotlights</span> 
          <h2 className="text-4xl md:text-5xl font-serif text-white uppercase leading-[1.1]"> 
            Crafted for the <span className="font-serif italic text-[#C3073F] normal-case tracking-normal">Imperial Palette</span> 
          </h2> 
          <p className="text-neutral-400 max-w-xl mx-auto mt-4 text-xs leading-relaxed opacity-80"> 
            A celebration of high-contrast dining. Our signature masterworks represent hundreds of hours of sensory research. 
          </p> 
        </div> 
 
        {/* Spotlights grid wrapping beautiful presentation spotlight panels */} 
        <div className="space-y-24 max-w-6xl mx-auto"> 
          {spotlights.map((item, idx) => { 
            const isEven = idx % 2 === 0; 
            return ( 
              <div 
                key={idx} 
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${ 
                  isEven ? "" : "lg:flex-row-reverse" 
                }`} 
              > 
                {/* Visual Image Card - 6 Columns */} 
                <div 
                  className={`lg:col-span-6 relative aspect-video md:aspect-[4/3] rounded-none overflow-hidden border border-[#F9F5EE]/10 shadow-2xl group ${ 
                    isEven ? "lg:order-1" : "lg:order-2" 
                  }`} 
                > 
                  <div className="absolute inset-0 bg-[#1A1A1D]/40 group-hover:bg-transparent transition-colors duration-500 z-10" /> 
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    referrerPolicy="no-referrer" 
                    className="w-full h-full object-cover grayscale-[25%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                  /> 
                  <div className="absolute bottom-6 left-6 z-20 bg-[#1A1A1D]/85 backdrop-blur-md px-5 py-2.5 rounded-none border border-[#C3073F]/20"> 
                    <span className="text-[9px] font-mono text-[#C3073F] tracking-[3px] uppercase"> 
                      0{idx + 1} / MASTERPIECE 
                    </span> 
                  </div> 
                </div> 
 
                {/* Narrative Details Card - 6 Columns */} 
                <div 
                  className={`lg:col-span-6 space-y-6 ${ 
                    isEven ? "lg:order-2" : "lg:order-1" 
                  }`} 
                > 
                  <div className="flex items-center gap-3"> 
                    <Compass className="w-4 h-4 text-[#C3073F]" /> 
                    <span className="text-[9px] font-mono uppercase border border-[#C3073F]/20 text-[#C3073F] px-3 py-1 rounded-none tracking-widest bg-[#C3073F]/5"> 
                      Executive Spotlight 
                    </span> 
                  </div> 
 
                  <div> 
                    <h3 className="text-2xl md:text-3xl font-serif text-white uppercase tracking-tight"> 
                      {item.name} 
                    </h3> 
                    <p className="text-xs text-neutral-500 font-mono tracking-wider mt-1.5"> 
                      {item.nativeName} ✦ ${item.price} 
                    </p> 
                  </div> 
 
                  <p className="text-neutral-300 text-xs md:text-sm leading-relaxed tracking-wide font-light opacity-90"> 
                    {item.philosophy} 
                  </p> 
 
                  {/* Scientific metrics or cooking details */} 
                  <div className="border-t border-[#F9F5EE]/10 pt-6 space-y-3"> 
                    <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block"> 
                      Preparation Audit 
                    </span> 
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3"> 
                      {item.metrics.map((met, mIdx) => ( 
                        <div 
                          key={mIdx} 
                          className="p-3 bg-[#4E4E50]/10 border border-[#F9F5EE]/10 rounded-none hover:border-[#C3073F]/25 transition-colors" 
                        > 
                          <span className="text-[10px] font-mono text-white leading-relaxed block font-medium"> 
                            {met.split(" ")[0]} 
                          </span> 
                          <span className="text-[9px] font-mono text-neutral-500 uppercase block mt-1"> 
                            {met.substring(met.indexOf(" ") + 1)} 
                          </span> 
                        </div> 
                      ))} 
                    </div> 
                  </div> 
                </div> 
              </div> 
            ); 
          })} 
        </div> 
      </div> 
    </section> 
  ); 
}