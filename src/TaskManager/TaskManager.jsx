import React from "react";
import './taskManager.css';
import TaskFilter from '../TaskFilter/TaskFilter';
import TaskSearch from '../TaskSearch/TaskSearch';
import TaskViewer from '../TaskViewer/TaskViewer';
import TaskCreator from '../TaskCreator/TaskCreator';

class TaskManager extends React.Component {
    constructor(props) {
        super(props);
        this.taskList = JSON.parse(localStorage.getItem('taskList'))
        this.state = {
            newTask: {
                title: '',
                description: '',
                completed: false,
            },
            taskList: this.taskList
        }
        this.handleNewTaskUpdateTitle = this.handleNewTaskUpdateTitle.bind(this);
        this.handleNewTaskUpdateDescription = this.handleNewTaskUpdateDescription.bind(this);
        this.handleNewTaskSubmit = this.handleNewTaskSubmit.bind(this);

        this.handleTaskDelete = this.handleTaskDelete.bind(this);
        this.handleTaskTitleUpdate = this.handleTaskTitleUpdate.bind(this);
        this.handleTaskStatusUpdate = this.handleTaskStatusUpdate.bind(this);
        this.handleTaskDescriptionUpdate = this.handleTaskDescriptionUpdate.bind(this);
    }

    handleNewTaskUpdateTitle = (event) => {
        this.setState({
            newTask: {
                title: event.target.value,
                description: this.state.newTask.description,
                completed: this.state.newTask.completed
            }
        })
    }

    handleNewTaskUpdateDescription = (event) => {
        this.setState({
            newTask: {
                title: this.state.newTask.title,
                description: event.target.value,
                completed: this.state.newTask.completed
            }
        })
    }

    handleNewTaskSubmit = (event) => {
        this.taskList.push(this.state.newTask)
        localStorage.setItem('taskList', JSON.stringify(this.taskList))
        this.setState({
            newTask:  {
                title: '',
                description: '',
                completed: false
            }
        })
    }

    handleTaskDelete = (index, e) => {
        this.taskList.splice(index, 1)
        localStorage.setItem('taskList', JSON.stringify(this.taskList))
        this.setState({
            taskList: this.taskList
        })
    }

    handleTaskTitleUpdate = (index, e) => {
        this.taskList[index].title = window.prompt('Title', this.taskList[index].title)
        localStorage.setItem('taskList', JSON.stringify(this.taskList))
        this.setState({
            taskList: this.taskList
        })
    }

    handleTaskStatusUpdate = (index, e) => {
        const status = this.taskList[index].completed
        this.taskList[index].completed = !status
        localStorage.setItem('taskList', JSON.stringify(this.taskList))
        this.setState({
            taskList: this.taskList
        })
    }

    handleTaskDescriptionUpdate = (index, e) => {
        this.taskList[index].description = window.prompt('Description', this.taskList[index].description)
        localStorage.setItem('taskList', JSON.stringify(this.taskList))
        this.setState({
            taskList: this.taskList
        })
    }

    render() {
        return (
            <div className='app'>
                <TaskFilter></TaskFilter>
                <div className='app-content'>
                    <TaskSearch>
                    </TaskSearch>
                    <TaskCreator
                        handleNewTaskUpdateTitle={this.handleNewTaskUpdateTitle}
                        handleNewTaskUpdateDescription={this.handleNewTaskUpdateDescription}
                        handleNewTaskSubmit={this.handleNewTaskSubmit}
                        newTask={this.state.newTask}
                    >
                    </TaskCreator>
                    <TaskViewer
                        handleTaskDelete={this.handleTaskDelete}
                        handleTaskTitleUpdate={this.handleTaskTitleUpdate}
                        handleTaskStatusUpdate={this.handleTaskStatusUpdate}
                        handleTaskDescriptionUpdate={this.handleTaskDescriptionUpdate}
                        taskList={this.state.taskList}>
                    </TaskViewer>
                </div>
            </div>
        )
    }
}

export default TaskManager;