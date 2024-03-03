"use client";

import React from "react";
import classNames from "classnames/bind";
import styles from "./About.module.scss";
import aboutUrl from "../../assets/images/about.png";
import CheckIcon from "../../assets/icons/check.svg";

const cx = classNames.bind(styles);

function Banner() {
  return (
    <section className={cx("about")}>
      <div className={cx("wrapper")}>
        <div className={cx("about-inner")}>
          <div data-aos="fade-left" className={cx("about-content")}>
            <h1 className={cx("about-title")}>
              <div className={cx("about-title-up")}>About us</div>
              <div className={cx("about-title-down")}>The crypto Industry</div>
            </h1>
            <div className={cx("about-intro")}>
              At vero eos et accusamus et iusto odio ignissimos ducimus qui
              blanditiis praesentium um deleniti atque corrupti.
            </div>
            <ul className={cx("description")}>
              <li className={cx("skill-description")}>
                <span className={cx("icon-wrapper")}>
                  <CheckIcon className={cx("icon-check")} />
                </span>
                <span className={cx("skill-text")}>Innovative web design</span>
              </li>
              <li className={cx("skill-description")}>
                <span className={cx("icon-wrapper")}>
                  <CheckIcon className={cx("icon-check")} />
                </span>
                <span className={cx("skill-text")}>Innovative web design</span>
              </li>
              <li className={cx("skill-description")}>
                <span className={cx("icon-wrapper")}>
                  <CheckIcon className={cx("icon-check")} />
                </span>
                <span className={cx("skill-text")}>Innovative web design</span>
              </li>
            </ul>
          </div>
          <div className={cx("about-image-wrapper")}>
            <div className={cx("about-image-container")}>
              <img src={aboutUrl} alt="about-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
