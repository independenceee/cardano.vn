import React from "react";
import classNames from "classnames/bind";
import Button from "../Button"
import styles from "./Service.module.scss"

const cx = classNames.bind(styles);

const Service = function ({ link, title ,image , links}) {
    return (
        <main className={cx("wrapper")}>
            <div className={cx("container")}>
                <section className={cx("image-container")}>
                   <img className={cx("image")} src={image} alt="" />
                </section>
                <section className={cx("title")}>{title}</section>
                <section className={cx("links")}>
                    {links.map(function (link, index) {
                        return (
                            <a key={index} className={cx("link")} href="">
                                {link.name}
                            </a>
                        )
                    }) }
                </section>
                <section className={cx("button-wrapper")}>
                    <Button className={cx("button")} href={link}>
                        Learn More
                    </Button>
                </section>
            </div>
        </main>
    )
}

export default Service;