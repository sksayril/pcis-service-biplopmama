import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../ui/Button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import ImageCarousel from '../ui/ImageCarousel';

const HeroSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const carouselImages = [
    {
      src: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Business meeting",
      title: "Start Your Business Journey",
      description: "Register your company with expert assistance and guidance"
    },
    {
      src: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Business team",
      title: "Expert Business Registration",
      description: "Simplified compliance and registration processes"
    },
    {
      src: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Company registration",
      title: "Trusted By Thousands",
      description: "Join the many successful businesses we've helped establish"
    }
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const keypoints = [
    "Expert guidance through the entire process",
    "Documentation and filing handled for you",
    "Legal compliance guaranteed",
    "Fast & efficient service"
  ];

  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-primary-900/5 z-0" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
            className="space-y-6"
          >
            <motion.span 
              variants={textVariants}
              className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              #1 Business Registration Services
            </motion.span>
            
            <motion.h1 
              variants={textVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight"
            >
              Register Your Business With <span className="text-primary-600">Confidence</span>
            </motion.h1>
            
            <motion.p 
              variants={textVariants}
              className="text-lg text-neutral-700 max-w-lg"
            >
              Professional company registration services to help you start your business journey with confidence and compliance.
            </motion.p>
            
            <motion.div variants={textVariants} className="space-y-4">
              <ul className="space-y-2">
                {keypoints.map((point, index) => (
                  <motion.li 
                    key={index}
                    variants={textVariants}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 text-success-500 mr-2 flex-shrink-0" />
                    <span className="text-neutral-800">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              variants={textVariants}
              className="pt-4 flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]"
          >
            <ImageCarousel 
              images={carouselImages}
              autoPlay={true}
              interval={5000}
              className="h-full"
            />
          </motion.div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary-200 rounded-full filter blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-accent-200 rounded-full filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }} />
    </section>
  );
};

export default HeroSection;