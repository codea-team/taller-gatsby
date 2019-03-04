import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

import styles from './styles.module.scss'

const Header = ({ siteTitle }) => {
  return (
    <header>
      <h1 className={styles.link}>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </header>
  )
}

Header.propTypes = { siteTitle: PropTypes.string }

export default Header
