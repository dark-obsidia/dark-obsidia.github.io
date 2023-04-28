import { useEffect } from 'react';
import './styles/index.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from "./Home.js"
import Navbar from './Navbar.js'
import AboutMe from './AboutMe.js';
import Projects from './Projects.js'
import Resume from './Resume.js'
import ContactMe from './ContactMe.js'

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    try {
      var item;
      if (location.pathname === "" || location.pathname === "/") {
        console.log("success");
        item = document.getElementById("home");
        console.log(item);
      } else {
        item = document.getElementById(location.pathname.slice(1));
        console.log(item);
      }
      console.log(item.getBoundingClientRect().height);
      const newHeight = item.getBoundingClientRect().height;
      console.log(newHeight + "px");
      document.getElementById('content').style.height = newHeight + "px";
    } catch {
      console.log("failure")
    }
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
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

function App() {

  return (
    <div className="App">
      <div>
        <BrowserRouter>
            <Navbar/>
            <div className='content' id='content'>
            <AnimatedRoutes/> 
            <hr />
            </div>
        </BrowserRouter>
      </div>
      <div className='footer'>
        <p>Copyright © 2023 Abel Lu. All Rights Reserved. <br /> This project was bootstrapped with Create React App.
        </p>
      </div>
    </div>
  );
}

export default App;
