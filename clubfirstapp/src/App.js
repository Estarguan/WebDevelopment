import logo from './logo.svg';
import './App.css';
import Box from './components/Box.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> welcome to the website</p>
        <Box/>
      </header>
      
    </div>
  );
}

export default App;
