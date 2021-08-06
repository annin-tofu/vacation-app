// use snippet  _rfce
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
// https://www.npmjs.com/package/react-date-range 03:00:35:04
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

function Header() {
  //REACT useState 03:00:25:58
  const [searchInput, setSearchInput] = useState("");
  console.log(searchInput);

  //  For calender date-picker 03:00:39:00
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    console.log(ranges);
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    // sticky: sticks to the top
    //z-index: z-50 will go front of z-49 or z-0.
    //02:00:50:00 "py-5 px-5" can be replaced "p-5"
    // 02:00:52:00 "breakpoint" >> you can specify certain utility class for different screen sizes. "md:px-10" means "for medium screen use px-10"
    <header
      className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 

    md:px-10"
    >
      {/* LEFT - Logo*/}
      {/* utility class for tailwind. relative means relative to the size of the container. otherwise it will fit to the entire page */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://res.cloudinary.com/dhyagpwyl/image/upload/v1628155898/Airbnb_Logo_B%C3%A9lo.svg_megr3n.png"
          layout="fill"
          //objectFit="contain" stops stretching the image. keeps the aspect ratio
          objectFit="contain"
          //pushes it to the left
          objectPosition="left"
        />
      </div>

      {/* MIDDLE - Seach bar*/}
      {/* 02:01:00:00 */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(event.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none"
          type="text"
          placeholder="Start your search"
        />
        {/* https://heroicons.com , and import heroicons by running $ npm install @heroicons/react >> */}
        {/* text-white to make the logo white */}
        {/* hidden utility class means it is hidden by default. NOTE: tailwind CSS is basically aiming for phone-usage. so hidden by default and then use md: for bigger screeen */}
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* RIGHT */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {/* DATEPICKER */}
      {/* If the serachbar input has a value(If it is "true"), then ("&&") render the following.
03:00:31:30 */}
      {searchInput && (
        //   below utility class is set because for the whole header, it was originally set to have 3 columns. by setting up like below, it spans across the whole width again.
        <div className="flex flex-col col-span-3 mx-auto">
          {/* https://www.npmjs.com/package/react-date-range see Options */}
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div>
            <h2>Number of Guests</h2>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
