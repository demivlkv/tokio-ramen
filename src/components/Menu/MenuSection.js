import React from 'react';
import { motion } from 'framer-motion';

import MenuItem from './MenuItem';

const animateSection = {
  hidden: { opacity: 0, y: 100 },
  animate: {
    opacity: 1, 
    y: 0,
    transition: {
        delay: 0.5,
        duration: 1,
        type: 'tween',
        delayChildren: 1,
        staggerChildren: 0.3
    }
  }
};

const MenuSection = ({ name, items, image, imageAlt }) => {
  return (
    <motion.div
      variants={animateSection}
      initial="hidden"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <h3>{name}</h3>
      <div className="flex justify-center items-start">
        <img src={image} alt={imageAlt} width={600} className="rounded-md drop-shadow-lg" />
      </div>

      <div className="max-w-screen-lg h-full mx-auto">
        <div className="flex flex-row flex-wrap justify-center items-center">
          {items.map(item => (
            <MenuItem
              key={item.name}
              name={item.name}
              description={item.description}
              price={item.price}
              spicy={item.spicy}
              popular={item.popular}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MenuSection;