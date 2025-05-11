import React from 'react';
import { motion } from 'framer-motion';
import { FileText, FileCheck, Users, Clock, CheckSquare, Award } from 'lucide-react';
import { fadeIn } from '../../utils/animations';

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stepNumber: number;
  isLast?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ 
  icon, 
  title, 
  description, 
  stepNumber,
  isLast = false 
}) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-6">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-lg font-bold shadow-lg"
        >
          {stepNumber}
        </motion.div>
        {!isLast && (
          <div className="h-full w-0.5 bg-primary-200 mt-4"></div>
        )}
      </div>
      <div className="pb-12">
        <div className="flex items-center mb-3">
          <div className="text-primary-600 mr-3">{icon}</div>
          <h3 className="text-xl font-semibold text-neutral-800">{title}</h3>
        </div>
        <p className="text-neutral-600">{description}</p>
      </div>
    </div>
  );
};

const ProcessSection: React.FC = () => {
  const processSteps = [
    {
      icon: <FileText size={24} />,
      title: 'Initial Consultation',
      description: 'We start with a detailed consultation to understand your business needs and recommend the best registration type.'
    },
    {
      icon: <Users size={24} />,
      title: 'Document Collection',
      description: 'Our team will guide you through the necessary documents required for your specific business registration.'
    },
    {
      icon: <FileCheck size={24} />,
      title: 'Application Preparation',
      description: 'We prepare and review all applications and legal documents to ensure accuracy and compliance with regulations.'
    },
    {
      icon: <Clock size={24} />,
      title: 'Filing & Submission',
      description: 'Our experts file your application with the appropriate government authorities and handle all necessary follow-ups.'
    },
    {
      icon: <CheckSquare size={24} />,
      title: 'Verification & Processing',
      description: 'We manage the verification process, respond to any queries, and ensure smooth processing of your application.'
    },
    {
      icon: <Award size={24} />,
      title: 'Certificate Delivery',
      description: 'Upon successful registration, we deliver all certificates and necessary documents along with post-registration guidance.'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-50 rounded-bl-full opacity-70" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent-50 rounded-tr-full opacity-70" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.p
            variants={fadeIn('up', 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-primary-600 font-medium mb-3"
          >
            OUR STREAMLINED PROCESS
          </motion.p>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
          >
            How We Make Business Registration Simple
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-neutral-700"
          >
            Our streamlined process ensures hassle-free company registration with expert guidance at every step.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-neutral-50 p-8 rounded-2xl shadow-sm"
          >
            <div className="space-y-1">
              {processSteps.map((step, index) => (
                <ProcessStep
                  key={index}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  stepNumber={index + 1}
                  isLast={index === processSteps.length - 1}
                />
              ))}
            </div>
          </motion.div>
          
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Why Choose Our Process?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-success-500 mr-2">✓</span>
                  <span className="text-neutral-700">Transparent steps with regular updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success-500 mr-2">✓</span>
                  <span className="text-neutral-700">Expert handling of complex paperwork</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success-500 mr-2">✓</span>
                  <span className="text-neutral-700">Time-saving with minimal client involvement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success-500 mr-2">✓</span>
                  <span className="text-neutral-700">Compliance with all legal requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success-500 mr-2">✓</span>
                  <span className="text-neutral-700">Post-registration support and guidance</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-neutral-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-accent-50 flex items-center justify-center text-accent-600 mr-4">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900">Average Processing Time</h4>
                  <p className="text-neutral-600">15-20 working days*</p>
                </div>
              </div>
              <p className="text-sm text-neutral-500">*Actual time may vary based on government processing and document verification. Our experts work to expedite the process whenever possible.</p>
            </div>
            
            <div className="bg-primary-600 text-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Ready to Get Started?</h3>
              <p className="mb-4">Schedule your initial consultation today and take the first step towards establishing your business legally.</p>
              <button className="px-6 py-2 bg-white text-primary-600 font-medium rounded-md hover:bg-neutral-100 transition-colors shadow-sm">
                Book a Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;