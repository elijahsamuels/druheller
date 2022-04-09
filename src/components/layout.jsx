/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "./footer"
import "./layout.css"
import Menu from "./menu"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <div
        style={{
          maxWidth: 960,
        }}
      >
        <Menu />
				{console.log(data)}
        <div className="site">
          {/* <main>{children}</main> */}
          <div className="site-content">{children}</div>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
