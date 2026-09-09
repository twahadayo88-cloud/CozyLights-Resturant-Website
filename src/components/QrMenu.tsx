/** 
 * @license 
 * SPDX-License-Identifier: Apache-2.0 
 */ 
 
import React, { useState } from "react"; 
import { QrCode, Download, Smartphone, Sparkles, Check, Send, ShieldCheck, Heart, ExternalLink } from "lucide-react"; 
 
export default function QrMenu() { 
  const [phoneValue, setPhoneValue] = useState(""); 
  const [successSent, setSuccessSent] = useState(false); 
  const [isDownloading, setIsDownloading] = useState(false); 
  const [downloadComplete, setDownloadComplete] = useState(false); 
  const [simulatedScan, setSimulatedScan] = useState(false); 
  const [unlockedSecret, setUnlockedSecret] = useState(null) as [any, any]; 
 
  const handleSendMenu = (e: React.FormEvent) => { 
    e.preventDefault(); 
    if (phoneValue) { 
      setSuccessSent(true); 
      setTimeout(() => { 
        setSuccessSent(false); 
        setPhoneValue(""); 
      }, 5000); 
    } 
  }; 
 
  const handleDownload = () => { 
    setIsDownloading(true); 
    setTimeout(() => { 
      setIsDownloading(false); 
      setDownloadComplete(true); 
      setTimeout(() => setDownloadComplete(false), 4000); 
    }, 1500); 
  }; 
 
  const secretDishes = [ 
    { 
      id: "sec-1", 
      name: "Vintage Sake White Truffle Macaron", 
      category: "Dessert Alchemia", 
      price: "18", 
      description: "Infused with 40-year aged premium Junmai Daiginjo sake and fresh Périgord white truffles, finished with 24k gold foil." 
    }, 
    { 
      id: "sec-2", 
      name: "Kyoto Dry-Aged Sashi Wagyu Tataki", 
      category: "Grand Meats", 
      price: "85", 
      description: "A5 BMS 12 sirloin seared perfectly over cherrywood coals, accented with house tandoori-dashi emulsion." 
    }, 
    { 
      id: "sec-3", 
      name: "Imperial Matcha Osetra Caviar Ganache", 
      category: "Savoury Fusion", 
      price: "42", 
      description: "A masterful cold fusion of ceremonial-grade Uji matcha cream and salt-cured Siberian Osetra caviar pearls." 
    } 
  ]; 
 
  return ( 
    <section id="qr-menu" className="py-24 bg-[#1A1A1D] relative border-b border-[#F9F5EE]/10 overflow-hidden"> 
      {/* Decorative luxury radial background spotlights */} 
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#C3073F]/5 rounded-full blur-[130px] pointer-events-none" /> 
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-[#6F2232]/3 rounded-full blur-[130px] pointer-events-none" /> 
 
      <div className="max-w-7xl mx-auto px-6 relative z-10"> 
         
        {/* Section Header */} 
        <div className="text-center mb-16"> 
          <span className="text-[#C3073F] font-serif tracking-[4px] text-[10px] uppercase block mb-3 italic">Digital Passport</span> 
          <h2 className="text-4xl md:text-5xl font-serif text-white uppercase leading-[1.1]"> 
            Contactless <span className="text-[#C3073F] font-serif italic normal-case tracking-normal">QR Gastro-Menu</span> 
          </h2> 
          <p className="text-neutral-400 max-w-xl mx-auto mt-4 text-xs leading-relaxed opacity-80"> 
            Decode our living culinary passport. Scan using your phone camera to unlock real-time menu shifts, secret reserve vintages, and high-altitude tea indices. 
          </p> 
        </div> 
 
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center max-w-6xl mx-auto"> 
           
          {/* QR Code Frame Box (Left - 5 columns) */} 
          <div className="lg:col-span-5 flex flex-col items-center text-center space-y-6"> 
             
            {/* Elegant Crimson QR Frame container */} 
            <div className="p-8 bg-[#1A1A1D] border-2 border-[#C3073F]/30 relative shadow-2xl group select-none flex flex-col items-center"> 
               
              {/* Corner accent vectors */} 
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#C3073F]" /> 
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#C3073F]" /> 
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#C3073F]" /> 
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#C3073F]" /> 
 
              {/* Status Header inside Frame */} 
              <div className="flex items-center gap-1.5 mb-4 font-mono text-[9px] uppercase text-[#C3073F]/85"> 
                <span className="w-1.5 h-1.5 bg-[#C3073F] animate-ping rounded-none" /> 
                <span>Encrypted Menu Link</span> 
              </div> 
 
              {/* Interactive Vector QR Code with overlay scanning laser laser */} 
              <div className="relative w-64 h-64 bg-[#1A1A1D] border border-[#4E4E50] p-6 flex justify-center items-center overflow-hidden"> 
                {/* Simulated Moving Scanning Laser Line */} 
                <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C3073F] to-transparent top-0 animate-[scan_3s_ease-in-out_infinite] z-20 shadow-[0_0_8px_rgba(195,7,63,0.7)] pointer-events-none" /> 
 
                {/* Highly precise stylized vector QR code graphic with aesthetic center crest */} 
                <svg className="w-full h-full fill-white" viewBox="0 0 100 100"> 
                  {/* Outer corner anchors */} 
                  {/* Top Left Area */} 
                  <path d="M0,0 h21 v21 h-21 z M3,3 h15 v15 h-15 z M6,6 h9 v9 h-9 z" /> 
                  {/* Top Right Area */} 
                  <path d="M79,0 h21 v21 h-21 z M82,3 h15 v15 h-15 z M85,6 h9 v9 h-9 z" /> 
                  {/* Bottom Left Area */} 
                  <path d="M0,79 h21 v21 h-21 z M3,82 h15 v15 h-15 z M6,85 h9 v9 h-9 z" /> 
                   
                  {/* Core randomized binary grids (High-end aesthetic geometric grid patterns) */} 
                  <path d="M28,4 h4 v4 h-4 z M36,4 h4 v4 h-4 z M44,4 h4 v4 h-4 z M52,2 h4 v4 h-4 z M60,4 h4 v4 h-4 z M68,1 h4 v4 h-4 z" /> 
                  <path d="M28,12 h4 v4 h-4 z M36,12 h6 v4 h-6 z M48,15 h4 v4 h-4 z M56,12 h4 v4 h-4 z M68,10 h4 v4 h-4 z M74,12 h3 v4 h-3 z" /> 
                  <path d="M2,28 h4 v4 h-4 z M10,28 h4 v4 h-4 z M18,28 h4 v4 h-4 z M30,28 h10 v4 h-10 z M48,28 h4 v4 h-4 z M56,28 h4 v4 h-4 z M64,28 h4 v4 h-4 z M72,28 h4 v4 h-4 z M80,28 h4 v4 h-4 z M88,28 h4 v4 h-4 z M96,28 h4 v4 h-4 z" /> 
                  <path d="M4,38 h4 v4 h-4 z M12,36 h4 v4 h-4 z M24,38 h4 v4 h-4 z M36,38 h4 v4 h-4 z M44,38 h4 v4 h-4 z M52,38 h4 v4 h-4 z M64,38 h4 v4 h-4 z M76,38 h4 v4 h-4 z M84,38 v4 h4 v-8 z M92,38 h4 v4 h-4 z" /> 
                  <path d="M4,46 h4 v4 h-4 z M16,46 h4 v4 h-4 z M28,44 h4 v4 h-4 z M40,46 h4 v4 h-4 z M48,46 h4 v4 h-4 z M52,48 v4 h6 v-4 z M68,46 h4 v4 h-4 z M76,46 h4 v4 h-4 z M84,46 h4 v4 h-4 z M92,46 h4 v4 h-4 z" /> 
                  <path d="M2,58 h4 v4 h-4 z M10,58 h4 v4 h-4 z M18,58 h4 v4 h-4 z M30,56 h4 v4 h-4 z M38,58 h4 v4 h-4 z M46,58 h4 v4 h-4 z M58,58 h4 v4 h-4 z M66,58 h4 v4 h-4 z M74,58 h4 v4 h-4 z M82,58 h4 v4 h-4 z M90,58 h4 v4 h-4 z" /> 
                  <path d="M4,68 h4 v4 h-4 z M12,68 h4 v4 h-4 z M24,68 h4 v4 h-4 z M36,68 h4 v4 h-4 z M44,68 v4 h6 v-4 z M56,68 h4 v4 h-4 z M68,68 v4 h8 v-4 z M84,68 h4 v4 h-4 z M92,68 h4 v4 h-4 z" /> 
                  <path d="M28,76 h4 v4 h-4 z M36,74 h4 v4 h-4 z M48,76 h4 v4 h-4 z M56,76 h4 v4 h-4 z M64,74 h4 v4 h-4 z M72,76 h12 v4 h-12 z M88,76 h4 v4 h-4 z" /> 
                  <path d="M28,88 h4 v4 h-4 z M34,88 h6 v4 h-6 z M46,88 h4 v4 h-4 z M54,88 h4 v4 h-4 z M62,88 h4 v4 h-4 z M70,88 h4 v4 h-4 z M88,88 h4 v4 h-4 z M96,88 h4 v4 h-4 z" /> 
                  <path d="M28,96 h4 v4 h-4 z M36,96 h4 v4 h-4 z M44,96 h4 v4 h-4 z M52,96 h4 v4 h-4 z M60,96 h4 v4 h-4 z M68,96 h4 v4 h-4 z M76,96 h4 v4 h-4 z M84,96 h4 v4 h-4 z M92,96 h4 v4 h-4 z" /> 
 
                  {/* Centered Crest cutout */} 
                  <rect x="42" y="42" width="16" height="16" className="fill-[#1A1A1D]" /> 
                </svg> 
 
                {/* Fine Japanese Imperial Crest Symbol placed precisely in the center */} 
                <div className="absolute w-8 h-8 bg-[#1A1A1D] border border-[#C3073F]/40 flex items-center justify-center select-none z-10 rotate-45"> 
                  <span className="text-[8px] text-[#C3073F] font-serif font-bold uppercase tracking-widest -rotate-45">桜</span> 
                </div> 
              </div> 
 
              {/* Character signature under banner */} 
              <div className="mt-4"> 
                <span className="text-[10px] font-mono text-neutral-400">COZY DIGITAL GATEWAY v2.8</span> 
              </div> 
            </div> 
 
            {/* Quick functional action triggers directly beneath the frame */} 
            <div className="flex gap-4 w-full"> 
              {/* Scan simulation activation trigger */} 
              <button 
                type="button" 
                onClick={() => setSimulatedScan(!simulatedScan)} 
                className={`flex-1 py-3 border text-[10px] font-mono uppercase tracking-widest transition-all duration-300 cursor-pointer ${ 
                  simulatedScan 
                    ? "bg-[#C3073F] text-black border-[#C3073F] font-semibold" 
                    : "bg-[#1A1A1D]/40 border-[#F9F5EE]/10 text-neutral-300 hover:border-[#C3073F]/40 hover:text-white" 
                }`} 
              > 
                {simulatedScan ? "Close Scan Window" : "Simulate Mobile Scan"} 
              </button> 
 
              {/* Physical vector download */} 
              <button 
                type="button" 
                onClick={handleDownload} 
                disabled={isDownloading} 
                className="px-5 border border-[#F9F5EE]/10 bg-[#1A1A1D]/40 hover:border-[#C3073F]/40 text-neutral-300 hover:text-white flex items-center justify-center cursor-pointer transition-all disabled:opacity-40" 
                aria-label="Download Menu Vector" 
              > 
                {isDownloading ? ( 
                  <span className="w-4 h-4 border-2 border-[#C3073F]/30 border-t-[#C3073F] animate-spin" /> 
                ) : downloadComplete ? ( 
                  <Check className="w-4 h-4 text-[#C3073F]" /> 
                ) : ( 
                  <Download className="w-4 h-4" /> 
                )} 
              </button> 
            </div> 
             
            {/* Quick success message details block */} 
            {downloadComplete && ( 
              <p className="text-[9px] font-mono text-[#C3073F] animate-fade-in-up uppercase tracking-widest"> 
                ✦ High-Resolution Gourmet Print Secured in Downloads folder 
              </p> 
            )} 
          </div> 
 
          {/* Interactive Smartphone Viewport / Input segment (Right - 7 columns) */} 
          <div className="lg:col-span-7 space-y-8 z-10 relative"> 
             
            {/* Conditional Smartphone Simulation screen or Descriptive panel */} 
            <div className="bg-[#1A1A1D] border border-[#F9F5EE]/10 rounded-none p-6 md:p-8 shadow-2xl relative min-h-[340px] flex flex-col justify-between"> 
               
              {/* Dynamic state check */} 
              {!simulatedScan ? ( 
                /* Static Premium Instruction panel with fine brand credentials */ 
                <div className="space-y-6 my-auto"> 
                  <div className="flex items-center gap-2"> 
                    <Smartphone className="w-4.5 h-4.5 text-[#C3073F]" /> 
                    <span className="text-[9px] font-mono text-[#C3073F] uppercase tracking-widest"> 
                      Mobile Direct Gateway 
                    </span> 
                  </div> 
 
                  <h3 className="text-xl font-serif text-white uppercase tracking-wide"> 
                    An Interactive Living Carte Menu 
                  </h3> 
                   
                  <p className="text-neutral-400 text-xs leading-relaxed opacity-85"> 
                    Our digital menu changes dynamically depending on the barometric pressure in Tokyo, active wind patterns above Islamabad, and server-side Michelin criteria. By scanning, you instantiate an encrypted culinary license that reveals: 
                  </p> 
 
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[11px] text-neutral-400 font-mono"> 
                    <li className="flex items-center gap-2 text-neutral-300"> 
                      <span className="text-[#C3073F]">✦</span> Sommelier's Secret Cellar Flight 
                    </li> 
                    <li className="flex items-center gap-2 text-neutral-300"> 
                      <span className="text-[#C3073F]">✦</span> Real-time Dashi Heat Indexes 
                    </li> 
                    <li className="flex items-center gap-2 text-neutral-300"> 
                      <span className="text-[#C3073F]">✦</span> Rare Seasonal Saffron Sourcing 
                    </li> 
                    <li className="flex items-center gap-2 text-neutral-300"> 
                      <span className="text-[#C3073F]">✦</span> Instant All-Weather Reservations 
                    </li> 
                  </ul> 
                </div> 
              ) : ( 
                /* Beautiful Premium Smartphone Display frame rendering secret culinary items */ 
                <div className="space-y-6 animate-fade-in-up"> 
                   
                  <div className="flex justify-between items-center pb-4 border-b border-[#F9F5EE]/10"> 
                    <div className="flex items-center gap-2"> 
                      <div className="w-2.5 h-2.5 bg-[#C3073F] rounded-none animate-pulse" /> 
                      <span className="text-[10px] font-mono text-white uppercase tracking-widest"> 
                        COZY_SECURE://digital-carte-unlocked 
                      </span> 
                    </div> 
                    <span className="text-[9px] font-mono bg-[#C3073F]/10 border border-[#C3073F]/25 text-[#C3073F] px-2 py-0.5 uppercase"> 
                      Pass Verified 
                    </span> 
                  </div> 
 
                  <div className="space-y-2"> 
                    <h3 className="text-base font-serif text-white uppercase tracking-wide"> 
                      Scan Revealed: <span className="text-[#C3073F] italic">Off-Menu Masterpieces</span> 
                    </h3> 
                    <p className="text-[11px] text-neutral-400 leading-relaxed font-light"> 
                      These rare culinary blueprints are exclusive to patrons scanning the digital gateway. Order directly through your imperial desk. 
                    </p> 
                  </div> 
 
                  {/* Secret dishes inventory display slots */} 
                  <div className="space-y-4 max-h-[220px] overflow-y-auto pr-2 custom-scrollbar"> 
                    {secretDishes.map((dish) => ( 
                      <div  
                        key={dish.id}  
                        onClick={() => setUnlockedSecret(unlockedSecret === dish.id ? null : dish.id)} 
                        className={`p-4 border transition-all duration-300 cursor-pointer ${ 
                          unlockedSecret === dish.id  
                            ? "bg-[#C3073F]/5 border-[#C3073F]/40"  
                            : "bg-[#1A1A1D]/60 border-[#F9F5EE]/10 hover:border-[#4E4E50]" 
                        }`} 
                      > 
                        <div className="flex justify-between items-baseline"> 
                          <span className="text-[8px] font-mono text-[#C3073F] uppercase tracking-widest">{dish.category}</span> 
                          <span className="text-xs font-serif text-[#C3073F] font-semibold">${dish.price}</span> 
                        </div> 
                        <h4 className="text-xs font-serif text-white uppercase tracking-wide mt-1.5 flex items-center justify-between"> 
                          <span>{dish.name}</span> 
                          <span className="text-[9px] font-mono text-neutral-500 tracking-normal normal-case font-normal"> 
                            {unlockedSecret === dish.id ? "Click to wrap" : "View Specs"} 
                          </span> 
                        </h4> 
                         
                        {unlockedSecret === dish.id && ( 
                          <p className="text-[11px] text-neutral-400 mt-2 leading-relaxed font-light border-t border-[#4E4E50] pt-2 animate-fade-in-up"> 
                            {dish.description} 
                          </p> 
                        )} 
                      </div> 
                    ))} 
                  </div> 
 
                  {/* Micro-text status indicator */} 
                  <p className="text-[9px] font-mono text-neutral-500 text-center uppercase tracking-widest"> 
                    ✦ Hover or Tap individual items to view secret allergen and truffle specifications 
                  </p> 
                </div> 
              )} 
 
              {/* Bottom Smartphone Dispatcher block (Persistent) */} 
              <div className="mt-6 pt-6 border-t border-[#F9F5EE]/10"> 
                <span className="text-[9px] font-mono text-[#C3073F] uppercase tracking-widest block mb-4"> 
                  Dispatch Passport Menu Link Instantly to Phone: 
                </span> 
 
                {successSent ? ( 
                  <div className="p-3 bg-[#C3073F]/10 border border-[#C3073F]/35 text-[#C3073F] font-mono text-[10px] uppercase tracking-widest text-center animate-fade-in-up"> 
                    ✦ Link dispatched to secure satellite network. Check your device inside 60s. 
                  </div> 
                ) : ( 
                  <form onSubmit={handleSendMenu} className="flex gap-2"> 
                    <input 
                      type="tel" 
                      value={phoneValue} 
                      onChange={(e) => setPhoneValue(e.target.value)} 
                      placeholder="+91 99999 88888 or +1 415 555-0199" 
                      className="flex-1 bg-[#1A1A1D] border border-[#F9F5EE]/10 focus:border-[#C3073F]/30 rounded-none py-2.5 px-4 text-xs text-white placeholder-neutral-600 focus:outline-none" 
                      required 
                    /> 
                    <button 
                      type="submit" 
                      className="bg-[#C3073F] hover:bg-[#950740] text-black px-6 rounded-none text-xs font-mono uppercase tracking-widest font-semibold cursor-pointer transition-colors active:scale-95 flex items-center gap-1.5" 
                    > 
                      <Send className="w-3.5 h-3.5" /> 
                      <span>Send</span> 
                    </button> 
                  </form> 
                )} 
              </div> 
               
            </div> 
 
            {/* Direct Web link anchor note */} 
            <p className="text-[10px] font-mono text-neutral-500 leading-relaxed text-right"> 
              Prefer direct browser view? <a href="#" onClick={(e) => { e.preventDefault(); setSimulatedScan(true); }} className="text-[#C3073F] hover:underline inline-flex items-center gap-1">Open Virtual carte <ExternalLink className="w-3 h-3" /></a> 
            </p> 
 
          </div> 
 
        </div> 
 
      </div> 
    </section> 
  ); 
}