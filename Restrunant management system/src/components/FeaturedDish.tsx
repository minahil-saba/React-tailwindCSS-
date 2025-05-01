import React, { useState } from 'react';

interface Dish {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
}

interface FeaturedDishProps {
  dish: Dish;
  index: number;
  isVisible: boolean;
}

const FeaturedDish: React.FC<FeaturedDishProps> = ({ dish, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-700 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48 sm:h-64">
        <img 
          src={dish.image} 
          alt={dish.name} 
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute top-4 right-4 bg-amber-500 text-red-900 font-bold py-1 px-3 rounded">
          {dish.price}
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-red-900 mb-2">{dish.name}</h3>
        <p className="text-gray-600 text-sm sm:text-base mb-4">{dish.description}</p>
        <button 
          className="w-full py-2 bg-red-800 hover:bg-red-900 text-white font-semibold rounded transition-colors"
        >
          Add to Order
        </button>
      </div>
    </div>
  );
};

export default FeaturedDish;