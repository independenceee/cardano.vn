import React from "react";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import EmailIcon from "../../../assets/icons/mail.svg";
import ArrowIcon from "../../../assets/icons/arrow.svg";

import EventImage from "../../../assets/images/event.png";

const cx = classNames.bind(styles);

const Footer = function () {
  return (
    <footer className={cx("wrapper")}>
      <div className="container">
        <div className={cx("content-wrapper")}>
          <div className={cx("contact-via-email")}>
            <Heading as="h3">Be future-ready</Heading>
            <p>
              Get the latest from the Aleph Zero ecosystem and engineering
              updates, straight to your inbox.
            </p>
            <form>
              <div className={cx("contact-field")}>
                <input
                  type="email"
                  placeholder="Your email"
                  className={cx("email-input")}
                />
                <button type="submit" className={cx("button-subcribe")}>
                  <EmailIcon className={cx("icon-email")} />
                  Subcribe
                </button>
              </div>
              <div className={cx("checkbox-field")}>
                <input
                  className={cx("checkbox-input")}
                  type="checkbox"
                  id="check-input"
                />
                <label htmlFor="check-input">
                  Agree with the term and policy
                </label>
              </div>
            </form>
          </div>
          <div className={cx("comunity")}>
            <Heading as="h3">Cộng đồng</Heading>
            <ul className={cx("footer-column-list")}>
              <li className={cx("footer-item")}>
                <Link to={"/docs/intro.md"} className={"item-link"}>
                  Blockchain
                  <ArrowIcon className={cx("arrow-icon")} />
                </Link>
              </li>
              <li className={cx("footer-item")}>
                <Link to={"/docs/intro.md"} className={"item-link"}>
                  Blockchain
                  <ArrowIcon className={cx("arrow-icon")} />
                </Link>
              </li>
              <li className={cx("footer-item")}>
                <Link to={"/docs/intro.md"} className={"item-link"}>
                  Blockchain
                  <ArrowIcon className={cx("arrow-icon")} />
                </Link>
              </li>
              <li className={cx("footer-item")}>
                <Link to={"/docs/intro.md"} className={"item-link"}>
                  Blockchain
                  <ArrowIcon className={cx("arrow-icon")} />
                </Link>
              </li>
              <li className={cx("footer-item")}>
                <Link to={"/docs/intro.md"} className={"item-link"}>
                  Blockchain
                  <ArrowIcon className={cx("arrow-icon")} />
                </Link>
              </li>
            </ul>
          </div>
          <div className={cx("courses")}>
            <Heading as="h3">Khóa học</Heading>
            <ul className={cx("footer-column-list")}>
              <li className={cx("footer-item")}>
                <Link to={"/docs/intro.md"} className={"item-link"}>
                  Blockchain
                  <ArrowIcon className={cx("arrow-icon")} />
                </Link>
              </li>
              <li className={cx("footer-item")}>
                <Link to={"/docs/intro.md"} className={"item-link"}>
                  Blockchain
                  <ArrowIcon className={cx("arrow-icon")} />
                </Link>
              </li>
              <li className={cx("footer-item")}>
                <Link to={"/docs/intro.md"} className={"item-link"}>
                  Blockchain
                  <ArrowIcon className={cx("arrow-icon")} />
                </Link>
              </li>
              <li className={cx("footer-item")}>
                <Link to={"/docs/intro.md"} className={"item-link"}>
                  Blockchain
                  <ArrowIcon className={cx("arrow-icon")} />
                </Link>
              </li>
              <li className={cx("footer-item")}>
                <Link to={"/docs/intro.md"} className={"item-link"}>
                  Blockchain
                  <ArrowIcon className={cx("arrow-icon")} />
                </Link>
              </li>
            </ul>
          </div>
          <div className={cx("upcomming-events")}>
            <Heading as="h3">Sự kiện sắp diễn ra</Heading>
            <div className={cx("event-image-wrapper")}>
              <img src={EventImage} className={cx("event-image")} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={cx("copyright")}>
          <p className={cx("text")}>Copyright © 2024 - fimi.vn</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
