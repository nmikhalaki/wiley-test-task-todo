import React from "react";
import './taskCreator.css'
// import FiberNewIcon from '@material-ui/icons/FiberNew';

class TaskCreator extends React.Component {
    constructor(props) {
        super(props);
        this.taskList = JSON.parse(localStorage.getItem('taskList'))
        this.state = {
            title: '',
            description: '',
            completed: false
        }
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeTitle(event) {
        this.setState({
            title: event.target.value
        })
    }
    handleChangeDescription(event) {
        this.setState({
            description: event.target.value
        })
    }
    handleSubmit(event) {
        // event.preventDefault()
    // const taskList = JSON.parse(localStorage.taskList)
        this.taskList.push(this.state)
        localStorage.setItem('taskList', JSON.stringify(this.taskList))
        this.setState({
            title: '',
            description: '',
            completed: false
        })
    }
    render() {
        return(
            <div className='creator-container'>
                <form onSubmit={this.handleSubmit}>
                    <div className='creator-task-title'>
                        <label>Title</label>
                        <input type="text" value={this.state.title} onChange={this.handleChangeTitle} />
                    </div>
                    <div className='creator-task-description'>
                        <label htmlFor="create-new-task">Description</label>
                        <textarea value={this.state.description} onChange={this.handleChangeDescription} />
                    </div>
                    <div>
                        <input type="submit" value="Create Task" />
                    </div>
                </form>
            </div>
        )
    }
}

export default TaskCreator;