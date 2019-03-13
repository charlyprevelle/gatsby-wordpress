const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
      {
         allWordpressPage {
            edges {
               node {
                  id
                  slug
                  status
                  template
                  slug
               }
            }
         }

        allWordpressPost {
          edges {
              node {
                id
                slug
                status
                template
                format
                slug
                categories{
                  name
                }
              }
          }
        }
    }
  `)




  if (result.errors) {
    throw new Error(result.errors)
  }

  const { allWordpressPage, allWordpressPost } = result.data
  const pageTemplate = path.resolve(`./src/templates/page.js`)

  allWordpressPage.edges.map(edge => {
    createPage({
      // Each page is required to have a `path` as well as a template component. The `context` is optional but is often 
      // necessary so the template can query data specific to each page.
      path: `/${edge.node.slug}/`,
      component: slash(pageTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })



  
  
  allWordpressPost.edges.map(edge => {

    let postTemplate
    const defined = path.resolve(`./src/templates/${edge.node.categories[0].name}.js`),
          notdefined = path.resolve(`./src/templates/post.js`)

    edge.node.categories[0].name !== "presse" ? postTemplate = notdefined : postTemplate = defined

    createPage({
      path: `/${edge.node.categories[0].name}/${edge.node.slug}/`,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })
}