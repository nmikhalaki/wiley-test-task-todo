import React from 'react';
import {connect} from 'react-redux'
import {
  Card,
  Button,
  CardActions,
  CardContent,
  Typography,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DoneIcon from '@material-ui/icons/Done'
import DeleteIcon from '@material-ui/icons/Delete'
import {
  editTodo,
  completeTodo
} from '../../actions'
import './todoItem.css'


class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.todo,
      open: false,
    }
  }

  handleClickEdit = () => {
    this.setState({
      open: true
    });
  };

  handleUpdateTitle = title => {
    this.setState({
      title: title
    });
  };

  handleUpdateDescription = description => {
    this.setState({
      description: description
    });
  };

  handleClickCancel = () => {
    this.setState({
      open: false
    });
  };

  handleClickSave = () => {
    this.props.editTodo({
      id: this.state.id,
      title: this.state.title,
      description: this.state.description
    })
    this.setState({
      open: false
    });
  }

  handleDone = () => {
    this.props.completeTodo(this.state.id)
    this.setState({
      completed: this.state.completed ? false: true
    });
  }

  render() {
    return (
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" component="h2">
            {this.state.title}
          </Typography>
          <Typography variant="body2" component="p">
            {this.state.description}
          </Typography>
        </CardContent>
        <CardActions style={{justifyContent: 'center'}}>
          <Typography variant="body2" component="p">Completed: {this.state.completed.toString()}</Typography>
          <Button onClick={() => this.handleDone()} size="small"><DoneIcon></DoneIcon></Button>
          <Button onClick={() => this.handleClickEdit()} size="small"><EditIcon></EditIcon></Button>
          <Button onClick={() => this.props.handleDelete(this.state.id)} size="small"><DeleteIcon></DeleteIcon></Button>
        </CardActions>
        <Dialog open={this.state.open} onClose={this.handleClickCancel} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Edit Todo</DialogTitle>
          <DialogContent>
            <TextField
              defaultValue={this.state.title}
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              onChange={e => this.handleUpdateTitle(e.target.value)}
              fullWidth
            />
            <TextField
              defaultValue={this.state.description}
              margin="dense"
              id="description"
              label="Description"
              multiline
              rows={4}
              onChange={e => this.handleUpdateDescription(e.target.value)}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClickCancel} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClickSave} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Card>
    );
  }
}

export default connect(
  null,
  {
    editTodo,
    completeTodo,
  }
)(TodoItem)