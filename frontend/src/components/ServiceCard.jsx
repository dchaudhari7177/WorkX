import React from "react";
import ServiceCard from "../components/ServiceCard";

const Services: React.FC = () => {
  const services = [
    { name: "Haircut", icon: "✂️", description: "Professional hair styling at your home." },
    { name: "Electrician", icon: "💡", description: "Expert electrical repairs and installations." },
    { name: "Cook", icon: "🍳", description: "Delicious meals prepared in your kitchen." },
    { name: "Plumber", icon: "🛠️", description: "Quick plumbing fixes for your home." },
    { name: "Cleaner", icon: "🧹", description: "Keep your house spotless with our cleaning services." },
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800">Our Services</h2>
      <p className="text-center text-gray-600 mt-4">
        Explore our wide range of home services and book your professional today!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            name={service.name}
            icon={service.icon}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
