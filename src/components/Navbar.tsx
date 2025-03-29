import React from 'react'
import PropTypes from 'prop-types'

const Navbar = () => {
  return (
    <div>Navbar</div>
  )
}

Navbar.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    userName: PropTypes.string,
    onLogout: PropTypes.func.isRequired,
}

export default Navbar