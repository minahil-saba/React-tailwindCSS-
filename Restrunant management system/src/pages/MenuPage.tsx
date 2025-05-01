import React, { useState, useEffect, useRef } from 'react';
import { menuData } from '../data/menuData';
import MenuCategory from '../components/MenuCategory';
import { useInView } from '../hooks/useInView';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');
  const headerRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  
  const menuInView = useInView(menuRef, { threshold: 0.1 });

  useEffect(() => {
    const handleScroll = () => {
      if (categoriesRef.current && headerRef.current) {
        if (window.scrollY > headerRef.current.offsetHeight) {
          categoriesRef.current.classList.add('sticky-nav');
        } else {
          categoriesRef.current.classList.remove('sticky-nav');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    
    const element = document.getElementById(category);
    if (element) {
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <div 
        ref={headerRef}
        className="bg-cover bg-center py-20 relative"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg)'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our carefully crafted dishes made with the finest ingredients and passion for culinary excellence.
          </p>
        </div>
      </div>

      {/* Category Navigation */}
      <div 
        ref={categoriesRef}
        className="bg-red-900 text-white py-4 transition-all duration-300 z-30"
      >
        <div className="container mx-auto px-4 overflow-x-auto">
          <div className="flex space-x-6 min-w-max">
            {Object.keys(menuData).map((category) => (
              <button
                key={category}
                className={`px-4 py-2 text-lg font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category
                    ? 'text-amber-400 border-b-2 border-amber-400'
                    : 'text-white hover:text-amber-200'
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div
        ref={menuRef} 
        className="container mx-auto px-4 py-12"
      >
        {Object.entries(menuData).map(([category, items], index) => (
          <MenuCategory
            key={category}
            id={category}
            title={category.charAt(0).toUpperCase() + category.slice(1)}
            items={items}
            isActive={activeCategory === category}
            index={index}
            isVisible={menuInView}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;