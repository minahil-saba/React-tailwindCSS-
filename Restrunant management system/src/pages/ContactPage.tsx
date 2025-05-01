import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <div 
        className="bg-cover bg-center py-20 relative"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg)'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We'd love to hear from you. Reach out with questions, feedback, or to make special arrangements.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-amber-50 rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-red-900 mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin size={24} className="text-amber-500 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-gray-700">BAHRIA PHASE 7,RWP</p>
                  <p className="text-gray-700">Foodville, FC 12345</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone size={24} className="text-amber-500 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-700">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail size={24} className="text-amber-500 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-700">info@gustorestaurant.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock size={24} className="text-amber-500 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Hours</h3>
                  <p className="text-gray-700">Monday - Thursday: 11am - 10pm</p>
                  <p className="text-gray-700">Friday - Saturday: 11am - 11pm</p>
                  <p className="text-gray-700">Sunday: 12pm - 9pm</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 rounded-lg overflow-hidden h-64 bg-gray-200 flex items-center justify-center">
              <iframe
                title="Restaurant Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.950412214835!2d-79.37974372331092!3d43.76857935112071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2d6834c86ccd%3A0xb0fb5cb04a87f109!2sEl%20Catrin!5e0!3m2!1sen!2sca!4v1717200064042!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-red-900 mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                <select 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="reservation">Reservation Inquiry</option>
                  <option value="feedback">Feedback</option>
                  <option value="catering">Catering Services</option>
                  <option value="employment">Employment Opportunities</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="px-6 py-3 bg-red-800 hover:bg-red-900 text-white font-bold rounded-md transition-colors w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-red-900 mb-2">Do you accept reservations?</h3>
              <p className="text-gray-700">Yes, we highly recommend making reservations, especially for dinner service and weekends. You can make reservations online through our website or by calling us directly.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-red-900 mb-2">Do you offer vegetarian or vegan options?</h3>
              <p className="text-gray-700">Absolutely! We have a variety of vegetarian dishes on our menu, and many can be adapted to be vegan-friendly. Please inform your server about any dietary restrictions.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-red-900 mb-2">Is there parking available?</h3>
              <p className="text-gray-700">We offer complimentary valet parking for our dinner guests. There is also public parking available within a short walking distance of the restaurant.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-red-900 mb-2">Do you cater private events?</h3>
              <p className="text-gray-700">Yes, we offer catering services for private events and can customize menus to suit your preferences. Please contact us for more information about our catering options.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;