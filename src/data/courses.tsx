import React, { useEffect, useState } from "react";
import { CourseType } from "@site/src/types/Generics";
import classNames from "classnames/bind";
import GiscusComponent from "../components/app/GiscusComponent"
import AudioList from "../components/app/AudioList"
import AudioPlayer from "../components/app/AudioPlayer"
import TableSheet from "@site/src/components/app/TableSheet";
import styles from "../css/custom.scss";
import Link from "@docusaurus/Link";
import axios from "axios";
import convertIframe from "../utils/convert-iframe";
const cx = classNames.bind(styles)


type Props = {
    videos?: any
}

const courses: CourseType[] = [
    {
        id: 1,
        name: "Thấu hiểu cardano",
        Children: function ({ videos }: Props) {
            return (
                <ul className={cx("video-list")}>
                    {videos.map(({ id, name, url }) => (
                        <a href={url} key={id} className={cx("video-item-wrapper")}>
                            <span className={cx("box")} />
                            <span>{name}</span>
                        </a>
                    ))}

                </ul>
            )
        },
    },
    {
        id: 2,
        name: "Smart Contract",
        Children: function ({ videos }: Props) {
            return (
                <ul className={cx("video-list")}>
                    {videos.map(({ id, name, url }) => (
                        <li key={id} className={cx("video-item-wrapper")}>
                            <span className={cx("box")} />
                            <span>{name}</span>
                        </li>
                    ))}

                </ul>
            )
        },
    },
    {
        id: 3,
        name: "Tin tức & Cộng đồng",
        Children: function ({ videos }: Props) {
            return (
                <ul className={cx("video-list")}>
                    {videos.map(({ id, name, url }) => (
                        <li key={id} className={cx("video-item-wrapper")}>
                            <span className={cx("box")} />
                            <span>{name}</span>
                        </li>
                    ))}

                </ul>
            )
        },
    },
    {
        id: 4,
        name: "Bình luận",
        Children: function () {
            return (
                <ul className={cx("video-list")}>
                    <GiscusComponent />
                </ul>
            )
        },
    },
    {
        id: 5,
        name: "Audio",
        Children: function () {
            return (
                <ul className={cx("video-list")}>
                    <AudioList sheetId="1PyAroxbm1dQ0r47ostCMp-4uIXblLnynSnYT9NWM2lU" sheetName="audio" range="A1:G5" />
                </ul>
            )
        },
    },
    {
        id: 6,
        name: "Table Sheet",
        Children: function ({ videos }: Props) {
            return (
                <ul className={cx("video-list")}>
                    <TableSheet className={cx("table")} sheetId="1PyAroxbm1dQ0r47ostCMp-4uIXblLnynSnYT9NWM2lU" sheetName="table" range="A1:G5" />
                </ul>
            )
        },
    },
    {
        id: 7,
        name: "Videos",
        Children: function ({ }: Props) {
            const [videoURL, setVideoURL] = useState<string>("https://www.youtube.com/embed/UiY5-ycvM7w?si=Uc9PB7KaWDP7ddpe");
            const handleShowVideo = function (src: string) {
                setVideoURL(convertIframe(src));
            };

            const [videos, setVideos] = useState<any>([]);
            useEffect(function () {
                (async function () {
                    try {
                        const response = await axios.get(
                            "https://sheets.googleapis.com/v4/spreadsheets/1PyAroxbm1dQ0r47ostCMp-4uIXblLnynSnYT9NWM2lU/values/youtube?key=AIzaSyBm44VZa9sLj5PpaWty_UCWzykTUbxy2js",
                        );

                        const data = response.data;

                        const playlist = data.values.slice(1).map((row, rowIndex) => {
                            return {
                                key: rowIndex.toString(),
                                date: row[0],
                                title: row[1],
                                link: row[2],
                                abstract: row[3],
                            };
                        });

                        console.log(playlist);
                        setVideos(playlist);
                    } catch (error) {
                        console.log(error);
                    }
                })();
            }, []);
            return (
                <ul className={cx("video-list")}>
                    <section className={cx("courses-right")} data-aos="fade-left">
                        <div className={cx("video-wrapper")}>
                            <iframe
                                className={cx("video")}
                                src={videoURL}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen={false}
                            />
                        </div>
                        <div className={cx("courses-right-list")}>
                            <ul className={cx("video-list")}>
                                {videos.map(function ({ title, link }, index: number) {
                                    console.log(link);
                                    return (
                                        <li key={index} onClick={() => handleShowVideo(link)} className={cx("video-item-wrapper")}>
                                            <span className={cx("box")} />
                                            <span>{title}</span>
                                            <span className={cx("play-icon-wrapper")}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    width={20}
                                                    height={20}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                                                    />
                                                </svg>
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                    </section>
                </ul>
            )
        },
    },
];

export default courses;
