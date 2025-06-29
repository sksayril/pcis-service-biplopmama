import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  price: string;
  description: string;
  features?: string[];
  className?: string;
  highlightedFeature?: string;
  onClick?: () => void;
  buttonText?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  price,
  description,
  features = [],
  className = '',
  highlightedFeature,
  onClick,
  buttonText = 'Get Started'
}) => {
  return (
    <motion.div
      whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)' }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 h-full flex flex-col ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      <div className="p-6 border-b border-neutral-200">
        <div className="flex justify-between items-start">
          <div className="text-primary-600 mb-4">{icon}</div>
          {highlightedFeature && (
            <span className="bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              {highlightedFeature}
            </span>
          )}
        </div>
        <h3 className="text-xl font-semibold text-neutral-800 mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-2xl font-bold text-primary-600">₹{price}</span>
          <span className="text-neutral-500 text-sm">/- onwards</span>
        </div>
        <p className="text-neutral-600 text-sm mb-4">{description}</p>
      </div>
      {features.length > 0 && (
        <div className="p-6 bg-neutral-50 flex-grow">
          <h4 className="font-medium text-neutral-800 mb-3">What's Included:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm">
                <span className="text-success-500 mr-2">✓</span>
                <span className="text-neutral-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="p-6 mt-auto">
        <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors">
          {buttonText}
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;