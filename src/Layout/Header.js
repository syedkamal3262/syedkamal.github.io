import React from "react"
import "./Header.css"
import { Link } from "gatsby"
import Devimg from "../icons/dev-brands.svg"
import Gitimg from "../icons/github-brands.svg"
import Linkedinimg from "../icons/linkedin-brands.svg"

const Header = () => {
  return (
    <nav className="header">
      <div className="header__top">
        <h1 className="header__title">
          <Link to="/">Syed Kamal</Link>
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
    </nav>
  )
}

export default Header
