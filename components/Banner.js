import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:lg:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://res.cloudinary.com/dhyagpwyl/image/upload/v1628166756/57b9f708-bb12-498c-bc33-769f8fc43e63_f2mgph.jpg"
        layout="fill"
        objectFit="cover"
      />

      {/* absolute: make a parent "relative" 1:21:00 */}
      {/* this utility classes are to set the message in the very middle of the banner picture */}
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>

        {/* to make a box aroound the message visible use bg-white px-10 py-4. unless padding is specified, you will not see a box */}
        {/* padding is for INSIDE a element. margin is for OUTSIDE a element */}
        {/* hover: means "when a cursor is hovering ove the element, apply ... class utility", */}
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
