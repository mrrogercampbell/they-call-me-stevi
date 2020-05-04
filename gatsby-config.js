module.exports = {
  siteMetadata: {
    title: 'They Call Me Stevi',
    author: 'Roger Campbell II',
    description: 'From relationship advise to how to know if they are the right one. Stevi has the answers!',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/dancing-black-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
