/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, CalendarDays, Compass, Send, Github, MessageCircle } from "lucide-react";

export default function Contact() {
  const [activeBranch, setActiveBranch] = useState("Tokyo");
  const [emailValue, setEmailValue] = useState("");
  const [joinedGuild, setJoinedGuild] = useState(false);

  const branchDetails = {
    Tokyo: {
      name: "Cozy Lights – Tokyo HQ",
      coordinates: "35.6762° N, 139.6503° E",
      address: "Chiyoda Royal Pavilion District, Floor 24, Tokyo Imperial Building, Japan",
      phone: "+81 3-5555-8899",
      mail: "tokyo@cozylightsroyale.com",
      hours: {
        weekday: "Session I: 12:00 – 15:30 | Session II: 18:00 – 23:00",
        weekend: "Imperial Banquets: 12:00 – 00:00 (Saturdays Close)",
        note: "Zen Rest Days: Closed on national Shinto lunar holidays"
      },
      vectorBlueprint: "M10 80 Q 52.5 10, 95 80 T 180 80 T 265 80"
    },
    Islamabad: {
      name: "Cozy Lights – Islamabad Palace",
      coordinates: "33.7025° N, 73.0235° E ",
      address: "New Blue Area, Islamabad, Pakistan",
      phone: "+92 334 5384459",
      mail: "islamabad@cozylightsroyale.com",
      hours: {
        weekday: "Session I: 12:30 – 16:00 | Session II: 18:30 – 23:30",
        weekend: "Imperial Banquets: 13:00 – 00:30 (Sundays Open)",
        note: "Zen Rest Days: Closed on national festive dry days"
      },
      vectorBlueprint: "M10 40 C 20 20, 40 20, 50 40 S 80 60, 90 40 S 120 20, 130 40"
    }
  };

  const activeInfo = activeBranch === "Tokyo" ? branchDetails.Tokyo : branchDetails.Islamabad;

  const handleGuildRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailValue) {
      setJoinedGuild(true);
      setEmailValue("");
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#1A1A1D] relative border-t border-[#F9F5EE]/10 overflow-hidden">
      {/* Decorative background grids */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(195,7,63,0.01)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(195,7,63,0.01)_1.5px,transparent_1.5px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 z-10 relative">
        <div className="text-center mb-16">
          <span className="text-[#C3073F] font-serif tracking-[4px] text-[10px] uppercase block mb-3 italic">Geographic Quadrants</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white uppercase leading-[1.1]">
            Contact & <span className="text-[#C3073F] font-serif italic normal-case tracking-normal">Reservations HQ</span>
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto mt-4 text-xs leading-relaxed opacity-80">
            Locate our sovereign estates. Switch below to load geographical vector grids, operating schedules, and direct hotlines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-stretch">
          {/* Geographic specs info - 6 columns */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8 bg-[#1A1A1D] border border-[#F9F5EE]/10 p-8 rounded-none">
            {/* Branch Selector buttons */}
            <div className="flex gap-4 p-1.5 bg-[#1A1A1D] border border-[#F9F5EE]/10 rounded-none">
              <button
                onClick={() => setActiveBranch("Tokyo")}
                className={`flex-1 py-3 text-[10px] font-mono uppercase tracking-widest rounded-none transition-all duration-300 cursor-pointer ${
                  activeBranch === "Tokyo"
                    ? "bg-[#C3073F] text-black font-semibold shadow-md"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Tokyo Sector
              </button>
              <button
                onClick={() => setActiveBranch("Islamabad")}
                className={`flex-1 py-3 text-[10px] font-mono uppercase tracking-widest rounded-none transition-all duration-300 cursor-pointer ${
                  activeBranch === "Islamabad"
                    ? "bg-[#C3073F] text-black font-semibold shadow-md"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Islamabad Sector
              </button>
            </div>

            {/* Core Address & GPS coordinate specs */}
            <div className="space-y-6">
              <div>
                <span className="text-[9px] font-mono text-[#C3073F] uppercase tracking-widest flex items-center gap-1.5 mb-2">
                  <Compass className="w-3.5 h-3.5 text-[#C3073F] animate-spin-slow" />
                  Skins & GPS Coordinates
                </span>
                <p className="text-lg font-serif italic text-white font-semibold">
                  {activeInfo.coordinates}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#C3073F] shrink-0 mt-0.5" />
                  <p className="text-xs text-neutral-300 leading-relaxed font-light">{activeInfo.address}</p>
                </div>
                <div className="flex items-center gap-3.5">
                  <Phone className="w-5 h-5 text-[#C3073F] shrink-0" />
                  <p className="text-xs text-neutral-300 font-mono">{activeInfo.phone}</p>
                </div>
                <div className="flex items-center gap-3.5">
                  <Mail className="w-5 h-5 text-[#C3073F] shrink-0" />
                  <p className="text-xs text-neutral-300 font-mono">{activeInfo.mail}</p>
                </div>
              </div>
            </div>

            {/* Hour schedules block */}
            <div className="border-t border-[#F9F5EE]/10 pt-6 space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C3073F]" />
                <span className="text-[9px] font-mono text-white uppercase tracking-wider">
                  Imperial Table Hours
                </span>
              </div>
              <div className="space-y-2 text-xs leading-relaxed font-light">
                <p className="text-neutral-300">
                  <strong className="text-white font-medium block mb-0.5">Weekdays (Mon – Fri):</strong>
                  {activeInfo.hours.weekday}
                </p>
                <p className="text-neutral-300">
                  <strong className="text-white font-medium block mb-0.5">Saturdays & Sundays:</strong>
                  {activeInfo.hours.weekend}
                </p>
                <p className="text-[10px] font-mono text-[#C3073F]/80 italic mt-2">
                  ✦ {activeInfo.hours.note}
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Vector Grid Blueprint Board - 6 columns */}
          <div className="lg:col-span-6 bg-[#1A1A1D] border border-[#F9F5EE]/10 rounded-none p-8 flex flex-col justify-between items-center text-center relative overflow-hidden min-h-[350px]">
            {/* Background absolute blueprint compass overlay */}
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] scale-125 select-none pointer-events-none">
              <Compass className="w-96 h-96 text-[#C3073F] animate-spin-slow" />
            </div>

            <div className="w-full h-48 bg-[#1A1A1D]/40 rounded-none border border-[#F9F5EE]/10 flex flex-col justify-center items-center p-4 relative z-10 overflow-hidden select-none">
              {/* Dynamic Vector Map paths render */}
              <svg className="w-full h-24 stroke-[#950740]/25 fill-none stroke-2 stroke-dasharray-[6]" viewBox="0 0 300 100">
                <path d={activeInfo.vectorBlueprint} />
                <circle cx="150" cy="50" r="4" className="fill-[#C3073F] stroke-[#950740]/40 stroke-4 animate-pulse" />
              </svg>
              <span className="text-[10px] font-mono text-[#4E4E50] mt-4 uppercase">
                Acoustic Radar Location Alignment Status: [ENGAGED]
              </span>
            </div>

            <div className="space-y-4 z-10 mt-6 w-full">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white font-mono">
                Join our Global Guild
              </h3>
              <p className="text-xs text-neutral-400 font-light max-w-sm mx-auto leading-relaxed">
                Receive secret banquet envelopes, priority booking vouchers, and recipes straight from Chef Kenji's catalog twice monthly.
              </p>

              {/* Secret email signup */}
              {joinedGuild ? (
                <div className="p-3 bg-[#950740]/10 border border-[#950740]/30 text-[#C3073F] font-mono text-[11px] tracking-wide max-w-sm mx-auto animate-fade-in-up">
                  ✦ CONFIRMED: PASSPORT ENTERED SECURELY IN COZY GUILD
                </div>
              ) : (
                <form onSubmit={handleGuildRegister} className="flex gap-2 w-full max-w-sm mx-auto pt-2">
                  <input
                    type="email"
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                    placeholder="Enter secure passport email..."
                    className="w-full bg-[#1A1A1D] border border-[#F9F5EE]/10 focus:border-[#C3073F]/30 rounded-none py-2.5 px-4 text-xs text-white placeholder-[#4E4E50] focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-[#C3073F] hover:bg-[#950740] text-black px-5 rounded-none text-xs font-mono uppercase tracking-wider font-semibold cursor-pointer active:scale-95"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}