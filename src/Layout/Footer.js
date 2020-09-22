import React from "react"
import "./Footer.css"

const Footer = ({ data }) => {
  return <div className="footer">{data.author}</div>
}

export default Footer
