/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ThreeFoodShowcase from "./components/ThreeFoodShowcase";
import SignatureDishes from "./components/SignatureDishes";
import Menu from "./components/Menu";
import QrMenu from "./components/QrMenu";
import Reservation from "./components/Reservation";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative text-[#F9F5EE] bg-[#0A0A0A] font-sans antialiased selection:bg-yellow-500/30 selection:text-white">
      {/* 1. Global Subtle Mouse Follow Spotlight Effect Overlay (Adds ambient luxury) */}
      <div className="absolute inset-0 bg-[#0A0A0A] pointer-events-none z-0" />

      {/* 2. Premium Sticky Glassmorphism Header Menu */}
      <Navbar />

      {/* 3. Immersive Cinematic Full-screen Landing Hero Section */}
      <Hero />

      {/* 4. Storytelling Michelin-featured About Segment */}
      <About />

      {/* 5. Immersive Three.js 3D Interactive Rotating Dish Specials Showcase */}
      <ThreeFoodShowcase />

      {/* 6. High-Contrast Core Signature spotlights scroll animation panel */}
      <SignatureDishes />

      {/* 7. Filtering and Searchable Glassmorphic Digital Carte Menu */}
      <Menu />

      {/* 8. Contactless QR Passport Digital Menu */}
      <QrMenu />

      {/* 9. Live Full-Stack Secured Booking Voucher Desk */}
      <Reservation />

      {/* 10. Masonry Interactive Lightboxed Album Gallery */}
      <Gallery />

      {/* 11. Customer reviews and Testimonials Sliding Carousel */}
      <Reviews />

      {/* 12. Geographic vector grid map coordinate contacts hours segment */}
      <Contact />

      {/* 13. High-End Corporate Hospitality Footer wrap and license watermarks */}
      <Footer />
    </div>
  );
}
