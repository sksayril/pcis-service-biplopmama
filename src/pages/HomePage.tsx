import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/sections/HeroSection';
import CompanyTypesSection from '../components/sections/CompanyTypesSection';
import ServicesIconsSection from '../components/sections/ServicesIconsSection';
import ProcessSection from '../components/sections/ProcessSection';
import ContactSection from '../components/sections/ContactSection';
import PartnersSection from '../components/sections/PartnersSection';
import { scrollToSection } from '../utils/scrollUtils';

const HomePage: React.FC = () => {
  // Scroll to section based on hash when component mounts or hash changes
  useEffect(() => {
    scrollToSection();
    
    // Add event listener for hash changes
    window.addEventListener('hashchange', scrollToSection);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('hashchange', scrollToSection);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>PCIS-Service | Business Registration Services</title>
        <meta name="description" content="Professional business registration and incorporation services. Register your company with expert guidance and complete compliance." />
      </Helmet>
      
      <div id="home">
        <HeroSection />
      </div>
      
      <div id="services">
        {/* <ServicesIconsSection /> */}
        <CompanyTypesSection />
      </div>
      
      <ProcessSection />
      
      <PartnersSection />
      
      <div id="about">
        {/* About Us section will be added here */}
        <div className="py-16 bg-primary-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-neutral-600 mb-6">
                PCIS-Service is a leading business registration service provider with years of experience helping entrepreneurs establish their businesses legally and efficiently.
              </p>
              <p className="text-lg text-neutral-600">
                Our team of experts is dedicated to providing personalized guidance and support throughout the registration process, ensuring compliance with all regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div id="contact">
        <ContactSection />
      </div>
    </>
  );
};

export default HomePage;