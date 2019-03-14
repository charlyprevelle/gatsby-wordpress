import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/layout'

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}

const IndexPage = ({ pageContext }) => {
  const { group, index, first, last, pageCount } = pageContext
  const previousUrl = index - 1 === 1 ? '' : (index - 1).toString()
  const nextUrl = (index + 1).toString()

  return (
    <Layout>
      <h4>{pageCount} Posts</h4>
      
      {group.map(({ node }) => (
         <li key={node.slug}>
            {/*node.featured_media && node.featured_media.localFile && node.featured_media.localFile.childImageSharp.resize &&
              <img src={node.featured_media.localFile.childImageSharp.resize.src} alt=""/>
            */}
            <Link to={`post/${node.slug}`} className="posts__item">
               <div dangerouslySetInnerHTML={{ __html: node.title }} />
            </Link>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            <span style={{fontSize:14}}>{node.date}</span>
         </li>
      ))}

      <div className="previousLink">
        <NavLink test={first} url={`/archive/${previousUrl}`} text="Go to Previous Page" />
      </div>
      <div className="nextLink">
        <NavLink test={last} url={`/archive/${nextUrl}`} text="Go to Next Page" />
      </div>
    </Layout>
  )
}
export default IndexPage