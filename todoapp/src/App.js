import { Routes,Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Contact from './pages/Contact';
import Instructions from './pages/Instructions';
import Main  from './pages/main';


function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/Instructions' element={<Instructions/>}/>
        <Route path = 'Contact' element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;