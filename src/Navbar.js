import { Link }  from "react-router-dom";
import './styles/index.css';

const Navbar = () => {


    return ( 
        <>
            <nav className="navbar" id='navbar'>
                <ul className={'nav'}>
                    <li><Link to="/">Home</Link></li>
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