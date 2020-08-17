import React from 'react'
import './todoAdd.css'
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import {connect} from 'react-redux'
import {addTodo} from '../../actions/index'

class TodoAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      open: false
    }
  }

  handleClickAdd = () => {
    this.setState({
      open: true
    });
  };

  handleClickCancel = () => {
    this.setState({
      open: false
    })
  }

  handleUpdateTitle = title => {
    this.setState({
      title: title
    })
  }

  handleUpdateDescription = description => {
    this.setState({
      description: description
    })
  }

  handleAddTodo = () => {
    this.props.addTodo({
      title: this.state.title,
      description: this.state.description
    })
    this.setState({
      title: '',
      description: '',
      open: false
    })
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickAdd}>
          <AddCircleOutlineIcon></AddCircleOutlineIcon>
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClickCancel} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Create New Todo</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              onChange={e => this.handleUpdateTitle(e.target.value)}
              fullWidth
            />
            <TextField
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
            <Button onClick={this.handleAddTodo} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default connect(
  null,
  {addTodo}
)(TodoAdd)