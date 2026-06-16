import React, { useState, useEffect, useMemo } from "react";
import { COFFEE_RECIPES } from "./data/recipes";
import { CoffeeRecipe, CustomSettings, CupSize, CoffeeMethod, SweetnessLevel, CoffeeLevel, IceLevel } from "./types";
import CoffeeCard from "./components/CoffeeCard";
import CustomizerPanel from "./components/CustomizerPanel";
import { 
  Coffee, 
  Search, 
  Sparkles, 
  Bookmark, 
  Trash2, 
  ArrowLeft,
  Sliders,
  Heart,
  Instagram,
  MapPin,
  Clock,
  Phone,
  RotateCcw
} from "lucide-react";

interface SavedRecipeItem {
  id: string; // unique timestamp
  name: string; // custom name given by user
  recipeId: string;
  recipeName: string;
  settings: CustomSettings;
}

export default function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState<string | null>(null);
  const [settings, setSettings] = useState<CustomSettings>({
    cupSize: "16 oz",
    method: "Espresso",
    sweetness: "Normal",
    coffeeLevel: "Normal",
    iceLevel: "Normal Ice"
  });

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [savedRecipes, setSavedRecipes] = useState<SavedRecipeItem[]>([]);
  const [newSavedName, setNewSavedName] = useState<string>("");
  const [showSaveSuccess, setShowSaveSuccess] = useState<boolean>(false);

  // Load saved custom recipes from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("rfd-kopi-saved-presets");
    if (saved) {
      try {
        setSavedRecipes(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved presets", e);
      }
    }
  }, []);

  // Save changes to localStorage helper
  const updateSavedRecipesInStorage = (newList: SavedRecipeItem[]) => {
    setSavedRecipes(newList);
    localStorage.setItem("rfd-kopi-saved-presets", JSON.stringify(newList));
  };

  // Find active recipe details
  const activeRecipe = useMemo(() => {
    if (!selectedRecipeId) return null;
    return COFFEE_RECIPES.find((r) => r.id === selectedRecipeId) || null;
  }, [selectedRecipeId]);

  // Handle recipe selection
  const handleSelectRecipe = (recipeId: string) => {
    setSelectedRecipeId(recipeId);
    // Auto-detect a sensible default method if user chose non-coffee vs coffee
    const recipe = COFFEE_RECIPES.find((r) => r.id === recipeId);
    if (recipe) {
      setSettings((prev) => ({
        ...prev,
        method: recipe.isCoffee === false ? "Kopi Sachet" : "Espresso"
      }));
    }
    // Smooth scroll to top of the screen when viewing recipe details
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Filter recipes based on category tabs & search query
  const filteredRecipes = useMemo(() => {
    return COFFEE_RECIPES.filter((recipe) => {
      // Matches Search Query
      const matchesSearch = 
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.indonesianName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;

      // Matches Category
      if (activeCategory === "all") return true;
      if (activeCategory === "sweet") return recipe.category === "coffee-sweet";
      if (activeCategory === "creamy") return recipe.category === "coffee-creamy";
      if (activeCategory === "dark") return recipe.category === "coffee-dark" || recipe.category === "manual-brew";
      if (activeCategory === "special") return recipe.category === "coffee-special";
      if (activeCategory === "non-coffee") return recipe.category === "non-coffee";
      
      return true;
    });
  }, [searchQuery, activeCategory]);

  // Statistics helper
  const countCoffee = COFFEE_RECIPES.filter(r => r.isCoffee !== false).length;
  const countNonCoffee = COFFEE_RECIPES.filter(r => r.isCoffee === false).length;

  // Save current dynamic configuration as a custom preset recipe
  const handleSavePreset = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeRecipe) return;
    if (!newSavedName.trim()) return;

    const newItem: SavedRecipeItem = {
      id: Date.now().toString(),
      name: newSavedName.trim(),
      recipeId: activeRecipe.id,
      recipeName: activeRecipe.name,
      settings: { ...settings }
    };

    const updated = [newItem, ...savedRecipes];
    updateSavedRecipesInStorage(updated);
    setNewSavedName("");
    setShowSaveSuccess(true);
    setTimeout(() => {
      setShowSaveSuccess(false);
    }, 3000);
  };

  const handleDeletePreset = (idToDelete: string) => {
    const updated = savedRecipes.filter((item) => item.id !== idToDelete);
    updateSavedRecipesInStorage(updated);
  };

  const handleLoadPreset = (preset: SavedRecipeItem) => {
    setSelectedRecipeId(preset.recipeId);
    setSettings(preset.settings);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#F9F6F0] via-[#FAF8F5] to-white text-[#2B1B15] font-sans antialiased flex flex-col justify-between">
      
      {/* 1. PREMIUM HEADER APPLET */}
      <header className="border-b border-amber-900/10 bg-white/80 backdrop-blur-md sticky top-0 z-40 transition-all">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-900 shadow-md">
              <Coffee className="h-6 w-6 text-[#FCFAF6] animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[9px] font-black uppercase tracking-widest text-[#FAF8F5] bg-amber-950 px-2 py-0.5 rounded-md border border-amber-900">
                  Specialty Café App
                </span>
                <span className="bg-emerald-50 text-emerald-800 text-[9px] font-bold px-1.5 py-0.5 rounded-md border border-emerald-200">
                  Ready v2026
                </span>
              </div>
              <h1 className="text-xl font-black tracking-tight text-amber-950 sm:text-2xl mt-0.5">
                RFD Kopi
              </h1>
            </div>
          </div>

          {/* Slogan - Hidden on extra small screen, elegant subtle typography on larger ones */}
          <div className="hidden sm:flex flex-col text-right">
            <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest">
              Digital Recipe & Barista Guide
            </span>
            <span className="text-xs text-amber-900 font-bold italic">
              "Kalkulasi Formula Bahan Gelas Akurat & Metode Penyeduhan Praktis"
            </span>
          </div>

        </div>
      </header>

      {/* 2. CORE WORKSPACE ENVIRONMENT */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex-1 w-full">
        
        {activeRecipe ? (          /* PAGE 2: MASTER DETAIL CUSTOMIZER & INSTRUCTION SHEETS */
          <div className="max-w-6xl mx-auto flex flex-col gap-6 animate-fade-in">
            
            {/* Navigation & Breadcrumbs Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white px-4 py-3 rounded-2xl border border-amber-900/10 shadow-xs gap-3">
              <button
                onClick={() => setSelectedRecipeId(null)}
                className="flex items-center justify-center gap-2 text-stone-700 hover:text-amber-950 text-xs font-black focus:outline-hidden transition-all bg-amber-50 hover:bg-amber-100/90 px-4 py-2.5 rounded-xl border border-amber-200 cursor-pointer w-full sm:w-auto"
              >
                <ArrowLeft className="h-4 w-4 stroke-[3px]" />
                Kembali ke Menu Utama
              </button>
              
              <div className="flex items-center gap-2 text-[10px] font-bold text-amber-900/80 justify-center">
                <span>Menu Utama</span>
                <span>/</span>
                <span className="bg-stone-100 px-2.5 py-1 rounded-md text-stone-700 font-extrabold max-w-[180px] truncate">
                  {activeRecipe.name}
                </span>
              </div>
            </div>

            {/* HERO DRINK CARD */}
            <div className="rounded-3xl border border-amber-150/45 bg-white p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row gap-5 relative overflow-hidden">
              <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 opacity-5 pointer-events-none">
                <Coffee className="h-32 w-32" />
              </div>
              
              <div className="h-32 w-full sm:w-32 shrink-0 rounded-2xl overflow-hidden bg-amber-50 shadow-inner border border-stone-100">
                <img 
                  src={activeRecipe.image} 
                  alt={activeRecipe.name}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover select-none"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop";
                  }}
                />
              </div>

              <div className="flex flex-col justify-center flex-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="rounded-md bg-amber-900/10 px-2 py-0.5 text-[9px] font-bold text-amber-900 uppercase border border-amber-200">
                    {activeRecipe.category === "manual-brew" 
                      ? "Manual Brew V60" 
                      : activeRecipe.category === "non-coffee" 
                        ? "Varian Susu Segar" 
                        : "Racikan Espresso Baru"}
                  </span>
                  {activeRecipe.category === "non-coffee" && (
                    <span className="rounded-md bg-green-500/10 px-1.5 py-0.5 text-[9px] font-bold text-green-800 uppercase border border-green-200">
                      Bebas Kafein
                    </span>
                  )}
                </div>
                
                <h2 className="text-xl font-black text-stone-900 mt-1.5 leading-tight">
                  {activeRecipe.name}
                </h2>
                
                <span className="text-xs font-bold text-amber-850 italic mt-0.5 block">
                  {activeRecipe.indonesianName}
                </span>
                
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  {activeRecipe.description}
                </p>
              </div>
            </div>

            {/* DYNAMIC MASTER PANEL */}
            <CustomizerPanel
              recipe={activeRecipe}
              settings={settings}
              onChangeSettings={(newS) => setSettings(newS)}
            >
              {/* PRESET SAVE BLOCK AFTER THE CALCULATIONS */}
              <div className="rounded-2xl border border-amber-100 bg-[#FCFAF6] p-5 shadow-xs">
                <h4 className="text-xs font-black text-amber-950 mb-1 uppercase tracking-wider flex items-center gap-1.5">
                  <Bookmark className="h-4 w-4 text-amber-900" />
                  Simpan Sebagai Resep Kustom Anda
                </h4>
                <p className="text-[11px] text-stone-500 mb-4 leading-relaxed">
                  Suka dengan formula takaran cup <strong>{settings.cupSize}</strong> dengan tingkat kemanisan <strong>{settings.sweetness}</strong> saat ini? Simpan racikan kebanggaan Anda agar bisa langsung diload di beranda utama nantinya.
                </p>
                
                <form onSubmit={handleSavePreset} className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="text"
                    placeholder="Ketik nama takaran unik (contoh: Kopi Pagi Favorit)..."
                    value={newSavedName}
                    onChange={(e) => setNewSavedName(e.target.value)}
                    className="flex-1 rounded-xl border border-amber-200 bg-white py-2 px-4 text-xs placeholder:text-stone-400 focus:outline-hidden focus:border-amber-900 text-stone-900"
                  />
                  <button
                    type="submit"
                    className="rounded-xl bg-amber-900 text-white hover:bg-amber-950 px-5 py-2 text-xs font-bold transition-all shrink-0 cursor-pointer active:scale-95"
                  >
                    Simpan Racikan
                  </button>
                </form>
                
                {showSaveSuccess && (
                  <div className="mt-3 text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 p-2 rounded-xl text-center animate-fade-in shadow-xxs">
                    ✓ Berhasil disimpan! Resep khusus ini kini aktif di daftar "Resep Kustom Barista" pada halaman utama Anda.
                  </div>
                )}
              </div>
            </CustomizerPanel>

            {/* Quick clean back trigger button to wrap details page */}
            <div className="text-center py-4">
              <button 
                onClick={() => setSelectedRecipeId(null)}
                className="text-amber-900 hover:text-amber-950 text-xs font-bold underline transition-all cursor-pointer flex items-center gap-1.5 mx-auto"
              >
                ← Kembali ke Katalog Menu Utama
              </button>
            </div>

          </div>
        ) : (
          /* PAGE 1: FULLY RESPONSIVE CATALOG DASHBOARD */
          <div className="flex flex-col gap-6 animate-fade-in">
            
            {/* WELCOME BARISTA HERO BANNER */}
            <div className="rounded-3xl bg-gradient-to-r from-amber-950 via-amber-900 to-[#1e100a] p-6 sm:p-8 text-[#FAF8F5] relative overflow-hidden shadow-md">
              <div className="absolute right-0 bottom-0 translate-x-4 translate-y-6 opacity-10 pointer-events-none hidden md:block">
                <Coffee className="h-48 w-48" />
              </div>
              
              <div className="relative z-10 flex flex-col gap-1.5 max-w-2xl">
                <div className="inline-flex items-center gap-1.5 bg-amber-500/20 border border-amber-400/20 w-fit px-3 py-1 rounded-lg">
                  <Sparkles className="h-3.5 w-3.5 text-amber-300 animate-spin-slow" />
                  <span className="text-[10px] font-bold text-amber-200 tracking-wider uppercase">Menu Barista Lengkap</span>
                </div>
                
                <h2 className="text-xl sm:text-2xl font-black tracking-tight mt-1.5">
                  Selamat Datang di RFD Kopi! 👋
                </h2>
                
                <p className="text-xs sm:text-sm text-stone-200 leading-relaxed max-w-xl">
                  Didesain untuk melayani barista pemula maupun profesional. Eksplorasi <strong>32 resep</strong> minuman otentik, simulasikan bobot materi real-time, dan sesuaikan takaran cup cangkir presisi dengan formula otomatis.
                </p>
                
                <div className="flex items-center gap-3 mt-4 text-[10px] sm:text-xs font-bold">
                  <span className="bg-amber-100 text-amber-950 px-2.5 py-1 rounded-lg shadow-xxs">
                    ☕ {countCoffee} Racikan Kopi
                  </span>
                  <span className="bg-orange-100 text-orange-950 px-2.5 py-1 rounded-lg shadow-xxs">
                    🥤 {countNonCoffee} Menu Non-Kopi
                  </span>
                </div>
              </div>
            </div>

            {/* SEARCH CONTROLS & DYNAMIC CATEGORIES FOR ALL PORTS */}
            <div className="rounded-3xl border border-amber-100 bg-white p-5 sm:p-6 shadow-xs flex flex-col gap-4">
              <div>
                <label className="text-xs font-black text-amber-950 uppercase tracking-widest block mb-2">Eksplorasi Katalog Resep</label>
                
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Masukkan nama kopi (ex: Gula Aren, V60, Black, Butterscotch, Matcha)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-2xl border border-amber-200 bg-[#FDFDFC] py-3 pl-11 pr-4 text-xs sm:text-sm shadow-inner focus:border-amber-900 focus:bg-white focus:outline-hidden transition-all placeholder:text-stone-400 text-stone-900"
                  />
                  <Search className="absolute left-4 top-3.5 h-4 w-4 text-stone-450" />
                </div>
              </div>

              {/* Responsive custom categories shelf */}
              <div className="flex flex-col gap-2.5 border-t border-amber-50 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-black text-stone-500 uppercase tracking-wider">Metode & Karakter Rasa:</span>
                  {activeCategory !== "all" && (
                    <button 
                      onClick={() => setActiveCategory("all")}
                      className="text-[10px] sm:text-xs text-amber-900 hover:underline font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <RotateCcw className="h-3 w-3" /> Reset Filter
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <button
                    onClick={() => setActiveCategory("all")}
                    className={`rounded-xl px-3 py-2 text-xs font-bold transition-all cursor-pointer ${
                      activeCategory === "all"
                        ? "bg-amber-950 text-white shadow-sm"
                        : "bg-amber-50/40 text-amber-950 border border-amber-100/60 hover:bg-amber-50"
                    }`}
                  >
                    Semua ({COFFEE_RECIPES.length})
                  </button>
                  <button
                    onClick={() => setActiveCategory("sweet")}
                    className={`rounded-xl px-3 py-2 text-xs font-bold transition-all cursor-pointer ${
                      activeCategory === "sweet"
                        ? "bg-amber-950 text-white shadow-sm"
                        : "bg-amber-50/40 text-amber-950 border border-amber-100/60 hover:bg-amber-50"
                    }`}
                  >
                    🍯 Kopi Manis ({COFFEE_RECIPES.filter(r => r.category === "coffee-sweet").length})
                  </button>
                  <button
                    onClick={() => setActiveCategory("creamy")}
                    className={`rounded-xl px-3 py-2 text-xs font-bold transition-all cursor-pointer ${
                      activeCategory === "creamy"
                        ? "bg-amber-950 text-white shadow-sm"
                        : "bg-amber-50/40 text-amber-950 border border-amber-100/60 hover:bg-amber-50"
                    }`}
                  >
                    🥛 Creamy Latte ({COFFEE_RECIPES.filter(r => r.category === "coffee-creamy").length})
                  </button>
                  <button
                    onClick={() => setActiveCategory("dark")}
                    className={`rounded-xl px-3 py-2 text-xs font-bold transition-all cursor-pointer ${
                      activeCategory === "dark"
                        ? "bg-amber-950 text-white shadow-sm"
                        : "bg-amber-50/40 text-amber-950 border border-amber-100/60 hover:bg-amber-50"
                    }`}
                  >
                    ☕ Hitam & V60 ({COFFEE_RECIPES.filter(r => r.category === "coffee-dark" || r.category === "manual-brew").length})
                  </button>
                  <button
                    onClick={() => setActiveCategory("special")}
                    className={`rounded-xl px-3 py-2 text-xs font-bold transition-all cursor-pointer ${
                      activeCategory === "special"
                        ? "bg-amber-950 text-white shadow-sm"
                        : "bg-amber-50/40 text-amber-950 border border-amber-100/60 hover:bg-amber-50"
                    }`}
                  >
                    🍨 Spesial & Ice ({COFFEE_RECIPES.filter(r => r.category === "coffee-special").length})
                  </button>
                  <button
                    onClick={() => setActiveCategory("non-coffee")}
                    className={`rounded-xl px-3 py-2 text-xs font-bold transition-all cursor-pointer ${
                      activeCategory === "non-coffee"
                        ? "bg-emerald-900 text-white shadow-sm"
                        : "bg-emerald-50/50 text-emerald-950 border border-emerald-150/40 hover:bg-emerald-100/50"
                    }`}
                  >
                    🍃 Bebas Kafein ({COFFEE_RECIPES.filter(r => r.category === "non-coffee").length})
                  </button>
                </div>
              </div>
            </div>

            {/* DYNAMIC GRID - AUTO COLS BASED ON RESPONSIVES */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs sm:text-sm font-black text-amber-950 uppercase tracking-widest">
                  Menu Tersedia ({filteredRecipes.length})
                </span>
                <span className="text-[10px] sm:text-xs text-stone-500 font-medium">Ketuk kartu resep untuk kustomisasi takaran</span>
              </div>

              {filteredRecipes.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {filteredRecipes.map((recipe) => (
                    <CoffeeCard
                      key={recipe.id}
                      recipe={recipe}
                      isSelected={false}
                      onSelect={() => handleSelectRecipe(recipe.id)}
                    />
                  ))}
                </div>
              ) : (
                <div className="rounded-3xl border-2 border-dashed border-amber-200 bg-amber-50/10 p-12 text-center text-xs sm:text-sm text-stone-500">
                  Resep dengan filter pencarian <strong>"{searchQuery}"</strong> tidak berhasil ditemukan. Silakan ganti kata kunci atau reset kategori di atas.
                </div>
              )}
            </div>

            {/* BARISTA CLIPBOARD BOOKMARKED SAVED PRESETS */}
            <div className="rounded-3xl border border-amber-100 bg-[#FCFAF6] p-5 sm:p-6 shadow-xxs">
              <h3 className="text-xs sm:text-sm font-black text-amber-950 mb-1 uppercase tracking-wider flex items-center gap-2">
                <Bookmark className="h-4.5 w-4.5 text-amber-900" />
                Resep Kustom Barista Tersimpan ({savedRecipes.length})
              </h3>
              
              <p className="text-[11px] sm:text-xs text-stone-500 mb-4 leading-relaxed">
                Muat takaran kustom volume cup, kepekatan kopi, dan kemanisan gula tersuai milik Anda yang aman tersimpan di memori jangka panjang peramban.
              </p>

              {savedRecipes.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 max-h-80 overflow-y-auto pr-1">
                  {savedRecipes.map((preset) => (
                    <div 
                      key={preset.id}
                      className="flex items-center justify-between p-3.5 rounded-2xl border border-amber-100 bg-white hover:border-amber-300 transition-all shadow-xxs group/preset"
                    >
                      <div 
                        onClick={() => handleLoadPreset(preset)}
                        className="flex-1 text-left cursor-pointer"
                      >
                        <h4 className="text-xs font-bold text-stone-900 group-hover/preset:text-amber-950 flex items-center gap-1.5">
                          {preset.name}
                          <span className="text-[9px] bg-amber-50 text-amber-900 px-1.5 py-0.5 rounded-md font-extrabold uppercase">
                            Load
                          </span>
                        </h4>
                        
                        <p className="text-[10px] text-amber-850 font-medium mt-1 leading-normal">
                          {preset.recipeName} <br />
                          {preset.settings.cupSize} • {preset.settings.coffeeLevel === "Light" ? "Kopi Ringan" : preset.settings.coffeeLevel === "Normal" ? "Sedang" : "Kental Mantap"} ({preset.settings.sweetness === "Non Sugar" ? "Tanpa Gula" : preset.settings.sweetness})
                        </p>
                      </div>
                      
                      <button
                        onClick={() => handleDeletePreset(preset.id)}
                        className="hover:bg-rose-50 text-stone-400 hover:text-rose-600 p-2 rounded-xl transition-all cursor-pointer shadow-xxs shrink-0"
                        title="Hapus Preset"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 border border-dashed border-amber-150 rounded-2xl bg-white text-xs text-stone-400 italic">
                  Belum ada resep tersimpan. Buat racikan kreatif takaran unikmu di dalam halaman rincian kopi, dan klik Simpan!
                </div>
              )}
            </div>

          </div>
        )}

      </main>

      {/* 3. VISUALLY ENHANCED EXQUISITE FOOTER - RENDERED UNIFORMLY ACROSS ALL SYSTEM VIEWPORTS */}
      <footer className="border-t border-amber-900/15 bg-amber-950 text-amber-100 mt-20 relative overflow-hidden w-full">
        
        {/* Top visual gradient bar */}
        <div className="h-1.5 bg-gradient-to-r from-amber-900 via-amber-800 to-[#2c150b]" />
        
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-center justify-center text-center gap-4 pb-8 max-w-2xl mx-auto">
            
            {/* Left brand logo & story column */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-800 border border-amber-700">
                  <Coffee className="h-5 w-5 text-[#FAF8F5]" />
                </div>
                <span className="text-lg font-black text-[#FCFAF6] tracking-tight">RFD KOPI</span>
              </div>
              <p className="text-xs text-amber-200/70 leading-relaxed">
                Aplikasi asisten barista digital terlengkap untuk kalkulasi bahan minuman kafe. Menghadirkan presisi volume gramasi air, susu, air kelapa, sirup gula aren, bubuk matcha, taro, serta petunjuk tahapan seduh mendalam guna menjaga konsistensi cita rasa istimewa di setiap cangkir kopi buatan Anda.
              </p>
            </div>

          </div>

          {/* Copyright signature block requested */}
          <div className="pt-6 border-t border-amber-900/40 flex items-center justify-center text-xs text-center">
            <p className="text-white">
              Copyright 2026. All Right Reserved by rfd kopi
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
