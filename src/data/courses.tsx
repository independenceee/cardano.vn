import React, { useEffect, useState } from "react";
import { CourseType } from "@site/src/types/Generics";
import classNames from "classnames/bind";
import GiscusComponent from "../components/app/GiscusComponent/GiscusComponent"
import AudioList from "../components/app/AudioList/AudioList"
import TableSheet from "@site/src/components/app/TableSheet/TableSheet";
import styles from "../css/custom.scss";
import axios from "axios";
import convertIframe from "../utils/convert-iframe";
import Thau_Hieu_Cardano from "./Thau_Hieu_Cardano";
import Smart_Contract from "./Smart_Contract";
import Tin_Tuc_Va_Cong_Dong from "./Tin_Tuc_Va_Cong_Dong";
import VideoList from "../components/app/VideoList";
const cx = classNames.bind(styles)




const courses: CourseType[] = [
    {
        id: 1,
        name: "Thấu hiểu cardano",
        Children: function () {
            return (
                <ul className={cx("video-list")}>
                    {Thau_Hieu_Cardano.map(({ id, name, url }) => (
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
        Children: function () {
            return (
                <ul className={cx("video-list")}>
                    {Smart_Contract.map(({ id, name, url }) => (
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
        Children: function () {
            return (
                <ul className={cx("video-list")}>
                    {Tin_Tuc_Va_Cong_Dong.map(({ id, name, url }) => (
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
        Children: function () {
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
        Children: function () {

            return (
                <VideoList sheetId="1PyAroxbm1dQ0r47ostCMp-4uIXblLnynSnYT9NWM2lU" sheetName="youtube" />
            )
        },
    },
];

export default courses;
