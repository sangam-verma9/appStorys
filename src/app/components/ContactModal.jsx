


// components/ContactModal.jsx
"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import axios from 'axios';
import Link from "next/link";

const ContactModal = ({ isOpen, onClose }) => {
  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle form submission - using the same pattern as GetInTouch
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://backend.appstorys.com/api/v1/form/create-response/',
        { name, email, source: 'Contact Sales Form', message, company, phone }
      );

      if (response.status === 201) {
        setSubmitSuccess(true);
      }
    }
    catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // Disable scrolling when success message is shown
  useEffect(() => {
    if (submitSuccess) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    }

    return () => {
      document.body.style.overflow = 'auto'; // Clean up on component unmount
    };
  }, [submitSuccess]);

  // Close modal when ESC key is pressed
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) onClose();
    };
    window.addEventListener("keydown", handleEsc);
    
    // Prevent scrolling on body when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  // Click outside to close
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
       <div 
         className="fixed inset-0 backdrop-blur-[2px] bg-black/50 z-50 flex items-center justify-center"
         onClick={handleBackdropClick}
       >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white w-full max-w-lg mx-4 rounded-lg shadow-xl overflow-hidden p-8 relative"
          >
            {/* Modal Title */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Contact Sales</h3>
              <p className="text-gray-500 mt-2">Fill out the form below and our team will get back to you</p>
            </div>

            {/* Form */}
            {!submitSuccess ? (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD5F03] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD5F03] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Enter your company name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD5F03] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD5F03] focus:border-transparent"
                  />
                </div>
                
                {/* <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you?"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD5F03] focus:border-transparent"
                  ></textarea>
                </div> */}
                
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-[#FD5F03] hover:bg-[#e05303] text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex justify-center items-center cursor-pointer"
                  >
                    <span>Submit Request</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className='flex flex-col items-center justify-center py-4'>
                {/* Success icon with animation */}
                <div className='relative mb-6'>
                  <div className='w-20 h-20 bg-green-50 rounded-full flex items-center justify-center'>
                    <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center'>
                      <div className='w-12 h-12 bg-[#FD5F03] rounded-full flex items-center justify-center animate-pulse'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Success title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Thank You!</h3>
                
                {/* Success message */}
                <p className='text-gray-600 text-center mx-auto max-w-sm mb-8'>
                  Your message has been successfully sent. We appreciate your interest and will get back to you shortly via email.
                </p>
                
                {/* Close button */}
                <button 
                  onClick={() => { 
                    setSubmitSuccess(false);
                    onClose();
                   
                    setName('');
                    setEmail('');
                    setCompany('');
                    setPhone('');
                    setMessage('');
                  }} 
                  className='px-8 py-3 bg-[#FD5F03] text-white font-medium rounded-lg hover:bg-[#e05303] transition-colors duration-300 flex items-center justify-center'
                >
                  <span>Close</span>
                </button>
              </div>
            )}

            {/* Close button - positioned in the top right */}
         {!submitSuccess && (
  <button 
    onClick={onClose}
    className="absolute top-4 right-4 text-orange-500 hover:text-gray-700 transition-colors cursor-pointer"
    aria-label="Close"
  >
    <MdCancel size={30} />
  </button>
)}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;