import React from "react";
import classNames from "classnames/bind";
import { FacebookIcon, LinkedinIcon, RssIcon, TwitterIcon } from "../Icons";
import styles from "./Founder.module.scss";
import Logo from "../../assets/images/background.jpg"

const cx = classNames.bind(styles);

const Founder = function ({ username, description, facebookLink, image, twitterLink, linkedinLink,rrsLink }) {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("image-container")}>
                    <img className={cx("image")} src={Logo} alt="Member Avatar" />
                </div>
                <div className={cx("infomation")}>
                    <h3 className={cx("name")}>{username}</h3>
                    <span className={cx("description")}>{description}</span>
                    <div className={cx("social-media")}>
                        <ul className={cx("social-media-list")}>
                            {facebookLink && (
                                <li className={cx("social-media-item")}>
                                    <Link className={cx("social-media-link")} target="_blank" href={facebookLink}>
                                        <FacebookIcon className={cx("social-media-icon")} />
                                    </Link>
                                </li>
                            )}
                            {twitterLink && (
                                <li className={cx("social-media-item")}>
                                    <Link className={cx("social-media-link")} target="_blank" href={twitterLink}>
                                        <TwitterIcon className={cx("social-media-icon")} />
                                    </Link>
                                </li>
                            )}
                            {linkedinLink && (
                                <li className={cx("social-media-item")}>
                                    <Link className={cx("social-media-link")} href={linkedinLink}>
                                        <LinkedinIcon className={cx("social-media-icon")} />
                                    </Link>
                                </li>
                            )}
                            {rrsLink && (
                                <li className={cx("social-media-item")}>
                                    <Link className={cx("social-media-link")} href={rrsLink}>
                                        <RssIcon className={cx("social-media-icon")} />
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Founder;