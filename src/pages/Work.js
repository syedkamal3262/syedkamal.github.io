import React from "react"
import Layout from "../Layout/Layout"
import { StaticQuery, graphql } from "gatsby"
import Portfolio from "../components/Portfolio"
import "../style/Work.css"

const Work = ({ data }) => {
  return (
    <Layout>
      <div className="work">
        <StaticQuery
          query={graphql`
            {
              allJavascriptFrontmatter {
                edges {
                  node {
                    frontmatter {
                      portfolioItems {
                        title
                        desc
                        hostLink
                        repoLink
                      }
                    }
                  }
                }
              }
            }
          `}
          render={data => (
            <div className="projects">
              {data.allJavascriptFrontmatter.edges[0].node.frontmatter.portfolioItems.map(
                data => (
                  <Portfolio key={data.title} data={data} />
                )
              )}
            </div>
          )}
        ></StaticQuery>
      </div>
    </Layout>
  )
}

export default Work
