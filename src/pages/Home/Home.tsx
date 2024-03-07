import React from "react";
import Events from "@site/src/components/Events";
import Courses from "@site/src/components/Courses";
import Hero from "@site/src/components/Hero";
import About from "@site/src/components/About";

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
                <Courses />
            </section>
            <section>
                <Events />
            </section>
        </main>
    );
};

export default Home;
