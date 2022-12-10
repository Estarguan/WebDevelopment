// import { useEffect } from 'react';

//import logo from './logo.svg';
import './App.css';
//import YoutubeLink from './components/YotubeLink.js';
import FormSubmitted from './pages/FormSubmitted';
import {Route, BrowserRouter as Router} from "react-router-dom";

function App(){
  return(
    //<Router>
      
    <div className="App">
      <body>
        <h1>Entrance form</h1>
        <form>
          <fieldset >
            <legend>Personal Info</legend>
            <label for = "First Name">First Name: </label><input id="First Name" placeholder="First Name" type="text"/>
            <br/>
            <label for ="Last Name">Last Name:</label> <input id = "Last Name" placeholder="Last Name" type="text"/>
          </fieldset>
          <fieldset>
            <legend>Login Info</legend>
            <label>Username:</label> <input placeholder="Username" type = "text"/><br/>
            <label>Password:</label> <input placeholder="Password" type = "password"/><br/>
            <label>Date of Birth:</label> <input type="date"/>
          </fieldset>
        </form>
        <button onClick={() => window.location.replace("https://www.w3schools.com")}>Submit</button>
      </body>
    </div>
    //</Router>
  )
}

export default App;


/*const App = () =>  {
  // useEffect(() => {
  //   fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  //   .then(response => response.json())
  //   .then(allpokemon => console.log(allpokemon))
  // }, [])
  // let youtubeLink = 'https://www.youtube.com/watch?v=8i_FOk955c0';
  // youtubeLink='https://google.com'
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > 
        </a>
        <YoutubeLink link="https://www.youtube.com/"/>
      </header>
    </div>
  );
}*/
