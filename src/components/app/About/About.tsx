import React from "react";
import styles from "./About.module.scss";
import classNames from "classnames/bind";
import Title from "@site/src/components/theme/Title";
import { CheckIcon } from "@site/src/assets";
import convertIframe from "@site/src/utils/convert-iframe";

const cx = classNames.bind(styles);

type Props = {
    url: string
    title: string
    subTitle: string
    description: string
    firstTask: string;
    secondTask: string;
    thirdTask: string
};
const About = function ({ url, title, subTitle, description, firstTask, secondTask, thirdTask }: Props) {
    return (
        <section className={cx("about", "container")}>
            <div className={cx("wrapper")}>
                <Title title="Cardano" subTitle="Cộng đồng tại Việt Nam" />
                <div className={cx("wrapper-inner")}>
                    <div className={cx("video-wrapper")} >
                        <iframe
                            className={cx("video")}
                            src={convertIframe(url)}
                            title="YouTube video player"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen={false}
                        />
                    </div>
                    <div className={cx("content-wrapper")}>
                        <div className={cx("content-header")}>
                            <h2 className={cx("title")}>{title}</h2>
                            <p className={cx("description")}>
                                {subTitle}
                            </p>
                        </div>
                        <div className={cx("content-body")}>
                            <div className={cx("content-body-description")}>
                                {description}
                            </div>
                            <ul className={cx("content-list")}>
                                <li className={cx("content-list-item")}>
                                    <div className={cx("list-icon-wrapper")}>
                                        <CheckIcon />
                                    </div>
                                    {firstTask}
                                </li>
                                <li className={cx("content-list-item")}>
                                    <div className={cx("list-icon-wrapper")}>
                                        <CheckIcon />
                                    </div>
                                    {secondTask}
                                </li>
                                <li className={cx("content-list-item")}>
                                    <div className={cx("list-icon-wrapper")}>
                                        <CheckIcon />
                                    </div>
                                    {thirdTask}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
