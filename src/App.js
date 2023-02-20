import './App.css';
import Home from './Home.js';

function App() {

  const title = 'Hi, I\'m Abel Lu'

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>This is my digital portfolio.</p>
        <Home />
      </div>
    </div>
  );
}

export default App;
