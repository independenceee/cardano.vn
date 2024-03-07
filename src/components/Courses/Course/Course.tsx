import React, { ReactNode } from "react";
import classNames from "classnames/bind";

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
      <div className={cx("card")}>
        <section className={cx("image-container")}>
          <img className={cx("image")} src={course.image} alt="" />
        </section>
        <section className={cx("content")}>
          <h2 className={cx("title")}>{course.title}</h2>
          <p className={cx("description")}>{course.description}</p>
        </section>
      </div>
    </div>
  );
};

export default Course;
