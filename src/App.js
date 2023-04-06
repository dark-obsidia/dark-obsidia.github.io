import './styles/index.css';
import Navbar from './Navbar.js'
import Home from './Home.js';
import Projects from './Projects.js'
import ContactMe from './ContactMe.js'
import Background from './images/wallpaper.jpg'


function App() {

  return (
    <div className="App">
      <Navbar />
      <h1 style={
        {
          backgroundImage: "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(" + Background + ")",
        }
      } id="Home">Hi, I'm Abel Lu 👋 Welcome to my digital portfolio!</h1>
      <div className="content">
        <Home />
        <br />
        <Projects />
        <br />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
