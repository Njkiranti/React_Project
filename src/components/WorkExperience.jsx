import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Social Media Manager",
      company: "Freelancer",
      duration: "Jan 2021 - Present",
      description:
        "Developed full-stack applications using React, Node.js, and MongoDB. Led a team of 5 developers to deliver scalable solutions.",
    },
    {
      title: "Sales & Marketing Manager",
      company: "Ezone International Pvt Ltd",
      duration: "Jun 2019 - Dec 2020",
      description:
        "Worked on front-end and back-end technologies including JavaScript, HTML, CSS, and SQL. Improved website performance by 30%.",
    },
    {
      title: "Sales & Marketing Executive ",
      company: "Ezone International Pvt Ltd",
      duration: "Jun 2019 - Dec 2020",
      description:
        "Worked on front-end and back-end technologies including JavaScript, HTML, CSS, and SQL. Improved website performance by 30%.",
    },
    // {
    //   title: "Intern -  ",
    //   company: "Ezone International Pvt Ltd",
    //   duration: "Jan 2018 - May 2019",
    //   description:
    //     "Collaborated with senior developers to create small web applications and learned modern software development practices.",
    // },
  ];

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
                <p className="text-gray-700">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
