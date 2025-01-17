import React, { useEffect, useState } from "react";

const Service = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/service.json");
        if (!response.ok) {
          throw new Error("Failed to load services");
        }
        const data = await response.json();
        setServices(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p className="text-center text-xl">Loading services...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  // Determine grid layout based on the number of services
  const gridClass =
    services.length === 1
      ? "grid-cols-1"
      : services.length === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section id="service" className="bg-gray-100 py-20 animate-fadeIn">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">My Offers</h2>
        <p className="text-lg mb-6">Explore the range of services I offer to help you achieve your goals.</p>

        {/* Responsive Grid with dynamic class */}
        <div className={`grid ${gridClass} gap-6`}>
          {services.map((serviceItem, index) => (
            <div
              key={index}
               className="bg-white shadow-md rounded-lg overflow-hidden transition transform hover:scale-105"
            >
               <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <img
                  src={serviceItem.image}
                  alt={serviceItem.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
                 </div>
              <div className="p-4">
                <h3 className="text-lg sm:text-xl font-bold">{serviceItem.title}</h3>
                <p className="text-sm sm:text-base">{serviceItem.description}</p>
                </div>
              </div>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
