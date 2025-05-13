import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Send } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || formData.name.length < 2) {
      toast.error('Please enter a valid name (at least 2 characters).');
      return;
    }

    if (!formData.email.trim() || !isValidEmail(formData.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    if (!formData.phone.trim() || !isValidPhone(formData.phone)) {
      toast.error('Please enter a valid 10-digit phone number.');
      return;
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      toast.error('Please enter a message with at least 10 characters.');
      return;
    }

    // Send email
    emailjs.send(
      'service_lx39ipe',
      'template_ezasfbw',
      formData,
      'af_z5hg83ePTGE10B'
    )
    .then(
      (result) => {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      },
      (error) => {
        toast.error('Oops! Something went wrong. Please try again.');
        console.error('Email sending error:', error.text);
      }
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-64 pb-16">
      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />

      <div className="container mx-auto px-4 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
        <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Have questions about our construction services? We're here to help and answer any questions you may have.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700">
          <div className="grid md:grid-cols-2">
            <div className="h-[400px] md:h-[600px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.35363641596!2d78.5152785!3d17.3753574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99a00a1ffecf%3A0x46e0ef9dede1d5b9!2sAadriti%20Constructions%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1745477719323!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-white mb-8">Send us a Message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-gray-400 font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-white"
                    placeholder="Name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-400 font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-white"
                      placeholder="Email"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-400 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-white"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-400 font-medium mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-white resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
