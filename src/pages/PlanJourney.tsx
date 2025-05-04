
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import locations from '@/data/locations';
import { Map, Bus } from 'lucide-react';

const PlanJourney = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const preselectedDestination = searchParams.get('destination');
  
  const [fromLocation, setFromLocation] = useState<string>("");
  const [toLocation, setToLocation] = useState<string>(preselectedDestination || "");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (preselectedDestination) {
      setToLocation(preselectedDestination);
    }
  }, [preselectedDestination]);

  const handleSubmit = () => {
    if (!fromLocation) {
      setError("Please select your starting location");
      return;
    }
    
    if (!toLocation) {
      setError("Please select your destination");
      return;
    }
    
    if (fromLocation === toLocation) {
      setError("Starting location and destination cannot be the same");
      return;
    }
    
    // Navigate to results page with query params
    navigate(`/route-results?from=${fromLocation}&to=${toLocation}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2 text-vizag-navy">Plan Your Journey</h1>
          <p className="text-gray-600 mb-8">Select your starting point and destination to find the best bus routes.</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bus className="mr-2 h-5 w-5" />
                  Journey Planner
                </CardTitle>
                <CardDescription>
                  Find the best bus routes between popular destinations in Visakhapatnam
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                {error && (
                  <Alert variant="destructive" className="mb-4">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="fromLocation" className="block text-sm font-medium text-gray-700">
                      Starting Location
                    </label>
                    <Select value={fromLocation} onValueChange={(value) => {
                      setFromLocation(value);
                      setError("");
                    }}>
                      <SelectTrigger id="fromLocation" className="w-full">
                        <SelectValue placeholder="Select starting point" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((location) => (
                          <SelectItem key={location.id} value={location.id.toString()}>
                            {location.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="toLocation" className="block text-sm font-medium text-gray-700">
                      Destination
                    </label>
                    <Select value={toLocation} onValueChange={(value) => {
                      setToLocation(value);
                      setError("");
                    }}>
                      <SelectTrigger id="toLocation" className="w-full">
                        <SelectValue placeholder="Select destination" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((location) => (
                          <SelectItem key={location.id} value={location.id.toString()}>
                            {location.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button 
                  onClick={handleSubmit} 
                  className="w-full bg-vizag-teal hover:bg-vizag-teal/90"
                >
                  Find Routes
                </Button>
              </CardFooter>
            </Card>
            
            <div className="relative rounded-lg overflow-hidden shadow-md h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=1600" 
                alt="Visakhapatnam" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-2">Discover Vizag</h3>
                <p className="text-white/90">Find the best ways to explore the beautiful city of Visakhapatnam</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Popular Journeys</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Button 
                variant="outline" 
                className="justify-start border-vizag-blue text-vizag-blue hover:bg-vizag-blue/10"
                onClick={() => {
                  setFromLocation("1"); // RK Beach
                  setToLocation("2"); // Kailasagiri
                }}
              >
                RK Beach to Kailasagiri
              </Button>
              <Button 
                variant="outline" 
                className="justify-start border-vizag-coral text-vizag-coral hover:bg-vizag-coral/10"
                onClick={() => {
                  setFromLocation("1"); // RK Beach
                  setToLocation("5"); // Submarine Museum
                }}
              >
                RK Beach to Submarine Museum
              </Button>
              <Button 
                variant="outline" 
                className="justify-start border-vizag-teal text-vizag-teal hover:bg-vizag-teal/10"
                onClick={() => {
                  setFromLocation("3"); // Simhachalam Temple
                  setToLocation("8"); // VMRDA Park
                }}
              >
                Simhachalam Temple to VMRDA Park
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-vizag-navy text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Way to Go - Visakhapatnam Bus Routes Explorer</p>
        </div>
      </footer>
    </div>
  );
};

export default PlanJourney;
