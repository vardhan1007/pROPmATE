import PropertyCard from "./PropertyCard";

// Data array for the homepage listings
const PROPERTIES = [
  { 
    id: 1, 
    title: "Modern Oceanfront Villa", 
    location: "Malibu, California", 
    price: "₹32 Cr", 
    beds: 5, 
    baths: 4, 
    sqft: "4,200", 
    status: "Featured", 
    image: "/properties/v1.jpg" 
  },
  { 
    id: 2, 
    title: "Skyline Luxury Penthouse", 
    location: "Manhattan, NY", 
    price: "₹2 Cr", 
    beds: 4, 
    baths: 3, 
    sqft: "3,800", 
    status: "New", 
    image: "/properties/v2.jpg" 
  },
  { 
    id: 3, 
    title: "Smart Contemporary Home", 
    location: "Austin, Texas", 
    price: "₹12 Cr", 
    beds: 4, 
    baths: 3, 
    sqft: "3,100", 
    status: "Smart", 
    image: "/properties/v3.jpg" 
  },
  { 
    id: 4, 
    title: "Waterfront Family Estate", 
    location: "Miami, Florida", 
    price: "₹23.2 Cr", 
    beds: 6, 
    baths: 5, 
    sqft: "5,500", 
    status: "Exclusive", 
    image: "/properties/v4.jpg" 
  },
  { 
    id: 5, 
    title: "Hilltop Glass Mansion", 
    location: "Los Angeles, CA", 
    price: "₹15.7 Cr", 
    beds: 7, 
    baths: 8, 
    sqft: "9,000", 
    status: "Premium", 
    image: "/properties/v5.jpg" 
  },
  { 
    id: 6, 
    title: "Sustainable Eco Villa", 
    location: "Portland, Oregon", 
    price: "₹28 Cr", 
    beds: 3, 
    baths: 2, 
    sqft: "2,400", 
    status: "Green", 
    image: "/properties/v6.jpg" 
  },
];

export default function PropertyGrid() {
  return (
    /* This grid configuration ensures that on large screens (lg), 
       exactly 3 cards appear per row as seen in your reference image.
    */
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {PROPERTIES.map((property) => (
        <PropertyCard key={property.id} data={property} />
      ))}
    </div>
  );
}