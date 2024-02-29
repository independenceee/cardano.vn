import React from "react";
import GlobalStyles from "../components/GlobalStyles";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "./Home";

const App = function () {
    return (
        <GlobalStyles>
            <DefaultLayout>
                <Home />
            </DefaultLayout>
        </GlobalStyles>
    );
};

export default App;
