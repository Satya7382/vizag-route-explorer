
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import type { Location } from "@/data/locations";

interface DestinationCardProps {
  location: Location;
}

const DestinationCard = ({ location }: DestinationCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={location.image} 
          alt={location.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-xl text-vizag-navy">{location.name}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-grow">
        <CardDescription>{location.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link to={`/plan-journey?destination=${location.id}`} className="w-full">
          <Button variant="outline" className="w-full border-vizag-teal text-vizag-teal hover:bg-vizag-teal/10">
            Plan Visit
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default DestinationCard;
