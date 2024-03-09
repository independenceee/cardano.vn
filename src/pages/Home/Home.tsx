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
        <Courses courses={courses} />
      </section>
      <section className={cx("roadmap")}>
        <Roadmap timelines={roadmap} />
      </section>
      <section className={cx("about")}>
        <Events events={EventsList} />
      </section>
      <section className={cx("about")}>
        <About reverse={true} />
      </section>
      <Footer />
    </main>
  );
};

export default Home;
