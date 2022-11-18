import React from 'react';
import { ImFire } from '@react-icons/all-files/Im/ImFire';
import useMenus from '../../hooks/useMenus';

const MenuItem = ({ name, description, price, spicy, categoryList }) => (
  <div className="w-full md:w-[40%] m-4 md:m-8 flex justify-evenly items-start self-start border-l-4 border-gray-100 pl-8 py-4">
    <div className="w-full">
      <h4 className="text-red-700 text-xl font-medium flex-inline items-center">
        {name} {spicy === true ? <div className="mx-2 w-[25px] h-[25px] inline-flex justify-center items-center rounded-full bg-[#fe4039] text-white"><ImFire size={16} /></div> : ""}
      </h4>
      <p className="pt-4">{description}</p>
    </div>
    <p className="text-red-700 text-xl font-medium">{price}</p>
  </div>
);

const MenuSection = ({ name, items, image, imageAlt }) => (
  <>
    <h3 className="my-8 text-center text-xl font-medium uppercase tracking-widest">{name}</h3>
    <div className="flex justify-center items-start">
      <img src={image} alt={imageAlt} width={450} className="rounded-md drop-shadow-lg" />
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
            categoryList={item.categoryList}
          />
        ))}
      </div>
    </div>
  </>
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
      <div className="w-full h-full pt-14 md:pt-16 px-8 md:px-4">
        <div className="h-full flex flex-col justify-center items-center">

          <h2>Menu</h2>
            {menus.map(menu => (
              <FullMenu key={menu.name} name={menu.name} sections={menu.sections} />
            ))}

        </div>
      </div>
    </section>
  )
};

export default Menu;