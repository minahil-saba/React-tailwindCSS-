import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, MapPin } from 'lucide-react';
import FeaturedDish from '../components/FeaturedDish';
import TestimonialCard from '../components/TestimonialCard';
import { useInView } from '../hooks/useInView';

const HomePage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const aboutInView = useInView(aboutRef, { threshold: 0.3 });
  const featuredInView = useInView(featuredRef, { threshold: 0.3 });
  const testimonialsInView = useInView(testimonialsRef, { threshold: 0.3 });

  useEffect(() => {
    const handleParallax = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  const featuredDishes = [
    {
      id: 1,
      name: 'Signature Paella',
      image: 'https://images.pexels.com/photos/12419160/pexels-photo-12419160.jpeg',
      price: '$24.99',
      description: 'Traditional Spanish rice dish with a mix of seafood, chicken, and vegetables, simmered in saffron-infused broth.',
    },
    {
      id: 2,
      name: 'Truffle Risotto',
      image: 'https://images.pexels.com/photos/6541815/pexels-photo-6541815.jpeg',
      price: '$22.99',
      description: 'Creamy Arborio rice cooked with wild mushrooms, finished with truffle oil and aged Parmesan.',
    },
    {
      id: 3,
      name: 'Seafood Linguine',
      image: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg',
      price: '$26.99',
      description: 'Fresh linguine pasta tossed with scallops, shrimp, and calamari in a light garlic and white wine sauce.',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg',
      rating: 5,
      text: 'The flavors are absolutely incredible! Each dish tells a story of passion and creativity. My new favorite place.',
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      rating: 5,
      text: 'From the moment you walk in, the ambiance captivates you. The service is impeccable, and the food is beyond compare.',
    },
    {
      id: 3,
      name: 'Emily Chen',
     
image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
rating: 5,
text: 'I\'ve tried many restaurants in the city, but Gusto stands out with its authentic flavors and attention to detail.',

    },
  ];

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <div 
        ref={heroRef}
        className="h-screen relative bg-cover bg-center flex items-center justify-center"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg)'
        }}
      >
        <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Experience Culinary Excellence
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300">
            Where tradition meets innovation in every bite
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-600">
            <Link 
              to="/menu" 
              className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-red-900 font-bold rounded-md transition-colors text-lg"
            >
              View Menu
            </Link>
            <Link 
              to="/reservations" 
              className="px-8 py-3 bg-transparent hover:bg-white/10 border-2 border-white hover:border-amber-400 text-white hover:text-amber-400 font-bold rounded-md transition-all text-lg"
            >
              Reserve a Table
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-8 text-white">
          <div className="flex flex-col items-center">
            <Clock size={24} className="text-amber-400 mb-2" />
            <p className="text-sm font-medium">OPEN TODAY</p>
            <p className="text-lg font-bold">11:00 AM - 10:00 PM</p>
          </div>
          <div className="flex flex-col items-center">
            <MapPin size={24} className="text-amber-400 mb-2" />
            <p className="text-sm font-medium">LOCATION</p>
            <p className="text-lg font-bold">BAHRIA PHASE 7,RWP</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section 
        ref={aboutRef}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div 
              className={`transition-all duration-1000 ${
                aboutInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-900">Our Culinary Story</h2>
              <div className="w-20 h-1 bg-amber-500 mb-8"></div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Founded in 2010, Gusto was born from a passion for authentic flavors and a commitment to culinary excellence. Our journey began with a simple vision: to create a dining experience that honors tradition while embracing innovation.
              </p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Every dish at Gusto tells a story—a narrative of carefully selected ingredients, time-honored techniques, and creative inspiration. Our chefs draw from global influences to craft a menu that surprises and delights with each bite.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center text-amber-600 font-semibold text-lg hover:text-red-800 transition-colors"
              >
                Learn more about us <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            <div 
              className={`grid grid-cols-2 gap-4 transition-all duration-1000 ${
                aboutInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <img 
                src="https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg" 
                alt="Chef preparing food" 
                className="rounded-lg shadow-xl h-64 object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <img 
                src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg" 
                alt="Restaurant team" 
                className="rounded-lg shadow-xl h-64 object-cover transform hover:scale-105 transition-transform duration-500 mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg" 
                alt="Fresh ingredients" 
                className="rounded-lg shadow-xl h-64 object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <img 
                src="https://images.pexels.com/photos/784633/pexels-photo-784633.jpeg" 
                alt="Restaurant interior" 
                className="rounded-lg shadow-xl h-64 object-cover transform hover:scale-105 transition-transform duration-500 mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section 
        ref={featuredRef}
        className="py-20 bg-amber-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-900">Featured Dishes</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              Explore our chef's selections, crafted with passion and the finest ingredients to create an unforgettable dining experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <FeaturedDish 
                key={dish.id} 
                dish={dish} 
                index={index} 
                isVisible={featuredInView}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/menu" 
              className="px-8 py-3 bg-red-800 hover:bg-red-900 text-white font-bold rounded-md transition-colors text-lg inline-flex items-center"
            >
              View Full Menu <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        ref={testimonialsRef}
        className="py-20 bg-red-900 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Guests Say</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-gray-200 max-w-2xl mx-auto text-lg">
              Don't just take our word for it. Here's what our valued guests have to say about their dining experience with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial} 
                index={index}
                isVisible={testimonialsInView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-900">Ready to Experience Gusto?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg mb-8">
            Join us for an unforgettable dining experience. Reserve your table today or order online for takeout and delivery.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/reservations" 
              className="px-8 py-3 bg-red-800 hover:bg-red-900 text-white font-bold rounded-md transition-colors text-lg"
            >
              Reserve a Table
            </Link>
            <a 
              href="#order" 
              className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-red-900 font-bold rounded-md transition-colors text-lg"
            >
              Order Online
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;