import * as React from 'react';
import menus from './data';

const MenuItem = ({ name, description, price }) => (
  <div className="w-full flex justify-between">
    <div>
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
    <p>{price}</p>
  </div>
);

const MenuSection = ({ name, items, image, imageAlt }) => (
  <div className="mb-8">
    <h3>{name}</h3>
    <img src={image} alt={imageAlt} />
    {items.map(item => (
      <MenuItem
        key={item.name}
        name={item.name}
        price={item.price}
        description={item.description}
      />
    ))}
  </div>
);

const FullMenu = ({ name, sections }) => (
  <div className="mb-8">
    <h2>{name}</h2>
    {sections.map(section => (
      <MenuSection
        key={section.name}
        name={section.name}
        items={section.items}
        image={section.image}
        imageAlt={section.imageAlt}
      />
    ))}
  </div>
);

const Menu = () => (
  <>
    <div className="w-full h-screen">
      <div className="h-full flex flex-col justify-center items-center">

        <h2>Menu</h2>
        {menus.map(menu => (
          <FullMenu key={menu.name} sections={menu.sections} />
        ))}

      </div>
    </div>
  </>
);

export default Menu;