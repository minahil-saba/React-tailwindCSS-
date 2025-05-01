import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { MenuItem } from '../types';
import { useCartStore } from '../store/cartStore';

interface MenuItemCardProps {
  item: MenuItem;
  index: number;
  isVisible: boolean;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 transform ${
        isVisible 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 translate-x-10'
      } ${isHovered ? 'shadow-xl -translate-y-1' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col sm:flex-row">
        {item.image && (
          <div className="w-full sm:w-1/3 relative overflow-hidden">
            <img 
              src={item.image} 
              alt={item.name} 
              className={`w-full h-48 sm:h-full object-cover transition-transform duration-500 ${
                isHovered ? 'scale-110' : 'scale-100'
              }`}
            />
            {item.isSpicy && (
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold py-1 px-2 rounded-full">
                Spicy
              </div>
            )}
            {item.isVegetarian && (
              <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-bold py-1 px-2 rounded-full">
                Veg
              </div>
            )}
          </div>
        )}
        
        <div className={`p-4 flex-1 ${!item.image ? 'sm:flex sm:justify-between sm:items-start' : ''}`}>
          <div>
            <div className="flex justify-between items-start">
              <h3 className="text-lg sm:text-xl font-bold text-red-900">{item.name}</h3>
              <span className="text-amber-600 font-bold">${item.price.toFixed(2)}</span>
            </div>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">{item.description}</p>
            
            {item.allergens && (
              <p className="text-gray-500 text-xs sm:text-sm mt-2">
                <span className="font-semibold">Allergens:</span> {item.allergens.join(', ')}
              </p>
            )}
          </div>
          
          <button 
            onClick={() => addItem(item)}
            className={`mt-4 sm:mt-0 flex items-center justify-center text-white bg-red-800 hover:bg-red-900 transition-colors rounded-full w-10 h-10 ${
              !item.image && 'sm:self-end'
            }`}
            aria-label={`Add ${item.name} to order`}
          >
            <PlusCircle size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;