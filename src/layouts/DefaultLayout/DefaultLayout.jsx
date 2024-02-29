import React from "react";
import classNames from "classnames/bind";
import Header from "../components/Header";


const DefaultLayout = function ({children}) {
    return (
        <div>
            <Header/>
            {children}
        </div>
    )
}

export default DefaultLayout;