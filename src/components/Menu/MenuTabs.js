import React from 'react';

const MenuTabs = ({ menuSections, activeTab, handleTabClick }) => {
  return (
    <ul className="flex flex-wrap justify-center items-center flex-shrink-0">
      {menuSections.map((section, index) => (
        <li
          key={index}
          className={`my-2 sm:my-0 py-2 px-4 text-sm font-medium uppercase focus:outline-none cursor-pointer ${
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