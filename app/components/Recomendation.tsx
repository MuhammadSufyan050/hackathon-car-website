// "use client";

// import { FaHeart, FaRegHeart, FaCar, FaUser, FaGasPump } from "react-icons/fa";
// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image"; // Import Image from Next.js

// interface Car {
//   name: string;
//   type: string;
//   image: string;
//   fuel: string;
//   transmission: string;
//   capacity: string;
//   price: string;
//   oldPrice?: string;
//   favorite: boolean;
// }

// const cars: Car[] = [
//   {
//     name: "All New Rush",
//     type: "SUV",
//     image: "/recom-1.png",
//     fuel: "70L",
//     transmission: "Manual",
//     capacity: "6 People",
//     price: "$72.00",
//     oldPrice: "$80.00",
//     favorite: false,
//   },
//   {
//     name: "CR  - V",
//     type: "SUV",
//     image: "/recom-2.png",
//     fuel: "80L",
//     transmission: "Manual",
//     capacity: "6 People",
//     price: "$80.00",
//     favorite: true,
//   },
//   {
//     name: "All New Terios",
//     type: "SUV",
//     image: "/recom-3.png",
//     fuel: "90L",
//     transmission: "Manual",
//     capacity: "6 People",
//     price: "$74.00",
//     favorite: true,
//   },
//   {
//     name: "CR - V",
//     type: "SUV",
//     image: "/recom-4.png",
//     fuel: "80L",
//     transmission: "Manual",
//     capacity: "6 People",
//     price: "$80.00",
//     favorite: true,
//   },
//   {
//     name: "MG ZX Exclusice",
//     type: "Hatchback",
//     image: "/recom-5.png",
//     fuel: "70L",
//     transmission: "Manual",
//     capacity: "4 People",
//     price: "$76.00",
//     oldPrice: "$80.00",
//     favorite: true,
//   },
//   {
//     name: "New MG ZS",
//     type: "SUV",
//     image: "/recom-6.png",
//     fuel: "80L",
//     transmission: "Manual",
//     capacity: "6 People",
//     price: "$80.00",
//     favorite: false,
//   },
//   {
//     name: "MG ZX Exclusice",
//     type: "Hatchback",
//     image: "/recom-5.png",
//     fuel: "70L",
//     transmission: "Manual",
//     capacity: "4 People",
//     price: "$76.00",
//     oldPrice: "$80.00",
//     favorite: true,
//   },
//   {
//     name: "New MG ZS",
//     type: "SUV",
//     image: "/recom-6.png",
//     fuel: "80L",
//     transmission: "Manual",
//     capacity: "6 People",
//     price: "$80.00",
//     favorite: false,
//   },
// ];

// const Recomendation = () => {
//   const [favorites, setFavorites] = useState<{ [key: string]: boolean }>(
//     cars.reduce((acc, car) => ({ ...acc, [car.name]: car.favorite }), {})
//   );

//   const toggleFavorite = (carName: string) => {
//     setFavorites((prev) => ({
//       ...prev,
//       [carName]: !prev[carName],
//     }));
//   };

//   return (
//     <div className="max-w-[1440px] px-4 py-8 mx-auto">
//       <div className="flex justify-between items-center">
//         <h2 className="text-base text-center text-[#90A3BF] font-semibold mb-4 px-4">
//           Recomendation Car
//         </h2>
//       </div>
//       <div
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 
//           overflow-x-auto lg:overflow-x-hidden px-4"
//       >
//         {cars.map((car) => (
//           <div
//             key={car.name}
//             className="bg-white w-full shadow-md rounded-lg p-4 relative flex-shrink-0"
//           >
//             <button
//               onClick={() => toggleFavorite(car.name)}
//               className="absolute top-3 right-3 text-red-500"
//             >
//               {favorites[car.name] ? <FaHeart /> : <FaRegHeart />}
//             </button>
//             <div className=" sm:flex-row sm:items-center sm:justify-between mb-2">
//               <h3 className="text-lg font-medium">{car.name}</h3>
//               <p className="text-gray-500 text-sm">{car.type}</p>
//             </div>

//             <Image
//               alt={car.name}
//               src={car.image}
//               width={300} // Set the width you need
//               height={200} // Set the height you need
//               className="w-full h-36 object-contain mb-4"
//             />
//             {/* Responsive Name and Type */}

//             {/* Responsive Icons */}
//             <div
//               className="flex flex-col sm:flex-row sm:items-center sm:justify-end 
//                 gap-2 text-sm text-gray-600 mt-2"
//             >
//               <div className="flex items-center gap-2">
//                 <FaGasPump />
//                 <span>{car.fuel}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <FaCar />
//                 <span>{car.transmission}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <FaUser />
//                 <span>{car.capacity}</span>
//               </div>
//             </div>
//             <div className="mt-4 flex items-center justify-between">
//               <div>
//                 <p className="text-lg font-bold">{car.price}/day</p>
//                 {car.oldPrice && (
//                   <p className="text-gray-400 line-through">{car.oldPrice}</p>
//                 )}
//               </div>
//               <button className="bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded">
//                 Rent Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-center items-center mt-5">
//         <Link href="/category">
//           <button className="bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded w-[156px] h-11">
//             Show More Car
//           </button>
//         </Link>
//         <div className="font-medium text-sm text-[#90A3BF] ml-4">120 Cars</div>
//       </div>
//     </div>
//   );
// };

// export default Recomendation;





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
      const limitedCars = data.slice(4, 16); // Limit to 4 products
      setCars(limitedCars);
      setFavorites(
        limitedCars.reduce((acc:any , car:any) => ({ ...acc, [car.name]: false }), {})
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
        <h2 className="text-base text-center text-[#90A3BF] font-semibold mb-4 px-4">
        Recomendation
        </h2>
        <h2 className="text-base text-center text-[#3563E9] font-semibold mb-4 px-4">
          View All
        </h2>
      </div>
      <div
        className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto lg:overflow-visible 
        px-4 scrollbar-hide"
      >
        {cars.map((car) => (
          <div
            key={car._id}
            className="bg-white w-[250px] md:w-full shadow-md rounded-lg p-4 relative flex-shrink-0 
          lg:flex-shrink lg:w-auto"
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

            <div
              className="flex sm:flex-row flex-wrap items-center gap-2 text-sm text-gray-600 mt-2"
            >
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
      <div className=" flex justify-between items-center w-full h-11 px-8 align-center mt-5">

      <Link href="/category"><button className="bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded w-[156px] h-11">Show more Car</button></Link>
      <div  className="font-medium text-sm text-[#90A3BF]  ml-4 ">120 Cars</div>
      </div>
    </div>
  );
};

export default Recomendation;