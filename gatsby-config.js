module.exports = {
  siteMetadata: {
    title: `Dru Heller Music`,
    description: `Official website for drummer, musician, composer, and bandleader Dru Heller.`,
    author: `shiba and samuels dev`,
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
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Roboto', 
          'muli\:400, 400i, 700, 700i',
          'open sans',
        ],
        display: 'swap',
      },
    },
		
    // {
    //   resolve: `gatsby-source-google-calendar`,
    //   options: {
    //     // this calendarID is for Elijah Samuels. Needs to update to Dru Heller. Delete this comment once the change has been made.
    //     calendarIds: [
    //     'https://calendar.google.com/calendar/embed?src=okdq5ar7qo7tauol6miki94rhs%40group.calendar.google.com',
    //     ],
    //     // options to retrieve the next 10 upcoming events
    //     timeMin: (new Date()).toISOString(),
    //     maxResults: 10,
    //     singleEvents: true,
    //     orderBy: 'startTime',
    //   }
    //   },
  
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
