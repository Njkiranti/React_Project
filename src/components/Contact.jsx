import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { PhoneIcon, EnvelopeIcon  } from '@heroicons/react/20/solid';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    }
    console.log(formData);
    setError("");
    emailjs
      .send(
        "service_4qt21um", // Your EmailJS service ID
        "template_ceb3u8i", // Your EmailJS template ID
        formData,
        "niTQQkwuJXc_p24zl" // Your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setSuccessMessage("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Clear form
        },
        (error) => {
          console.error("Error sending email:", error);
          setError("Something went wrong. Please try again.");
        }
      );
  };

  const handleBookMe = () => {
    window.open("https://calendly.com/niryasocialmanager/social-media-potential-consultation-call", "_blank");
    console.log("Book Me button clicked");
  };

  return (
    <section
      id="contact"
      className="bg-gray-100 text-[#022574] py-16 sm:py-20 md:py-24 lg:py-32 animate-fadeIn"
    >
      <div className="container mx-auto text-center px-6 sm:px-8 md:px-12 lg:px-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
         Read to Work With Us ?
        </h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Contact Us
        </h3>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-white border-2 border-blue-500 text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-base md:text-lg transition transform hover:scale-105"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-white border-2 border-blue-500 text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-base md:text-lg transition transform hover:scale-105"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-white border-2 border-blue-500 text-blue-600 focus:ring-2 focus:ring-blue-500 sm:text-base md:text-lg transition transform hover:scale-105"
            rows="4"
          ></textarea>
          <div className="flex flex-col items-center justify-center space-y-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
             className="flex items-center px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 sm:text-base md:text-lg"
          >
             <EnvelopeIcon  className="w-5 h-5 mr-2" />
            Send Message
          </motion.button>
          </div>
          
        </form>
        <br/>
        <div className="flex flex-col items-center justify-center space-y-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBookMe}
             className="flex items-center px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 sm:text-base md:text-lg"
          >
             <PhoneIcon className="w-5 h-5 mr-2" />   Book a Call
           
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
