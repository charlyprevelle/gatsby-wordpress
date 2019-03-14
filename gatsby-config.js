module.exports = {
  pathPrefix: `/gatsby-wordpress`,
  siteMetadata: {
    title: `Gatsby Wordpress`,
    subtitle: 'ddqdqdq',
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },




    /*
     * Gatsby's data processing layer begins with “source”
     * plugins. Here the site sources its data from Wordpress.
     */
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "https://gatsby.digitaldisguise.xyz",
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: false,
        excludedRoutes: [ // remove errors
          "/wp/v2/users/me", 
          "/wp/v2/themes",
          "/wp/v2/settings"
        ],
        // includedRoutes: [
        //   "**/categories",
        //   "**/posts",
        //   "**/pages",
        //   "**/media",
        //   "**/tags",
        //   "**/taxonomies",
        //   "**/users",
        // ],
        // // Blacklisted routes using glob patterns
        // excludedRoutes: ["**/posts/1456"],
        // normalizer: function({ entities }) {
        //   return entities
        // },
      },
    },
    
  ],
}


