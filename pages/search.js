import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
// https://date-fns.org/docs/Getting-Started 03:01:37:50
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

// visit http://localhost:3000/search to see the page.
// previously "function Search(props) {"
function Search({ searchResults }) {
  // 03:01:33:00
  const router = useRouter();

  console.log(searchResults);

  //ES6 Destructuring 03:01:35:00
  // https://stackoverflow.com/questions/59845247/what-is-the-difference-between-const-a-b-c-array-and-const-a-b-c-ar
  const { location, startDate, endDate, noOfGuests } = router.query;

  // will leave a log as Object
  // console.log(router.query);
  // console.log(location);

  // https://date-fns.org/docs/Getting-Started 03:01:37:50
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");

  // then create a string from above 2 values. 03:01:38:00
  // backticks(``) allows you to include javascript in a string. this is called "string interpolation"
  const range = `${formattedStartDate}-${formattedEndDate}`;

  return (
    //   h-screen: sets the app span across the height of the screen
    <div>
      {/* Use React here. This is great thing about React. you can reuse the components across pages (by importing the component from another page) */}
      <Header
        // fancy placeholder 03:01:41:55
        // "String Interpolation"
        placeholder={`${location} | ${range} | ${noOfGuests}`}
      />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            {/* 03:01:36:00 replaced hardcoded "5 number of guests" to "noOfGuests} number of guests" */}
            300+ Stays - {range} -for {noOfGuests} guests
          </p>
          {/* 03:01:35:00 replaced hardcoded "Stays in Uranus" to "Stays in {location}" */}
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            {/* active: when you CLICK IT, this gets fired. i.e. you click the button, and shrinks to 95% of the size */}
            {/* transition transform duration-100 ease-out : gives SMOOTHER transition effect. */}
            {/* {button is a custom utility class created within "../styles/global.css" . This is beucase the same class utilities were needed repeatedly for many buttons...it was originally notated as below*/}
            {/* <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out"> */}
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {/* map is how to go thru an array and return something on screen 1:51:00*/}
            {/* if you want to return JSX objects, you have to use parenthesis (). If you want to pass in several lines of code, then use {}, then use parenthsis to wrap up JSX objects within in */}
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                // put InfoCard, import InfoCard, then pass in all the items. 03:01:53:00
                // previously below lines of code looked like this...

                // {searchResults.map((item) => (
                // <InfoCard
                //   key={item.img}
                //   img={item.img}
                //   location={item.location}

                // you can replace "item" with each of items wrapped in curly braces, and for each items, you can remove "item."

                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

//Server-side Rendering 03:01:47:00
// https://reffect.co.jp/react/next-js

// Arrow Function
// https://techacademy.jp/magazine/21423
export async function getServerSideProps() {
  const searchResults = await fetch("https://jsonkeeper.com/b/QJSB").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults: searchResults,
    },
  };
}
