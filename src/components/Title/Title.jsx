import React from "react"
import classNames from "classnames/bind"
import styles from "./Title.module.scss";

const cx = classNames.bind(styles)

const Title = function ( { title, subTitle } ) {
    return (
        <div classNames={cx("wrapper")}>
            <h1 className={cx("title")}>{title}</h1>
            <p className={cx("sub-title")}>{subTitle}</p>
        </div>
    )
}

export default Title