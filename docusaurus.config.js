const config = {
    title: "ADA | Cộng đồng Cardano Việt Nam",
    tagline: "Dinosaurs are cool",
    favicon: "img/favicon.ico",
    url: "https://your-docusaurus-site.example.com",
    baseUrl: "/",
    organizationName: "facebook",
    projectName: "docusaurus",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },
    plugins: ["docusaurus-plugin-sass"],
    presets: [
        [
            "classic",
            {
                blog: {
                    showReadingTime: true,
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                theme: {
                    customCss: "./src/css/custom.scss",
                },
            },
        ],
    ],
    markdown:{
        format:'detect'
    }
};

export default config;
