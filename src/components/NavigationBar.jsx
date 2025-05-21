import React from 'react'
import { NavLink } from 'react-router-dom'
const NavigationBar = () => {
  return (
    <div>
        <NavLink to="/home" style={({ isActive }) => isActive ? { textDecoration: 'underline' } : {}}>Home</NavLink> <span>|</span>
        {/* <Link to="/notes">Notes</Link> <span>|</span>
        <Link to="/list">List</Link> */}
    </div>
  )
}

export default NavigationBar