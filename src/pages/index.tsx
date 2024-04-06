import React from "react";
import Layout from "@theme/Layout";
import Home from "@site/src/pages/Home";

type Props = {};

const App = function ({ }: Props) {
    return (
        <Layout>
            <Home />
        </Layout>
    );
};

export default App;
