module.exports = {
    pathPrefix: "/public",
    plugins: [
        {
            resolve: `gatsby-theme-blog`,
            options: {},
        },
    ],
    // Customize your site metadata:
    siteMetadata: {
        title: `Wasuken Tech Blog`,
        author: `wasuken`,
        description: `技術系の記事を入れるとこ`,
        social: [
            {
                name: `github`,
                url: `https://github.com/wasuken/tech-blog`,
            },
        ],
    },
}
