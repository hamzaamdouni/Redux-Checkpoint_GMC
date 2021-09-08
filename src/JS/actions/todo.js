import { ADD_TASK, DELETE_TASK, EDIT_TASK, STATUS_TASK } from "../constants/todo"

// Add Task
export const addTask = (newTask) =>{
    return {type: ADD_TASK, payload:newTask}
}

// Edit Task
export const editTask = (id,newText) =>{
    return {type: EDIT_TASK, payload:{id,newText}}
}

// Delete Task
export const deleteTask = (id) =>{
    return {type: DELETE_TASK, payload:id}
}

// Status Task
export const statusTask = (id) =>{
    return {type: STATUS_TASK, payload:id}
}