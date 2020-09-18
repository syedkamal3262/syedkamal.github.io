import React from "react"
import Layout from "../Layout/Layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
const Work = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      {/* <div>
            <h1>work</h1>
            <ul>
                <li>TVShop</li>
                <li>Amazon Clone</li>
                <li>Covid 19 Tracker</li>
                <li>WhatsApp Clone</li>
                <li>Netflix Clone</li>
                <li>Do Something Using Redux</li>
            </ul>


            https://netflix-clone-2ba22.firebaseapp.com/
            
          </div> */}
      <div className="projects">
        <div className="project">
          {data.allFile.edges.map(a => (
            <div key={a.node.base}>
              <Link to="">
                <Img
                  durationFadeIn={7000}
                  style={{ width: "90vw", height: "auto" }}
                  fluid={a.node.childImageSharp.fluid}
                  alt={a.node.base}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
export const query = graphql`
  {
    allFile(filter: { extension: { regex: "/(png)/" } }) {
      edges {
        node {
          base
          childImageSharp {
            fluid {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`

export default Work
