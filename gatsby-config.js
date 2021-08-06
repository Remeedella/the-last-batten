module.exports = {
  siteMetadata: {
    title: "The Last Batten",
    siteUrl: "https://www.thelastbatten.com",
    description: "the last batten photography website",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",// Needed for dynamic images
    "react-dom", 
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Bebas Neue`,
          `source sans pro\:200,300,400`, // you can also specify font weights and styles
          `Parisienne`,
        ],
        display: 'swap'
      }
    }
    
  ],
  
};

