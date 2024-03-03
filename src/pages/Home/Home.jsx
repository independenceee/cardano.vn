import React from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss"
import Title from "../../components/Title/Title";
import Founder from "../../components/Founder";
import founders from "../../data/founders"


const cx = classNames.bind(styles);

const Home = function ({ }) {
    return (
        <main className={cx("wrapper")}>
            {/* <Service/> */}
            <section className={cx("background")}>
                <h2 className={cx("title")}>Cộng đồng Cardano Việt nam</h2>
                <p className={cx("sub-title")}>Vì một thế giới Phi tập trung hơn</p>
                <div className={cx("button")}>
                    <a className={cx("button-link")} href="">Learn More</a>
                    <a className={cx("button-link")} href="">Visit Course</a>
                </div>
            </section>
            <section className={cx("container")}>
                <Title
                    title={"Awesome Features"}
                    subTitle={"Replenish man have thing gathering lights yielding shall you"}
                />

                <div className={cx("features")}>
                    
                </div>
            </section>

            <section className={cx("container")}>
                <Title
                    title={"Course Features"}
                    subTitle={"Replenish man have thing gathering lights yielding shall you"}
                />

                <div className={cx("courses")}>
                    
                </div>
            </section>

            <section className={cx("container")}>
                <Title
                    title={"Community Experts"}
                    subTitle={"Replenish man have thing gathering lights yielding shall you"}
                />
                <div className={cx("founders")}>
                    {founders.map(function (founder, index) {
                        return (
                            <Founder
                                key={index}
                                name={founder.name}
                                description={founder.description}
                                image={founder.image}
                            />
                       )
                    })}
                </div>
            </section>
         </main>
    )
}

export default Home;