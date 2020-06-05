import React from "react";
import './taskViewer.css'
import {Button} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

class TaskViewer extends React.Component {
    constructor(props) {
        super(props);
        this.taskList = this.props.taskList
        this.handleTaskDelete = this.props.handleTaskDelete;
        this.handleTaskTitleUpdate = this.props.handleTaskTitleUpdate;
        this.handleTaskStatusUpdate = this.props.handleTaskStatusUpdate;
        this.handleTaskDescriptionUpdate = this.props.handleTaskDescriptionUpdate;
    }
    // const taskList = JSON.parse(localStorage.getItem('taskList'))
    // taskList.sort((a, b) => {
    //     if (a.title > b.title)
    //         return -1;
    //     if (a.title < b.title)
    //         return 1;
    //     return 0;
    // })
    render() {
        const tasks = []
        // debugger
        this.taskList.forEach((task, index) => {
            tasks.push(
                <div className='task-item' key={`task-item-${index}`}>
                    <div className='task-item-card'>
                        <div className='task-item-title'>
                            <div>
                                <EditIcon fontSize='small' onClick={(e) => this.handleTaskTitleUpdate(index, e)}></EditIcon>
                            </div>
                            <div>
                                {task.title}
                            </div>
                        </div>
                        <div className='task-item-description'>
                            <div>
                                <EditIcon fontSize='small' onClick={(e) => this.handleTaskDescriptionUpdate(index, e)}></EditIcon>
                            </div>
                            <div>
                                {task.description}
                            </div>
                        </div>
                        <div className='task-item-status'>
                            Completed: {task.completed.toString()}
                        </div>
                    </div>
                    <div className='task-item-option'>
                        <Button size='small' variant='outlined' color='primary'
                                onClick={(e) => this.handleTaskStatusUpdate(index, e)}>Done</Button>
                        <Button size='small' variant='outlined' color='secondary'
                                onClick={(e) => this.handleTaskDelete(index, e)}>Delete</Button>
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

}

export default TaskViewer;