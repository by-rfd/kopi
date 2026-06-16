import React from "react";
import { CoffeeRecipe } from "../types";
import { Coffee, Heart, Sparkles } from "lucide-react";

interface CoffeeCardProps {
  key?: string;
  recipe: CoffeeRecipe;
  isSelected: boolean;
  onSelect: () => void;
}

export default function CoffeeCard({ recipe, isSelected, onSelect }: CoffeeCardProps) {
  // Determine clean badge labels based on coffee ID and category
  const getBadgeText = (recipe: CoffeeRecipe) => {
    if (recipe.category === "non-coffee") return "Segar Non-Kopi";
    if (recipe.category === "manual-brew") return "Manual Brew Khas";
    if (recipe.category === "coffee-sweet") return "Manis & Nikmat";
    if (recipe.category === "coffee-creamy") return "Creamy Lembut";
    if (recipe.category === "coffee-dark") return "Hitam Klasik";
    if (recipe.category === "coffee-special") return "Kopi Dessert Mewah";
    
    switch (recipe.id) {
      case "vietnam-drip": return "Tradisional Lambat";
      case "susu-gula-aren": return "Favorit Lokal Khas";
      case "cafe-latte": return "Lembut & Cantik";
      case "cappuccino": return "Klasik & Berbusa";
      case "caramel-macchiato": return "Manis Caramel Sirup";
      case "americano": return "Hitam Pekat & Segar";
      case "mochaccino": return "Cokelat & Kopi Padu";
      case "cold-brew": return "Halus & Rendah Asam";
      case "affogato": return "Kopi Es Krim Dessert";
      case "espresso": return "Konsentrat Murni";
      default: return "Barista Spesial";
    }
  };

  return (
    <div
      id={`coffee-card-${recipe.id}`}
      onClick={onSelect}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border transition-all duration-300 cursor-pointer ${
        isSelected
           ? "border-amber-900 bg-amber-50/70 shadow-md ring-2 ring-amber-900/40 translate-y-[-4px]"
           : "border-amber-100 bg-white hover:border-amber-300 hover:shadow-sm hover:translate-y-[-2px]"
      }`}
    >
      <div>
        {/* Banner Image */}
        <div className="relative h-40 w-full overflow-hidden bg-amber-50">
          <img
            src={recipe.image}
            alt={recipe.name}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop";
            }}
          />
          {/* Tint overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-85" />
          
          {/* Floating Vibe/Badge */}
          <span className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-amber-900/90 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-white backdrop-blur-xs shadow-xs">
            <Sparkles className="h-2.5 w-2.5 text-amber-250 animate-pulse" />
            {getBadgeText(recipe)}
          </span>

          {/* Quick Stats on bottom of image */}
          <div className="absolute bottom-2 left-3 right-3 flex items-end justify-between text-white">
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-wider opacity-80 font-mono text-amber-200">Suhu Saji</span>
              <span className="text-xs font-semibold">{recipe.temperatureCelcius.split(" ")[0]}</span>
            </div>
            {isSelected && (
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-800 text-amber-100 shadow-sm animate-pulse">
                <Coffee className="h-3 w-3" />
              </span>
            )}
          </div>
        </div>

        {/* Content body */}
        <div className="p-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-base font-bold text-stone-900 transition-colors group-hover:text-amber-900">
                {recipe.name}
              </h3>
              <p className="text-xs font-medium text-amber-800/85 italic mb-1">
                {recipe.indonesianName}
              </p>
            </div>
          </div>
          
          <p className="mt-2 text-xs leading-relaxed text-stone-600 line-clamp-3">
            {recipe.description}
          </p>
        </div>
      </div>

      {/* Card Footer detail */}
      <div className="border-t border-amber-100/50 p-3 bg-amber-50/15 flex items-center justify-between">
        <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider">
          Rekomendasi biji kopi
        </span>
        <span className="text-[10px] font-semibold text-amber-900 max-w-[140px] truncate text-right">
          {recipe.recommendedBeans}
        </span>
      </div>
    </div>
  );
}
