import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import { fadeIn } from '../../utils/animations';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <motion.div 
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView="show"
          >
            <Link to="/">
              <img 
                src="/logo.svg" 
                alt="PCIS Services Logo" 
                className="h-12 md:h-14" 
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-neutral-800 hover:text-primary-600 transition-colors">Home</Link>
            {isHomePage ? (
              <a href="#services" className="font-medium text-neutral-800 hover:text-primary-600 transition-colors">Services</a>
            ) : (
              <Link to="/#services" className="font-medium text-neutral-800 hover:text-primary-600 transition-colors">Services</Link>
            )}
            <Link to="/branches" className="font-medium text-neutral-800 hover:text-primary-600 transition-colors">Our Branches</Link>
            {isHomePage ? (
              <a href="#about" className="font-medium text-neutral-800 hover:text-primary-600 transition-colors">About Us</a>
            ) : (
              <Link to="/#about" className="font-medium text-neutral-800 hover:text-primary-600 transition-colors">About Us</Link>
            )}
            {isHomePage ? (
              <a href="#contact" className="font-medium text-neutral-800 hover:text-primary-600 transition-colors">Contact</a>
            ) : (
              <Link to="/#contact" className="font-medium text-neutral-800 hover:text-primary-600 transition-colors">Contact</Link>
            )}
          </nav>

          <div className="hidden md:block">
            <Button variant="primary">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-neutral-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="font-medium text-neutral-800 hover:text-primary-600 transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
              {isHomePage ? (
                <a href="#services" className="font-medium text-neutral-800 hover:text-primary-600 transition-colors" onClick={() => setIsOpen(false)}>Services</a>
              ) : (
                <Link to="/#services" className="font-medium text-neutral-800 hover:text-primary-600 transition-colors" onClick={() => setIsOpen(false)}>Services</Link>
              )}
              <Link to="/branches" className="font-medium text-neutral-800 hover:text-primary-600 transition-colors" onClick={() => setIsOpen(false)}>Our Branches</Link>
              {isHomePage ? (
                <a href="#about" className="font-medium text-neutral-800 hover:text-primary-600 transition-colors" onClick={() => setIsOpen(false)}>About Us</a>
              ) : (
                <Link to="/#about" className="font-medium text-neutral-800 hover:text-primary-600 transition-colors" onClick={() => setIsOpen(false)}>About Us</Link>
              )}
              {isHomePage ? (
                <a href="#contact" className="font-medium text-neutral-800 hover:text-primary-600 transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
              ) : (
                <Link to="/#contact" className="font-medium text-neutral-800 hover:text-primary-600 transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
              )}
              <div className="pt-2">
                <Button variant="primary" fullWidth>Get Started</Button>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;