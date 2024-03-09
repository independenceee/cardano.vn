import React from "react";
import { motion } from "framer-motion";
import className from "classnames/bind";
import styles from "./Circle.module.scss";

type Props = {};

const actions = {
    initial: { opacity: 0 },
    animate: {
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
    },
    trasition: {
        duration: 2.5,
    },
};

const cx = className.bind(styles);
const Circle = function ({}: Props) {
    return (
        <motion.div
            initial={actions.initial}
            animate={actions.animate}
            transition={actions.trasition}
            className={cx("wrapper")}
        >
            <div className={cx("container__one")} />
            <div className={cx("container__two")} />
            <div className={cx("container__three")} />
            <div className={cx("container__four")} />
            <div className={cx("container__five")} />
        </motion.div>
    );
};
export default Circle;
