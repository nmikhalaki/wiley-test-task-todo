import React from "react";
import './taskViewer.css'
import { Button } from '@material-ui/core';

const TaskViewer = (props) => {
    const handleClickDelete = (event) => {
        alert(event.target.value)
    }
    const handleClickEdit = (event) => {
        alert(event.target.value)
    }
    const handleClickDone = (event) => {
        alert(event.target.value)
    }
    const taskList = JSON.parse(localStorage.getItem('taskList'))
    taskList.sort((a, b) => {
        if (a.title > b.title)
            return -1;
        if (a.title < b.title)
            return 1;
        return 0;
    })
    const tasks = []
    taskList.forEach((task, index) => {
        tasks.push(
            <div className='task-item' key={`task-item-${index}`}>
                <div className='task-item-card'>
                    <div className='task-item-title'>
                        {task.title}
                    </div>
                    <div className='task-item-description'>
                        {task.description}
                    </div>
                </div>
                <div className='task-item-option'>
                    <Button size='small' variant='outlined' color='primary' onClick={handleClickDone}>Done</Button>
                    <Button size='small' variant='outlined' color='default' onClick={handleClickEdit}>Edit</Button>
                    <Button size='small' variant='outlined' color='secondary' onClick={handleClickDelete}>Delete</Button>
                </div>
            </div>
        )
    })
    return (
        <div className='task-list-container'>
            {tasks}
        </div>
    )
}

export default TaskViewer;