// cars.js - Central car data for the rental website
const carsData = [
    {
        id: 1,
        name: "Thunderbolt Car",
        slug: "thunderbolt-car",
        price: 400,
        category: "tranding",
        type: "new",
        video: "media/video-01.webm", // Video file path for this car
        images: {
            main: "images/car-list/1.webp",
            gallery: ["images/portfolio/30.webp", "images/portfolio/31.webp", "images/portfolio/32.webp", "images/portfolio/33.webp", "images/portfolio/34.webp", "images/portfolio/35.webp"]
        },
        specs: {
            miles: "100 Miles",
            fuelType: "Petrol",
            transmission: "Automatic",
            capacity: "5 Person",
            engine: "2.0L Turbo",
            horsepower: "286 hp",
            torque: "350 lb.-ft",
            cylinders: 4,
            engineLayout: "Front-Engine",
            engineConfig: "Inline-4",
            driveType: "Rear Wheel Drive",
            color: "Red"
        },
        description: "The Thunderbolt Car delivers exceptional performance and style. With its powerful engine and sleek design, it's perfect for those who demand the best.",
        features: ["Engine Type", "Horsepower", "Automatic Climate Control", "Touchscreen Display", "Navigation System", "Fog Lights", "Start-Stop Technology", "Automatic Headlights"]
    },
    {
        id: 2,
        name: "Mercedes-Benz E-Class",
        slug: "mercedes-benz-e-class",
        price: 444,
        category: "usedcard",
        type: "used",
        video: "media/video-01.webm", // Video file path for this car
        images: {
            main: "images/car-list/2.webp",
            gallery: ["images/portfolio/30.webp", "images/portfolio/31.webp", "images/portfolio/32.webp", "images/portfolio/33.webp", "images/portfolio/34.webp", "images/portfolio/35.webp"]
        },
        specs: {
            miles: "100 Miles",
            fuelType: "Petrol",
            transmission: "Automatic",
            capacity: "5 Person",
            engine: "2.0L Turbo",
            horsepower: "255 hp",
            torque: "295 lb.-ft",
            cylinders: 4,
            engineLayout: "Front-Engine",
            engineConfig: "Inline-4",
            driveType: "Rear Wheel Drive",
            color: "Black"
        },
        description: "Experience luxury and comfort with the Mercedes-Benz E-Class. This executive sedan offers premium features and a smooth ride.",
        features: ["Engine Type", "Horsepower", "Automatic Climate Control", "Touchscreen Display", "Navigation System", "Fog Lights", "Start-Stop Technology", "Automatic Headlights", "Leather Seats", "Sunroof"]
    },
    {
        id: 3,
        name: "Ford Mustang Convertible",
        slug: "ford-mustang-convertible",
        price: 599,
        category: "tranding",
        type: "new",
        video: "media/video-01.webm", // Video file path for this car
        images: {
            main: "images/car-list/3.webp",
            gallery: ["images/portfolio/30.webp", "images/portfolio/31.webp", "images/portfolio/32.webp", "images/portfolio/33.webp", "images/portfolio/34.webp", "images/portfolio/35.webp"]
        },
        specs: {
            miles: "100 Miles",
            fuelType: "Petrol",
            transmission: "Automatic",
            capacity: "4 Person",
            engine: "5.0L V8",
            horsepower: "450 hp",
            torque: "410 lb.-ft",
            cylinders: 8,
            engineLayout: "Front-Engine",
            engineConfig: "V8",
            driveType: "Rear Wheel Drive",
            color: "Yellow"
        },
        description: "Feel the wind in your hair with the Ford Mustang Convertible. This iconic American muscle car combines power with open-top freedom.",
        features: ["Engine Type", "Horsepower", "Automatic Climate Control", "Touchscreen Display", "Navigation System", "Fog Lights", "Start-Stop Technology", "Automatic Headlights", "Convertible Top"]
    },
    {
        id: 4,
        name: "Mazda MX-5 Miata",
        slug: "mazda-mx-5-miata",
        price: 999,
        category: "usedcard",
        type: "used",
        video: "media/video-01.webm", // Video file path for this car
        images: {
            main: "images/car-list/4.webp",
            gallery: ["images/portfolio/30.webp", "images/portfolio/31.webp", "images/portfolio/32.webp", "images/portfolio/33.webp", "images/portfolio/34.webp", "images/portfolio/35.webp"]
        },
        specs: {
            miles: "100 Miles",
            fuelType: "Petrol",
            transmission: "Manual",
            capacity: "2 Person",
            engine: "2.0L Skyactiv",
            horsepower: "181 hp",
            torque: "151 lb.-ft",
            cylinders: 4,
            engineLayout: "Front-Engine",
            engineConfig: "Inline-4",
            driveType: "Rear Wheel Drive",
            color: "Red"
        },
        description: "The Mazda MX-5 Miata is the world's best-selling sports car. Lightweight and agile, it delivers pure driving joy.",
        features: ["Engine Type", "Horsepower", "Manual Transmission", "Touchscreen Display", "Bluetooth Connectivity", "LED Headlights", "Limited Slip Differential"]
    },
    {
        id: 5,
        name: "Honda Civic Hatchback",
        slug: "honda-civic-hatchback",
        price: 799,
        category: "tranding",
        type: "new",
        video: "media/video-01.webm", // Video file path for this car
        images: {
            main: "images/car-list/5.webp",
            gallery: ["images/portfolio/30.webp", "images/portfolio/31.webp", "images/portfolio/32.webp", "images/portfolio/33.webp", "images/portfolio/34.webp", "images/portfolio/35.webp"]
        },
        specs: {
            miles: "100 Miles",
            fuelType: "Petrol",
            transmission: "CVT",
            capacity: "5 Person",
            engine: "1.5L Turbo",
            horsepower: "180 hp",
            torque: "177 lb.-ft",
            cylinders: 4,
            engineLayout: "Front-Engine",
            engineConfig: "Inline-4",
            driveType: "Front Wheel Drive",
            color: "Blue"
        },
        description: "The Honda Civic Hatchback combines practicality with sporty styling. It's the perfect daily driver with exceptional fuel efficiency.",
        features: ["Engine Type", "Horsepower", "Automatic Climate Control", "Touchscreen Display", "Apple CarPlay", "Android Auto", "Honda Sensing", "Fog Lights"]
    },
    {
        id: 6,
        name: "Hyundai Veloster",
        slug: "hyundai-veloster",
        price: 699,
        category: "usedcard",
        type: "used",
        video: "media/video-01.webm", // Video file path for this car
        images: {
            main: "images/car-list/6.webp",
            gallery: ["images/portfolio/30.webp", "images/portfolio/31.webp", "images/portfolio/32.webp", "images/portfolio/33.webp", "images/portfolio/34.webp", "images/portfolio/35.webp"]
        },
        specs: {
            miles: "100 Miles",
            fuelType: "Petrol",
            transmission: "DCT",
            capacity: "4 Person",
            engine: "1.6L Turbo",
            horsepower: "201 hp",
            torque: "195 lb.-ft",
            cylinders: 4,
            engineLayout: "Front-Engine",
            engineConfig: "Inline-4",
            driveType: "Front Wheel Drive",
            color: "White"
        },
        description: "The Hyundai Veloster stands out with its unique three-door design and sporty performance. It's a head-turner on every street.",
        features: ["Engine Type", "Horsepower", "Dual Clutch Transmission", "Touchscreen Display", "Premium Audio", "LED Lighting", "Sport Mode"]
    },
    {
        id: 7,
        name: "Ford Territory Titanium X",
        slug: "ford-territory-titanium-x",
        price: 999,
        category: "tranding",
        type: "new",
        video: "media/video-01.webm", // Video file path for this car
        images: {
            main: "images/car-list/4.webp",
            gallery: ["images/portfolio/30.webp", "images/portfolio/31.webp", "images/portfolio/32.webp", "images/portfolio/33.webp", "images/portfolio/34.webp", "images/portfolio/35.webp"]
        },
        specs: {
            miles: "100 Miles",
            fuelType: "Petrol",
            transmission: "Automatic",
            capacity: "5 Person",
            engine: "1.8L EcoBoost",
            horsepower: "190 hp",
            torque: "236 lb.-ft",
            cylinders: 4,
            engineLayout: "Front-Engine",
            engineConfig: "Inline-4",
            driveType: "All Wheel Drive",
            color: "Silver"
        },
        description: "The Ford Territory Titanium X offers premium SUV comfort with advanced technology and spacious interiors for the whole family.",
        features: ["Engine Type", "Horsepower", "Automatic Climate Control", "Touchscreen Display", "Navigation System", "Fog Lights", "Start-Stop Technology", "Automatic Headlights", "Panoramic Sunroof"]
    },
    {
        id: 8,
        name: "Kia Carnival MPV",
        slug: "kia-carnival-mpv",
        price: 799,
        category: "usedcard",
        type: "used",
        video: "media/video-01.webm", // Video file path for this car
        images: {
            main: "images/car-list/5.webp",
            gallery: ["images/portfolio/30.webp", "images/portfolio/31.webp", "images/portfolio/32.webp", "images/portfolio/33.webp", "images/portfolio/34.webp", "images/portfolio/35.webp"]
        },
        specs: {
            miles: "100 Miles",
            fuelType: "Petrol",
            transmission: "Automatic",
            capacity: "7 Person",
            engine: "3.5L V6",
            horsepower: "290 hp",
            torque: "262 lb.-ft",
            cylinders: 6,
            engineLayout: "Front-Engine",
            engineConfig: "V6",
            driveType: "Front Wheel Drive",
            color: "Dark Blue"
        },
        description: "The Kia Carnival MPV redefines family travel with its spacious interior, versatile seating, and premium amenities.",
        features: ["Engine Type", "Horsepower", "Tri-Zone Climate Control", "Touchscreen Display", "Navigation System", "Rear Entertainment", "Power Sliding Doors", "Smart Cruise Control"]
    },
    {
        id: 9,
        name: "Nissan Rogue 2024",
        slug: "nissan-rogue-2024",
        price: 699,
        category: "tranding",
        type: "new",
        video: "media/video-01.webm", // Video file path for this car
        images: {
            main: "images/car-list/3.webp",
            gallery: ["images/portfolio/30.webp", "images/portfolio/31.webp", "images/portfolio/32.webp", "images/portfolio/33.webp", "images/portfolio/34.webp", "images/portfolio/35.webp"]
        },
        specs: {
            miles: "100 Miles",
            fuelType: "Petrol",
            transmission: "CVT",
            capacity: "5 Person",
            engine: "1.5L VC-Turbo",
            horsepower: "201 hp",
            torque: "225 lb.-ft",
            cylinders: 3,
            engineLayout: "Front-Engine",
            engineConfig: "Inline-3",
            driveType: "All Wheel Drive",
            color: "Gun Metal"
        },
        description: "The 2024 Nissan Rogue features innovative technology, impressive fuel efficiency, and a refined interior for modern families.",
        features: ["Engine Type", "Horsepower", "ProPILOT Assist", "Touchscreen Display", "Navigation System", "Wireless Charging", "Bose Premium Audio", "Nissan Safety Shield"]
    }
];

// Helper function to get car by ID
function getCarById(id) {
    return carsData.find(car => car.id === parseInt(id));
}

// Helper function to get car by slug
function getCarBySlug(slug) {
    return carsData.find(car => car.slug === slug);
}

// Function to get URL parameter
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}