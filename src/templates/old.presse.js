// import React, { Component } from "react"
// import { graphql } from 'gatsby'

// import Layout from '../components/layout'

// class PageTemplate extends Component { 
//    render() {
//       const currentPost = this.props.data.wordpressPost

//       return ( 
//          <Layout>
//             <h1 dangerouslySetInnerHTML={{ __html: currentPost.title }}></h1>
//             <div dangerouslySetInnerHTML={{ __html: currentPost.content }}></div>
//          </Layout>
//       )
//    }
// }

// export default PageTemplate

// /**
//  * https://graphql.org/learn/schema/
//  * String! : the field is non-nullable
//  * 
//  * https://www.gatsbyjs.org/docs/graphql-reference/
//  * 
//  * eq: equal, ne: not equal 
//  * regex: regular expression. Note that backslashes need to be escaped twice, so /\w+/ needs to be written as "/\\\\w+/".
//  * glob: global, allows to use wildcard * which acts as a placeholder for any non-empty string
//  * in: in array, nin: not in array
//  * gt: greater than, gte: greater than or equal - than given value
//  * lt: less than, lte: less than or equal - than given value
//  * elemMatch: element match, the field you are filtering will return an array of elements, on which you can apply a filter using the previous operators
//  * 
//  */



// export const PostQuery = graphql`
//    query ($id: String!){
//       wordpressPost(id: { eq: $id }){
//          title
//          content
//          slug
//          date(formatString: "MMMM DD, YYYY")
//       }

//       site{
//          siteMetadata{
//             title
//             subtitle
//          }
//       }
//    }
// `

// // allWordpressPost(filter: {categories: {elemMatch: {name: {eq: "presse"}}}}) {
// //    edges {
// //      node {
// //        id
// //      }
// //    }
// //  }