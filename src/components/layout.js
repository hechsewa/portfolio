/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Navbar from './Navbar/Navbar.js'
import Footer from './Footer/Footer.js'

const Layout = ({ children, theme, setTheme }) => {

  return (
    <>
      <Navbar setTheme={setTheme} theme={theme}/>
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
