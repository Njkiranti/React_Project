import React, { useState, useEffect } from "react";

const ProjectSection = ({ title, data, loading, error }) => {
  // Determine grid columns based on the number of items
  const gridClass =
    data.length === 1
      ? "grid-cols-1"
      : data.length === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold mb-6">{title}</h2>
      {loading ? (
        <p className="text-center text-lg">Loading projects...</p>
      ) : error ? (
        <p className="text-center text-red-500">Error: {error}</p>
      ) : data.length > 0 ? (
        <div className={`grid ${gridClass} gap-6`}>
          {data.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transition transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-61 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="text-lg sm:text-xl font-bold">
                  {project.title}
                </h3>
                <a
                  href="https://www.canva.com/design/DAGM9Dqt2F8/4i_d3Lq4EWrmJ4LhMq550Q/edit?ui=eyJEIjp7IkYiOjF9fQ"
                  target="_blank"
                  className="text-blue-500 hover:underline text-sm sm:text-base"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No projects available.</p>
      )}
    </div>
  );
};

const Portfolio = () => {
  const [smmprojects, setSmmprojects] = useState([]);
  const [profile, setProfile] = useState([]);
  const [carousels, setCarousels] = useState([]);
  const [video, setVideo] = useState([]);
  const [loadingStates, setLoadingStates] = useState({
    smmprojects: true,
    profile: true,
    carousels: true,
    video: true,
  });
  const [errorStates, setErrorStates] = useState({
    smmprojects: null,
    profile: null,
    carousels: null,
    video: null,
  });

  useEffect(() => {
    const fetchData = async (url, setData, type) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to load ${type}`);
        }
        const data = await response.json();
        setData(data);
        setLoadingStates((prev) => ({ ...prev, [type]: false }));
      } catch (error) {
        setErrorStates((prev) => ({ ...prev, [type]: error.message }));
        setLoadingStates((prev) => ({ ...prev, [type]: false }));
      }
    };

    fetchData("/smmprojects.json", setSmmprojects, "smmprojects");
    fetchData("/profile.json", setProfile, "profile");
    fetchData("/carousels.json", setCarousels, "carousels");
    fetchData("/video.json", setVideo, "video");
  }, []);

  return (
    <section
      id="portfolio"
      className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 sm:py-20 md:py-24 lg:py-32 animate-fadeIn"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center  ">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Work Deliverables
        </h2>
        <ProjectSection
          title="SMM Projects"
          data={smmprojects}
          loading={loadingStates.smmprojects}
          error={errorStates.smmprojects}
        />
        <br />
        <ProjectSection
          title="Profile Optimization"
          data={profile}
          loading={loadingStates.profile}
          error={errorStates.profile}
        />
        <br />
        <ProjectSection
          title="Interacting Carousels"
          data={carousels}
          loading={loadingStates.carousels}
          error={errorStates.carousels}
        />
        <br />
        <ProjectSection
          title="Video Designs"
          data={video}
          loading={loadingStates.video}
          error={errorStates.video}
        />
      </div>
    </section>
  );
};

export default Portfolio;
