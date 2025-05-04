
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

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
      
      const url = `https://www.google.com/maps/embed/v1/directions?key=NEED_API_KEY&origin=${encodedFrom}&destination=${encodedTo}&mode=transit`;
      
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
          <div className="w-full h-full p-4 bg-white">
            <div className="mb-3 text-sm text-muted-foreground">
              Note: To view this map with real-time transit directions, you need to add your Google Maps API key.
            </div>
            <div className="w-full h-[320px] bg-muted flex items-center justify-center">
              <p className="text-center px-4">
                Route map from <strong>{fromName}</strong> to <strong>{toName}</strong> will appear here.
                <br /><br />
                To enable this feature, replace "NEED_API_KEY" in RouteMap.tsx with a valid Google Maps API key.
              </p>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default RouteMap;
