import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  image: string;
  rating: number;
  text: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
  isVisible: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index, isVisible }) => {
  return (
    <div 
      className={`bg-red-800 rounded-lg p-4 sm:p-6 shadow-lg transform transition-all duration-700 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-4 border-2 border-amber-400"
        />
        <div>
          <h3 className="font-bold text-base sm:text-lg">{testimonial.name}</h3>
          <div className="flex">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-200 italic text-sm sm:text-base">"{testimonial.text}"</p>
    </div>
  );
};

export default TestimonialCard;