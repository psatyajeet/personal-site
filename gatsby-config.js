module.exports = {
  siteMetadata: {
    title: `Satyajeet Pal`,
    description: `Personal blog.`,
    author: `@psatyajeet`,
    siteUrl: `https://www.satyajeetpal.com/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 300,
            },
          },
          {
            resolve: `gatsby-remark-image-attributes`,
            options: {
              // ?Boolean=true
              //   If true (the default), all CSS
              //   property names will be recognized
              //   as styleAttribute.
              styleAttributes: true,

              // ?Boolean=false
              //   If true, all attributes that
              //   aren't styleAttributes, will be
              //   added as data-* attributes to the
              //   image.
              dataAttributes: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-feed`,
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
        name: `personal-site`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Pal 2.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
}
