import React from "react";
import classNames from "classnames/bind";
import styles from "./Service.module.scss"

const cx = classNames.bind(styles);

const Service = function () {
    return (
        <main className={cx("wrapper")}>
            <div className={cx("container")}>
                <section className={cx("image-container")}>

                </section>
                <section className={cx("title")}></section>
            </div>
        </main>
    )
}

export default Service;