import { NavLink } from "react-router-dom"

import './navLinks.css'

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/phones'>Phones</NavLink></li>
      <li><NavLink to='/taplets'>Taplets</NavLink></li>
      <li><NavLink to='/watches'>Watches</NavLink></li>
      <li><NavLink to='/laptops'>Laptops</NavLink></li>
    </ul>
  )
}

export default NavLinks