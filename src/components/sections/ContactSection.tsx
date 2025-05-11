import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { fadeIn } from '../../utils/animations';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.p
            variants={fadeIn('up', 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-primary-600 font-medium mb-3"
          >
            GET IN TOUCH
          </motion.p>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
          >
            Contact Our Experts
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-neutral-700"
          >
            Have questions about business registration? Our team of experts is ready to assist you with personalized guidance.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-neutral-900 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 mr-4">
                    <PhoneCall size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-neutral-500 mb-1">Phone Number</h4>
                    <p className="text-neutral-800">+91  861 731 8068</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-neutral-500 mb-1">Email Address</h4>
                    <p className="text-neutral-800">info@PCIS-Service.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-neutral-500 mb-1">Office Location</h4>
                    <p className="text-neutral-800">123 Business Avenue, Corporate Park, New Delhi, 110001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 mr-4">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-neutral-500 mb-1">Business Hours</h4>
                    <p className="text-neutral-800">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-neutral-800">Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-600 text-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <MessageSquare size={24} className="mr-3" />
                <h3 className="text-xl font-semibold">Need Quick Assistance?</h3>
              </div>
              <p className="mb-4">Schedule a free 15-minute consultation call with our business registration experts.</p>
              <button className="px-6 py-2 bg-white text-primary-600 font-medium rounded-md hover:bg-neutral-100 transition-colors shadow-sm w-full">
                Schedule a Call
              </button>
            </div>
          </motion.div>
          
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-neutral-900 mb-6">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 rounded-md border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-1">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 rounded-md border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="private">Private Limited Company</option>
                    <option value="llp">LLP Registration</option>
                    <option value="nidhi">Nidhi Company</option>
                    <option value="section8">Section 8 Company (NGO)</option>
                    <option value="gst">GST Registration</option>
                    <option value="msme">MSME Registration</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="Please provide details about your requirements..."
                ></textarea>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="consent"
                  className="h-4 w-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="consent" className="ml-2 block text-sm text-neutral-700">
                  I agree to receive communications and updates about relevant services
                </label>
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition-colors shadow-sm w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;