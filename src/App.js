import { useEffect } from 'react';
import './styles/index.css';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from "./Home.js"
import Navbar from './Navbar.js'
import AboutMe from './AboutMe.js';
import Projects from './Projects.js'
import Resume from './Resume.js'
import ContactMe from './ContactMe.js'
import Error404 from './404.js'

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    var item;

    const handleResize = () => {
      try {
        const newHeight = item.getBoundingClientRect().height;
        const fitHeight = window.innerHeight - document.getElementById('footer').offsetHeight - document.getElementById('navbar').offsetHeight;
        console.log(document.getElementById('footer').style);
        console.log(document.getElementById('navbar').style);
        console.log(document.getElementById('content').style.height);
        console.log(document.getElementById('content').offsetHeight);
        if (newHeight > fitHeight) {
          document.getElementById('content').style.height = newHeight + "px";
        } else {
          document.getElementById('content').style.height = fitHeight + "px";
        }
        
      } catch (e) {
        console.log("Failed to properly resize components.")
        console.log(e);
      }
    }

    const initialResize = () => {
      try {
        if (location.pathname === "" || location.pathname === "/") {
          item = document.getElementById("home");
        } else {
          item = document.getElementById(location.pathname.slice(1));
        }
        handleResize();
      } catch {
        console.log("Failed to get current component.")
      }
    }
    setTimeout(initialResize, 0);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [location])

  

  return (
    <TransitionGroup className="transition-group">
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={1000}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact-me" element={<ContactMe />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

function App() {

  return (
    <div className="App">
      <div>
        <HashRouter>
            <Navbar/>
            <div className='content' id='content'>
            <AnimatedRoutes/> 
            <hr />
            </div>
        </HashRouter>
      </div>
      <div className='footer' id='footer'>
        <p>Copyright © 2023 Abel Lu. All Rights Reserved. <br /> This project was bootstrapped with Create React App.
        </p>
      </div>
    </div>
  );
}

export default App;
