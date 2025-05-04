
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MapPin, Navigation } from "lucide-react";

interface RouteMapProps {
  fromName: string;
  toName: string;
}

const RouteMap = ({ fromName, toName }: RouteMapProps) => {
  const [mapUrl, setMapUrl] = useState<string>("");
  const [mapError, setMapError] = useState<boolean>(false);
  
  useEffect(() => {
    try {
      // Create a URL for Google Maps embed with directions
      const encodedFrom = encodeURIComponent(fromName + ", Visakhapatnam, India");
      const encodedTo = encodeURIComponent(toName + ", Visakhapatnam, India");
      
      // Using a public Google Maps embed API - no API key needed for basic embedding
      const url = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&origin=${encodedFrom}&destination=${encodedTo}&mode=transit`;
      
      setMapUrl(url);
    } catch (error) {
      console.error("Error creating map URL:", error);
      setMapError(true);
    }
  }, [fromName, toName]);

  if (mapError) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Map Error</AlertTitle>
        <AlertDescription>
          Unable to display the map. Please try again later or contact support.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Card className="w-full overflow-hidden border rounded-lg shadow-md h-[400px]">
      <div className="relative w-full h-full">
        {!mapUrl ? (
          <div className="flex items-center justify-center w-full h-full bg-muted">
            <p>Loading map...</p>
          </div>
        ) : (
          <div className="w-full h-full">
            <div className="flex items-center justify-between p-2 bg-vizag-navy text-white">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">{fromName}</span>
              </div>
              <Navigation className="h-4 w-4 mx-2" />
              <div className="flex items-center">
                <span className="text-sm font-medium">{toName}</span>
                <MapPin className="h-4 w-4 ml-1" />
              </div>
            </div>
            <iframe
              src={mapUrl}
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Route from ${fromName} to ${toName}`}
            ></iframe>
          </div>
        )}
      </div>
    </Card>
  );
};

export default RouteMap;
