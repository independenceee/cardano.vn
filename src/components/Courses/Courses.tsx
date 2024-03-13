import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classNames from "classnames/bind";
import Title from "@site/src/components/Title";
import styles from "./Courses.module.scss";
import { CourseType } from "@site/src/types/Generics";
const cx = classNames.bind(styles);

type Props = {
    courses: CourseType[];
};

const Courses = function ({ courses }: Props) {
    return (
        <div className={cx("wrapper")}>
            <Title
                title="Courses"
                subTitle="Come meet us in IRL. The Aleph Zero community is active across hackathons and events in the web3 space."
            />

            <div className="container">
                <div className={cx("inner")}>
                    <section className={cx("courses-left")}>left</section>
                    <section className={cx("courses-right")}>
                        <div className={cx("courses-right-list")}>
                            
                        </div>
                        <div className={cx("video-wrapper")} data-aos="fade-right">
                            <iframe
                                className={cx("video")}
                                src="https://www.youtube.com/embed/UiY5-ycvM7w?si=Uc9PB7KaWDP7ddpe"
                                title="YouTube video player"
                                frameBorder={0}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen={false}
                            />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Courses;
