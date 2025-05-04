
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import DestinationCard from '@/components/DestinationCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Map, Bus } from 'lucide-react';
import locations from '@/data/locations';

const Index = () => {
  const [popularDestinations, setPopularDestinations] = useState(locations.filter(loc => loc.isPopular).slice(0, 6));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-vizag-blue to-vizag-navy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Vizag With Ease</h1>
            <p className="text-lg mb-8">Discover the best bus routes to famous destinations in Visakhapatnam. Plan your journey efficiently and enjoy the beauty of the city of destiny.</p>
            <Link to="/plan-journey">
              <Button size="lg" className="bg-vizag-coral hover:bg-vizag-coral/90 text-white">
                Plan Your Journey
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How Way to Go Helps You</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-vizag-teal/10 mb-4">
              <Bus className="w-8 h-8 text-vizag-teal" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Find Bus Routes</h3>
            <p className="text-gray-600">Get accurate information about bus numbers, timings and frequency for your journey.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-vizag-blue/10 mb-4">
              <Map className="w-8 h-8 text-vizag-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Interactive Maps</h3>
            <p className="text-gray-600">Visualize your journey with integrated maps showing routes from your location to destination.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-vizag-coral/10 mb-4">
              <svg className="w-8 h-8 text-vizag-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Time-Saving</h3>
            <p className="text-gray-600">Plan ahead and save time with our easy-to-use interface and quick access to travel information.</p>
          </div>
        </div>
      </section>
      
      {/* Popular Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Popular Destinations in Vizag</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">Explore these beautiful attractions in the City of Destiny with our bus route guidance.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDestinations.map((destination) => (
              <DestinationCard key={destination.id} location={destination} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/plan-journey">
              <Button variant="outline" size="lg" className="border-vizag-navy text-vizag-navy hover:bg-vizag-navy/10">
                Explore All Destinations
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-vizag-navy text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Way to Go - Visakhapatnam Bus Routes Explorer</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
