module.exports = {
  siteMetadata: {
    title: 'Lindell Carter - tenor',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        transpileOnly: true,
        compilerOptions: {
          target: `esnext`,
          experimentalDecorators: true,
          jsx: `react`
        }
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'about-pages',
        path: `${__dirname}/src/pages/about/`
      }
    },
    'gatsby-transformer-json'
  ],
}
