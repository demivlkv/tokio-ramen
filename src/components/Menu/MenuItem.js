import React from 'react';
import { motion } from 'framer-motion';
import Spicy from '../Icons/Spicy';
import Star from '../Icons/Star';

const animateItem = {
  hidden: { y: 50, opacity: 0 },
  animate: { 
    y: 0,
    opacity: 1,
    transition: {
        duration: 1,
        type: 'tween'
    }
  }
};

const MenuItem = ({ name, description, price, spicy, popular }) => {
  return (
    <motion.div
      className="w-full md:w-[40%] m-4 md:m-8 flex justify-evenly items-start self-start border-l-4 border-gray-100 pl-8 py-4"
      variants={animateItem}
      viewport={{ once: true }}
    >
      <div className="w-full">
        <h4 className="flex items-center">
          {name}
          {popular ? (
            <div className="ml-2 w-[24px] h-[24px] inline-flex justify-center items-center rounded-full bg-yellow-100 text-orange-400">
              <span className="w-[16px] h-[16px]"><Star /></span>
            </div>
          ) : null}
          {spicy ? (
            <div className="mx-2 w-[24px] h-[24px] inline-flex justify-center items-center rounded-full bg-orange-100 text-red-500">
              <span className="w-[16px] h-[16px]"><Spicy /></span>
            </div>
          ) : null}
        </h4>
        <p>{description}</p>
      </div>
      <p className="text-red-700 text-lg md:text-xl font-medium">{price}</p>
    </motion.div>
  );
};

export default MenuItem;