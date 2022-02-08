import './Menu.css'
import React from 'react'

import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="menu">
        <div className="menu--top">Menu</div>
        <nav className="menu--nav">
            <ul>
                <li>
                    <Link className="menu--nav--link" to="/">Início</Link>
                </li>
                <li>
                    <Link className="menu--nav--link" to="/useState">useState()</Link>
                </li>
                <li>
                    <Link className="menu--nav--link" to="/useEffect">useEffect()</Link>
                </li>
                <li>
                    <Link className="menu--nav--link" to="/useRef">useRef()</Link>
                </li>
                <li>
                    <Link className="menu--nav--link" to="/useMemo">useMemo()</Link>
                </li>
                <li>
                    <Link className="menu--nav--link" to="/useCallback">useCallback()</Link>
                </li>
                <li>
                    <Link className="menu--nav--link" to="/useContext">useContext()</Link>
                </li>
                <li>
                    <Link className="menu--nav--link" to="/useReducer">useReducer()</Link>
                </li>
                <li>
                    <Link className="menu--nav--link" to="/useCustom">useMyHook()</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu