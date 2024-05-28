import React, { useState, useRef } from "react";
import "../App.css";
import Editing from "../components/Editing";
import List from "../components/List";

function ToDo() {
  const [list, setList] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [doList, setDoList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  //const [removalIndex, setRemovalIndex] = useState(-1);

  const add = () => {
    if (editingIndex !== -1) {
      setEditingIndex(-1);
      editTaskInputRef.current.value = "";
      editDateInputRef.current.value = "";
    }
    setIsShown(true);
  };

  const listupdate = (event) => {
    if (event.target.value !== "") {
      setTask(event.target.value);
    }
  };

  const dateUpdate = (event) => {
    if (event.target.value !== "") {
      setDate(event.target.value);
    }
  };
  const editTaskInputRef = useRef(null);
  const editDateInputRef = useRef(null);
  const taskInputRef = useRef(null); // Create a reference to the task input element
  const dateInputRef = useRef(null); // Create a reference to the date input element

  const addTask = () => {
    if (task !== "" && date !== "") {
      doList.push({ task: task, date: date });
      setDoList(doList);
      setList(true);
      setIsShown(false);
      setDate("");
      setTask("");
      taskInputRef.current.value = ""; // Clear the value of the task input element
      dateInputRef.current.value = ""; // Clear the value of the date input element
    }
  };
  const editTask = (event) => {
    if (event.key === "Enter") {
      if (event.target.value !== "") {
        const updatedDoList = [...doList];
        updatedDoList[editingIndex].task = event.target.value;
        event.target.value = "";
        setDoList(updatedDoList);
        setEditingIndex(-1);
      }
    }
  };
  const editDate = (event) => {
    if (event.key === "Enter") {
      if (event.target.value !== "") {
        const updatedDoList = [...doList];
        updatedDoList[editingIndex].date = event.target.value;
        event.target.value = "";
        setDoList(updatedDoList);
        setEditingIndex(-1);
      }
    }
  };

  const cancel = () => {
    setEditingIndex(-1);
    setIsShown(false);
    editDateInputRef.current.value = "";
    editTaskInputRef.current.value = "";
    taskInputRef.current.value = "";
    dateInputRef.current.value = "";
  };
  const remove = (index) => {
    const updatedDoList = [...doList];
    updatedDoList.splice(index, 1);
    setDoList(updatedDoList);
  };
  const shown = isShown ? "block" : "none";
  const edit = editingIndex !== -1 ? "block" : "none";
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
        style={{ display: shown }}
        type="text"
        onChange={listupdate}
        ref={taskInputRef}
      ></input>
      <input
        className="input"
        style={{ display: shown }}
        type="date"
        onChange={dateUpdate}
        ref={dateInputRef}
      ></input>
      <button
        style={{ display: shown }}
        className="add-button"
        onClick={addTask}
      >
        Add Task
      </button>
      <Editing
        edit={edit}
        editTaskInputRef={editTaskInputRef}
        editDate={editDate}
        editTask={editTask}
        editDateInputRef={editDateInputRef}
      />
      <button
        style={{ display: editingIndex !== -1 || isShown ? "block" : "none" }} //refactor later
        className="cancel-button"
        onClick={cancel}
      >
        <strong>Cancel</strong>
      </button>
      {/* displaying */}
      <List
        doList={doList}
        list={list}
        remove={remove}
        setEditingIndex={setEditingIndex}
      />
    </div>
  );
}

export default ToDo;
