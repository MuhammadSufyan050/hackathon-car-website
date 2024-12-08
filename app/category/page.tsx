import React from "react";
import SlideBar from "../components/Slidebar";
import Cat_Recomendation from "../components/Cat-Recomend";

const Category = () => {
  return (
   
<div className="flex flex-col sm:flex-row gap-4 p-4">
  {/* Sidebar */}
  <aside className="h-auto p-4 rounded-lg sm:w-1/4">
    <h2 className="text-lg font-medium mb-4 left-10"><SlideBar /></h2>
  </aside>

  {/* Main Content */}
  <main className="flex-1 bg-[#F6F7F9]">
    <Cat_Recomendation />
  </main>
</div>


  );
};

export default Category;
