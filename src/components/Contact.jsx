import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import "../index.css";

const InputField = ({ label, value, onChange, placeholder, name, type }) => (    <label className="flex flex-col">
    <span className="text-[#00CFFF] font-medium mb-3 font-['Inter']">{label}</span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-gradient-to-br from-[#0A0A0F]/50 to-[#18122B]/50 backdrop-blur-sm py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none border-2 border-[#00CFFF] border-opacity-20 font-['Inter'] font-medium focus:border-opacity-60 focus:shadow-[0_4px_20px_rgba(0,207,255,0.2)] transition-all duration-300"
    />
  </label>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [confirmation, setConfirmation] = useState("");
  
  // Initialize EmailJS once when component mounts
  useEffect(() => {
    // Using your EmailJS user ID (public key)
    emailjs.init("x9wgvH5zgBWlNAzX4");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Reset all error and confirmation messages
    setEmailError("");
    setNameError("");
    setMessageError("");
    setConfirmation("");
    
    // Form validation
    let isValid = true;

    if (!validateEmail(form.email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    }

    if (!form.name.trim()) {
      setNameError("Name is required.");
      isValid = false;
    }
    
    if (!form.message.trim()) {
      setMessageError("Please include a message.");
      isValid = false;
    }
    
    if (!isValid) return;

    setLoading(true);

    // Contact form template parameters - matching exactly with EmailJS template variables
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      reply_to: form.email,  // This ensures you can reply directly to the sender
    };

    // Send the email using EmailJS - make sure these IDs match exactly what's in your EmailJS dashboard
    emailjs.send(
      "service_30ivvu7", // Your EmailJS service ID 
      "template_ltrhyvt", // Your EmailJS template ID
      templateParams
    )
    .then(() => {
      setLoading(false);
      setConfirmation("Thank you! I will get back to you as soon as possible.");
      
      // Reset form after successful submission
      setForm({
        name: "",
        email: "",
        message: "",
      });
      
      // Show success message with animation
      const confirmationElement = document.getElementById('confirmation-message');
      if (confirmationElement) {
        confirmationElement.classList.add('animate-pulse');
        setTimeout(() => {
          confirmationElement.classList.remove('animate-pulse');
        }, 2000);
      }
    })
    .catch((error) => {
      setLoading(false);
      console.error("EmailJS Error:", error);
      // More detailed error message with debugging info
      setConfirmation(`Something went wrong. Error: ${error.text || "Unknown error"}. Please try again later or contact directly via email.`);
    });
  };  return (
    <div className="xl:mt-12 flex flex-col gap-16 overflow-hidden">
      {/* Planet Section */}
      <motion.div 
        variants={slideIn("up", "tween", 0.1, 1)} 
        className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <EarthCanvas />
        </div>
      </motion.div>

      {/* Contact Form Section */}
      <motion.div 
        variants={slideIn("up", "tween", 0.2, 1)} 
        className="bg-gradient-to-br from-[#0A0A0F]/80 via-[#18122B]/70 to-[#0A0A0F]/80 backdrop-blur-sm border-2 border-opacity-20 border-[#00CFFF] p-10 rounded-2xl max-w-4xl mx-auto w-full shadow-[0_8px_32px_rgba(0,207,255,0.15),0_16px_64px_rgba(0,0,0,0.4)]"
      >
        <div className="text-center mb-8">
          <div className={`${styles.badgeStyle} inline-flex mx-auto mb-4`}>
            <span className="text-[#00CFFF] text-sm font-medium font-['Inter']">Get in touch</span>
          </div>
          <h3 className={styles.sectionHeadText}>Contact Me</h3>
          <div className="flex items-center justify-center mt-4 mb-3">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#00CFFF] to-transparent mx-2"></div>
          </div>
        </div>
        
        {/* Professional Contact Info */}
        <div className="mt-8 mb-8">
          <h4 className="text-white text-[18px] font-semibold mb-4">Let's Connect</h4>
          <div className="flex flex-col gap-3 text-secondary">
            <div className="flex items-center gap-3">
              <span className="text-[#915EFF]">📧</span>
              <span>yoonusk2001@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#915EFF]">📍</span>
              <span>Jeddah, Saudi Arabia</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#915EFF]">💼</span>
              <span>IT Manager at Starbucks | AI/ML Engineer</span>
            </div>
          </div>
          
          {/* Professional Links */}
          <div className="mt-6">
            <h5 className="text-white text-[16px] font-medium mb-3">Professional Links</h5>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => window.open("https://www.linkedin.com/in/yoonus-k/", "_blank")}
                className={`${styles.primaryButton} !px-4 !py-2`}
              >
                <span>LinkedIn</span>
              </button>
              <button 
                onClick={() => window.open("https://github.com/yoonus-k", "_blank")}
                className="relative overflow-hidden bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#18122B] font-mono px-4 py-2 rounded-lg text-sm font-semibold shadow-lg transition-all duration-300 group"
              >
                <span>GitHub</span>
              </button>
              <button 
                onClick={() => window.open("mailto:yoonusk2001@gmail.com", "_blank")}
                className={`${styles.secondaryButton} !px-4 !py-2`}
              >
                <span>Direct Email</span>
              </button>
            </div>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <InputField
            label="Your Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name here..."
            type="text"
          />
          {nameError && <span className="text-red-500">{nameError}</span>}

          <InputField
            label="Email Address"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email address?"
            type="email"
          />
          {emailError && <span className="text-red-500">{emailError}</span>}

          <label className="flex flex-col">
            <span className="text-[#00CFFF] font-medium mb-3 font-['Inter']">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to discuss? Projects, opportunities, collaborations..."
              className="bg-gradient-to-br from-[#0A0A0F]/50 to-[#18122B]/50 backdrop-blur-sm py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none border-2 border-[#00CFFF] border-opacity-20 font-['Inter'] font-medium focus:border-opacity-60 focus:shadow-[0_4px_20px_rgba(0,207,255,0.2)] transition-all duration-300"
            />
          </label>
          {messageError && <span className="text-red-500">{messageError}</span>}

          <button
            type="submit"
            className={`${styles.primaryButton} w-fit ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            <span className="relative z-10 flex items-center">
              {loading && (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
              {loading ? "Sending..." : "Send Message"}
            </span>
            <div className="absolute inset-0 w-0 bg-[#00CFFF] opacity-30 transition-all duration-300 group-hover:w-full"></div>
          </button>
          
          {confirmation && (
            <div 
              id="confirmation-message"
              className={`mt-4 p-4 rounded-lg ${
                confirmation.includes("Thank you") 
                  ? "bg-green-500/10 border border-green-500/30 text-green-500" 
                  : "bg-red-500/10 border border-red-500/30 text-red-500"
              }`}
            >
              <p>{confirmation}</p>
            </div>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
