import React, { Component }  from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'


import Header from "./header"
import Menu from './menu'

import "./layout.css"

// import SEO from "../utils/seo"

export default class Layout extends Component {
   render() {
      return(
         <StaticQuery
            query={ graphql`
               query siteQuery {
                  site {
                     siteMetadata {
                        title
                     }
                  }
               }
            `}

            render={data => (
               <div className={`${this.props.location} container`}>
                  { /* <SEO title="Heya" keywords={[``]} /> */}
                  <Header siteTitle={data.site.siteMetadata.title} />
                  <div
                     style={{
                        margin: `0 auto`,
                        maxWidth: 960,
                        padding: `0px 1.0875rem 1.45rem`,
                        paddingTop: 0,
                     }}
                  >
                     <Menu />
                     { this.props.children }
                  </div>
               </div>
            )}
         />
      )
   }
}

Layout.propTypes = {
   location: PropTypes.string,
   children: PropTypes.node.isRequired,
}

Layout.defaultLocation = {
   location: 'page',
}