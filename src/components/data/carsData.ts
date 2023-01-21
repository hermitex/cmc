import car1 from "../../assets/cars/car-16.jpg";
import car2 from "../../assets/cars/car-18.jpg";
import car3 from "../../assets/cars/car-19.jpg";
import car4 from "../../assets/cars/car-20.jpg";
import car5 from "../../assets/cars/car-21.jpg";
import car6 from "../../assets/cars/car-22.jpg";
import car7 from "../../assets/cars/car-23.jpg";
import car8 from "../../assets/cars/car-24.jpg";
import car9 from "../../assets/cars/car-25.jpg";
import car10 from "../../assets/cars/car-26.jpg";
import { Box } from "@mui/material";
export interface CarInterface {
  id: number;
  title: string;
  images: string[];
  price: number;
  year: number;
  features: string[];
  safetyFeatures: string[];
  transmission: string;
  fuelType: string;
}

export const cars: CarInterface[] = [
  {
    id: 1,
    title: "Test Car",
    images: [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10],
    price:  Math.floor(Math.random()*(100000 - 10000000)+10000000),
    year: 2015,
    features: [
      "360-degree camera",
      "Blind spot alert",
      "Bluetooth",
      "Cooled seats",
      "Heated seats",
    ],
    safetyFeatures: [
      "Active head restraints",
      "Adaptive headlights",
      "Backup camera",
      "Blind-spot warning",
      "Brake assist",
    ],
    transmission: "Automatic",
    fuelType: "Diesel",
  },
  {
    id: 2,
    title: "Test Car",
    images: [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10],
    price:  Math.floor(Math.random()*(100000 - 10000000)+10000000),
    year: 2015,
    features: [
      "360-degree camera",
      "Blind spot alert",
      "Bluetooth",
      "Cooled seats",
      "Heated seats",
    ],
    safetyFeatures: [
      "Active head restraints",
      "Adaptive headlights",
      "Backup camera",
      "Blind-spot warning",
      "Brake assist",
    ],
    transmission: "Automatic",
    fuelType: "Diesel",
  },

  {
    id: 3,
    title: "Test Car",
    images: [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10],
    price:  Math.floor(Math.random()*(100000 - 10000000)+10000000),
    year: 2015,
    features: [
      "360-degree camera",
      "Blind spot alert",
      "Bluetooth",
      "Cooled seats",
      "Heated seats",
    ],
    safetyFeatures: [
      "Active head restraints",
      "Adaptive headlights",
      "Backup camera",
      "Blind-spot warning",
      "Brake assist",
    ],
    transmission: "Automatic",
    fuelType: "Diesel",
  },
  {
    id: 4,
    title: "Test Car",
    images: [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10],
    price:  Math.floor(Math.random()*(100000 - 10000000)+10000000),
    year: 2015,
    features: [
      "360-degree camera",
      "Blind spot alert",
      "Bluetooth",
      "Cooled seats",
      "Heated seats",
    ],
    safetyFeatures: [
      "Active head restraints",
      "Adaptive headlights",
      "Backup camera",
      "Blind-spot warning",
      "Brake assist",
    ],
    transmission: "Automatic",
    fuelType: "Diesel",
  },
  {
    id: 5,
    title: "Test Car",
    images: [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10],
    price:  Math.floor(Math.random()*(100000 - 10000000)+10000000),
    year: 2015,
    features: [
      "360-degree camera",
      "Blind spot alert",
      "Bluetooth",
      "Cooled seats",
      "Heated seats",
    ],
    safetyFeatures: [
      "Active head restraints",
      "Adaptive headlights",
      "Backup camera",
      "Blind-spot warning",
      "Brake assist",
    ],
    transmission: "Automatic",
    fuelType: "Diesel",
  },
];
