import './index.css';
import Home from './Home.js';
import Navbar from './Navbar.js'
import Background from './wallpaper.jpg'

function App() {

  return (
    <div className="App">
      <h1 style={{backgroundImage: "url(" + Background + ")" }}>Abel's Digital Portfolio</h1>
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
