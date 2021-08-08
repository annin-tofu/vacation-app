// use snippet  _rfce
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
// https://www.npmjs.com/package/react-date-range 03:00:35:04
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useRouter } from "next/dist/client/router";

//previously "function Header(props) {"  03:01:40:00
function Header({ placeholder }) {
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

  // in Next.js, build-in router is built into the actual "page" structure. 03:01:26:00
  const router = useRouter();

  //   For number of guests : useState value set to one because we can expect that the user starts the search with most-commonluy expected No. of guest of 1
  // 03:00:57:00 useState for the value of Number of Guests
  const [noOfGuests, setNoOfGuests] = useState(1);

  //  Press "Cancel" and resets by typing nothing in searchbar. 03:01:01:00
  const resetInput = () => {
    setSearchInput("");
  };
  // {/* onClick={search}, to enable search. i.e. click Search button in the header below the date-picker, and redirects to /search (Search page) 03:01:27:43 */}

  // const search = () => {
  //   router.push("/search");
  // };

  // then previous line should be advanced into below lines. >> added query param, which includes quory data (location, starting/end date, and number of guests)..
  // the url should look like http://localhost:3000/search?location=London&startDate=2021-08-08T23.....&endDate=2021-08-21.....&noOfGuests=3
  // this is very nice advantage Next.js has as you can easily share the url to your friend to share the info. (you cant do this with REDUX) 03:01:30:00
  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        // you cannot just pass the DATE object. it needs to be a STRING. hence  toISOString()
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
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
      <div
        //Next.js router. common notation for router. 03:01:26:00
        // This will take you to Homescreen from Search page.
        onClick={() => router.push("/")}
        // {/* utility class for tailwind. relative means relative to the size of the container. otherwise it will fit to the entire page */}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        <Image
          src="https://res.cloudinary.com/dhyagpwyl/image/upload/v1628415234/Screen_Shot_2021-08-08_at_18.33.43_ymclfx.png"
          layout="fill"
          //objectFit="contain" stops stretching the image. keeps the aspect ratio
          objectFit="contain"
          //pushes it to the left
          objectPosition="left"
        />
      </div>

      {/* MIDDLE - Search bar*/}
      {/* 02:01:00:00 */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(event.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none"
          type="text"
          // double pipe || means "otherwise". >>> i.e. if "placeholder" is not found/null, show "Start your search"
          placeholder={placeholder || "type London"}
        />
        {/* https://heroicons.com , and import heroicons by running $ npm install @heroicons/react >> */}
        {/* text-white to make the logo white */}
        {/* hidden utility class means it is hidden by default. NOTE: tailwind CSS is basically aiming for phone-usage. so hidden by default and then use md: for bigger screeen */}
        <SearchIcon className="hidden md:inline-flex h-8 bg-yellow-600 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* RIGHT
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div> */}

      {/* DATEPICKER */}
      {/* If the serachbar input has a value(If it is "true"), then ("&&") render the following.
03:00:31:30 */}
      {searchInput && (
        //   below utility class is set because for the whole header, it was originally set to have 3 columns. by setting up like below, it spans across the whole width again.
        // https://www.tutorialspoint.com/html-colspan-attribute
        <div className="flex flex-col col-span-3 mx-auto">
          {/* https://www.npmjs.com/package/react-date-range see Options */}
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>

            <UsersIcon className="h-5" />
            <input
              // 03:00:57:00 useState for the value of Number of Guests
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              type="number"
              //   min={1} so that a user cannot type 0 or minus number of guests
              min={1}
              className="w-12 pl-2 text-lg outline-none text-yellow-600"
            />
          </div>
          <div className="flex">
            {/* 03:01:01:00 */}
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            {/* onClick={search}, to enable search 03:01:27:43 */}
            <button onClick={search} className="flex-grow text-yellow-600">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
