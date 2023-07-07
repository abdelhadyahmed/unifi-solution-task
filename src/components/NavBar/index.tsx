import React from 'react'
import {Link} from 'react-router-dom';
import './styles.scss';

export default function NavBar() {
  return (
    <nav className='nav-bar'>
        <ul>
            {/* <li className="nav-element">
                <Link className="nav-link" to={'/'}>Home</Link>
            </li>
            <li className="nav-element">
                <Link className="nav-link" to={'/about'}>About</Link>
            </li> */}
            <li className="nav-element">
                <Link className="nav-link" to={'/todos'}>Todos</Link>
            </li>
        </ul>
    </nav>
  )
}
