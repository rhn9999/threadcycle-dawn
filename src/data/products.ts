export interface Product {
  id: string;
  vendor: string;
  title: string;
  price: number;
  soldOut: boolean;
  isNew: boolean;
  condition: string;
  era: string;
  size: string;
  pitToPit: string;
  length: string;
  description: string;
  category: string;
}

export const products: Product[] = [
  { id: "1", vendor: "Levi's", title: "501 Straight Leg Denim", price: 1299, soldOut: false, isNew: false, condition: "Excellent", era: "90s", size: "32W 30L", pitToPit: "—", length: "—", description: "Classic vintage Levi's 501 in a beautiful mid-wash. Straight leg with the perfect amount of fade. Button fly, no stains or tears.", category: "Men's" },
  { id: "2", vendor: "Nike", title: "Vintage Swoosh Hoodie", price: 1899, soldOut: false, isNew: false, condition: "Very Good", era: "2000s", size: "L", pitToPit: "24\"", length: "27\"", description: "Iconic Nike center swoosh hoodie in heather grey. Soft fleece lining, ribbed cuffs. Minor pilling on interior — exterior is clean.", category: "Men's" },
  { id: "3", vendor: "Zara", title: "Pleated Midi Skirt", price: 899, soldOut: true, isNew: false, condition: "Good", era: "2010s", size: "M", pitToPit: "—", length: "28\"", description: "Elegant pleated midi skirt in olive green. Elastic waistband for comfortable fit. Small mark near hem, barely visible.", category: "Women's" },
  { id: "4", vendor: "Carhartt", title: "Detroit Canvas Jacket", price: 3499, soldOut: false, isNew: true, condition: "Like New", era: "2010s", size: "XL", pitToPit: "27\"", length: "30\"", description: "Iconic Carhartt Detroit jacket in tan canvas. Blanket-lined for warmth. Corduroy collar. Just arrived — practically unworn.", category: "Men's" },
  { id: "5", vendor: "Adidas", title: "Trefoil Track Pants", price: 999, soldOut: false, isNew: false, condition: "Very Good", era: "90s", size: "M", pitToPit: "—", length: "40\"", description: "Classic three-stripe Adidas track pants in navy. Snap buttons at the ankle. Elastic waistband with drawstring.", category: "Men's" },
  { id: "6", vendor: "Ralph Lauren", title: "Cable Knit Sweater", price: 1599, soldOut: false, isNew: true, condition: "Excellent", era: "2000s", size: "S", pitToPit: "20\"", length: "24\"", description: "Beautiful cream cable-knit sweater. Pure cotton, heavy weight. Small embroidered logo on chest.", category: "Women's" },
  { id: "7", vendor: "Converse", title: "Chuck Taylor High Tops", price: 799, soldOut: true, isNew: false, condition: "Good", era: "2010s", size: "UK 8", pitToPit: "—", length: "—", description: "Classic black Converse Chuck Taylor high tops. Natural wear on the soles, canvas is clean. Laces replaced.", category: "Footwear" },
  { id: "8", vendor: "Guess", title: "Y2K Logo Baby Tee", price: 699, soldOut: false, isNew: false, condition: "Very Good", era: "2000s", size: "XS", pitToPit: "16\"", length: "20\"", description: "Iconic Guess baby tee with rhinestone logo. Stretchy cotton blend, fitted cut. Peak Y2K energy.", category: "Y2K" },
];

export const categories = ["Vintage", "Y2K", "Men's", "Women's", "Accessories", "Footwear"];

export const formatPrice = (price: number) => `₹${price.toLocaleString("en-IN")}`;
