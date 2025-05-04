
export interface Location {
  id: number;
  name: string;
  description: string;
  image: string;
  isPopular: boolean;
}

const locations: Location[] = [
  {
    id: 1,
    name: "RK Beach",
    description: "The famous beach road with stunning coastline views",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800",
    isPopular: true
  },
  {
    id: 2,
    name: "Kailasagiri",
    description: "Hilltop park with panoramic views of the city and sea",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=800",
    isPopular: true
  },
  {
    id: 3,
    name: "Simhachalam Temple",
    description: "Ancient Hindu temple on the hill",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&q=80&w=800",
    isPopular: true
  },
  {
    id: 4,
    name: "Araku Valley",
    description: "Beautiful hill station with coffee plantations",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=800",
    isPopular: true
  },
  {
    id: 5,
    name: "Submarine Museum",
    description: "Real submarine converted into a museum",
    image: "https://images.unsplash.com/photo-1533894321612-38c289def3d2?auto=format&fit=crop&q=80&w=800",
    isPopular: true
  },
  {
    id: 6,
    name: "Yarada Beach",
    description: "Secluded beach surrounded by hills",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80&w=800",
    isPopular: true
  },
  {
    id: 7,
    name: "Borra Caves",
    description: "Ancient limestone caves with stunning formations",
    image: "https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&q=80&w=800", 
    isPopular: true
  },
  {
    id: 8,
    name: "VMRDA Park",
    description: "Large urban park with musical fountain",
    image: "https://images.unsplash.com/photo-1572111504021-40abd3479ddb?auto=format&fit=crop&q=80&w=800",
    isPopular: true
  },
  {
    id: 9,
    name: "Visakhapatnam Railway Station",
    description: "Main railway station connecting Vizag to major cities",
    image: "https://images.unsplash.com/photo-1535535112387-56ffe8db21ff?auto=format&fit=crop&q=80&w=800",
    isPopular: true
  },
  {
    id: 10,
    name: "Visakhapatnam Airport",
    description: "International airport serving the city and surrounding regions",
    image: "https://images.unsplash.com/photo-1599880650988-aa7f3b4055fa?auto=format&fit=crop&q=80&w=800",
    isPopular: true
  },
  {
    id: 11,
    name: "Zoo Park",
    description: "Indira Gandhi Zoological Park with diverse wildlife",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&q=80&w=800",
    isPopular: true
  },
  {
    id: 12,
    name: "Rushikonda Beach",
    description: "Popular beach known for water sports and golden sands",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
    isPopular: true
  },
  {
    id: 13,
    name: "Ross Hill Church",
    description: "Historic church with panoramic views of the harbor",
    image: "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&q=80&w=800",
    isPopular: true
  },
  {
    id: 14,
    name: "Dwarapalli",
    description: "Residential and commercial hub in Visakhapatnam",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=800",
    isPopular: true
  },
  {
    id: 15,
    name: "RTC Complex",
    description: "Major transport hub for city and intercity buses",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
    isPopular: true
  }
];

export default locations;
