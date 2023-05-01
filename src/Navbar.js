import { Link }  from "react-router-dom";
import './styles/index.css';

const Navbar = () => {


    return ( 
        <>
            <nav className="navbar" id='navbar'>
                <ul class={'nav'}>
                    <li><Link to="/"> Home</Link></li>
                    {/* <li><button onClick={() => handleClick("/")}>Home</button></li> */}
                    <li><Link to="/about-me">About Me</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="https://github.com/azn-abel" target={'_blank'} rel={'noreferrer'}>GitHub</Link></li>
                    <li><Link to="https://www.linkedin.com/in/aluprof4" target={'_blank'} rel={'noreferrer'}>LinkedIn</Link></li>
                    <li><Link to="/contact-me">Contact Me</Link></li>
                </ul>
            </nav>
        </>
     );
}
 
export default Navbar;