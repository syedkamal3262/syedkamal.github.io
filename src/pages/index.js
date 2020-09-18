import React from "react"
import Layout from "../Layout/Layout"
import "../style/index.css"
const IndexPage = () => (
  <Layout>
    <div className="home__container">
      <h1 className="intro">
        Hi.
        <br />
        I'm <br />
        Syed Kamal
        <br />
        a frontend
        <br />
        developer
        <span className="blink">..</span>
      </h1>
      <button className="intro__button">Goto Work</button>
    </div>
  </Layout>
)

export default IndexPage
