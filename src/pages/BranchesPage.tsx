import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

// Branch data
const branches = [
  {
    id: 1,
    name: 'Mumbai Headquarters',
    address: '501, Sunshine Tower, Senapati Bapat Marg, Lower Parel, Mumbai, Maharashtra 400013',
    phone: '+91 22 4123 7890',
    email: 'mumbai@PCIS-Service.com',
    image: 'https://via.placeholder.com/800x600',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.0323456789!2d72.8234567!3d18.9876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU5JzE1LjYiTiA3MsKwNDknMjQuNCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin'
  },
  {
    id: 2,
    name: 'Delhi NCR Office',
    address: '305, Emaar Digital Greens, Golf Course Ext Road, Sector 61, Gurugram, Haryana 122011',
    phone: '+91 124 4567 890',
    email: 'delhi@PCIS-Service.com',
    image: 'https://via.placeholder.com/800x600',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.543210987!2d77.0987654!3d28.4321098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI1JzU1LjYiTiA3N8KwMDUnNTUuNiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin'
  },
  {
    id: 3,
    name: 'Bangalore Tech Park',
    address: '201, Prestige Tech Park, Marathahalli-Sarjapur Outer Ring Road, Bangalore, Karnataka 560103',
    phone: '+91 80 4567 8901',
    email: 'bangalore@PCIS-Service.com',
    image: 'https://via.placeholder.com/800x600',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.012345678!2d77.6789012!3d12.9012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzA0LjQiTiA3N8KwNDAnNDQuMSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin'
  },
  {
    id: 4,
    name: 'Hyderabad Financial District',
    address: '701, Cyber Gateway, HITEC City, Hyderabad, Telangana 500081',
    phone: '+91 40 6789 0123',
    email: 'hyderabad@PCIS-Service.com',
    image: 'https://via.placeholder.com/800x600',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.543210987!2d78.3456789!3d17.4321098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI1JzU1LjYiTiA3OMKwMjAnNDQuNCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin'
  },
  {
    id: 5,
    name: 'Chennai Business Center',
    address: '401, Ascendas IT Park, Taramani, Chennai, Tamil Nadu 600113',
    phone: '+91 44 7890 1234',
    email: 'chennai@PCIS-Service.com',
    image: 'https://via.placeholder.com/800x600',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.654321098!2d80.2345678!3d13.0123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzQ0LjQiTiA4MMKwMTQnMDQuNCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin'
  }
];

const BranchesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Branches | PCIS-Service</title>
        <meta name="description" content="Visit our branches across India for business registration services. Find the nearest PCIS-Service office with contact details and directions." />
        <meta name="keywords" content="business registration branches, company registration offices, PCIS-Service locations" />
        <link rel="canonical" href="/branches" />
      </Helmet>

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <motion.section 
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          className="bg-primary-50 py-16"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-700 mb-6">Our Branches</h1>
              <p className="text-lg text-neutral-600 mb-8">Visit our offices across India for personalized business registration services and expert guidance</p>
            </div>
          </div>
        </motion.section>

        {/* Branches Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-16">
              {branches.map((branch, index) => (
                <motion.div 
                  key={branch.id}
                  variants={fadeIn(index % 2 === 0 ? 'left' : 'right', 0.3 + index * 0.1)}
                  initial="hidden"
                  whileInView="show"
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
                >
                  <div className="lg:w-1/2">
                    <img 
                      src={branch.image} 
                      alt={`${branch.name} office`} 
                      className="w-full h-80 object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div className="lg:w-1/2 space-y-6">
                    <h2 className="text-3xl font-bold text-primary-700">{branch.name}</h2>
                    <div className="space-y-3">
                      <p className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{branch.address}</span>
                      </p>
                      <p className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>{branch.phone}</span>
                      </p>
                      <p className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>{branch.email}</span>
                      </p>
                    </div>
                    <div className="pt-4">
                      <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                        Get Directions
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Maps Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Find Us On The Map</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {branches.map((branch) => (
                <motion.div 
                  key={branch.id}
                  variants={fadeIn('up', 0.3)}
                  initial="hidden"
                  whileInView="show"
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="p-4 border-b">
                    <h3 className="text-xl font-semibold">{branch.name}</h3>
                  </div>
                  <div className="h-80 w-full">
                    <iframe 
                      src={branch.mapUrl} 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy"
                      title={`Map for ${branch.name}`}
                    ></iframe>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <motion.section 
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          className="bg-primary-50 py-16"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary-700 mb-4">Can't Visit Us In Person?</h2>
              <p className="text-lg text-neutral-600 mb-8">Our team is available for virtual consultations. Schedule a call with our experts to discuss your business registration needs.</p>
              <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default BranchesPage;
