import React from "react";
import './taskViewer.css'

const TaskViewer = (props) => {
    const tasks = []
    props.taskList.forEach((task, index) => {
        tasks.push(
            <div className='task-item'>
                <div className='task-item-title'>
                    {task.title}
                </div>
                <div className='task-item-description'>
                    {task.description}
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