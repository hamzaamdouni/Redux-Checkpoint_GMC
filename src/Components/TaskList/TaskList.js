import React from 'react'
import {useSelector} from 'react-redux'
import Task from '../Task/Task'
import './TaskList.css'

const TaskList = ({filterr}) => {   
    const tasklist = useSelector ((state)=> state.todoReducer.tasks);
    return (
        <div className='tasklist'>
            
            {filterTask(tasklist,filterr    )}
        
            
        </div>
    )
}

export default TaskList

const filterTask=(tasklist,filterr)=>{
    switch(filterr) {
        case '1':
           return tasklist.map(el=><Task task={el} key={el.id}/>)
            ;
           
        case '2':
            return tasklist.filter((el)=>el.status==false)
                .map((el)=> 
                (<Task task={el} key={el.id}/>
                ));
           
        case '3':
            return tasklist.filter((el)=>el.status==true)
                .map((el)=> 
                (<Task task={el} key={el.id}/>
                ));
           
        default:
            return tasklist.map(el=><Task task={el} key={el.id}/>)  
    }
}