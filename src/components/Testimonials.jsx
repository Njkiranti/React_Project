import React, { useEffect, useState } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/testimonials.json");
        if (!response.ok) {
          throw new Error("Failed to load testimonials");
        }
        const data = await response.json();
        setTestimonials(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p className="text-center">Loading testimonials...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  const gridClass =
    testimonials.length === 1
      ? "grid-cols-1"
      : testimonials.length === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";

  return (
    <section id="testimonials" className="bg-white py-20 animate-fadeIn">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Clients Reviews</h2>

        <div className={`grid ${gridClass} gap-6`}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transition transform hover:scale-105"
            >
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg sm:text-xl font-bold">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
                <p className="mt-4 text-gray-700">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
