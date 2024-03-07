import React from "react";
import Events from "@site/src/components/Events";
import Courses from "@site/src/components/Courses";
import Hero from "@site/src/components/Hero";
import About from "@site/src/components/About";
import Footer from "@site/src/layouts/components/Footer";

type Props = {};

const Home = function ({}: Props) {
    return (
        <main>
            <section>
                <Hero />
            </section>

            <section>
                <About />
            </section>
            <section>
                <About />
            </section>
            <section>
                <About />
            </section>

            <section>
                <Courses />
            </section>
            <section>
                <About />
            </section>
            <section>
                <Events />
            </section>
            <Footer />
        </main>
    );
};

export default Home;
