import React from "react"
import { graphql } from "gatsby"
import Layout from "../Layout/Layout"

const Blog = ({ data : {allDevArticles :{edges}}}) => {


  
return(<Layout><div>{edges[0].node.article.title}</div></Layout>)


}
export const query = graphql`
  {
    allDevArticles {
      edges {
        node {
          article {
            id
            title
            description
          }
        }
      }
    }
  }
`

export default Blog
