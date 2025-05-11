import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';

const PrivateLimitedPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Private Limited Company Registration | PCIS-Service</title>
        <meta name="description" content="Register your Private Limited Company with PCIS-Service. Expert guidance, fast processing, and complete compliance with legal requirements." />
        <meta name="keywords" content="private limited company, company registration, business registration, incorporation services" />
        <link rel="canonical" href="/services/private-limited" />
      </Helmet>

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <motion.section 
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          className="container mx-auto px-4 py-16"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-700 mb-6">Private Limited Company Registration</h1>
            <p className="text-lg text-neutral-600 mb-8">Transform your business idea into a legally recognized entity with our comprehensive Private Limited Company registration services.</p>
            <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
              Get Started Today
            </button>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section 
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          className="bg-gray-50 py-16"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Benefits of Private Limited Company</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Limited Liability Protection</h3>
                <p className="text-neutral-600">Shareholders' liability is limited to their investment, protecting personal assets from business debts.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Perpetual Succession</h3>
                <p className="text-neutral-600">The company continues to exist regardless of changes in ownership, ensuring business continuity.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Enhanced Credibility</h3>
                <p className="text-neutral-600">Registered companies gain higher credibility with customers, suppliers, and financial institutions.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Process Section */}
        <motion.section 
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          className="container mx-auto px-4 py-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Registration Process</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary-200"></div>
              
              {/* Steps */}
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-primary-700">Name Reservation</h3>
                    <p className="text-neutral-600 mt-2">We help you select and reserve a unique name for your company through the MCA portal.</p>
                  </div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full text-white font-bold">1</div>
                  <div className="flex-1 md:pl-8 hidden md:block"></div>
                </div>
                
                {/* Step 2 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 hidden md:block"></div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full text-white font-bold">2</div>
                  <div className="flex-1 md:pl-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-primary-700">Document Preparation</h3>
                    <p className="text-neutral-600 mt-2">Our experts prepare all necessary documents including MOA, AOA, and other incorporation forms.</p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-primary-700">Filing & Submission</h3>
                    <p className="text-neutral-600 mt-2">We file all documents with the Registrar of Companies (ROC) and handle the entire submission process.</p>
                  </div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full text-white font-bold">3</div>
                  <div className="flex-1 md:pl-8 hidden md:block"></div>
                </div>
                
                {/* Step 4 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 hidden md:block"></div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full text-white font-bold">4</div>
                  <div className="flex-1 md:pl-8">
                    <h3 className="text-xl font-semibold text-primary-700">Certificate Issuance</h3>
                    <p className="text-neutral-600 mt-2">Receive your Certificate of Incorporation and start your business operations legally.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section 
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          className="bg-gray-50 py-16"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">What is the minimum capital requirement for a Private Limited Company?</h3>
                <p className="text-neutral-600">There is no minimum capital requirement as per the Companies Act, 2013. You can start with any amount based on your business needs.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">How long does it take to register a Private Limited Company?</h3>
                <p className="text-neutral-600">With all documents in place, the registration process typically takes 10-15 working days.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">What are the compliance requirements after incorporation?</h3>
                <p className="text-neutral-600">Private Limited Companies must file annual returns, financial statements, hold board meetings, maintain statutory registers, and comply with various other requirements under the Companies Act.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          whileInView="show"
          className="container mx-auto px-4 py-16 text-center"
        >
          <div className="max-w-3xl mx-auto bg-primary-600 text-white rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Business Journey?</h2>
            <p className="text-lg mb-8">Our experts are here to guide you through every step of the company registration process.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-primary-700 hover:bg-gray-100 font-medium py-3 px-6 rounded-md transition-colors">
                Contact Us
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
                View Pricing
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default PrivateLimitedPage;
