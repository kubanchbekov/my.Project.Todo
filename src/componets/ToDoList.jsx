// import React, { useState } from "react";
// import css from './ToDoList.module.css'

// function ToDoList() {
//   const [tasks, setTask] = useState(['Eat Breakfast ','Take a shower','Walk the dog']);
//   const [newTask, setNewTask] = useState("");
//   function handleInputChage(event) {
//     setNewTask(event.target.value);
//   }
//   function addTask() {}
//   function deleteTask(index) {}
// //   function moveTadkUp(index) {}
// //   function moveTaskUp(index) {}
//   return (
//     <div className={css.to-do-list}>
//       <h1>To-Do-List</h1>
//       <div>
//         <input
//           type="text"
//           placeholder="Enter a task..."
//           value={newTask}
//           onChange={handleInputChage}
//         />
//         <button className={css.add-button} onClick={addTask}>Add</button>
//       </div>
//       <ol>
//         {tasks.map((task,index)=>
//     <li key={index}>
//         <span className={css.text}>{task}</span>
//         <button className={css.delete-button} onClick={()=>deleteTask(index)}>Delete</button>
//     </li>
//     )}
//       </ol>
//     </div>
//   );
// }

// export default ToDoList;
import React, { useState } from "react";
import css from './ToDoList.module.css'

function ToDoList() {
  const [tasks, setTasks] = useState(['Eat Breakfast ','Take a shower','Walk the dog']);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  return (
    <div className={css.todoList}>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className={css.addButton} onClick={addTask}>Add</button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className={css.text}>{task}</span>
            <button className={css.deleteButton} onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
