import React from 'react';

const MenuTabs = ({ menuSections, activeTab, handleTabClick }) => {
  return (
    <ul className="mt-8 flex justify-center items-center">
      {menuSections.map((section, index) => (
        <li
          key={index}
          className={`py-1 px-2 sm:py-2 sm:px-4 text-xs md:text-sm font-medium uppercase focus:outline-none cursor-pointer ${
            activeTab === index ? 'border-b-2 border-red-600' : 'border-b border-[transparent] text-gray-400 hover:text-[#222] transition-all ease-in duration-300'
          }`}
          onClick={() => handleTabClick(index)}
        >
          {section.name}
        </li>
      ))}
    </ul>
  );
};

export default MenuTabs;