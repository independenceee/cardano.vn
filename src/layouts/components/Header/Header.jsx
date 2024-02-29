import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss"
import Logo from "../../../assets/images/logo.png"

const cx = classNames.bind(styles)

const Header = function () {
    return (
        <header className={cx("wrapper")}>
            <section className={cx("logo-container")}>
                <img className={cx("logo-image")} src={Logo} alt="" />
                <span className={cx("logo-name")}>Cardano Việt Nam</span>
            </section>
            <section className={cx("navigation")}>
                <ul className={cx("navigation-list")}>
                    <li className={cx("navigation-item")}>
                        <a className={cx("navigation-link")} href="">Home</a>
                    </li>
                    <li className={cx("navigation-item")}>
                        <a className={cx("navigation-link")} href="">Cardano 360</a>
                    </li>
                    <li className={cx("navigation-item")}>
                        <a className={cx("navigation-link")} href="">Smart contract</a>
                    </li>
                    <li className={cx("navigation-item")}>
                        <a className={cx("navigation-link")} href="">News</a>
                    </li>
                    <li className={cx("navigation-item")}>
                        <a className={cx("navigation-link")} href="">You need to know</a>
                    </li>
                </ul>
            </section>
        </header>
    )
};

export default Header;
