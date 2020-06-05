import React from "react";
import './taskCreator.css';
import {
    Button,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    TextField
} from '@material-ui/core';

class TaskCreator extends React.Component {
    constructor(props) {
        super(props);
        this.handleNewTaskUpdateTitle = this.props.handleNewTaskUpdateTitle;
        this.handleNewTaskUpdateDescription = this.props.handleNewTaskUpdateDescription;
        this.handleNewTaskSubmit = this.props.handleNewTaskSubmit;
    }

    render() {
        return (
            <div className='creator-container'>
                <form onSubmit={this.handleNewTaskSubmit} className='creator-container-form'>
                    <div className='creator-task'>
                        <div className='creator-task-title'>
                            <Input
                                variant='outlined'
                                placeholder="Title"
                                value={this.props.newTask.title}
                                onChange={this.handleNewTaskUpdateTitle}/>
                        </div>
                        <div className='creator-task-description'>
                            <TextField
                                id="filled-name"
                                label="Description"
                                fullWidth={true}
                                value={this.props.newTask.description}
                                onChange={this.handleNewTaskUpdateDescription}
                                variant="outlined"
                            />
                        </div>
                    </div>
                    <div className='creator-task-submit'>
                        <Button size='small' variant='outlined' color='primary' type='submit'>Create Task</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default TaskCreator;