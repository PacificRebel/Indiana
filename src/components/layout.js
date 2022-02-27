
import React from "react"
import PropTypes from "prop-types"
import "@fontsource/chicle"

import "./layout.css"

const Layout = ({ children }) => {

  return (
    <div>


      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer style={{
          marginTop: `2rem`
        }}>
            © {new Date().getFullYear()}, PacificRebel Productions
        </footer>
      </div>
  
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
