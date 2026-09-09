/** 
 * @license 
 * SPDX-License-Identifier: Apache-2.0 
 */ 
 
import React from "react"; 
import { BookOpen, ShieldCheck, Waves, GlassWater } from "lucide-react"; 
 
export default function About() { 
  const pillars = [ 
    { 
      icon: <Waves className="w-6 h-6 text-[#C3073F]" />, 
      title: "Japanese Precision", 
      desc: "Our knives cut with millimeter precision; our dashi takes 72 hours of low-temperature wood infusion to build absolute clarity." 
    }, 
    { 
      icon: <BookOpen className="w-6 h-6 text-[#C3073F]" />, 
      title: "Royal Pakistan Aromas", 
      desc: "Inherited secrets of slow clay pot fire cooking, using freshly ground green cardamom, Kashmiri saffron, and organic vetiver smoke." 
    }, 
    { 
      icon: <GlassWater className="w-6 h-6 text-[#C3073F]" />, 
      title: "Continental Nuance", 
      desc: "Incorporating highest masterclass French techniques, luxurious butter reductions, gold leaf and modern molecular gel creations." 
    } 
  ]; 
 
  return ( 
    <section id="about" className="py-24 bg-[#1A1A1D] relative overflow-hidden border-b border-[#F9F5EE]/10"> 
      {/* Decorative floral watermark blur */} 
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[#6F2232]/5 rounded-full blur-[100px] pointer-events-none" /> 
 
      <div className="max-w-5xl mx-auto px-6"> 
        {/* Storytelling text - Centered or beautifully framed */} 
        <div className="space-y-8 animate-fade-in-up max-w-3xl mx-auto text-center flex flex-col items-center"> 
          <span className="text-[#C3073F] font-serif tracking-[0.3em] text-[10px] uppercase block mb-3 italic">Michelin Accredited Heritage</span> 
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-white uppercase leading-[1.1] text-center"> 
            The Sovereign Tapestry of <br /> 
            <span className="text-[#C3073F] font-serif italic normal-case tracking-normal animate-pulse">Cozy Lights</span> 
          </h2> 
 
          <div className="h-[1px] w-24 bg-gradient-to-r from-[#C3073F] via-[#950740]/50 to-transparent" /> 
 
          <div className="space-y-4 text-neutral-300 text-xs md:text-sm leading-relaxed tracking-wide font-light opacity-90 max-w-2xl text-center"> 
            <p> 
              Founded in Kyoto beneath the pristine blossoms of the cherry moon, <strong className="text-white font-normal">Cozy Lights</strong> emerged as an avant-garde culinary experiment. We ask a simple question: What happens when the quiet precision of a traditional Japanese sushi master meets the blazing, fragrant, royal spices of a Mughal clay tandoor oven, finished with the high-stakes pastry perfection of a Parisian pâtisserie? 
            </p> 
            <p> 
              The result was a revolutionary Michelin-rated experience designed entirely within a royal anime aesthetic. Every single element of our dining room—from the floating Cozy particle beams to the interactive virtual culinary models—was constructed to elevate dining from a simple act of tasting into a full sovereign story. 
            </p> 
          </div> 
        </div> 
 
        {/* Three core pillars */} 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-4xl mx-auto"> 
          {pillars.map((p, i) => ( 
            <div key={i} className="p-5 rounded-none bg-[#1A1A1D]/20 border border-[#F9F5EE]/10 hover:border-[#C3073F]/20 transition-all duration-300 text-center flex flex-col items-center"> 
              <div className="mb-3">{p.icon}</div> 
              <h3 className="text-[10px] font-semibold uppercase text-white tracking-[0.2em]">{p.title}</h3> 
              <p className="text-[11px] text-[#4E4E50] mt-2 leading-relaxed">{p.desc}</p> 
            </div> 
          ))} 
        </div> 
      </div> 
    </section> 
  ); 
}