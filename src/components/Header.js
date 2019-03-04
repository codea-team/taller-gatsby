import React from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  return (
    <header>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </header>
  )
}

Header.propTypes = { siteTitle: PropTypes.string }

export default Header
