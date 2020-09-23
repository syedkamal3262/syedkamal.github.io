import React from "react"
import Layout from "../Layout/Layout"
import "../style/About.css"

const About = () => {
  return (
    <Layout>
      <div className="about">
        <div>
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
        </div>
        <p className="intro__skillset">
          <span>My skillset and interests includes:</span> <br />
          JavaScript,CSS3,HTML5 &
          <br />
          Responsive Design,Firebase
          <br /> React &<br /> Gatsby,GraphQL,Headless CMS,
          <br />
          Material UI & Bootstrap...
        </p>
      </div>
    </Layout>
  )
}

export default About
