import React from "react";
import classNames from "classnames/bind";
import Events from "@site/src/components/Events";
import Courses from "@site/src/components/Courses";
import Hero from "@site/src/components/Hero";
import About from "@site/src/components/About";
import EventsList from "@site/src/data/events";
import courses from "@site/src/data/courses";
import Roadmap from "@site/src/components/Roadmap";
import roadmap from "@site/src/data/roadmap";
import styles from "./Home.module.scss";
import Footer from "@site/src/layouts/components/Footer";
import videos from "@site/src/data/videos";

const cx = classNames.bind(styles);
type Props = {};

const Home = function ({}: Props) {
    return (
        <main className={cx("wrapper")}>
            <section>
                <Hero />
            </section>
            <section>
                <About />
            </section>
            <section>
                <Courses videos={videos} courses={courses} />
            </section>
            <section>
                <Roadmap timelines={roadmap} />
            </section>
            <section>
                <Events events={EventsList} />
            </section>
            <section>
                <About reverse={true} />
            </section>
            <Footer />
        </main>
    );
};

export default Home;
