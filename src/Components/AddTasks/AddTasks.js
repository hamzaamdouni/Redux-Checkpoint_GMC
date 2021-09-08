import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../JS/actions/todo'
import './AddTask.css'

const AddTasks = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const handelAdd=(e)=>{
        e.preventDefault();
        dispatch(addTask({id: Math.random(), text:text, status:false}));
        setText('')
    }

    return (
        <div className='Addform'>
            <form>
                <input type='text' name='' value={text} placeholder='Add your tasks here' onChange={(e)=> setText(e.target.value)}/>
                
                <button onClick={handelAdd}> Add Task </button>{' '}
            </form>
        </div>
    )
}

export default AddTasks
