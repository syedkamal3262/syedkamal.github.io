import React from "react"
import "./Header.css"
import { Link } from "gatsby"
import Devimg from "../icons/dev-brands.svg"
import Gitimg from "../icons/github-brands.svg"
import Linkedinimg from "../icons/linkedin-brands.svg"

const Header = ({ data }) => {
  return (
    <div className="header">
      <div className="header__top">
        <h1 className="header__title">
          <Link to="/">{data.title}</Link>
        </h1>
        <div className="header__social">
          <a href="https://dev.to/syedkamal3262">
            <img src={Devimg} alt="" />
          </a>
          <a href="https://dev.to/syedkamal3262">
            <img src={Gitimg} alt="" />
          </a>
          <a href="https://dev.to/syedkamal3262">
            <img src={Linkedinimg} alt="" />
          </a>
        </div>
      </div>
      <ul className="header__links">
        <li>
          <Link to="/Work">Work</Link>
        </li>
        <li>
          <Link to="/Blog">Blog</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
