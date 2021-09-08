import './App.css';
import React, { useState } from "react";
import TaskList from './Components/TaskList/TaskList';
import AddTasks from './Components/AddTasks/AddTasks'
import FilterTask from './Components/FilterTask/FilterTask'



function App() {
  const [filterr,setFilterr] = useState('')
  return (
    <div className="App">
      <div className="App-header">
      <AddTasks/>
      </div>
      <div>
      <FilterTask setFilterr={setFilterr}/>
      </div>
      <div>
      <TaskList filterr={filterr}/>
      </div>
    </div>
  );
}

export default App;
