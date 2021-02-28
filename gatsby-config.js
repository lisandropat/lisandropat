module.exports = {
  siteMetadata: {
    title: `Lisandropat Visual Designer Portfolio`,
    description: `Hi, I'm Lisandro, multidisciplinary digital artist with a solid background in multimedia design. Welcome to my portfolio.`,
    author: `@ottokoi`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://lisandropat.com`,
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
        name: `Lisandropat Portfolio`,
        short_name: `Lisandropat`,
        start_url: `https://www.lisandropat.com`, // `/`
        background_color: `#FF9A85`,
        theme_color: `#FF9A85`,
        display: `minimal-ui`,
        icon: `src/images/pat.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline` // Enables Progressive Web App + Offline functionality, visit: https://gatsby.dev/offline
  ],
}
