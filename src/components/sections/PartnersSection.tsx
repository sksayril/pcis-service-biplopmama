import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';

// Partner logos - in a real application, these would be imported images
const partners = [
  {
    id: 1,
    name: 'Microsoft',
    logo: 'https://via.placeholder.com/150x80?text=Microsoft'
  },
  {
    id: 2,
    name: 'Google',
    logo: 'https://via.placeholder.com/150x80?text=Google'
  },
  {
    id: 3,
    name: 'Amazon',
    logo: 'https://via.placeholder.com/150x80?text=Amazon'
  },
  {
    id: 4,
    name: 'IBM',
    logo: 'https://via.placeholder.com/150x80?text=IBM'
  },
  {
    id: 5,
    name: 'Oracle',
    logo: 'https://via.placeholder.com/150x80?text=Oracle'
  },
  {
    id: 6,
    name: 'Salesforce',
    logo: 'https://via.placeholder.com/150x80?text=Salesforce'
  },
  {
    id: 7,
    name: 'Adobe',
    logo: 'https://via.placeholder.com/150x80?text=Adobe'
  },
  {
    id: 8,
    name: 'Intel',
    logo: 'https://via.placeholder.com/150x80?text=Intel'
  }
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
