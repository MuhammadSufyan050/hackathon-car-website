'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getCars } from '../../../sanity/lib/fetchData';
import Image from 'next/image';
import { AiFillHeart } from 'react-icons/ai';
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import Link from 'next/link';
import SlideBar from '@/app/components/Slidebar';
import Reviews from '@/app/components/Reviews';
import RecentCar from '@/app/components/RecentCar';
import RecentRecomend from '@/app/components/RecentRecomend';
import { useCallback } from 'react';

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
  description: string;
  rating: number;
  reviews: number;
  imageUrl: string;
  interiorImages: string[];
}

export default function CarDetailPage() {
  const { id } = useParams();
  const [car, setCar] = useState<Car | null>(null);

  const fetchCar = useCallback(async () => {
    const cars = await getCars();
    const selectedCar = cars.find((c: any) => c._id === id);
    setCar(selectedCar || null);
  }, [id]);
  
  useEffect(() => {
    if (id) {
      fetchCar();
    }
  }, [id, fetchCar]);

  if (!car) return <p className="text-center text-lg">Loading...</p>;

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4">
      {/* Sidebar */}
      <aside className="lg:w-1/4 p-4 rounded-lg hidden lg:block">
        <SlideBar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 space-y-10 bg-[#F6F7F9] p-4">
        {/* Car Details Section */}
        <section>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Section */}
            <div className="flex flex-col items-center">
              {/* Main Car Card */}
              <div className="bg-[#3563E9] w-full max-h-[400px] text-white rounded-lg flex flex-col justify-between p-5 relative">
                <h1 className="mb-4 font-semibold text-2xl md:text-3xl leading-tight">
                  {car.name} - {car.brand}
                </h1>
                <p className="text-base">Safety and comfort while driving a futuristic and elegant sports car.</p>
                <div className="w-full h-auto flex justify-center">
                  <Image
                    src={car.imageUrl}
                    alt={car.name}
                    width={540}
                    height={300}
                    className="w-full h-[200px] md:h-[280px] object-contain"
                  />
                </div>
              </div>
              
              {/* Thumbnails */}
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {car.interiorImages?.length > 0 ? (
                  car.interiorImages.map((img, index) => (
                    <Image
                      key={index}
                      src={img}
                      alt={`Interior View ${index + 1}`}
                      width={100}
                      height={80}
                      className="w-20 h-16 md:w-28 md:h-20 rounded-lg object-cover"
                    />
                  ))
                ) : (
                  ["/view-1.png", "/View-2.png", "/View-3.png"].map((src, index) => (
                    <Image
                      key={index}
                      src={src}
                      alt={`View ${index + 1}`}
                      width={100}
                      height={80}
                      className="w-20 h-16 md:w-28 md:h-20 rounded-lg object-cover"
                    />
                  ))
                )}
              </div>
            </div>

            {/* Right Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">{car.name}</h2>
                <AiFillHeart className="text-red-500 text-2xl cursor-pointer" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2 text-yellow-500">
                {[...Array(4)].map((_, i) => (
                  <FaStar key={i} />
                ))}
                <CiStar />
                <span className="text-gray-500">({car.reviews} Reviews)</span>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mt-6 text-sm font-semibold">
                <p><span className="text-gray-500  font-semibold" >Type:</span> {car.type}</p>
                <p><span className="text-gray-500 font-semibold">Transmission:</span> {car.transmission}</p>
                <p><span className="text-gray-500  font-semibold" >Capacity:</span> {car.seatingCapacity} Person</p>
                <p><span className="text-gray-500  font-semibold" >Fuel:</span> {car.fuelCapacity}</p>
              </div>

              {/* Price and Button */}
              <div className="flex justify-between items-center mt-6">
                <div>
                  <span className="text-3xl font-bold text-black">${car.pricePerDay}</span>
                  {car.originalPrice && <span className="text-gray-400 line-through ml-2">{car.originalPrice}</span>}
                </div>
                <Link href="/payment">
                  <button className="bg-[#3563E9] px-6 py-3 text-white rounded-md font-medium hover:bg-blue-600">
                    Rent Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Reviews</h2>
          <Reviews />
        </section>

        {/* Recent Cars & Recommendations */}
        <section>
          <RecentCar />
          <RecentRecomend />
        </section>
      </main>
    </div>
  );
}


























// 'use client';
// import { useParams } from 'next/navigation';
// import { useEffect, useState } from 'react';
// import { getCars } from '../../../sanity/lib/fetchData';
// import Image from 'next/image';
// import { AiFillHeart } from 'react-icons/ai';
// import { CiStar } from 'react-icons/ci';
// import { FaStar } from 'react-icons/fa';
// import Link from 'next/link';
// import SlideBar from '@/app/components/Slidebar';
// import Reviews from '@/app/components/Reviews';
// import RecentCar from '@/app/components/RecentCar';
// import RecentRecomend from '@/app/components/RecentRecomend';

// interface Car {
//   _id: string;
//   name: string;
//   brand: string;
//   type: string;
//   fuelCapacity: string;
//   transmission: string;
//   seatingCapacity: string;
//   pricePerDay: string;
//   originalPrice: string;
//   description: string;
//   rating: number;
//   reviews: number;
//   imageUrl: string;
//   interiorImages: string[];
// }

// export default function CarDetailPage() {
//   const { id } = useParams(); // Get the 'id' parameter from URL using useParams
//   const [car, setCar] = useState<Car | null>(null);

//   // Define the fetchCar function outside the useEffect to avoid any declaration issues
//   const fetchCar = async () => {
//     const cars = await getCars();
//     const selectedCar = cars.find((c:any) => c._id === id);
//     setCar(selectedCar || null);
//   };

//   useEffect(() => {
//     if (id) {
//       fetchCar();
//     }
//   }, [id]);

//   if (!car) return <p className="text-center">Loading...</p>;

//   return (
//         <div className="flex flex-col sm:flex-row gap-6 p-4">
//           {/* Sidebar */}
//           <aside className="sm:w-1/4 p-4 rounded-lg">
//             <h2 className="text-lg font-medium mb-4"></h2>
//             <SlideBar />
//           </aside>
    
//           {/* Main Content */}
//           <main className="flex-1 space-y-10 bg-[#F6F7F9]">
//             {/* Car Details Section */}
//             <section>
//     <div className="max-w-[1017px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//       {/* Left Section */}
//       <div className="w-full flex flex-col items-center">
//         {/* Main Car Card */}
//         <div className="bg-[#3563E9] w-full h-[360px] text-white rounded-[10px] flex flex-col items-start justify-between p-5 relative">
//           <div className="flex-1">
//             <h1 className="mb-4 font-semibold text-[32px] leading-10 tracking-tight">
//               {car.name} - {car.brand} <br /> {car.description}
//             </h1>
//             <p className="mb-4 text-base font-medium tracking-tight">
//               Safety and comfort while driving a <br /> futuristic and elegant sports car
//             </p>
//           </div>
//           <div className="absolute bottom-4 left-6">
//             <Image
//               src={car.imageUrl}
//               alt={car.name}
//               height={480}
//               width={540}
//               className="w-[380px] h-[120px] object-contain"
//             />
//           </div>
//         </div>

//         {/* Thumbnails */}
//         {/* <div className="flex justify-between gap-1 mt-6 ">
//           {car.interiorImages && car.interiorImages.length > 0 ? (
//             car.interiorImages.map((img, index) => (
//               <Image
//                 key={index}
//                 src={img}
//                 alt={`Interior View ${index + 1}`}
//                 width={48}
//                 height={48}
//                 className="lg:w-[148px] sm:h-[96pxpx] sm:w-[105px] lg:h-[124px] rounded-[10px]"
//               />
//             ))
//           ) : (
//             <>
//               <Image
//                 src="/view-1.png"
//                 alt="View 1"
//                 width={150}
//                 height={150}
//                 className="lg:w-[148px] sm:h-[96pxpx] sm:w-[105px] lg:h-[124px] rounded-[10px]"
//               />
//               <Image
//                 src="/View-2.png"
//                 alt="View 2"
//                 width={150}
//                 height={150}
//                 className="lg:w-[148px] sm:h-[96pxpx] sm:w-[105px] lg:h-[124px] rounded-[10px]"
//               />
//               <Image
//                 src="/View-3.png"
//                 alt="View 3"
//                 width={150}
//                 height={150}
//                 className="lg:w-[148px] sm:h-[96pxpx] sm:w-[105px] lg:h-[124px] rounded-[10px]"
//               />
//             </>
//           )}
//         </div> */}

//         {/* Thumbnails */}
// <div className="flex flex-wrap justify-between gap-2 mt-6">
//   {car.interiorImages && car.interiorImages.length > 0 ? (
//     car.interiorImages.map((img, index) => (
//       <Image
//         key={index}
//         src={img}
//         alt={`Interior View ${index + 1}`}
//         width={148}
//         height={124}
//         className="w-[48px] h-[48px] sm:w-[80px] sm:h-[64px] md:w-[100px] md:h-[80px] lg:w-[148px] lg:h-[124px] rounded-[10px] object-cover"
//       />
//     ))
//   ) : (
//     <>
//       {["/view-1.png", "/View-2.png", "/View-3.png"].map((src, index) => (
//         <Image
//           key={index}
//           src={src}
//           alt={`View ${index + 1}`}
//           width={148}
//           height={124}
//           className="w-[48px] h-[48px] sm:w-[80px] sm:h-[64px] md:w-[100px] md:h-[80px] lg:w-[148px] lg:h-[124px] rounded-[10px] object-cover"
//         />
//       ))}
//     </>
//   )}
// </div>

//       </div>

//       {/* Right Section */}
//       <div className="w-full h-auto p-7 bg-white rounded-[10px]">
//         {/* Title and Favorite Icon */}
//         <div className="flex justify-between items-center">
//           <h2 className="text-[32px] font-bold">{car.name}</h2>
//           <AiFillHeart className="text-red-500 text-2xl cursor-pointer" />
//         </div>

//         {/* Rating */}
//         <div className="flex items-center gap-[4px] mt-2">
//           <p className="text-yellow-500 flex items-center gap-[2px]">
//             <FaStar />
//             <FaStar />
//             <FaStar />
//             <FaStar />
//             <CiStar />
//           </p>
//           <p className="text-[#596780]">{car.reviews}+ Reviews</p>
//         </div>

//         {/* Description */}
//         <p className="text-[#596780] font-normal text-xl mt-4">
//           {car.description}
//         </p>

//         {/* Features */}
//         <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
//           <div className="flex justify-between">
//             <span className="font-medium text-xl text-[#90A3BF]">Type:</span>
//             <span className="ml-2 font-semibold text-xl text-[#596780]">{car.type}</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="font-medium text-xl text-[#90A3BF]">Sport:</span>
//             <span className="ml-2 font-semibold text-xl text-[#596780]">{car.transmission}</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="font-medium text-xl text-[#90A3BF]">Capacity:</span>
//             <span className="ml-2 font-semibold text-xl text-[#596780]">{car.seatingCapacity} Person</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="font-medium text-xl text-[#90A3BF]">Gasoline:</span>
//             <span className="ml-2 font-semibold text-xl text-[#596780]">{car.fuelCapacity}</span>
//           </div>
//         </div>

//         {/* Price and Button */}
//         <div className="flex justify-between items-center mt-6">
//           <div>
//             <div className="flex items-center">
//               <span className="text-3xl font-bold text-black">{car.pricePerDay}</span>
//               <span className="text-base font-bold text-[#90A3BF] ml-2"></span>
//             </div>
//             {car.originalPrice && (
//               <span className="text-[#90A3BF] line-through text-base font-bold">${car.originalPrice}</span>
//             )}
//           </div>
//           <Link href="/payment">
//             <button className="bg-[#3563E9] w-[140px] h-[56px] text-white rounded-[4px] font-medium hover:bg-blue-600">
//               Rent Now
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//     </section>

//     {/* Reviews Section */}
//     <section className="p-6 ">
//       <h2 className="text-xl font-semibold mb-4">Reviews</h2>
//       <Reviews />
//     </section>

//     {/* Carousel Section */}
//     <section>
//       <RecentCar />
//       <RecentRecomend />
//     </section>
//   </main>
// </div>
//   );
// }
