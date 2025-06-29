import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { fadeIn } from '../../utils/animations';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            variants={fadeIn('up', 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">PCIS</span>
              <span className="text-accent-500">Service</span>
            </h3>
            <p className="text-neutral-300 max-w-xs">
              Your trusted partner for business registrations and compliance services across India.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-white hover:text-accent-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Private Limited Company</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">LLP Registration</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Nidhi Company</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Section 8 Company</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">GST Registration</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">MSME Registration</a></li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-accent-500 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-300">74/2, Ground Floor, Gora Bazar, Dumdum Cant, Kolkata, West Bengal - 700028</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-accent-500 flex-shrink-0" />
                <span className="text-neutral-300">+91 9593311014</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-accent-500 flex-shrink-0" />
                <span className="text-neutral-300">info.pcisservice@gmail.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-primary-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              © {new Date().getFullYear()} PCIS-Service. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;