import React from 'react';
import MenuItemCard from './MenuItemCard';
import { MenuItem } from '../types';

interface MenuCategoryProps {
  id: string;
  title: string;
  items: MenuItem[];
  isActive: boolean;
  index: number;
  isVisible: boolean;
}

const MenuCategory: React.FC<MenuCategoryProps> = ({ 
  id, 
  title, 
  items, 
  isActive,
  index,
  isVisible
}) => {
  return (
    <section 
      id={id}
      className={`mb-8 sm:mb-16 scroll-mt-24 sm:scroll-mt-36 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-red-900">{title}</h2>
        <div className="ml-4 flex-grow h-0.5 bg-amber-400"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
        {items.map((item, i) => (
          <MenuItemCard 
            key={item.id} 
            item={item} 
            index={i}
            isVisible={isVisible && isActive}
          />
        ))}
      </div>
    </section>
  );
};

export default MenuCategory;