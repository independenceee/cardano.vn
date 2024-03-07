import React, { ReactNode } from "react";
import classNames from "classnames/bind";

import styles from "./Course.module.scss";
type Props = {
    symbol?: string;
    title: string;
    description: string;
    dateTime: string;
    places: string;
};

const cx = classNames.bind(styles);

const CourseItem = function ({
    symbol,
    title,
    description,
    dateTime,
    places,
}: Props) {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <section className={cx("image-container")}>
                    <img className={cx("image")} src="" alt="" />
                </section>
                <section className={cx("title-container")}>
                    <p className={cx("title-symbol")}>
                        
                    </p>
                </section>
            </div>
        </div>
    );
};

export default CourseItem;
