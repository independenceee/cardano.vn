import React from "react";
import classNames from "classnames/bind";
import Events from "@site/src/components/Events";
import Courses from "@site/src/components/Courses";
import Hero from "@site/src/components/Hero";
import About from "@site/src/components/About";
import Footer from "@site/src/layouts/components/Footer";

import styles from "./Home.module.scss";

const cx = classNames.bind(styles);
type Props = {};

const Home = function ({}: Props) {
    return (
        <main className={cx("wrapper")}>
            <section className={cx("hero")}>
                <Hero />
            </section>

            <section className={cx("about")}>
                <About />
            </section>
            <section className={cx("about")}>
                <About reverse={true} />
            </section>
            <section className={cx("about")}>
                <About />
            </section>

            <section className={cx("about")}>
                <Courses />
            </section>

            <section className={cx("about")}>
                <Events />
            </section>
            {/* <Footer /> */}
        </main>
    );
};

export default Home;
