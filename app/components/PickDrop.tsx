import { LuArrowDownUp } from 'react-icons/lu';

const PickDrop = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-6">
      {/* Pick-Up Card */}
      <div className="flex flex-col w-full max-w-md md:max-w-[582px] bg-white rounded-lg p-4 shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <input type="radio" name="location" id="pickup" defaultChecked />
          <label htmlFor="pickup" className="text-lg font-semibold">
            Pick-Up
          </label>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Locations
            </label>
            <select
              className="w-full text-sm p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Pick-up location"
            >
              <option>Select your city</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Date
            </label>
            <select
              className="w-full text-sm p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Pick-up date"
            >
              <option>Select your date</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Time
            </label>
            <select
              className="w-full text-sm p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Pick-up time"
            >
              <option>Select your time</option>
            </select>
          </div>
        </div>
      </div>

      {/* Swap Icon */}
      <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-blue-500 text-white rounded-md shadow-md">
        <LuArrowDownUp size={24} />
      </div>

      {/* Drop-Off Card */}
      <div className="flex flex-col w-full max-w-md md:max-w-[582px] bg-white rounded-lg p-4 shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <input type="radio" name="location" id="dropoff" />
          <label htmlFor="dropoff" className="text-lg font-semibold">
            Drop-Off
          </label>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Locations
            </label>
            <select
              className="w-full text-sm p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Drop-off location"
            >
              <option>Select your city</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Date
            </label>
            <select
              className="w-full text-sm p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Drop-off date"
            >
              <option>Select your date</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Time
            </label>
            <select
              className="w-full text-sm p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Drop-off time"
            >
              <option>Select your time</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickDrop;
