import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteTask, statusTask } from '../../JS/actions/todo'
import Edit from './Edit'
import './Task.css'

const Task = ({task}) => {
    const dispatch = useDispatch();
    const styleTask = task.status ? { textDecoration : "line-through"} : null ;
    const variantTask = task.status ? "primary" : "success" ;
    return (
        <div className='TaskE'>
            <Card border="dark" bg="dark" style={{ width: '20rem' }}>
                <Card.Body className='TaskBody'>
                    <Card.Text style={styleTask}>
                        {task.text}
                    </Card.Text>
                    <Edit task={task}/>
                    <Button className='TaskEdit' variant={variantTask} onClick={()=>dispatch(statusTask(task.id))}>{task.status? 'Undone' : 'Done'}</Button>
                    <Button className='TaskEdit' variant="danger" onClick={()=>dispatch(deleteTask(task.id))}>Delete</Button>{' '}
                </Card.Body>
            </Card>
        </div>
    )
}

export default Task
