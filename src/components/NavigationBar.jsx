import React from 'react'
import { Link } from 'react-router-dom'
const NavigationBar = () => {
  return (
    <div>
        <Link to="/home">Home</Link> <span>|</span>
        {/* <Link to="/notes">Notes</Link> <span>|</span>
        <Link to="/list">List</Link> */}
    </div>
  )
}

export default NavigationBar