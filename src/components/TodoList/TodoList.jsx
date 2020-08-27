import React from 'react'
import {connect} from 'react-redux'
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core'
import TodoItem from '../TodoItem/TodoItem'
import {
  editTodo,
  deleteTodo,
  completeTodo,
} from '../../actions'
import './todoList.css'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      todo: {
        title: undefined,
        description: undefined,
        status: undefined,
      }
    }
  }

  handleClickEdit = (todo) => {
    console.log(todo)
    this.setState({
      open: true,
      todo: {...todo}
    })
  }

  handleUpdateTitle = title => {
    this.setState({
      todo: {
        ...this.state.todo,
        title: title,
      }
    })
  }

  handleUpdateDescription = description => {
    this.setState({
      todo: {
        ...this.state.todo,
        description: description,
      }
    })
  }

  handleClickCancel = () => {
    this.setState({
      open: false,
      todo: {
        title: undefined,
        description: undefined,
        status: undefined,
      }
    })
  }

  handleClickSave = () => {
    this.props.editTodo(this.state.todo)
    this.setState({
      open: false,
      todo: {
        title: undefined,
        description: undefined,
        status: undefined,
      }
    })
  }

  handleClickDelete = (id) => {
    this.props.deleteTodo(id)
  }

  handleClickDone = (id) => {
    this.props.completeTodo(id)
  }

  render() {
    return (
      <>
        {
          this.props.todos.map(todo => (
              <TodoItem
                todo={todo}
                key={`todo-${todo.id}`}
                handleClickDone={this.handleClickDone}
                handleClickEdit={this.handleClickEdit}
                handleClickDelete={this.handleClickDelete}
              />
            )
          )
        }
        <Dialog open={this.state.open} onClose={this.handleClickCancel} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Edit Todo</DialogTitle>
          <DialogContent>
            <TextField
              defaultValue={this.state.todo.title}
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              onChange={e => this.handleUpdateTitle(e.target.value)}
              fullWidth
            />
            <TextField
              defaultValue={this.state.todo.description}
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
      </>
    )
  }
}

const mapStateToProps = (state) => {
  const {todos} = state
  return {todos}
}

const mapDispatchToProps = {
  editTodo,
  deleteTodo,
  completeTodo,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

// export default TodoList