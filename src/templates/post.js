import React, { Component } from "react"
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'

class PostTemplate extends Component { 
   render() {
      const post = this.props.data.wordpressPost
      const resolutions = post.featured_media ? post.featured_media.localFile.childImageSharp.resolutions : null
      
      /**
       * https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-wordpress
       * CTRL + F // Check for "flexible content" for more complicated queries
       * 
       */
      let social
      if(post.acf){
         social = `<div>`
         if(post.acf.facebook){
            social += `<h3>Facebook</h3> ${post.acf.facebook}`
         }
         if(post.acf.twitter){ 
            social += `<h3>Twitter</h3> ${post.acf.twitter}`
         }
         social += `</div>`
      }

      return ( 
         <Layout>
            {resolutions &&
               <div>
                  <Img resolutions={resolutions} />
               </div>
            }

            <h1 dangerouslySetInnerHTML={{ __html: post.title }}></h1>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            <div dangerouslySetInnerHTML={{ __html: social }} />

         </Layout>
      )
   }
}

export default PostTemplate

/**
 * https://graphql.org/learn/schema/
 * String! : the field is non-nullable
 * 
 * https://www.gatsbyjs.org/docs/graphql-reference/
 * 
 * eq: equal, ne: not equal 
 * regex: regular expression. Note that backslashes need to be escaped twice, so /\w+/ needs to be written as "/\\\\w+/".
 * glob: global, allows to use wildcard * which acts as a placeholder for any non-empty string
 * in: in array, nin: not in array
 * gt: greater than, gte: greater than or equal - than given value
 * lt: less than, lte: less than or equal - than given value
 * elemMatch: element match, the field you are filtering will return an array of elements, on which you can apply a filter using the previous operators
 * 
 */

export const PostQuery = graphql`
   query ($id: String!){
      wordpressPost(id: { eq: $id }){
         title
         content
         slug
         date(formatString: "MMMM DD, YYYY")
         acf{
            facebook
            twitter
         }
         featured_media{
            localFile{
               childImageSharp{
                  resolutions(width:300, height:300){
                     src
                     width
                     height
                  }
               }
            }
         }
      }

      site{
         siteMetadata{
            title
            subtitle
         }
      }
   }
`