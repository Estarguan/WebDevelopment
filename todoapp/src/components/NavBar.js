import {NavLink } from "react-router-dom";
import '../App.css'
function NavBar() {
    return (
        <nav>
            <NavLink className='link' to='/' /*reloadDocument*/>Home</NavLink>
            <NavLink className='link' to='/Instructions' /*reloadDocument*/>How To Use</NavLink>
            <NavLink className='link' to='Contact'>Contact Us</NavLink>
        </nav>
    )
}
export default NavBar;