import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Vacation-app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HEADER */}
      {/* called "self-closed component" */}
      <Header />
      {/* BANNER */}
    </div>
  );
}
