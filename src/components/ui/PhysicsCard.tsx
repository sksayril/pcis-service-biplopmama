import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface PhysicsCardProps {
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
  springStrength?: number;
}

const PhysicsCard: React.FC<PhysicsCardProps> = ({
  children,
  className = '',
  backgroundImage,
  springStrength = 0.5, // Default spring strength
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Motion values for the tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Springs for smoother animation
  const springConfig = { damping: 25, stiffness: 400 * springStrength };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);
  
  // Transform the spring values for rotation
  const rotateX = useTransform(ySpring, [-100, 100], [10, -10]);
  const rotateY = useTransform(xSpring, [-100, 100], [-10, 10]);
  
  // Handle mouse move for the tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovered) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate cursor position relative to the center of the card
    const xValue = e.clientX - rect.left - width / 2;
    const yValue = e.clientY - rect.top - height / 2;
    
    // Update motion values
    x.set(xValue);
    y.set(yValue);
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    // Reset to center position
    x.set(0);
    y.set(0);
  };
  
  const backgroundStyle = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : {};
  
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
        ...backgroundStyle
      }}
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        transition={{ velocity: 0 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default PhysicsCard;