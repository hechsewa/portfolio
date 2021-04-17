module.exports = {
  siteMetadata: {
    title: `Ewa Hechsman Portfolio`,
    description: `Ewa Hechsman is a Visual and Graphic Designer from Poland, Cracow. She's worked with companies like Archdesk, Synthetify, Swerus Chris, Powrót z U, Ekogmina, and many more.`,
    author: `@hechsewa`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `ewa-hechsman-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#fefefe`,
        theme_color: `#fefefe`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
