export type CupSize = "12 oz" | "13 oz" | "14 oz" | "16 oz" | "200 ml" | "250 ml" | "500 ml" | "1 L";
export type CoffeeMethod = "Espresso" | "Kopi Sachet";
export type SweetnessLevel = "Non Sugar" | "Less Sugar" | "Normal" | "Sweet" | "Extra Sweet";
export type CoffeeLevel = "Light" | "Normal" | "Strong" | "Extra Strong";
export type IceLevel = "Non Ice" | "Less Ice" | "Normal Ice" | "Extra Ice";

export interface CustomSettings {
  cupSize: CupSize;
  method: CoffeeMethod;
  sweetness: SweetnessLevel;
  coffeeLevel: CoffeeLevel;
  iceLevel: IceLevel;
}

export interface IngredientCalculation {
  name: string;
  amount: number;
  unit: string;
  notes?: string;
}

export interface CoffeeRecipe {
  id: string;
  name: string;
  indonesianName: string;
  description: string;
  image: string;
  baseIngredients: {
    coffeeRatio: number; // percentage of volume
    liquidRatio: number; // percentage of volume
    sweetenerRatio: number; // percentage of volume
    iceRatio: number; // percentage of volume
  };
  // Special notes or details about this specific coffee style
  recommendedBeans: string;
  temperatureCelcius: string;
  isCoffee?: boolean;
  category?: string;
}
