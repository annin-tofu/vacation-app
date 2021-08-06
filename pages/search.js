import Footer from "../components/Footer";
import Header from "../components/Header";

// visit http://localhost:3000/search to see the page.
function Search() {
  return (
    //   h-screen: sets the app span across the height of the screen
    <div>
      {/* Use React here. This is great thing about React. you can reuse the components across pages (by importing the component from another page) */}
      <Header />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ Stays for 5 number of guests</p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Mars</h1>

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
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;
