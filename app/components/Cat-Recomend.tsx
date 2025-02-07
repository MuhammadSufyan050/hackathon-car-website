"use client";
import { useEffect, useState } from "react";
import { getCars } from "../../sanity/lib/fetchData";
import { Heart, Fuel, Settings, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Import Image component
import PickDrop from "./PickDrop";

interface Car {
  _id: string;
  name: string;
  brand: string;
  type: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  pricePerDay: string;
  originalPrice: string;
  tags: string[];
  imageUrl: string;
}

export default function Cat_Recomendation() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getCars();
      setCars(data);
    }
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        <PickDrop />
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div
            key={car._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden p-4 border relative"
          >
            <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500">
              <Heart className="w-6 h-6" />
            </button>
            <div className="w-full flex justify-center">
              <Image
                src={car.imageUrl}
                alt={car.name}
                width={300} // Adjust width as needed
                height={200} // Adjust height as needed
                className="w-11/12 h-56 object-contain"
                priority // Improves LCP for the first image
              />
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-semibold absolute top-4">
                {car.name}
              </h2>
              <p className="text-gray-500 text-sm absolute top-10">
                {car.brand} {car.type}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
                <span className="flex items-center gap-1">
                  <Fuel className="w-4 h-4" /> {car.fuelCapacity}
                </span>
                <span className="flex items-center gap-1">
                  <Settings className="w-4 h-4" /> {car.transmission}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" /> {car.seatingCapacity}
                </span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <span className="text-xl font-bold">{car.pricePerDay}</span>
                  {car.originalPrice && (
                    <span className="text-sm text-gray-400 line-through ml-2">
                      {car.originalPrice}
                    </span>
                  )}
                  <span className="text-gray-500 text-sm"></span>
                </div>
                <Link href={`/car/${car._id}`}>
                  <button className="bg-[#3563E9] text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full">
                    Rent Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-6">
        <Link href="/category">
          <button className="bg-blue-500 text-white px-6 py-2 rounded items-center text-sm font-medium">
            Show More Cars
          </button>
        </Link>
        <p className="text-gray-500 text-sm">120 Cars</p>
      </div>
    </div>
  );
}
