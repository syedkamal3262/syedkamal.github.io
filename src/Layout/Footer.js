import React from "react"
import "./Footer.css"

const Footer = ({ data }) => {
  return (
    <div className="footer">
      <p>{data.author}</p>
    </div>
  )
}

export default Footer
