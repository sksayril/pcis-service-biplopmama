import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';

// Partner logos - in a real application, these would be imported images
const partners = [
  {
    id: 1,
    name: 'Xtra Trust GST',
    logo: 'https://5.imimg.com/data5/SELLER/Default/2022/7/JT/KI/ZQ/1940562/xtratrust-digital-signature.png'
  },
  {
    id: 2,
    name: 'Panta Sign DSC',
    logo: 'https://m.media-amazon.com/images/I/41lG0OnUbUL.jpg'
  },
  {
    id: 3,
    name: 'VSIGN',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQrOAr0vUQ5F8YSRok6Xeivsjb9Xwu3OEbqg&s'
  },
  {
    id: 4,
    name: 'Capricorn',
    logo: 'https://www.capricorn.cash/images/ca/form-logo.png'
  },
  {
    id: 5,
    name: 'ProDigi Sign',
    logo: 'https://prodigisign.com/wp-content/uploads/2022/05/Pro_digi_logo-768x300.png'
  },
  {
    id: 6,
    name: 'DSC',
    logo: 'https://edigitalsignature.org/assets/img/logo.png'
  },
  // {
  //   id: 6,
  //   name: 'Salesforce',
  //   logo: 'https://via.placeholder.com/150x80?text=Salesforce'
  // },
  // {
  //   id: 7,
  //   name: 'Adobe',
  //   logo: 'https://via.placeholder.com/150x80?text=Adobe'
  // },
  // {
  //   id: 8,
  //   name: 'Intel',
  //   logo: 'https://via.placeholder.com/150x80?text=Intel'
  // }
];

const PartnersSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-primary-700 mb-2">Our Trusted Partners</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            We collaborate with industry leaders to provide the best business registration services
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* First carousel row - moves right to left */}
          <div className="flex animate-carousel">
            {/* First set of logos */}
            {partners.map((partner) => (
              <div 
                key={partner.id} 
                className="flex-shrink-0 mx-8 w-[150px] h-20 flex items-center justify-center"
              >
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="max-w-full max-h-full grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless looping */}
            {partners.map((partner) => (
              <div 
                key={`duplicate-${partner.id}`} 
                className="flex-shrink-0 mx-8 w-[150px] h-20 flex items-center justify-center"
              >
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="max-w-full max-h-full grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
