
import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import RouteMap from '@/components/RouteMap';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { findRoutes } from '@/data/busRoutes';
import locations from '@/data/locations';
import { Bus, Clock, Map, Repeat, ArrowLeft } from 'lucide-react';

const RouteResults = () => {
  const [searchParams] = useSearchParams();
  const fromId = searchParams.get('from');
  const toId = searchParams.get('to');
  
  const [fromLocation, setFromLocation] = useState<any>(null);
  const [toLocation, setToLocation] = useState<any>(null);
  const [busRoute, setBusRoute] = useState<any>(null);
  const [error, setError] = useState<string>("");
  
  useEffect(() => {
    if (!fromId || !toId) {
      setError("Missing route information. Please select your journey points again.");
      return;
    }
    
    const fromLoc = locations.find(loc => loc.id.toString() === fromId);
    const toLoc = locations.find(loc => loc.id.toString() === toId);
    
    if (!fromLoc || !toLoc) {
      setError("One or more locations could not be found.");
      return;
    }
    
    setFromLocation(fromLoc);
    setToLocation(toLoc);
    
    const route = findRoutes(parseInt(fromId), parseInt(toId));
    
    if (!route) {
      setError("No direct bus routes found between these locations. Try a different route.");
      return;
    }
    
    setBusRoute(route);
  }, [fromId, toId]);
  
  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-12">
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
          <div className="mt-6">
            <Link to="/plan-journey">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Journey Planner
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  if (!fromLocation || !toLocation || !busRoute) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-12 flex justify-center items-center">
          <p>Loading route information...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-vizag-navy">Bus Routes</h1>
              <p className="text-lg text-gray-600">
                From {fromLocation.name} to {toLocation.name}
              </p>
            </div>
            <Link to="/plan-journey">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Plan Another Journey
              </Button>
            </Link>
          </div>
          
          <div className="grid lg:grid-cols-5 gap-8">
            <Card className="lg:col-span-2 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bus className="mr-2 h-5 w-5" />
                  Available Buses
                </CardTitle>
                <CardDescription>
                  Bus routes from {fromLocation.name} to {toLocation.name}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-gray-50 border border-gray-100 rounded-md p-4">
                    <div className="flex justify-between mb-4">
                      <div className="text-sm text-gray-500">
                        <span className="font-medium text-gray-700">From:</span> {fromLocation.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        <span className="font-medium text-gray-700">To:</span> {toLocation.name}
                      </div>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold">Bus Numbers</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {busRoute.busNumbers.map((busNumber: string) => (
                            <div 
                              key={busNumber} 
                              className="bg-vizag-teal/10 text-vizag-teal px-3 py-1 rounded-full font-medium"
                            >
                              {busNumber}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-vizag-navy" />
                          <div>
                            <div className="text-sm font-medium">Duration</div>
                            <div className="text-sm">{busRoute.duration}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <Repeat className="h-4 w-4 mr-2 text-vizag-navy" />
                          <div>
                            <div className="text-sm font-medium">Frequency</div>
                            <div className="text-sm">{busRoute.frequency}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex flex-col space-y-4">
                <div className="text-sm text-gray-600">
                  <strong>Note:</strong> Bus timings may vary based on traffic conditions. 
                  It's advisable to reach the bus stop 10 minutes before the scheduled time.
                </div>
              </CardFooter>
            </Card>
            
            <div className="lg:col-span-3">
              <h2 className="text-xl font-semibold mb-4">Route Map</h2>
              <RouteMap fromName={fromLocation.name} toName={toLocation.name} />
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">About Your Destinations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>{fromLocation.name}</CardTitle>
                </CardHeader>
                <div className="h-40 overflow-hidden">
                  <img 
                    src={fromLocation.image} 
                    alt={fromLocation.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="pt-4">
                  <p>{fromLocation.description}</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>{toLocation.name}</CardTitle>
                </CardHeader>
                <div className="h-40 overflow-hidden">
                  <img 
                    src={toLocation.image} 
                    alt={toLocation.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="pt-4">
                  <p>{toLocation.description}</p>
                </CardContent>
              </Card>
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

export default RouteResults;
