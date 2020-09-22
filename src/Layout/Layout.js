import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "./Layout.css"

const Layout = ({ children: layoutContent }) => {
  return (
    <div className="app">
      <Header />
      <div className="app_content">{layoutContent}</div>
      <Footer />
    </div>
  )
}

export default Layout
