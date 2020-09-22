import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { StaticQuery, graphql } from "gatsby"
import "./Layout.css"

const Layout = ({ children: layoutContent }) => {
  return (
    <div className="app">
      <StaticQuery
        query={graphql`
          {
            site {
              siteMetadata {
                author
                description
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Header data={data.site.siteMetadata} />
            <div className="app_content">{layoutContent}</div>
            <Footer data={data.site.siteMetadata} />
          </>
        )}
      ></StaticQuery>
    </div>
  )
}

export default Layout
