// 03:01:52:00

import { HeartIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    //  "first:" is only for FIRST ELEMENT. so here the first listing will have the border-top 03:02:11:00
    <div className="flex py-7 px-2 cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-top">
      {/* Tailwind CSS is for small-sized window(mobile devices) . "md:" is for medium screen and up. */}
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>

        <h4 className="text-xl">{title}</h4>

        <div className="border-b w-10 pt-2"></div>

        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            {/* text-red-400 to change the color of the StarIcon Logo */}
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>

          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
