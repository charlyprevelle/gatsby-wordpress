// import React, { Component } from "react"
// import { Link, graphql } from 'gatsby'
// import PropTypes from "prop-types"

// import Layout from '../components/layout'

// class ArchiveTemplate extends Component { 

//    createMarkup(html){
//       return { __html: html }
//    }

//    render() {
//       const data = this.props.data

//       return ( 
//          <Layout>
//             <h2>Archive page</h2>
//             <ul className="posts">
//                {data.allWordpressPost.edges.map(({node}, index) => {
//                   // console.log(node)
//                /**
//                 * Bien mettre ({ node }, index) et non pas juste "(node, index)"
//                 * Ca permet de rentrer directement dans le node, et évitera de faire node.node.title
//                 * 
//                 */
//                   return (
//                      <li key={index}>
//                         <Link to={`/post/${node.slug}`} className="posts__item">
//                            <div dangerouslySetInnerHTML={this.createMarkup(node.title)} />
//                         </Link>
//                         <div dangerouslySetInnerHTML={this.createMarkup(node.excerpt)} />
//                         <span style={{fontSize:14}}>{node.date}</span>
//                      </li>
//                   )
//                })}
//             </ul>
//          </Layout>
//       )
//    }
// }

// export default ArchiveTemplate

// export const ArchiveQuery = graphql`
//    query{
//       allWordpressPost{
//          edges{
//             node{
//                id
//                title
//                excerpt
//                slug
//                date(formatString: "MMMM DD, YYYY")
//             }  
//          }
//       }
//    }
// `


// ArchiveTemplate.propTypes = {
//    data: PropTypes.object.isRequired
// }