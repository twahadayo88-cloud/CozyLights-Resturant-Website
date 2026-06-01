/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  nativeName: string;
  description: string;
  price: number;
  category: "Starters" | "Main Course" | "Desserts" | "Beverages" | "Chef's Specials";
  imageUrl: string;
  tags: string[];
  spicyLevel?: number; // 0-3
  isVegetarian?: boolean;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number; // 1-5
  avatarUrl: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Interiors" | "Dishes" | "Chef Moments" | "Events";
  imageUrl: string;
  description: string;
}

export interface ReservationDetails {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingPreference: string;
  specialRequests?: string;
}
