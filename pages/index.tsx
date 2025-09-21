
import { useState } from "react";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Pill from "@/components/common/Pill";
import Card from "@/components/common/Card";

const FILTERS = [
  "All", "Top Villa", "Self Checkin", "Beachfront", "Mountain View", "Free Parking", "Pet Friendly", "Pool", "City Center"
];

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredProperties = selectedFilter === "All"
    ? PROPERTYLISTINGSAMPLE
    : PROPERTYLISTINGSAMPLE.filter((property) =>
        property.category.includes(selectedFilter)
      );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-64 md:h-80 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Find your favorite place here!</h1>
          <p className="text-lg md:text-2xl">The best prices for over 2 million properties worldwide.</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-center">
          {FILTERS.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              selected={selectedFilter === filter}
              onClick={() => setSelectedFilter(filter)}
            />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="container mx-auto px-4 pb-12">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProperties.map((property, idx) => (
            <Card
              key={property.name + idx}
              title={property.name}
              description={property.address.city + ', ' + property.address.country}
              image={property.image}
              price={property.price}
              location={property.address.state}
              rating={property.rating}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
