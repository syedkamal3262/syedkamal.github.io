import React from 'react'
import './Header.css'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <nav className="header">
            <h1 className="header__title"><Link to="/">Syed Kamal</Link></h1>
            <ul className="header__links">
                <li><Link to="/Work">Work</Link></li>
                <li><Link to="/Blog">Blog</Link></li>
                <li><Link to="/About">About</Link></li>
            </ul>
            <div>
                Social media header__links
                dev
                github
                linkedin
            </div>
        </nav>
    )
}

export default Header
