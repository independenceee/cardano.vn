import React from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss"

const cx = classNames.bind(styles);

const Home = function ({ }) {
    return (
        <main className={cx("wrapper")}>
            <section className={cx("background")}>
                <h2 className={cx("title")}>Cộng đồng Cardano Việt nam</h2>
                <p className={cx("sub-title")}>Vì một thế giới Phi tập trung hơn</p>
                <div className={cx("button")}>
                    <a className={cx("button-link")} href="">Learn More</a>
                    <a className={cx("button-link")} href="">Visit Course</a>
                </div>
            </section>
            <section className={cx("features")}>

            </section>
         </main>
    )
}

export default Home;