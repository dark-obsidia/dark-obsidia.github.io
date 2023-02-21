import './styles/index.css';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <ul class={'nav'}>

                <li><a href="/">Home</a></li>
                <li><a href="/">About Me</a></li>

                {/* The elements below are in reverse order for displaying. */}
                <li><a href="mailto:aluprof4@gmail.com" target={'_blank'} rel={'noreferrer'}>Contact Me</a></li>
                <li><a href="https://github.com/azn-abel" target={'_blank'} rel={'noreferrer'}>GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/aluprof4" target={'_blank'} rel={'noreferrer'}>LinkedIn</a></li>
                <li><a href="https://github.com/azn-abel/azn-abel/blob/main/Printable%20Resume%202_10_2022.pdf?raw=true" target={'_blank'} rel={'noreferrer'}>Resume</a></li>
                <li><a href="/">Coding Projects</a></li>
                
            </ul>
            
            
        </nav>
     );
}
 
export default Navbar;