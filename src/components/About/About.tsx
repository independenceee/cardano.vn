import React from "react";
import styles from "./About.module.scss";
import classNames from "classnames/bind";
import Title from "../Title";

const cx = classNames.bind(styles);

const About = function () {
  return (
    <section className={cx("about", "container")}>
      <div className={cx("wrapper")}>
        <Title title="Cardano" subTitle="Cộng đồng tại Việt Nam" />
        <div className={cx("wrapper-inner")}>
          <div className={cx("image-wrapper")} data-aos="fade-right">
            <img src={""} className={cx("about-background")} alt="" />
          </div>
          <div className={cx("content-wrapper")} data-aos="fade-left">
            <div className={cx("content-header")}>
              <h2 className={cx("title")}>About Cryptoz</h2>
              <p className={cx("description")}>
                About Cryptoz We Translate Your Dream Into Reality
              </p>
            </div>
            <div className={cx("content-body")}>
              <div className={cx("content-body-description")}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et tempora incidunt ut labore
                et dolore magnam aliquam quaerat voluptatem.
              </div>
              <ul className={cx("content-list")}>
                <li className={cx("content-list-item")}>
                  <div className={cx("list-icon-wrapper")}>
                    <img src={""} width={24} height={24} alt="list-icon" />
                  </div>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur.
                </li>
                <li className={cx("content-list-item")}>
                  <div className={cx("list-icon-wrapper")}>
                    <img src={""} width={24} height={24} alt="list-icon" />
                  </div>
                  He oluptatem quia voluptas sit aspernatur
                </li>
                <li className={cx("content-list-item")}>
                  <div className={cx("list-icon-wrapper")}>
                    <img src={""} width={24} height={24} alt="list-icon" />
                  </div>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
