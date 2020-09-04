import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Layout.css'

const Layout = ({children : layoutContent}) => {
    return (
        <div>
            <Header />
            {layoutContent}
            <Footer />
        </div>
    )
}

export default Layout
