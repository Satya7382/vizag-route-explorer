
interface BusRoute {
  id: number;
  busNumbers: string[];
  from: number; // location id
  to: number; // location id
  duration: string;
  frequency: string;
  hasDirectBus: boolean;
  notes?: string;
}

const busRoutes: BusRoute[] = [
  // Railway Station routes
  {
    id: 1,
    busNumbers: ["10A"],
    from: 9, // Railway Station
    to: 10, // Airport
    duration: "30 mins",
    frequency: "Every 20 mins",
    hasDirectBus: true,
    notes: "Connects Railway Station to Airport via RTC Complex and NAD Junction"
  },
  {
    id: 2,
    busNumbers: ["6A/H", "28", "28R", "28Z/H", "48S"],
    from: 9, // Railway Station
    to: 3, // Simhachalam Temple
    duration: "45 mins",
    frequency: "Every 15 mins",
    hasDirectBus: true,
    notes: "Connect Railway Station to Simhachalam via RTC Complex and NAD Junction"
  },
  {
    id: 3,
    busNumbers: ["111"],
    from: 9, // Railway Station
    to: 11, // Zoo Park
    duration: "40 mins",
    frequency: "Every 20 mins",
    hasDirectBus: true,
    notes: "Take 111 from Railway Station to Zoo Park via RTC Complex and NAD Junction"
  },
  {
    id: 4,
    busNumbers: ["12D"],
    from: 9, // Railway Station
    to: 14, // Dwarapalli
    duration: "35 mins",
    frequency: "Every 25 mins",
    hasDirectBus: true,
    notes: "Connects Railway Station to Dwarapalli via RTC Complex, NAD Junction, and Pendurthi"
  },
  {
    id: 5,
    busNumbers: ["10A"],
    from: 9, // Railway Station
    to: 13, // Ross Hill Church
    duration: "40 mins",
    frequency: "Every 30 mins",
    hasDirectBus: false,
    notes: "No direct bus. Take 10A to RTC Complex, then local transport (auto/taxi) to Ross Hill"
  },
  {
    id: 6,
    busNumbers: ["10A"],
    from: 9, // Railway Station
    to: 1, // RK Beach
    duration: "25 mins",
    frequency: "Every 20 mins",
    hasDirectBus: true,
    notes: "Connects Railway Station to RK Beach via RTC Complex"
  },
  
  // Airport routes
  {
    id: 7,
    busNumbers: ["10A", "6A/H", "28"],
    from: 10, // Airport
    to: 3, // Simhachalam Temple
    duration: "55 mins",
    frequency: "Every 30 mins",
    hasDirectBus: false,
    notes: "No direct bus. Take 10A from Airport to RTC Complex, then 6A/H or 28 to Simhachalam"
  },
  {
    id: 8,
    busNumbers: ["10A", "111"],
    from: 10, // Airport
    to: 11, // Zoo Park
    duration: "60 mins",
    frequency: "Every 30 mins",
    hasDirectBus: false,
    notes: "No direct bus. Take 10A to RTC Complex, then 111 towards Tagarapuvalasa via Zoo Park"
  },
  {
    id: 9,
    busNumbers: ["10A"],
    from: 10, // Airport
    to: 14, // Dwarapalli
    duration: "70 mins",
    frequency: "Varies",
    hasDirectBus: false,
    notes: "No direct city bus. Consider APSRTC long-distance buses from RTC Complex"
  },
  {
    id: 10,
    busNumbers: ["10A"],
    from: 10, // Airport
    to: 13, // Ross Hill Church
    duration: "65 mins",
    frequency: "Varies",
    hasDirectBus: false,
    notes: "No direct bus. Take 10A to RTC Complex, then local transport (auto/taxi) to Ross Hill"
  },
  {
    id: 11,
    busNumbers: ["10A"],
    from: 10, // Airport
    to: 1, // RK Beach
    duration: "35 mins",
    frequency: "Every 20 mins",
    hasDirectBus: true,
    notes: "10A connects Airport to RK Beach directly"
  },
  {
    id: 12,
    busNumbers: ["10A", "900R"],
    from: 10, // Airport
    to: 12, // Rushikonda Beach
    duration: "60 mins",
    frequency: "Every 30 mins",
    hasDirectBus: false,
    notes: "No direct bus. Take 10A to RTC Complex, then 900R to Rushikonda"
  },
  {
    id: 13,
    busNumbers: ["10A", "10K"],
    from: 10, // Airport
    to: 2, // Kailasagiri
    duration: "70 mins",
    frequency: "Every 30 mins",
    hasDirectBus: false,
    notes: "No direct bus. Take 10A to RTC Complex, then 10K to Kailasagiri"
  },
  
  // RK Beach routes
  {
    id: 14,
    busNumbers: ["28", "28R", "28Z/H", "48S"],
    from: 1, // RK Beach
    to: 3, // Simhachalam Temple
    duration: "45 mins",
    frequency: "Every 15 mins",
    hasDirectBus: true,
    notes: "Multiple routes connect RK Beach to Simhachalam Temple"
  },
  {
    id: 15,
    busNumbers: ["111"],
    from: 1, // RK Beach
    to: 11, // Zoo Park
    duration: "35 mins",
    frequency: "Every 20 mins",
    hasDirectBus: true,
    notes: "Take bus to RTC Complex, then Route 111 towards Tagarapuvalasa"
  },
  {
    id: 16,
    busNumbers: ["68D"],
    from: 1, // RK Beach
    to: 14, // Dwarapalli
    duration: "40 mins",
    frequency: "Every 25 mins",
    hasDirectBus: true,
    notes: "Route 68D operates between RK Beach and Dwarapalli"
  },
  {
    id: 17,
    busNumbers: [],
    from: 1, // RK Beach
    to: 13, // Ross Hill Church
    duration: "30 mins",
    frequency: "N/A",
    hasDirectBus: false,
    notes: "No direct bus. Take bus to RTC Complex, then auto-rickshaw or taxi"
  },
  {
    id: 18,
    busNumbers: ["900R", "900K", "900T"],
    from: 1, // RK Beach
    to: 12, // Rushikonda Beach
    duration: "30 mins",
    frequency: "Every 20 mins",
    hasDirectBus: true,
    notes: "Direct routes from RK Beach to Rushikonda via RTC Complex"
  },
  {
    id: 19,
    busNumbers: ["10K"],
    from: 1, // RK Beach
    to: 2, // Kailasagiri
    duration: "25 mins",
    frequency: "Every 20 mins",
    hasDirectBus: true,
    notes: "Direct bus from RK Beach to Kailasagiri via VUDA Park and Tenneti Park"
  },
  
  // Kailasagiri routes
  {
    id: 20,
    busNumbers: ["10K"],
    from: 2, // Kailasagiri
    to: 9, // Railway Station
    duration: "45 mins",
    frequency: "Every 25 mins",
    hasDirectBus: false,
    notes: "Take 10K from Kailasagiri to RTC Complex, then walk or board local shuttle to Railway Station"
  },
  {
    id: 21,
    busNumbers: ["10K", "10A"],
    from: 2, // Kailasagiri
    to: 10, // Airport
    duration: "70 mins",
    frequency: "Every 30 mins",
    hasDirectBus: false,
    notes: "Take 10K to RTC Complex, then board 10A to Airport"
  },
  {
    id: 22,
    busNumbers: ["10K", "6A/H", "28"],
    from: 2, // Kailasagiri
    to: 3, // Simhachalam Temple
    duration: "50 mins",
    frequency: "Every 25 mins",
    hasDirectBus: false,
    notes: "Take 10K to RTC Complex, then 6A/H or 28 to Simhachalam"
  },
  
  // Additional representative routes
  {
    id: 23,
    busNumbers: ["68D", "12D", "28", "28R", "28Z/H", "48S"],
    from: 14, // Dwarapalli
    to: 3, // Simhachalam Temple
    duration: "45 mins",
    frequency: "Every 20 mins",
    hasDirectBus: true,
    notes: "From Dwarapalli, take Route 12D to RTC Complex, then one of these routes to Simhachalam Temple"
  },
  {
    id: 24,
    busNumbers: ["10A"],
    from: 11, // Zoo Park
    to: 10, // Airport
    duration: "45 mins",
    frequency: "Every 25 mins",
    hasDirectBus: true,
    notes: "From Zoo Park, take a bus to RTC Complex, then board Route 10A to Visakhapatnam Airport"
  }
];

export function findRoutes(fromId: number, toId: number): BusRoute | undefined {
  return busRoutes.find(
    route => (route.from === fromId && route.to === toId) || 
             (route.from === toId && route.to === fromId)
  );
}

export default busRoutes;
