import { Head } from "@inertiajs/react";
import Hero from "@/Components/home/hero";
import Newsection from "@/Components/home/newsection";
import Navbar from "@/Components/navbar";
import Highlightsection from "@/Components/home/highlightsection";

export default function Example() {
  return (
    <>
      <Head title="Home" />
      <Navbar />
      <Hero />
      <Newsection />
      <Highlightsection />
    </>
  );
}

