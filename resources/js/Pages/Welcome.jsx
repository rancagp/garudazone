import { Head } from "@inertiajs/react";
import Hero from "@/Components/home/hero";
import Navbar from "@/Components/navbar";

export default function Example() {
    return (
        <>
            <Head title="Home" />
            <Navbar />
            <Hero />
        </>
    );
}

