import React, { useEffect, useState } from 'react'
import className from "classnames/bind";
import styles from "./VideoList.module.scss"
import convertIframe from '@site/src/utils/convert-iframe';
import { get } from '@site/src/utils/http-requests';

const cx = className.bind(styles)
type Props = {
    url?: string
}

const VideoList = function ({ url = "/1PyAroxbm1dQ0r47ostCMp-4uIXblLnynSnYT9NWM2lU/values/youtube?key=AIzaSyBm44VZa9sLj5PpaWty_UCWzykTUbxy2js" }: Props) {
    const [videoURL, setVideoURL] = useState<string>("https://www.youtube.com/embed/UiY5-ycvM7w?si=Uc9PB7KaWDP7ddpe");
    const handleShowVideo = function (src: string) {
        setVideoURL(convertIframe(src));
    };

    const [videos, setVideos] = useState<any>([]);
    useEffect(function () {
        (async function () {
            try {
                const data = await get(url);
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
        <section className={cx("courses-right")} data-aos="fade-left">
            <div className={cx("courses-right-list")}>
                <ul className={cx("video-list")}>
                    {videos.map(function ({ title, link }, index: number) {
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
    )
}

export default VideoList