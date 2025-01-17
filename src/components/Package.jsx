import React, { useEffect, useState } from "react";

const Package = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/packages.json");
        if (!response.ok) {
          throw new Error("Failed to load packages");
        }
        const data = await response.json();
        setPackages(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p className="text-center">Loading packages...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  // Determine grid layout based on the number of packages
  const gridClass =
    packages.length === 1
      ? "grid-cols-1"
      : packages.length === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";

  return (
    <section
      id="package"
      className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 animate-fadeIn"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Packages</h2>
        <p className="text-lg mb-6">
          Choose the package that suits your needs best.
        </p>

        {/* Responsive Grid with dynamic class */}
        <div className={`grid ${gridClass} gap-6`}>
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transition transform hover:scale-105"
            >
               <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg sm:text-xl font-bold">{pkg.title}</h3>
                <p className="font-bold text-lg sm:text-xl mt-4">{pkg.price}</p>
                <p className="text-sm sm:text-base">{pkg.details}</p>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Package;
