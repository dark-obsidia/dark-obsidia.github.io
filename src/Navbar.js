import './styles/index.css';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <ul class={'nav'}>

                <li><a href="#Home">Home</a></li>
                <li><a href="#AboutMe">About Me</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="https://azn-abel.github.io/azn-abel/Printable%20Resume%202_10_2022.pdf" target={'_blank'} rel={'noreferrer'}>Resume</a></li>
                <li><a href="https://github.com/azn-abel" target={'_blank'} rel={'noreferrer'}>GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/aluprof4" target={'_blank'} rel={'noreferrer'}>LinkedIn</a></li>
                <li><a href="#ContactMe">Contact Me</a></li>
                
            </ul>
            
            
        </nav>
     );
}
 
export default Navbar;