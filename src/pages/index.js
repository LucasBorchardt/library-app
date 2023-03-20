import Head from "next/head";

import Footer from "../components/Footer";
import Header from "../components/Header/Header";

export default function HomePage() {
  return (
    <>
      <Head>
        <title key="title">Library App</title>
        <meta
          key="description"
          name="description"
          content="This is my library"
        />
      </Head>
      <Header />
      <div class="max-w-sm w-full lg:max-w-full lg:flex">
        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="mb-8">
            <p class="text-gray-700 text-base">
              Donec ut sem a est imperdiet tempus. Duis euismod viverra eros,
              sed fringilla urna iaculis sed. Donec at dolor non sapien
              ullamcorper semper. Phasellus vitae urna id lectus mattis
              tincidunt suscipit auctor risus. Integer ullamcorper aliquam elit,
              vel consequat felis fringilla nec. Praesent laoreet scelerisque
              mauris nec ultricies. Duis turpis enim, ullamcorper vel bibendum
              id, efficitur at turpis. Nunc dictum, purus in sagittis
              scelerisque, mauris augue dignissim sem, nec fermentum ipsum
              lectus ac sapien. Quisque venenatis leo nisi, quis tempor ligula
              pretium at. Vestibulum efficitur lectus id quam dapibus, ut
              condimentum augue placerat. Pellentesque elementum, est ac
              vestibulum sodales, urna justo sollicitudin purus, vitae suscipit
              felis ante venenatis magna.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
