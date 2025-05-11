import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Users, Building, Heart } from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';
import PhysicsCard from '../ui/PhysicsCard';
import { fadeIn } from '../../utils/animations';

const CompanyTypesSection: React.FC = () => {
  const companyTypes = [
    {
      id: 'company',
      icon: <Building size={36} />,
      title: 'Private Limited Company',
      price: '9,999',
      description: 'Private limited company governed in India by Companies Act 2013, under section 2(68).',
      features: [
        'Certificate of Incorporation',
        'Director Identification Number',
        'GST Registration',
        'ESI Registration',
        'Legal Documentation',
        'Post-incorporation Support'
      ],
      highlightedFeature: 'Most Popular'
    },
    {
      id: 'llp',
      icon: <Users size={36} />,
      title: 'LLP Registration',
      price: '8,999',
      description: 'Limited Liability Partnership providing the benefits of both partnership and company.',
      features: [
        'LLP Agreement',
        'DPIN for Partners',
        'Certificate of Incorporation',
        'PAN & TAN',
        'Bank Account Assistance',
        '1 Year Compliance Support'
      ]
    },
    {
      id: 'nidhi',
      icon: <Landmark size={36} />,
      title: 'Nidhi Limited Company',
      price: '11,999',
      description: 'Nidhi Company governed in India by Companies Act 2013, under section 403.',
      features: [
        'Certificate of Incorporation',
        'Nidhi Rules Compliance',
        'Director Identification Number',
        'Bank Account Opening',
        'PAN & TAN',
        'RBI Guidelines Compliance'
      ]
    },
    {
      id: 'section8',
      icon: <Heart size={36} />,
      title: 'Section 8 Company (NGO)',
      price: '9,999',
      description: 'A Non Profit Organisation in India, registered under Companies Act 2013, as Section 8 Company.',
      features: [
        'Certificate of Incorporation',
        '80G & 12A Registration',
        'Trust Deed Preparation',
        'CSR Funding Eligibility',
        'Tax Exemption Support',
        'Annual Compliance Assistance'
      ]
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
    <section id="services" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.p
            variants={fadeIn('up', 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="text-primary-600 font-medium mb-3"
          >
            BUSINESS REGISTRATION SOLUTIONS
          </motion.p>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
          >
            Choose the Right Business Structure
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="text-neutral-700"
          >
            We offer comprehensive registration services for various business entities. 
            Select the structure that best fits your business goals and requirements.
          </motion.p>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {companyTypes.map((company) => (
            <PhysicsCard key={company.id} springStrength={0.3}>
              <ServiceCard
                icon={company.icon}
                title={company.title}
                price={company.price}
                description={company.description}
                features={company.features}
                highlightedFeature={company.highlightedFeature}
              />
            </PhysicsCard>
          ))}
        </motion.div>
        
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 text-center"
        >
          <p className="text-neutral-700 mb-6">
            Not sure which business structure is right for you? Get expert advice tailored to your needs.
          </p>
          <button className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition-colors">
            Schedule a Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyTypesSection;