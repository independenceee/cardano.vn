import React, { ReactNode } from "react";
import classNames from "classnames/bind";
import { MdOutlineDateRange, MdOutlinePlace } from "react-icons/md";

import styles from "./Course.module.scss";
import { CourseType } from "@site/src/types/Generics";
type Props = {
    index: number;
    course: CourseType;
};

const cx = classNames.bind(styles);

const Course = function ({ course, index }: Props) {
    return (
        <div
            className={cx("wrapper", "col col--4")}
            data-aos="fade-up"
            data-aos-delay={`${100 * (index + 4)}`}
            data-aos-duration={`${1000 * (index + 4)}`}
        >
            <div className={cx("inner")}>
                <section className={cx("image-container")}>
                    <img className={cx("image")} src={course.image} alt="" />
                </section>
                <div className={cx("infomation")}>
                    <section className={cx("title-container")}>
                        <h3 className={cx("title-main")}>{course.title}</h3>
                    </section>
                    <section className={cx("description")}>
                        {course.description}
                    </section>

                    <section className={cx("infomation-wrapper")}>
                        <div className={cx("infomation-container")}>
                            <MdOutlineDateRange
                                className={cx("infomation-icon")}
                            />
                            <span className={cx("infomation-content")}>
                                {course.dateTime}
                            </span>
                        </div>
                        <div className={cx("infomation-container")}>
                            <MdOutlinePlace className={cx("infomation-icon")} />
                            <span className={cx("infomation-content")}>
                                {course.places}
                            </span>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Course;
