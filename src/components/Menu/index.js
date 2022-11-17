import React, { useState } from 'react';
import { ImFire } from '@react-icons/all-files/Im/ImFire';
import useMenus from '../../hooks/useMenus';

const MenuItem = ({ name, description, price, spicy, categoryList }) => (
  <section>
    <div className="mx-auto grid col-auto gap-4">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl font-medium flex-inline items-center">
            {name} {spicy === true ? <div className="mx-2 w-[25px] h-[25px] inline-flex justify-center items-center rounded-full bg-[#fe4039] text-white"><ImFire size={16} /></div> : ""}
          </h4>
          <p className="py-4">{description}</p>
        </div>
        <p className="font-medium">{price}</p>
      </div>
    </div>
  </section>
);

const MenuSection = ({ name, items, image, imageAlt }) => {
  const sections = ['beverages', 'appetizers', 'ramen', 'ramen toppings', 'udon & soba', 'rice']
  const [currentSection, setCurrentSection] = useState('beverages');

  return (
  <>
    <ul className="tracking-widest">
    {sections.map((section) => (
      <li className={
        currentSection.name === name ? 'text-lg text-red-700 font-semibold uppercase' : 'text-blue-700'
      } key={name} >
        <span onClick={() => setCurrentSection(section)} className={
          currentSection === section ? 'mx-2 active font-semibold' : 'mx-2 font-medium hover:border-b-4 hover:border-[#5e7089] transition-all hover:text-white'
        }>{section}</span>
        </li>
        ))}
      </ul>

      {/* <div>
    <h3 className="text-lg text-red-700 font-semibold uppercase">{name}</h3>
    <img src={image} alt={imageAlt} width={500} />
    {items.map(item => (
      <MenuItem
        key={item.name}
        name={item.name}
        price={item.price}
        description={item.description}
        spicy={item.spicy}
        categoryList={item.categoryList}
      />
    ))};
  </div> */}
      </>
    )
  };

const FullMenu = ({ name, sections }) => (
  <div className="mb-8">
    <h3 className="text-lg text-blue-700 font-semibold uppercase">{name}</h3>
    {sections.map(section => (
      <MenuSection
        key={section.name}
        name={section.name}
        items={section.items}
        image={section.image.publicUrl}
        imageAlt={section.imageAlt}
      />
    ))}
  </div>
);

const Menu = () => {
  const menus = useMenus();

  return (
    <section id="menu">
      <div className="w-full h-full">
        <div className="h-full overflow-y-scroll flex flex-col justify-center items-center">

          <h2>Menu</h2>
          <div className="max-w-screen-lg flex justify-center items-center">
            {menus.map(menu => (
              <FullMenu key={menu.name} sections={menu.sections} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
};

export default Menu;