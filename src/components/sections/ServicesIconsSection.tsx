import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';
import { Landmark, FileText, Scale, Medal, CreditCard, ShieldCheck, CheckCircle, TrendingUp, Briefcase, Award } from 'lucide-react';

interface ServiceIconCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
  color?: string;
}

const ServiceIconCard: React.FC<ServiceIconCardProps> = ({ icon, title, description, features, color = 'primary' }) => {
  return (
    <div className="flex flex-col h-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Card Header with Icon */}
      <div className={`w-full py-6 px-4 bg-${color}-600 text-white flex items-center justify-center`}>
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
          <div className={`text-${color}-600`}>
            {icon}
          </div>
        </div>
      </div>
      
      {/* Card Content */}
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-neutral-800 mb-3">{title}</h3>
        <p className="text-neutral-600 mb-5">{description}</p>
        
        {features && features.length > 0 && (
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-600">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      {/* Card Footer */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <button className={`w-full py-2 px-4 bg-${color}-600 hover:bg-${color}-700 text-white rounded-md transition-colors`}>
          Learn More
        </button>
      </div>
    </div>
  );
};

const ServicesIconsSection: React.FC = () => {
  const services = [
    {
      icon: <Landmark size={28} />,
      title: 'Company Registration',
      description: 'Complete registration for all types of companies with expert guidance',
      features: [
        'Private Limited Company Registration',
        'LLP Registration with all compliances',
        'Nidhi Company setup and management',
        'Section 8 (NGO) Company formation',
        'One Person Company (OPC) registration'
      ],
      color: 'primary'
    },
    {
      icon: <FileText size={28} />,
      title: 'GST Registration',
      description: 'Comprehensive GST services from registration to compliance',
      features: [
        'New GST registration within 3-5 working days',
        'GST return filing (GSTR-1, GSTR-3B)',
        'E-way bill generation and management',
        'GST reconciliation and audit support',
        'GST cancellation and surrender'
      ],
      color: 'secondary'
    },
    {
      icon: <Scale size={28} />,
      title: 'Legal Documentation',
      description: 'Expert preparation of all essential business documents',
      features: [
        'MOA & AOA preparation for companies',
        'Partnership deed and LLP agreements',
        'Shareholder agreements and term sheets',
        'Non-disclosure agreements (NDAs)',
        'Employment contracts and HR policies'
      ],
      color: 'accent'
    },
    {
      icon: <Medal size={28} />,
      title: 'MSME Registration',
      description: 'Unlock government benefits with proper MSME certification',
      features: [
        'Udyam Registration Certificate',
        'Access to government tenders and subsidies',
        'Priority sector lending benefits',
        'Protection against delayed payments',
        'Concessions in patent and trademark filing'
      ],
      color: 'primary'
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'Business Compliance',
      description: 'Stay compliant with all regulatory requirements',
      features: [
        'Annual compliance management',
        'ROC filings and annual returns',
        'Director KYC and other mandatory filings',
        'Maintenance of statutory registers',
        'Legal compliance calendar and reminders'
      ],
      color: 'secondary'
    },
    {
      icon: <Briefcase size={28} />,
      title: 'Trademark Registration',
      description: 'Protect your brand identity with proper trademark registration',
      features: [
        'Trademark search and availability check',
        'Trademark application filing',
        'Responding to examination reports',
        'Trademark opposition handling',
        'Trademark renewal and maintenance'
      ],
      color: 'accent'
    },
    {
      icon: <CreditCard size={28} />,
      title: 'Tax Filing Services',
      description: 'Professional tax services for businesses and individuals',
      features: [
        'Income tax return filing for all categories',
        'TDS return filing and compliance',
        'Tax planning and consultation',
        'Tax notice resolution and assistance',
        'Advance tax calculation and payment'
      ],
      color: 'primary'
    },
    {
      icon: <ShieldCheck size={28} />,
      title: 'ISO Certification',
      description: 'Enhance your business credibility with ISO certification',
      features: [
        'ISO 9001:2015 Quality Management',
        'ISO 14001:2015 Environmental Management',
        'ISO 27001 Information Security',
        'ISO 22000 Food Safety Management',
        'Gap analysis and implementation support'
      ],
      color: 'secondary'
    },
    {
      icon: <Award size={28} />,
      title: 'Digital Signature',
      description: 'Get your Digital Signature Certificate (DSC) for all online filings',
      features: [
        'Class 2 and Class 3 DSC issuance',
        'DSC for company directors and partners',
        'DSC renewal and management',
        'USB token for secure storage',
        'Technical support for DSC installation'
      ],
      color: 'accent'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.p
            variants={fadeIn('up', 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-primary-600 font-medium mb-3"
          >
            OUR COMPREHENSIVE SERVICES
          </motion.p>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
          >
            All Services at a Glance
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-neutral-700"
          >
            We provide end-to-end business registration and compliance solutions to help you focus on growing your business while we handle the paperwork.
          </motion.p>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 0.1 * index)}
              className="h-full"
            >
              <ServiceIconCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 bg-primary-50 rounded-2xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:max-w-xl">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                Need customized business solutions?
              </h3>
              <p className="text-neutral-700">
                We offer tailored packages to meet your specific business requirements. Get in touch with our experts today.
              </p>
            </div>
            <div>
              <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition-colors shadow-sm">
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesIconsSection;