const path = require(`path`);
const slash = require(`slash`);
const queries = require('./gatsby-queries.js')
const createPaginatedPages = require('gatsby-paginate')



exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

   return new Promise((resolve, reject) => {

      const pageTemplate = path.resolve("./src/templates/page.js")
      const postTemplate = path.resolve("./src/templates/post.js")

      resolve(
         graphql(queries).then(result => {
            if (result.errors) reject(result.errors)
            
            const pages = result.data.allWordpressPage.edges
            pages.map(edge => {
               createPage({
                  path: `/${edge.node.slug}/`,
                  component: slash(pageTemplate),
                  context: {
                     id: edge.node.id,
                  }
               })
            })
         
            
            const posts = result.data.allWordpressPost.edges
            // pagination
            createPaginatedPages({
               edges: posts,
               createPage: createPage,
               pageTemplate: 'src/templates/archive.js',
               pageLength: 2, // posts per page
               pathPrefix: 'archive',
               // buildPath: (index, pathPrefix) =>
               //   index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}`, // This is optional and this is the default
            })

            // single post template
            posts.map(edge => {
               createPage({
                  path: `/post/${edge.node.slug}/`,
                  component: slash(postTemplate),
                  context: {
                     id: edge.node.id,
                  },
               })
            })

            
         }) // end graphql(queries)
      ) // end resolve
   }) // end Promise
}