import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classNames from "classnames/bind";
import Title from "@site/src/components/Title";
import styles from "./Courses.module.scss";
import { CourseType } from "@site/src/types/Generics";
import Course from "@site/src/components/Courses/Course";
import Slider from "react-slick";
const cx = classNames.bind(styles);

type Props = {
    courses: CourseType[];
};

const Courses = function ({ courses }: Props) {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
        ],
    };
    return (
        <div className={cx("wrapper")}>
            <Title
                title="Courses"
                subTitle="Come meet us in IRL. The Aleph Zero community is active across hackathons and events in the web3 space."
            />

            <div className="container">
                <div className={cx("inner")}>
                    {/* <Slider {...settings}> */}
                    {courses.map(function (course: CourseType, index: number) {
                        return (
                            <Course course={course} key={index} index={index} />
                        );
                    })}
                    {/* </Slider> */}
                </div>
            </div>
        </div>
    );
};

export default Courses;
