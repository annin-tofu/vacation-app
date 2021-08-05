// use snippet  _rfce
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/solid";

function Header() {
  return (
    // sticky: sticks to the top
    //z-index: z-50 will go front of z-49 or z-0.
    //50:00 "py-5 px-5" can be replaced "p-5"
    // 52:00 "breakpoint" >> you can specify certain utility class for different screen sizes. "md:px-10" means "for medium screen use px-10"
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
      <div>
        <input type="input" placeholder="Start your search" />
        {/* https://heroicons.com */}
        <SearchIcon />
      </div>

      {/* RIGHT */}
      <div></div>
    </header>
  );
}

export default Header;
