import React from "react";
import './taskViewer.css'
import {Button} from '@material-ui/core';

class TaskViewer extends React.Component {
    constructor(props) {
        super(props);
        this.taskList = JSON.parse(localStorage.getItem('taskList'))
        this.state = {
            taskList: this.taskList
        }
        this.handleClickDelete = this.handleClickDelete.bind(this);
        this.handleClickEdit = this.handleClickEdit.bind(this);
        this.handleClickDone = this.handleClickDone.bind(this);
    }

    handleClickDelete = (index, e) => {
        this.taskList.splice(index, 1)
        localStorage.setItem('taskList', JSON.stringify(this.taskList))
        this.setState({
            taskList: this.taskList
        })
    }
    handleClickEdit = (event) => {
        alert(event.target.value)
    }
    handleClickDone = (index, e) => {
        const status = this.taskList[index].completed
        this.taskList[index].completed = !status
        localStorage.setItem('taskList', JSON.stringify(this.taskList))
        this.setState({
            taskList: this.taskList
        })
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
        debugger
        this.state.taskList.forEach((task, index) => {
            tasks.push(
                <div className='task-item' key={`task-item-${index}`}>
                    <div className='task-item-card'>
                        <div className='task-item-title'>
                            {task.title}
                        </div>
                        <div className='task-item-description'>
                            {task.description}
                        </div>
                        <div className='task-item-status'>
                            Completed: {task.completed.toString()}
                        </div>
                    </div>
                    <div className='task-item-option'>
                        <Button size='small' variant='outlined' color='primary' onClick={(e) => this.handleClickDone(index, e)}>Done</Button>
                        <Button size='small' variant='outlined' color='default' onClick={this.handleClickEdit}>Edit</Button>
                        <Button size='small' variant='outlined' color='secondary' onClick={(e) => this.handleClickDelete(index, e)}>Delete</Button>
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