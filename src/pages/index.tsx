import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Events from "@site/src/components/Events";
import Courses from "@site/src/components/Courses";
import Hero from "@site/src/components/Hero";

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`ADA | ${siteConfig.title}`}
            description="Description will go into a meta tag in"
        >
            <section>
                <Hero />
            </section>
            <section>
                <Courses />
            </section>
            <section>
                <Events />
            </section>
        </Layout>
    );
}
