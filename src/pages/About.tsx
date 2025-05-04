
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2 text-vizag-navy">About Way 2 Go</h1>
          <p className="text-gray-600 mb-8">Learn more about our mission to make traveling in Vizag easier.</p>
          
          <div className="grid gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
                <CardDescription>Helping tourists and locals navigate Visakhapatnam with ease</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Way 2 Go is dedicated to making public transportation in Visakhapatnam accessible to everyone. 
                  Our app provides accurate information about bus routes connecting the most popular destinations in the city, 
                  helping both tourists and locals navigate the City of Destiny with confidence.
                </p>
                <p className="text-gray-700 mt-4">
                  We believe that efficient public transportation is key to sustainable tourism and urban mobility. 
                  By providing easy access to bus route information, we hope to encourage more people to use public transport, 
                  reducing congestion and environmental impact.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>About Visakhapatnam</CardTitle>
                <CardDescription>The Jewel of the East Coast</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Visakhapatnam, often called Vizag, is a port city on India's southeastern coast. It's known for its beautiful beaches, 
                  hills, and temples, making it a popular tourist destination. The city offers a unique blend of natural beauty, 
                  historical sites, and modern infrastructure.
                </p>
                <p className="text-gray-700 mt-4">
                  Key attractions include RK Beach, Kailasagiri hill, Simhachalam Temple, and the Submarine Museum. The city is 
                  well-connected by public transportation, primarily buses operated by the Andhra Pradesh State Road Transport Corporation (APSRTC).
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>How to Use Way to Go</CardTitle>
                <CardDescription>Simple steps to plan your journey</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                  <li>Go to the "Plan Journey" page from the navigation menu.</li>
                  <li>Select your starting location from the dropdown list.</li>
                  <li>Select your destination from the dropdown list.</li>
                  <li>Click on "Find Routes" to see available bus options.</li>
                  <li>View the bus numbers, estimated duration, and frequency on the results page.</li>
                  <li>Use the map to visualize your route.</li>
                </ol>
                <p className="text-gray-700 mt-4">
                  For the best experience, we recommend planning your journey in advance, especially during peak hours or holidays.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-vizag-navy text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Way 2 Go - Visakhapatnam Bus Routes Explorer</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
