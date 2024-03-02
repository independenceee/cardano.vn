import React from "react";
import classNames from "classnames/bind";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./DefaultLayout.module.scss"

const cx = classNames.bind(styles);

const DefaultLayout = function ( { children } ) {
    return (
        <main>
            <Header/>
                <div>
                    {children}
                </div>
            <Footer/>
        </main>
    )
}

export default DefaultLayout;