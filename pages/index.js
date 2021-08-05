import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Vacation-app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* HEADER */}
      {/* <Header /> is called "self-closed component" */}
      <Header />
      {/* BANNER */}
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        {/* SMALL CARDS */}
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Pull some data from a serer- API endpoints */}
            {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
          what is "?.": it is called optional chaining
          "instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined. When used with function calls, it returns undefined if the given function does not exist." */}
            {exploreData?.map(({ img, distance, location }) => (
              // 1:47:00
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        {/* MEDIUM CARDS */}
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        {/* LARGE CARDS */}
        <LargeCard
          img="https://res.cloudinary.com/dhyagpwyl/image/upload/v1628172910/2da67c1c-0c61-4629-8798-1d4de1ac9291_gbzsec.jpg"
          title="The Greatest Outdoors"
          description="Wishlists curated by Vacation-app."
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  );
}

// https://www.yoshida.red/2021/04/26/nextjs-data-fetching/
// https://nextjs.org/docs/basic-features/data-fetching
// 1:34:00
export async function getStaticProps() {
  // For Small Cards
  const exploreData = await fetch("https://jsonkeeper.com/b/G757").then((res) =>
    res.json()
  );

  // For Medium Cards
  const cardsData = await fetch("https://jsonkeeper.com/b/VKHV").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
