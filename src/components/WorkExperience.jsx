import React, { useEffect, useState } from "react";

const Experience = () => {
  const [experiences, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/experience.json");
        if (!response.ok) {
          throw new Error("Failed to load experience");
        }
        const data = await response.json();
        setExperience(data.experiences); // Update to access the experiences array directly
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  
  if (loading) {
    return <p className="text-center">Loading experience...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }
  return (
    <section id="experience" className="bg-gray-100 py-20">
      <div className="container mx-auto text-center px-4 animate-fadeIn">
        <h2 className="text-4xl font-bold mb-8">My Experience</h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 space-y-4 md:flex md:items-center md:space-x-6 md:space-y-0 transition transform hover:scale-105"
            >
              <div className="md:w-1/3">
                <h3 className="text-2xl font-semibold">{experience.title}</h3>
                <p className="text-gray-600 text-sm">{experience.company}</p>
                <p className="text-gray-500 text-sm">{experience.duration}</p>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-700 text-justify">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
