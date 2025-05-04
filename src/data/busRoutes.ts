
interface BusRoute {
  id: number;
  busNumbers: string[];
  from: number; // location id
  to: number; // location id
  duration: string;
  frequency: string;
}

const busRoutes: BusRoute[] = [
  {
    id: 1,
    busNumbers: ["28", "28B", "28C"],
    from: 1, // RK Beach
    to: 2, // Kailasagiri
    duration: "30 mins",
    frequency: "Every 10 mins"
  },
  {
    id: 2,
    busNumbers: ["999", "900K"],
    from: 1, // RK Beach
    to: 3, // Simhachalam Temple
    duration: "45 mins",
    frequency: "Every 15 mins"
  },
  {
    id: 3,
    busNumbers: ["535", "333"],
    from: 1, // RK Beach
    to: 5, // Submarine Museum
    duration: "20 mins",
    frequency: "Every 10 mins"
  },
  {
    id: 4,
    busNumbers: ["540", "540A"],
    from: 2, // Kailasagiri
    to: 3, // Simhachalam Temple
    duration: "35 mins",
    frequency: "Every 20 mins"
  },
  {
    id: 5,
    busNumbers: ["44", "44B"],
    from: 2, // Kailasagiri
    to: 8, // VMRDA Park
    duration: "25 mins",
    frequency: "Every 15 mins"
  },
  {
    id: 6,
    busNumbers: ["38/9S", "38/9"],
    from: 3, // Simhachalam Temple
    to: 8, // VMRDA Park
    duration: "40 mins",
    frequency: "Every 20 mins"
  },
  {
    id: 7,
    busNumbers: ["400", "400A", "401"],
    from: 5, // Submarine Museum
    to: 6, // Yarada Beach
    duration: "45 mins",
    frequency: "Every 30 mins"
  },
  {
    id: 8,
    busNumbers: ["578", "579"],
    from: 1, // RK Beach
    to: 4, // Araku Valley
    duration: "3 hours",
    frequency: "4 times daily"
  },
  {
    id: 9,
    busNumbers: ["580", "580A"],
    from: 4, // Araku Valley
    to: 7, // Borra Caves
    duration: "1 hour",
    frequency: "Every 60 mins"
  },
  // Additional routes to ensure connectivity between all locations
  {
    id: 10,
    busNumbers: ["555", "555A"],
    from: 6, // Yarada Beach
    to: 8, // VMRDA Park
    duration: "50 mins",
    frequency: "Every 25 mins"
  },
  {
    id: 11,
    busNumbers: ["100", "100A"],
    from: 2, // Kailasagiri
    to: 7, // Borra Caves
    duration: "2 hours 30 mins",
    frequency: "3 times daily"
  },
  {
    id: 12,
    busNumbers: ["99", "99X"],
    from: 3, // Simhachalam Temple
    to: 4, // Araku Valley
    duration: "2 hours 45 mins",
    frequency: "Twice daily"
  }
];

export function findRoutes(fromId: number, toId: number): BusRoute | undefined {
  return busRoutes.find(
    route => (route.from === fromId && route.to === toId) || 
             (route.from === toId && route.to === fromId)
  );
}

export default busRoutes;
