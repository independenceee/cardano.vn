import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classNames from "classnames/bind";
import Title from "@site/src/components/theme/Title";
import styles from "./Courses.module.scss";
import { CourseType } from "@site/src/types/Generics";
import TabList from "@site/src/components/app/TabList";
import convertIframe from "@site/src/utils/convert-iframe";
import { get } from "@site/src/utils/http-requests";
import VideoList from "@site/src/components/app/VideoList";
import GiscusComponent from "../GiscusComponent";
import TableSheet from "../TableSheet";
import AudioList from "../AudioList";
const cx = classNames.bind(styles);

type Props = {
    courses: CourseType[];
    video: {
        sheetId: string
        sheetName: string
    }
};

const Courses = function ({ courses, video: { sheetId, sheetName } }: Props) {
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
                    <VideoList sheetId={sheetId} sheetName={sheetName} />
                </div>
            </div>
        </div>
    );
};

export default Courses;
