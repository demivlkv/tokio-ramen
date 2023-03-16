import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FireIcon, StarIcon } from '@heroicons/react/20/solid';

import useMenus from '../../hooks/useMenus';
import MenuTabs from './MenuTabs';
import FullMenu from './FullMenu';

const Menu = () => {
  const menus = useMenus();
  const menuSections = menus[0].sections;
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };


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
          <h5 className="font-medium">Consumer Advisory</h5>
          <p className="text-center text-sm italic">
            Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions.
          </p>
          <div className="pt-4 flex items-center text-sm">
            <div className="mr-2 w-[23px] h-[23px] inline-flex justify-center items-center rounded-full bg-yellow-100 text-orange-400"><StarIcon width={18} /></div> Popular Item
            <div className="ml-8 mr-2 w-[23px] h-[23px] inline-flex justify-center items-center rounded-full bg-orange-100 text-red-500"><FireIcon width={18} /></div> Spicy
          </div>

          {/* DISPLAY MENU TABS */}
          <MenuTabs
            menuSections={menuSections}
            activeTab={activeTab}
            handleTabClick={handleTabClick}
          />
        </motion.div>

        {/* DISPLAY MENU ITEMS ACCORDING TO ACTIVE TAB */}
        <FullMenu
          menuSections={menuSections}
          activeTab={activeTab}
        />

      </div>
    </section>
  )
};

export default Menu;