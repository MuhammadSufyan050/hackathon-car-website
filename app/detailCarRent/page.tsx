import RecentCar from '@/app/components/RecentCar'
import RecentRecomend from '@/app/components/RecentRecomend'
import Reviews from '@/app/components/Reviews';
import SlideBar from '@/app/components/Slidebar';
import React from 'react';
import Detail from '../components/Detail'; // Ensure you have this component

const DetailCarRent = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 p-4">
      {/* Sidebar */}
      <aside className="sm:w-1/4 p-4 rounded-lg">
        <h2 className="text-lg font-medium mb-4"></h2>
        <SlideBar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 space-y-10 bg-[#F6F7F9]">
        {/* Car Details Section */}
        <section>
          <Detail />
        </section>

        {/* Reviews Section */}
        <section className="p-6 rounded-lg shadow bg-[#F6F7F9]">
          <h2 className="text-xl font-semibold mb-4">Reviews</h2>
          <Reviews />
        </section>

        {/* Carousel Section */}
        <section>
          <RecentCar />
          <RecentRecomend />
        </section>
      </main>
    </div>
  );
};

export default DetailCarRent;
