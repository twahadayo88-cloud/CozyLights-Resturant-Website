/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

// Temporary in-memory database to store luxurious reservations
const activeReservations: any[] = [
  {
    id: "res-demo",
    name: "Arnav Sharma",
    email: "arnav.sharma9051@gmail.com",
    phone: "+91 98765 43210",
    date: "2026-06-05",
    time: "20:00",
    guests: 4,
    seatingPreference: "Cozy Blossom Garden View Canopy",
    specialRequests: "Celebrating our wedding anniversary. Saffron noodles are requested."
  }
];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // --- API API ENDPOINTS FIRST ---

  // 1. Live Interactive Anime Chef Recommendations via Gemini API
  app.post("/api/chef-recommend", async (req, res) => {
    try {
      const { mood, preference, allergen, spiceLevel } = req.body;

      // Handle Gemini initialization with check for API Key
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.includes("MY_")) {
        // Fallback mockup response in case the API key isn't populated or active
        return res.json({
          dialogue: "*(Chef Kenji bows deeply with a joyful sparkle in his eyes)* Ah! Master guest, I see you are seeking something exceptionally refined today! Since my mystical culinary energy is in offline harmony right now, let me suggest our absolute jewel of the house.",
          dishName: "Imperial Royal Saffron Ramen",
          dishDescription: "Butter-tender sliced Miyazaki A5 Wagyu beef layered over hand-cut noodles and infused with rich saffron dashi, edible gold leaf dust, and freshly plucked spring Cozy petals.",
          dishPrice: 68,
          mascotExpression: "excited"
        });
      }

      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build'
          }
        }
      });

      const prompt = `You are "Chef Kenji", a legendary world-class 3-Michelin star Head Chef at the ultra-luxurious Japanese-Pakistan-Continental fusion restaurant "Cozy Lights". 
      You are also a highly aesthetic, charming anime-style chef mascot with a graceful, polite, yet energetic royal presence. 
      Recommend a highly personalized, gorgeous, cinematic culinary dish or beverage to the guest based on their inputs:
      - Guest Mood: "${mood || "Adventurous and looking for magic"}"
      - Preferred Flavors/tastes: "${preference || "A balance of Japanese precision and Pakistan spices"}"
      - Allergen restrictions: "${allergen || "None"}"
      - Desired Spice Level (0-3 scale): "${spiceLevel || "1"}"

      Provide your response in JSON format. The response must contain:
      - dialogue: anime-inspired speaking bubbles with character actions in asterisks like *(leans forward with an aesthetic twinkle)*, welcoming the guest warmly. Must sound like an elite friendly anime chef. In your bubble suggest the dish and explain why it matches their mood and flavor preferences.
      - dishName: A high-end luxury menu name that blends Japanese, Pakistan, and Continental fine dining.
      - dishDescription: High-quality, mouth-watering luxury description.
      - dishPrice: Recommended luxury dish price in USD (numeric, e.g. 45).
      - mascotExpression: Must be exactly one of: "warm", "excited", "thinking", "studious".`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              dialogue: { type: Type.STRING },
              dishName: { type: Type.STRING },
              dishDescription: { type: Type.STRING },
              dishPrice: { type: Type.INTEGER },
              mascotExpression: { type: Type.STRING }
            },
            required: ["dialogue", "dishName", "dishDescription", "dishPrice", "mascotExpression"]
          }
        }
      });

      const responseText = response.text;
      if (responseText) {
        const resultJson = JSON.parse(responseText.trim());
        return res.json(resultJson);
      } else {
        throw new Error("Empty response from AI engine");
      }
    } catch (error) {
      console.error("Gemini API Error:", error);
      res.status(500).json({
        error: "Failed to fetch recommendation",
        dialogue: "*(Chef Kenji places a hand on his heart and smiles apologetically)* Gomen nasai, my distinguished guest! The cosmic fire in my stove flickered briefly. Allow me to intuitively suggest our legendary Golden Matcha Soufflé ($25) to soothe your wait. It is fluffy as a cloud!",
        dishName: "Golden Matcha Soufflé",
        dishDescription: "Fluffy award-winning Uji matcha soufflé infused with gold dust, surrounded by white chocolate cherry blossom branches and ruby raspberry drops.",
        dishPrice: 25,
        mascotExpression: "warm"
      });
    }
  });

  // 2. Add Reservation
  app.post("/api/reservations", (req, res) => {
    try {
      const { name, email, phone, date, time, guests, seatingPreference, specialRequests } = req.body;
      if (!name || !email || !phone || !date || !time || !guests) {
        return res.status(400).json({ error: "Missing required booking details." });
      }

      const id = "res-" + Math.random().toString(36).substr(2, 9);
      const newReservation = {
        id,
        name,
        email,
        phone,
        date,
        time,
        guests: Number(guests),
        seatingPreference,
        specialRequests
      };

      activeReservations.push(newReservation);
      res.status(201).json({ success: true, message: "Luxurious reservation secured.", reservation: newReservation });
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  // 3. Get Active Reservations
  app.get("/api/reservations", (req, res) => {
    res.json(activeReservations);
  });

  // --- VITE DEV MIDDLEWARE OR PRODUCTION SERVING ---
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Cozy Lights Server] Listening securely on port ${PORT}`);
  });
}

startServer();
