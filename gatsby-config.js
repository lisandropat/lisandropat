const config = require("./data/SiteConfig");

require('dotenv').config({
	path: `.env`
})

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    author: `@${config.authorTwitter}`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    "@chakra-ui/gatsby-plugin",
    `gatsby-plugin-scroll-reveal`,
    'gatsby-plugin-page-transitions',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: config.siteUrl,
      },
    },
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
        name: config.siteTitle,
        short_name: config.siteTitle,
        start_url: config.siteUrl, // `/`
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: `minimal-ui`,
        icon: `src/images/pat.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: config.themeColor,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `446560615`,
      },
    },
    {
      resolve: `gatsby-source-dribbble`,
      options: {
        access_token: `${process.env.ACCESS_TOKEN}` // https://matthewelsom.com/blog/display-shots-on-webpage-with-dribbble-v2-api.html
      }
    },
    `gatsby-plugin-offline` // Enables Progressive Web App + Offline functionality, visit: https://gatsby.dev/offline
  ],
}
