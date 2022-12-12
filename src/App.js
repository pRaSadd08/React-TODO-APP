import Todo from './Todo'
import './App.css';
import React, {useState} from 'react';

function App() {
const[todoList, setTodoList] = useState([]);
const [newTask, setNewTask]= useState("");
const handleChange = (event) =>{
  setNewTask(event.target.value);
}; 

const addTask = () =>{
  const task ={
    id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
    taskName : newTask,
    completed: false, 
  }

  const newTodoList = [...todoList, task];
  setTodoList(newTodoList);

}

const deleteTask =(id) =>{
  const newTodoList =  todoList.filter((task)=>{
    if(task.id===id){
      return false
    } else{
      return true}
  })
  setTodoList(newTodoList )
} 

const completeTask = (id) => {
  setTodoList(
    todoList.map((task => {
      if(task.id === id){
        return  { ...task,completed: true}
      }else {
        return task;
      }
    }))
  )
}
  return (
    <div className="App">
      <h1>ToDo Lists</h1>
      <div className='addTask'>
        <input className="input" onChange={handleChange}/> 
        <button className="button" onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        {todoList.map((task) =>{
          return <div className="task"
          style={{backgroundColor: task. completed ? "lightGreen" : "white"}}>
            <h1>{task.taskName}</h1>
            
            <button onClick ={() =>completeTask(task.id)}>Done</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>;
        })}
      </div>
   
    </div>
  );
}

export default App;
