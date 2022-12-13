import React from 'react';
import { motion } from 'framer-motion';
import { FireIcon, StarIcon } from '@heroicons/react/20/solid';
import useMenus from '../../hooks/useMenus';

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

const MenuItem = ({ name, description, price, spicy, popular }) => (
  <motion.div
    className="w-full md:w-[40%] m-4 md:m-8 flex justify-evenly items-start self-start border-l-4 border-gray-100 pl-8 py-4"
    variants={animateItem}
    viewport={{ once: true }}
  >
    <div className="w-full">
      <h4 className="flex items-center">
        {name}
        {popular === true ? <div className="ml-2 w-[24px] h-[24px] inline-flex justify-center items-center rounded-full bg-yellow-100 text-orange-400"><StarIcon width={20} /></div> : ""}
        {spicy === true ? <div className="mx-2 w-[24px] h-[24px] inline-flex justify-center items-center rounded-full bg-orange-100 text-red-500"><FireIcon width={20} /></div> : ""}
      </h4>
      <p>{description}</p>
    </div>
    <p className="text-red-700 text-lg md:text-xl font-medium">{price}</p>
  </motion.div>
);

const MenuSection = ({ name, items, image, imageAlt }) => (
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
            price={item.price}
            description={item.description}
            spicy={item.spicy}
            popular={item.popular}
          />
        ))}
      </div>
    </div>
  </motion.div>
);

const FullMenu = ({ name, sections }) => (
  <>
    {sections.map(section => (
      <MenuSection
        key={section.name}
        name={section.name}
        items={section.items}
        image={section.image.publicUrl}
        imageAlt={section.imageAlt}
      />
    ))}
  </>
);

const Menu = () => {
  const menus = useMenus();

  return (
    <section id="menu">
      <div className="w-full h-full pt-6 px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Menu
        </motion.h2>
        <motion.div
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="font-medium">Consumer Advisory</p>
          <p className="text-center text-sm italic">
            Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions.
          </p>
          <div className="pt-4 flex items-center text-sm">
            <div className="mr-2 w-[23px] h-[23px] inline-flex justify-center items-center rounded-full bg-yellow-100 text-orange-400"><StarIcon width={18} /></div> Popular Item
            <div className="ml-8 mr-2 w-[23px] h-[23px] inline-flex justify-center items-center rounded-full bg-orange-100 text-red-500"><FireIcon width={18} /></div> Spicy
          </div>
        </motion.div>
            {menus.map(menu => (
              <FullMenu key={menu.name} name={menu.name} sections={menu.sections} />
            ))}

      </div>
    </section>
  )
};

export default Menu;