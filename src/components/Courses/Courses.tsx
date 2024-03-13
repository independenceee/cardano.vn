import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classNames from "classnames/bind";
import Title from "@site/src/components/Title";
import styles from "./Courses.module.scss";
import { CourseType } from "@site/src/types/Generics";
import TabList from "../TabList";
import { Video } from "@site/src/types/Generics";
const cx = classNames.bind(styles);

type Props = {
    courses: CourseType[];
    videos: Video[];
};

const Courses = function ({ courses, videos }: Props) {
    const [videoURL, setVideoURL] = useState<string>(videos[0].url || "");
    const handleShowVideo = function (src: string) {
        setVideoURL(src);
    };
    return (
        <div className={cx("wrapper")}>
            <Title
                title="Courses"
                subTitle="Come meet us in IRL. The Aleph Zero community is active across hackathons and events in the web3 space."
            />

            <div className="container">
                <div className={cx("inner")}>
                    <section className={cx("courses-left")}>
                        <TabList tabs={courses} />
                    </section>
                    <section className={cx("courses-right")}>
                        <div className={cx("courses-right-list")}>
                            <ul className={cx("video-list")}>
                                {videos.map(({ id, name, url }) => (
                                    <li key={id} onClick={() => handleShowVideo(url)} className={cx("video-item-wrapper")}>
                                        <span>{name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={cx("video-wrapper")}>
                            <iframe
                                className={cx("video")}
                                src={videoURL}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen={false}
                            />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Courses;
