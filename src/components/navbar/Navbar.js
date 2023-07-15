import { useState } from 'react';
import { Link }  from "react-router-dom";
import '../../styles/index.css';
import './Navbar.css';

import MenuButton from "../menuButton/MenuButton";

const Navbar = () => {

    const [menuActive, setMenuActive] = useState(false);


    return ( 
        <>
            <nav className="navbar" id='navbar'>
                <ul className="nav" style={{paddingLeft: "10px"}}>
                    <li><Link to="/">{"azn-abel.github.io"}</Link></li>
                </ul>
            </nav>
            <MenuButton opened={menuActive} setOpened={setMenuActive}/>
            <nav onClick={() => {setMenuActive(!menuActive)}} style={{position: "fixed", top: "0", right: "0", zIndex: "11", backgroundColor: "#222222"}}>
                {menuActive && (<ul className={'nav side-menu'}>
                    <li><Link to="/">Home 🏠</Link></li>
                    <li><Link to="/about-me">About Me 🙂</Link></li>
                    <li><Link to="/projects">Projects 🖥️</Link></li>
                    <li><Link to="/resume">Resume 📄</Link></li>
                    <li><Link to="/blog">Blog ✍🏻</Link></li>
                    <li><Link to="/faq">FAQ 🤔</Link></li>
                    <li><Link to="/contact-me">Contact Me 📨</Link></li>
                </ul>)}
            </nav>
        </>
     );
}
 
export default Navbar;