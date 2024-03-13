import React, { ReactNode } from "react";
import classNames from "classnames/bind";

import styles from "./Course.module.scss";
import { CourseType } from "@site/src/types/Generics";
type Props = {
  course: CourseType;
};

const cx = classNames.bind(styles);

const Course = function ({ course }: Props) {
  return (
    <div className={cx("wrapper")}>
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
