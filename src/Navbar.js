import { Link }  from "react-router-dom";
import './styles/index.css';

const Navbar = () => {


    return ( 
        <>
            <nav className="navbar" id='navbar'>
                <ul className="nav" style={{paddingLeft: "50px"}}>
                    <li><Link to="/">Home</Link></li>
                </ul>
                <ul className={'nav'} style={{paddingRight: "50px"}}>

                    <li><Link to="/about-me">About Me</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/contact-me">Contact Me</Link></li>
                </ul>
            </nav>
        </>
     );
}
 
export default Navbar;