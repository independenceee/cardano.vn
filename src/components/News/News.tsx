import React from "react";
import classNames from "classnames/bind";
import styles from "./News.module.scss";
type Props = {};

const cx = classNames.bind(styles);

const News = function () {
    return (
        <section className={cx("news", "container")}>
            <div className={cx("wrapper")}>
                <div className={cx("wrapper-inner")}>
                    <section className={cx("left")}>left</section>
                    <div className={cx("right")}>
                        <div className={cx("list-wrapper")}>list</div>
                        <div
                            className={cx("video-wrapper")}
                            data-aos="fade-right"
                        >
                            <iframe
                                className={cx("video")}
                                src="https://www.youtube.com/embed/UiY5-ycvM7w?si=Uc9PB7KaWDP7ddpe"
                                title="YouTube video player"
                                frameBorder={0}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;
