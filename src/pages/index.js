import React from "react"
import Layout from "../Layout/Layout"
import { navigate } from "gatsby"
import "../style/index.css"

const IndexPage = () => {
  const redirecttoWork = e => {
    e.preventDefault()
    navigate("/Work")
  }
  return (
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
        <button className="intro__button" onClick={redirecttoWork}>
          Goto Work
        </button>
      </div>
    </Layout>
  )
}

export default IndexPage
