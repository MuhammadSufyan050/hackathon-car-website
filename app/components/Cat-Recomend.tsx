"use client";

import { FaHeart, FaRegHeart, FaCar, FaUser, FaGasPump } from "react-icons/fa";
import { useState } from "react";
import PickDrop from "./PickDrop";
import Link from "next/link";
import Image from "next/image"; // Import Image from next/image

interface Car {
  name: string;
  type: string;
  image: string;
  fuel: string;
  transmission: string;
  capacity: string;
  price: string;
  oldPrice?: string;
  favorite: boolean;
}

const cars: Car[] = [
  {
    name: "All New Rush",
    type: "SUV",
    image: "/recom-1.png",
    fuel: "70L",
    transmission: "Manual",
    capacity: "6 People",
    price: "$72.00",
    oldPrice: "$80.00",
    favorite: false,
  },
  {
    name: "CR  - V",
    type: "SUV",
    image: "/recom-2.png",
    fuel: "80L",
    transmission: "Manual",
    capacity: "6 People",
    price: "$80.00",
    favorite: true,
  },
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/popular-1.png",
    fuel: "90L",
    transmission: "Manual",
    capacity: "2 People",
    price: "$99.00",
    favorite: true,
  },
  {
    name: "Nissan GT - R",
    type: "Sport",
    image: "/popular-2.png",
    fuel: "80L",
    transmission: "Manual",
    capacity: "2 People",
    price: "$80.00",
    oldPrice: "$100.00",
    favorite: false,
  },
  {
    name: "Rolls - Royce",
    type: "Sedan",
    image: "/popular-3.png",
    fuel: "70L",
    transmission: "Manual",
    capacity: "4 People",
    price: "$96.00",
    favorite: true,
  },
  {
    name: "All New Terios",
    type: "SUV",
    image: "/recom-3.png",
    fuel: "90L",
    transmission: "Manual",
    capacity: "6 People",
    price: "$74.00",
    favorite: true,
  },
  {
    name: "CR - V",
    type: "SUV",
    image: "/recom-4.png",
    fuel: "80L",
    transmission: "Manual",
    capacity: "6 People",
    price: "$80.00",
    favorite: true,
  },
  {
    name: "MG ZX Exclusice",
    type: "Hatchback",
    image: "/recom-5.png",
    fuel: "70L",
    transmission: "Manual",
    capacity: "4 People",
    price: "$76.00",
    oldPrice: "$80.00",
    favorite: true,
  },
  {
    name: "New MG ZS",
    type: "SUV",
    image: "/recom-6.png",
    fuel: "80L",
    transmission: "Manual",
    capacity: "6 People",
    price: "$80.00",
    favorite: false,
  },
  // Add other car objects here
];

const Cat_Recomendation = () => {
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>(
    cars.reduce((acc, car) => ({ ...acc, [car.name]: car.favorite }), {})
  );

  const toggleFavorite = (carName: string) => {
    setFavorites((prev) => ({
      ...prev,
      [carName]: !prev[carName],
    }));
  };

  return (
    <div className="max-w-[1015px] mx-auto p">
      <div className="text-center mb-6">
        <PickDrop />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <div
            key={car.name}
            className="bg-white shadow-lg rounded-lg p-4 relative"
          >
            {/* Favorite Button */}
            <button
              onClick={() => toggleFavorite(car.name)}
              aria-label={`Mark ${car.name} as favorite`}
              className="absolute top-3 right-3 text-red-500"
            >
              {favorites[car.name] ? <FaHeart /> : <FaRegHeart />}
            </button>
            {/* Car Name and Type */}
            <div className="mb-4">
              <h3 className="text-lg font-medium">{car.name}</h3>
              <p className="text-gray-500 text-sm">{car.type}</p>
            </div>
            {/* Car Image */}
            <div className="w-full h-36 relative mb-4">
              <Image
                alt={`${car.name} car`}
                src={car.image}
                layout="fill"
                objectFit="contain"
                className="object-contain"
              />
            </div>
            {/* Car Details */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-2">
                <FaGasPump />
                <span>{car.fuel}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCar />
                <span>{car.transmission}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUser />
                <span>{car.capacity}</span>
              </div>
            </div>
            {/* Pricing and Rent Button */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-bold">{car.price}/day</p>
                {car.oldPrice && (
                  <p className="text-gray-400 line-through">{car.oldPrice}</p>
                )}
              </div>
              <Link href="/detailCarRent">
                <button className="bg-blue-500 text-white px-4 py-2 rounded text-sm font-medium">
                  Rent Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* Show More Cars Section */}
      <div className="flex justify-between items-center mt-6">
        <button className="bg-blue-500 text-white px-6 py-2 rounded items-center text-sm font-medium">
          Show More Cars
        </button>
        <p className="text-gray-500 text-sm">120 Cars</p>
      </div>
    </div>
  );
};

export default Cat_Recomendation;
