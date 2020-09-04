import React from 'react'
import Layout from "../Layout/Layout"
import {graphql } from "gatsby"
import Img from "gatsby-image"
const About = ({ data }) =>{
    return (
        <Layout>
        <div>
            {data.allFile.edges.map(a=>
            <div key={a.node.base}>
            <Img 
            durationFadeIn={7000}
            style={{width:'90vw',height:'auto'}}
            fluid={a.node.childImageSharp.fluid} />
            </div>
            )}
        </div>
        </Layout>
    )
}

export const query = graphql`
{
    allFile(filter: {extension: {regex: "/(jpg)/"}}) {
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

export default About
