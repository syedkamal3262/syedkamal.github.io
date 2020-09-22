import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../Layout/Layout"
import "../style/Blog.css"
const Blog = ({
  data: {
    allDevArticles: { edges },
  },
}) => {
  console.log(edges)

  return (
    <Layout>
      <div className="blogs">
        <h1>Blogs.. </h1>
        <p>when i find something useful write it down at Dev.to</p>
        {edges.map(edge => (
          <div key={edge.node.article.id} className="blog">
            <Link to={`https://dev.to/syedkamal3262/`}>
              <h1> {edge.node.article.title}</h1>
              <p>{edge.node.article.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
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
