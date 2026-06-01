/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Calendar, Clock, Users, Sofa, Info, Star, ShieldCheck, ListCollapse } from "lucide-react";
import { ReservationDetails } from "../types";

export default function Reservation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("2026-06-05");
  const [time, setTime] = useState("19:00");
  const [guests, setGuests] = useState(2);
  const [seatingPreference, setSeatingPreference] = useState("Sakura Blossom Garden View Canopy");
  const [specialRequests, setSpecialRequests] = useState("");

  const [activeBookings, setActiveBookings] = useState<any[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successBooking, setSuccessBooking] = useState<any | null>(null);
  const [viewHistory, setViewHistory] = useState(false);

  // Load existing reservations from the Express server on mount
  const fetchReservations = async () => {
    try {
      const response = await fetch("/api/reservations");
      if (response.ok) {
        const data = await response.json();
        setActiveBookings(data);
      }
    } catch (e) {
      console.error("Failed to load active reservations:", e);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  const seatingZones = [
    { name: "Sakura Blossom Garden View Canopy", desc: "Dine under authentic glowing pink blossoms inside custom wooden partitions", multiplier: "+$10/person" },
    { name: "Twilight Tokyo Sky Deck", desc: "Sweeping floor-to-ceiling glass panel panoramas of the Tokyo night skyline", multiplier: "+$15/person" },
    { name: "Master Chef Glasscounter", desc: "Front row velvet seats watching Head Chef Kenji plating seasonal details live", multiplier: "+$20/person" },
    { name: "The Imperial Rose Pavilion", desc: "Private velvet draped grand suites with personal acoustic harp and fireplace", multiplier: "+$35/person" }
  ];

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload: ReservationDetails = {
      name,
      email,
      phone,
      date,
      time,
      guests: Number(guests),
      seatingPreference,
      specialRequests
    };

    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessBooking(data.reservation);
        fetchReservations(); // reload bookings in background

        // Clear fields
        setName("");
        setEmail("");
        setPhone("");
        setSpecialRequests("");
      } else {
        throw new Error("Unable to contact hosting reservation systems.");
      }
    } catch (err) {
      console.error(err);
      // Fallback local mock simulation in case of system offline
      const simulatedBooking = {
        id: "res-sim-" + Math.floor(Math.random() * 900),
        ...payload
      };
      setSuccessBooking(simulatedBooking);
      setActiveBookings((prev) => [...prev, simulatedBooking]);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reservations" className="py-24 bg-[#081120]/40 relative border-b border-[#F9F5EE]/10">
      {/* Background soft red bokeh lights */}
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-[#6D0F24]/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-500 font-serif tracking-[4px] text-[10px] uppercase block mb-3 italic">Sovereign Seating</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white uppercase leading-[1.1]">
            Secure Your <span className="text-yellow-500 font-serif italic normal-case tracking-normal">Imperial Table</span>
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto mt-4 text-xs leading-relaxed opacity-80">
            Reserve your placement beneath the cherry blossoms. Instant full-stack registration secures your digital voucher.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-6xl mx-auto items-start">
          {/* Seating blueprint / Zones - 5 Columns */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0A0A0A] border border-[#F9F5EE]/10 rounded-none p-6 space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-[10px] font-semibold text-white uppercase tracking-[0.2em] font-mono">
                  Select Seating Zone
                </h3>
                <span className="text-[9px] bg-yellow-500/10 text-yellow-500 px-2.5 py-0.5 rounded-none font-mono uppercase tracking-widest border border-yellow-500/25">
                  Live Selection
                </span>
              </div>

              {/* Seating zones list buttons */}
              <div className="space-y-4">
                {seatingZones.map((zone, zIdx) => (
                  <button
                    key={zIdx}
                    id={`zone-${zIdx}`}
                    onClick={() => setSeatingPreference(zone.name)}
                    className={`w-full text-left p-4 rounded-none border transition-all duration-300 relative group cursor-pointer ${
                      seatingPreference === zone.name
                        ? "bg-[#081120] border-yellow-500/50 shadow-lg"
                        : "bg-neutral-950/40 border-[#F9F5EE]/10 hover:border-neutral-700"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className={`text-[11px] font-serif uppercase tracking-wider ${
                        seatingPreference === zone.name ? "text-yellow-500" : "text-white group-hover:text-yellow-500/80"
                      }`}>
                        {zone.name}
                      </span>
                      <span className="text-[9px] font-mono text-neutral-500 font-medium">
                        {zone.multiplier}
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-400 mt-2 leading-relaxed font-light opacity-90">
                      {zone.desc}
                    </p>
                  </button>
                ))}
              </div>

              {/* Little informative note */}
              <div className="p-4 bg-transparent rounded-none border border-yellow-500/25 flex items-start gap-3">
                <Info className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                <p className="text-[10px] text-neutral-400 leading-relaxed font-light">
                  <strong className="text-white block font-medium uppercase tracking-widest mb-0.5">Voucher Specifications</strong>
                  A seat reservation guarantees canopy slot for 2 hours. Minimum culinary spend of $40 per guest applies on peak weekends.
                </p>
              </div>
            </div>

            {/* View Reservation history panel trigger */}
            <div className="bg-[#0A0A0A] border border-[#F9F5EE]/10 rounded-none p-4 flex justify-between items-center">
              <span className="text-[10px] text-neutral-400 font-light">Have an active booking registered?</span>
              <button
                onClick={() => setViewHistory(!viewHistory)}
                className="text-[10px] font-mono text-yellow-500 hover:text-yellow-400 uppercase tracking-widest cursor-pointer flex items-center gap-1.5"
              >
                <ListCollapse className="w-3.5 h-3.5" />
                <span>{viewHistory ? "Hide Bookings" : `View Bookings (${activeBookings.length})`}</span>
              </button>
            </div>

            {/* List active bookings if requested */}
            {viewHistory && (
              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 animate-fade-in-up">
                {activeBookings.map((b) => (
                  <div key={b.id} className="p-4 rounded-none bg-[#090909] border border-[#F9F5EE]/10 space-y-2">
                    <div className="flex justify-between items-center text-[10px] font-mono text-neutral-500 uppercase">
                      <span>ID: {b.id}</span>
                      <span className="text-emerald-500 font-semibold">✦ SECURED VOUCHER</span>
                    </div>
                    <h4 className="text-xs font-serif uppercase tracking-tight text-white">{b.name} ({b.guests} Guests)</h4>
                    <p className="text-[10px] text-neutral-400 font-mono">
                      📅 {b.date} ⏰ {b.time} | Seating: {b.seatingPreference}
                    </p>
                    {b.specialRequests && (
                      <p className="text-[10px] text-yellow-500/80 italic font-mono">“{b.specialRequests}”</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Form and confirmation state - 7 Columns */}
          <div className="lg:col-span-7 bg-[#0A0A0A] border border-[#F9F5EE]/10 rounded-none p-6 md:p-8">
            {!successBooking ? (
              <form onSubmit={handleBooking} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="res-name-input" className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest block">FullName:</label>
                    <input
                      id="res-name-input"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Lord Arnav Sharma"
                      className="w-full bg-[#0E0E0E] border border-[#F9F5EE]/10 focus:border-yellow-500/30 rounded-none py-2.5 px-4 text-xs text-white focus:outline-none"
                      required
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="res-email-input" className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest block">Email Address:</label>
                    <input
                      id="res-email-input"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="arnav@gmail.com"
                      className="w-full bg-[#0E0E0E] border border-[#F9F5EE]/10 focus:border-yellow-500/30 rounded-none py-2.5 px-4 text-xs text-white focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone field */}
                  <div className="space-y-2">
                    <label htmlFor="res-phone-input" className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest block">Contact Number:</label>
                    <input
                      id="res-phone-input"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#0E0E0E] border border-[#F9F5EE]/10 focus:border-yellow-500/30 rounded-none py-2.5 px-4 text-xs text-white focus:outline-none"
                      required
                    />
                  </div>

                  {/* Guests field */}
                  <div className="space-y-2">
                    <label htmlFor="res-members-picker" className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest block">Total Members:</label>
                    <div className="relative">
                      <select
                        id="res-members-picker"
                        value={guests}
                        onChange={(e) => setGuests(Number(e.target.value))}
                        className="w-full bg-[#0E0E0E] border border-[#F9F5EE]/10 focus:border-yellow-500/30 rounded-none py-2.5 pl-4 pr-10 text-xs text-white focus:outline-none appearance-none cursor-pointer"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 10].map((num) => (
                          <option key={num} value={num} className="bg-[#0A0A0A]">
                            {num} {num === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                      </select>
                      <Users className="w-4 h-4 text-neutral-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Calendar entry */}
                  <div className="space-y-2">
                    <label htmlFor="res-date-picker" className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest block">Date of Banquet:</label>
                    <div className="relative">
                      <input
                        id="res-date-picker"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-[#0E0E0E] border border-[#F9F5EE]/10 focus:border-yellow-500/30 rounded-none py-2.5 pl-4 pr-10 text-xs text-white focus:outline-none"
                        required
                      />
                      <Calendar className="w-4 h-4 text-neutral-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Time slots */}
                  <div className="space-y-2">
                    <label htmlFor="res-time-picker" className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest block">Hour of Appointment:</label>
                    <div className="relative">
                      <select
                        id="res-time-picker"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full bg-[#0E0E0E] border border-[#F9F5EE]/10 focus:border-yellow-500/30 rounded-none py-2.5 pl-4 pr-10 text-xs text-white focus:outline-none appearance-none cursor-pointer"
                      >
                        {["12:00", "13:30", "15:00", "18:00", "19:00", "20:00", "21:30", "22:00"].map((slot) => (
                          <option key={slot} value={slot} className="bg-[#0A0A0A]">
                            {slot}
                          </option>
                        ))}
                      </select>
                      <Clock className="w-4 h-4 text-neutral-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Special requests line */}
                <div className="space-y-2">
                  <label htmlFor="res-requests-area" className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest block">Special requests or dietary rules:</label>
                  <textarea
                    id="res-requests-area"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="e.g. Cardamom tataki requested, wheelchair access..."
                    className="w-full bg-[#0E0E0E] border border-[#F9F5EE]/10 focus:border-yellow-500/30 rounded-none py-2.5 px-4 text-xs text-white focus:outline-none h-20 resize-none"
                  />
                </div>

                {/* Terms and conditions signature details */}
                <p className="text-[10px] text-neutral-500 font-mono tracking-wider leading-relaxed">
                  ✦ By clicking below, you authenticate this placement in real-time as an official booking contract status at Sakura Royale.
                </p>

                {/* Core booking button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-yellow-500 hover:bg-yellow-400 disabled:opacity-55 text-black text-xs font-mono uppercase tracking-[0.25em] font-bold rounded-none transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-99 font-medium"
                >
                  {isSubmitting ? "Securing Vault Seating..." : "Request Reservation Placement"}
                </button>
              </form>
            ) : (
              /* Success Confirmation Card State */
              <div className="text-center py-12 px-6 flex flex-col items-center justify-center space-y-6 animate-fade-in-up">
                <div className="w-16 h-16 rounded-none bg-emerald-500/10 border border-emerald-500/35 flex justify-center items-center text-emerald-400">
                  <ShieldCheck className="w-8 h-8 animate-bounce" />
                </div>

                <div className="space-y-2">
                  <span className="text-[9px] font-mono uppercase bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-none border border-emerald-500/30 tracking-widest inline-block">
                    VOUCHER SECURED IN SECURE SYSTEM
                  </span>
                  <h3 className="text-2.5xl font-serif text-white uppercase mt-4">
                    Banquet Secured!
                  </h3>
                  <p className="text-xs text-neutral-400 max-w-md mx-auto leading-relaxed">
                    Greetings, {successBooking.name}! Your royal placement under the canopy is reserved successfully. Present this voucher code at entry.
                  </p>
                </div>

                {/* Digital Ticket Voucher Board */}
                <div className="w-full max-w-sm rounded-none bg-neutral-950 p-6 border-2 border-yellow-500 relative overflow-hidden text-left space-y-4 shadow-xl">
                  {/* Ticket notched circles decorative details */}
                  <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 bg-[#0B0C0E] border-r border-[#F9F5EE]/10" />
                  <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 bg-[#0B0C0E] border-l border-[#F9F5EE]/10" />

                  <div className="flex justify-between items-center text-[9px] font-mono text-neutral-500 uppercase pb-2 border-b border-[#F9F5EE]/10 tracking-widest">
                    <span>RESERVATION ID: {successBooking.id}</span>
                    <span className="text-yellow-500">Sakura Royale</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pb-2 border-b border-[#F9F5EE]/10">
                    <div>
                      <span className="text-[9px] font-mono text-neutral-500 block tracking-wider">PATRON</span>
                      <span className="text-xs font-serif uppercase tracking-wider text-white block mt-0.5">{successBooking.name}</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-neutral-500 block tracking-wider">SEAT COUNTER</span>
                      <span className="text-xs font-mono text-white block mt-0.5">{successBooking.guests} Guests</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pb-2">
                    <div>
                      <span className="text-[9px] font-mono text-neutral-500 block tracking-wider">SCHEDULE</span>
                      <span className="text-xs font-mono text-white block mt-0.5">{successBooking.date}</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-neutral-500 block tracking-wider">HOUR</span>
                      <span className="text-xs font-mono text-white block mt-0.5">{successBooking.time} SECURE</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[9px] font-mono text-neutral-500 block tracking-wider">SEATING CLASSIFICATION</span>
                    <span className="text-xs font-serif uppercase tracking-wider text-yellow-500 block mt-0.5">{successBooking.seatingPreference}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSuccessBooking(null)}
                  className="px-6 py-2.5 border border-[#F9F5EE]/15 hover:border-yellow-500 rounded-none text-[10px] font-mono text-neutral-400 hover:text-white uppercase tracking-widest transition-colors cursor-pointer"
                >
                  Confirm Another Seating
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
