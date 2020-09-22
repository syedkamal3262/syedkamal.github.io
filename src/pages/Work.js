import React from "react"
import Layout from "../Layout/Layout"
import { StaticQuery, graphql } from "gatsby"
import Portfolio from "../components/Portfolio"
const Work = ({ data }) => {
  console.log(data)
  const workStyle = {
    width: "100%",
  }
  return (
    <Layout>
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
          <div className="projects" style={workStyle}>
            {data.allJavascriptFrontmatter.edges[0].node.frontmatter.portfolioItems.map(
              data => (
                <Portfolio key={data.title} data={data} />
              )
            )}
          </div>
        )}
      ></StaticQuery>
    </Layout>
  )
}

export default Work
