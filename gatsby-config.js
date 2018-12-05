module.exports = {
  siteMetadata: {
    title: 'MarioPlan',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/project/*`] },
    },
    {
      resolve: 'gatsby-source-firestore',
      options: {
        credential: './fb-service-account-creds.json',
        types: [
          {
            type: 'Project',
            collection: 'projects',
            map: doc => ({
              title: doc.title,
              content: doc.content,
              authorFirstName: doc.authorFirstName,
              authorLastName: doc.authorLastName,
              createdAt: doc.createdAt,
            }),
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
}
