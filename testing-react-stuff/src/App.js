import { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const [name,setName] = useState('')
  const [count,setCount] = useState(0);
  useEffect(
    () => {
      setCount(0)
    },
    [name] // use effect runs everytime a state is changed so this tells it which state to watch
  )
  
  return (
    <div className='hello'>
      <button onClick={()=>setCount(count+1)}>
        {count}
      </button>
      <input onChange={(event)=>setName(event.target.value)}></input> {/*im too good at this these days */}
      <p>Hello {name}</p>    
    </div>
  );
}

export default App;
