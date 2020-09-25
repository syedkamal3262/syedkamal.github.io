import React from "react"
import "../style/Portfolio.css"
import Slide from "react-reveal/Slide"

const Portfolio = ({ data }) => {
  return (
    <>
      <Slide top>
        <div className="portfolio">
          <div>
            <h1 className="portfolio__title">
              <a href={data.hostLink}>{data.title}</a>
            </h1>
            <p className="portfolio__desc">{data.desc}</p>
            <h3>
              <a href={data.repoLink}>Repository</a>
            </h3>
          </div>
        </div>
      </Slide>
    </>
  )
}

export default Portfolio
