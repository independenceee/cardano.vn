import React from "react";
import classNames from "classnames/bind";
import Title from "@site/src/components/Title";
import styles from "./Courses.module.scss";
import courses from "@site/src/data/courses";
import { CourseType } from "@site/src/types/Generics";
import Course from "@site/src/components/Courses/Course";

type Props = {};

const cx = classNames.bind(styles);

const Courses = function ({}: Props) {
    return (
        <div className={cx("wrapper")}>
            <Title
                title="Courses"
                subTitle="Come meet us in IRL. The Aleph Zero community is active across hackathons and events in the web3 space."
            />

            <div className="container">
                <div className={cx("inner")}>
                    {courses.map(function (course: CourseType, index: number) {
                        return (
                            <Course course={course} key={index} index={index} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Courses;
