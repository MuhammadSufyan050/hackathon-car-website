'use client';

import { FaHeart, FaRegHeart, FaCar, FaUser, FaGasPump } from "react-icons/fa";
import { useState, useEffect } from "react";
import Image from "next/image";
import { getCars } from "../../sanity/lib/fetchData";
import Link from "next/link";

interface Car {
  _id: string;
  name: string;
  type: string;
  imageUrl: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  pricePerDay: string;
  originalPrice?: string;
}

const Recomendation = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    async function fetchData() {
      const data = await getCars();
      const limitedCars = data.slice(4, 16);
      setCars(limitedCars);
      setFavorites(
        limitedCars.reduce((acc: any, car: any) => ({ ...acc, [car.name]: false }), {})
      );
    }
    fetchData();
  }, []);

  const toggleFavorite = (carName: string) => {
    setFavorites((prev) => ({
      ...prev,
      [carName]: !prev[carName],
    }));
  };

  return (
    <div className="max-w-[1440px] px-4 py-8 mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-base text-[#90A3BF] font-semibold mb-4">Recomendation</h2>
        <h2 className="text-base text-[#3563E9] font-semibold mb-4 cursor-pointer">View All</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
        {cars.map((car) => (
          <div
            key={car._id}
            className="bg-white shadow-md rounded-lg p-4 relative"
          >
            <button
              onClick={() => toggleFavorite(car.name)}
              className="absolute top-3 right-3 text-red-500"
            >
              {favorites[car.name] ? <FaHeart /> : <FaRegHeart />}
            </button>

            <div className="mb-2">
              <h3 className="text-lg font-medium">{car.name}</h3>
              <p className="text-gray-500 text-sm">{car.type}</p>
            </div>

            <Image
              alt={car.name}
              src={car.imageUrl}
              height={400}
              width={400}
              className="w-full h-36 object-contain mb-4"
            />

            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mt-2">
              <div className="flex items-center gap-2">
                <FaGasPump />
                <span>{car.fuelCapacity}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCar />
                <span>{car.transmission}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUser />
                <span>{car.seatingCapacity}</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-lg font-bold">{car.pricePerDay}</p>
                {car.originalPrice && (
                  <p className="text-gray-400 line-through">{car.originalPrice}</p>
                )}
              </div>
              <Link href={`/car/${car._id}`}>
                <button className="bg-[#3563E9] text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full">
                  Rent Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-between items-center w-full h-11 px-8 mt-5">
        <Link href="/category">
          <button className="bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded w-[156px] h-11">
            Show more Cars
          </button>
        </Link>
        <div className="font-medium text-sm text-[#90A3BF]">120 Cars</div>
      </div>
    </div>
  );
};

export default Recomendation;
