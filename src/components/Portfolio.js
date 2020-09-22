import React from "react"
import { Link } from "gatsby"
import "../style/Portfolio.css"
const Portfolio = ({ data }) => {
  console.log(data)
  return (
    <div className="portfolio">
      <div>
        <h1 className="portfolio__title">
          <Link to={data.hostLink}>{data.title}</Link>
        </h1>
        <p className="portfolio__desc">{data.desc}</p>
        <h3>
          <Link to={data.repoLink}>Repository</Link>
        </h3>
      </div>
    </div>
  )
}

export default Portfolio
