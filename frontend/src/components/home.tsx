import React from "react";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="bg-indigo-600 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Welcome to WorkX</h1>
          <p className="mt-2 text-lg">
            Your one-stop solution for booking home service professionals!
          </p>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Our Services
          </h2>
          <p className="text-gray-600 mt-2">
            We connect you with skilled professionals for all your home service
            needs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {/* Service Cards */}
            {[
              { name: "Haircut", icon: "✂️", desc: "Professional hair styling at your home." },
              { name: "Electrician", icon: "💡", desc: "Expert electrical repairs and installations." },
              { name: "Cook", icon: "🍳", desc: "Delicious meals prepared in your kitchen." },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
              >
                <div className="text-4xl">{service.icon}</div>
                <h3 className="mt-4 text-xl font-bold">{service.name}</h3>
                <p className="text-gray-600 mt-2">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-indigo-600 text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">Ready to book a service?</h2>
          <p className="mt-4">
            Sign up now to connect with the best professionals near you.
          </p>
          <button className="mt-6 px-8 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} WorkX. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
