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
    }
  ],
}
