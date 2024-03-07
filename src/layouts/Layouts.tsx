import React, { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./Course.module.scss";

type Props = {
    children: ReactNode;
};

const Layouts = function ({ children }: Props) {
    return <main>{children}</main>;
};

export default Layouts;
