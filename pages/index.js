import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";

export default function Home() {
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
    </div>
  );
}
