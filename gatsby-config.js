module.exports = {
    siteMetadata: {
        title: "Tafpi Blog",
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/blog/`,
            },
        },
        // "gatsby-transformer-sharp"
    ],
};
