import React, { Component } from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'

class menu extends Component {

   render() {

      return (
         <StaticQuery
            query={ graphql`
               query {
                  allWordpressWpApiMenusMenusItems{
                     edges{
                        node{
                           id
                           name
                           items{
                              title
                              url
                              object_slug
                           }
                        }
                     }
                  }
               }
            `}

            render={ data => (
               <div>
                  <ul>
                     {  
                        data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map((item, index) => {
                           return <li key={index}><Link to={`/${item.object_slug}`}>{item.title}</Link></li>
                        })
                     }
                  </ul>
               </div>
            )}
         />
      )
   }
}

export default menu;