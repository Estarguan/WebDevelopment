import React, {useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [doList, setDoList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  //const [removalIndex, setRemovalIndex] = useState(-1);

  const add = () => {
    setIsShown(true);
  };

  const listupdate = (event) => {
    if (event.key === 'Enter') {
      if (event.target.value !== '') {
        doList.push(event.target.value);
        setDoList(doList);
        setList(true);
        setIsShown(false);
        event.target.value = '';
      }
    }
  };

  const saveChanges = (event) => {
    if (event.key === 'Enter') {
      if (event.target.value !== '') {
        const updatedDoList = [...doList];
        updatedDoList[editingIndex] = event.target.value;
        setDoList(updatedDoList);
        setEditingIndex(-1);
      }
    }
  };

  const remove = (index) => {
    const updatedDoList = [...doList];
    updatedDoList.splice(index,1)
    setDoList(updatedDoList)
  }
  return (

    <div className="App">
      <h1>Welcome to my to do app</h1>
      <section>
        <button onClick={add} className="Add">
          +
        </button>
      </section>
      <input
        placeholder="Enter Your Task"
        className="input"
        style={{ display: isShown ? 'block' : 'none' }}
        type="text"
        onKeyPress={listupdate}
      ></input>
      
      {/* editing */}
      <input
        placeholder="Edit task"
        className="input"
        style={{ display: editingIndex !== -1 ? 'block' : 'none' }}
        type="text"
        onKeyPress={saveChanges}
      ></input>
      
      {/* displaying */}
      <ol style={{ display: list ? 'inline' : 'none' }}>
        {doList.map((item, i) => (
          <li key={i}>
            {item}
            {/* editing button */}
            <button className='edit-button' onClick={() => setEditingIndex(i)}>Edit</button>
            <button className='edit-button' onClick={() => {remove(i)}}>Remove</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
