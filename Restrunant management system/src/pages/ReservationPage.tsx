import React, { useState } from 'react';
import { Calendar, Clock, Users, Info } from 'lucide-react';

const ReservationPage = () => {
  const today = new Date();
  const todayFormatted = today.toISOString().split('T')[0];
  
  const [reservation, setReservation] = useState({
    date: todayFormatted,
    time: '19:00',
    guests: 2,
    name: '',
    email: '',
    phone: '',
    occasion: '',
    specialRequests: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setReservation(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle reservation submission
    console.log(reservation);
    alert('Your reservation has been submitted! We will confirm shortly via email.');
  };

  const timeSlots = [
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', 
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'
  ];

  const occasions = [
    'None', 'Birthday', 'Anniversary', 'Business Dinner', 'Date Night', 'Other'
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <div 
        className="bg-cover bg-center py-20 relative"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg)'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Make a Reservation</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Reserve your table and experience our culinary delights in the perfect ambiance.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Reservation Form */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-2xl font-bold text-red-900 mb-6">Book Your Table</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Date */}
                <div className="relative">
                  <label htmlFor="date" className="block text-gray-700 font-medium mb-2">Date</label>
                  <div className="relative">
                    <input 
                      type="date" 
                      id="date" 
                      name="date"
                      min={todayFormatted}
                      value={reservation.date}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                    />
                    <Calendar size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  </div>
                </div>
                
                {/* Time */}
                <div>
                  <label htmlFor="time" className="block text-gray-700 font-medium mb-2">Time</label>
                  <div className="relative">
                    <select 
                      id="time" 
                      name="time"
                      value={reservation.time}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors appearance-none"
                    >
                      {timeSlots.map(time => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                    <Clock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  </div>
                </div>
                
                {/* Guests */}
                <div>
                  <label htmlFor="guests" className="block text-gray-700 font-medium mb-2">Guests</label>
                  <div className="relative">
                    <select 
                      id="guests" 
                      name="guests"
                      value={reservation.guests}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors appearance-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'person' : 'people'}
                        </option>
                      ))}
                      <option value="9">9+ people (Please call)</option>
                    </select>
                    <Users size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={reservation.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                  />
                </div>
                
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={reservation.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    value={reservation.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                  />
                </div>
                
                {/* Occasion */}
                <div>
                  <label htmlFor="occasion" className="block text-gray-700 font-medium mb-2">Occasion (Optional)</label>
                  <select 
                    id="occasion" 
                    name="occasion"
                    value={reservation.occasion}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                  >
                    {occasions.map(occasion => (
                      <option key={occasion} value={occasion}>
                        {occasion}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              {/* Special Requests */}
              <div>
                <label htmlFor="specialRequests" className="block text-gray-700 font-medium mb-2">Special Requests (Optional)</label>
                <textarea 
                  id="specialRequests" 
                  name="specialRequests"
                  value={reservation.specialRequests}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Allergies, dietary restrictions, seating preferences, etc."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="px-8 py-3 bg-red-800 hover:bg-red-900 text-white font-bold rounded-md transition-colors text-lg"
              >
                Confirm Reservation
              </button>
            </form>
          </div>
          
          {/* Reservation Info */}
          <div className="space-y-6">
            <div className="bg-amber-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-red-900 mb-4">Reservation Guidelines</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Info size={20} className="text-amber-500 mr-2 mt-0.5" />
                  <span>Reservations can be made up to 30 days in advance.</span>
                </li>
                <li className="flex items-start">
                  <Info size={20} className="text-amber-500 mr-2 mt-0.5" />
                  <span>For parties of 9 or more, please call us directly.</span>
                </li>
                <li className="flex items-start">
                  <Info size={20} className="text-amber-500 mr-2 mt-0.5" />
                  <span>Your table will be held for 15 minutes past your reservation time.</span>
                </li>
                <li className="flex items-start">
                  <Info size={20} className="text-amber-500 mr-2 mt-0.5" />
                  <span>For cancellations, please notify us at least 4 hours in advance.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-red-900 text-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4">Private Events</h3>
              <p className="mb-4">
                Looking to host a private event? We offer custom dining experiences for special occasions.
              </p>
              <a 
                href="#private-events" 
                className="inline-block px-6 py-2 bg-amber-500 hover:bg-amber-600 text-red-900 font-semibold rounded-md transition-colors"
              >
                Learn More
              </a>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/269257/pexels-photo-269257.jpeg" 
                alt="Restaurant dining area" 
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;