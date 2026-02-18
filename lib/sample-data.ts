export type SaleItem = {
  id: string;
  title: string;
  price: number;
  city: string;
  status: "available" | "reserved" | "sold";
  imageUrl: string;
  bedrooms: number;
  bathrooms: number;
  areaSqFt: number;
  description: string;
};

export const sampleItems: SaleItem[] = [
  {
    id: "sunset-villa",
    title: "Sunset Villa",
    price: 625000,
    city: "San Diego, CA",
    status: "available",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    bedrooms: 4,
    bathrooms: 3,
    areaSqFt: 2480,
    description:
      "Bright coastal-style villa with open-concept living, private patio, and upgraded kitchen."
  },
  {
    id: "maple-townhome",
    title: "Maple Townhome",
    price: 389000,
    city: "Portland, OR",
    status: "reserved",
    imageUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
    bedrooms: 3,
    bathrooms: 2,
    areaSqFt: 1720,
    description:
      "Modern townhome near parks and transit, featuring a rooftop deck and two-car garage."
  },
  {
    id: "oakridge-cottage",
    title: "Oakridge Cottage",
    price: 295000,
    city: "Asheville, NC",
    status: "sold",
    imageUrl:
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1200&q=80",
    bedrooms: 2,
    bathrooms: 2,
    areaSqFt: 1325,
    description:
      "Charming cottage with mountain views, hardwood floors, and a spacious backyard garden."
  }
];

export const getItemById = (id: string) => sampleItems.find((item) => item.id === id);
