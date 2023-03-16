import React from 'react';
import MenuSection from './MenuSection';

const FullMenu = ({ menuSections, activeTab }) => {
  return (
    <>
      {menuSections.map((section, index) => (
        <>
          {index === activeTab && (
            <MenuSection
              key={index}
              name={section.name}
              items={section.items}
              image={section.image.publicUrl}
              imageAlt={section.imageAlt}
            />
          )}
        </>
      ))}
    </>
  );
};

export default FullMenu;