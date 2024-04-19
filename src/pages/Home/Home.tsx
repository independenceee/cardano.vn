import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import Events from "@site/src/components/theme/Events";
import Courses from "@site/src/components/app/Courses";
import Hero from "@site/src/components/app/Hero";
import About from "@site/src/components/app/About";
import EventsList from "@site/src/data/events";
import courses from "@site/src/data/courses";
import Roadmap from "@site/src/components/app/Roadmap";
import roadmap from "@site/src/data/roadmap";
import styles from "./Home.module.scss";
import Footer from "@site/src/layouts/components/Footer";

const cx = classNames.bind(styles);
type Props = {};

const Home = function ({ }: Props) {
    return (
        <main className={cx("wrapper")}>
            <section>
                <Hero />
            </section>
            <section>
                <About
                    url="https://www.youtube.com/watch?v=ojiGKxIKrWw"
                    title="About Cryptoz"
                    subTitle="About Cryptoz We Translate Your Dream Into Reality"
                    description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
                    firstTask="Nemo enim ipsam voluptatem quia voluptas sit aspernatur."
                    secondTask="He oluptatem quia voluptas sit aspernatur"
                    thirdTask="Nemo enim ipsam voluptatem quia voluptas sit aspernatur"
                />
            </section>
            <section>
                <Courses
                    courses={courses}
                    video={{
                        sheetId: "1PyAroxbm1dQ0r47ostCMp-4uIXblLnynSnYT9NWM2lU",
                        sheetName: "youtube"
                    }} />
            </section>
            <section>
                <Roadmap
                    title="Roadmap timeline"
                    subTitle="Roadmap timeline"
                    timelines={roadmap}
                />
            </section>
            <section>
                <Events events={EventsList} />
            </section>

            <Footer />
        </main>
    );
};

export default Home;
