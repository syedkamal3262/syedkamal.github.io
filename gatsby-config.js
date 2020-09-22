module.exports = {
  siteMetadata: {
    title: `Syed Kamal`,
    description: `portfolio`,
    author: `@syedKamal3262`,
    twitterHandle: `https://twitter.com/flexdinesh`,
    githubHandle: `https://github.com/flexdinesh`,
    stackOverflowHandle: `https://stackoverflow.com/story/flexdinesh`,
    devToHandle: `https://dev.to/flexdinesh`,
    mediumHandle: `https://medium.com/@flexdinesh`,
    linkedInHandle: `https://www.linkedin.com/in/dineshpandiyan/`,
    siteUrl: `https://dineshpandiyan.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-dev",
      options: {
        // This is your username on Dev.to
        username: "syedkamal3262",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-javascript-frontmatter`,
  ],
}
