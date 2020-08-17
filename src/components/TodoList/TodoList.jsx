import React from 'react'
import {connect} from 'react-redux'
import TodoFilter from '../TodoFilter/TodoFilter'
import TodoSort from '../TodoSort/TodoSort'
import TodoAdd from '../TodoAdd/TodoAdd'
import TodoItem from '../TodoItem/TodoItem'
import './todoList.css'
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
} from '../../constants/FilterTypes'
import {
  addTodo,
  deleteTodo,
} from '../../actions';


class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.todos,
      visibilitySettings: this.props.visibilitySettings,
    }
  }

  handleDelete = (id) => {
    this.props.deleteTodo(id)
    console.log('deleted todo with id ' + id)
    this.setState({
      todos: this.props.todos,
    })
  }

  render() {
    return (
      <>
        <div className="todo-options-container">
          <TodoSort {...this.state.visibilitySettings}></TodoSort>
          <TodoFilter {...this.state.visibilitySettings}></TodoFilter>
          <TodoAdd></TodoAdd>
        </div>
        <div className="todo-items-container">
          {
            this.state.visibilitySettings.filter == SHOW_ALL && this.state.todos.map((todo, i) => {
              return <TodoItem todo={todo} handleDelete={this.handleDelete} key={`todo-${todo.id}`}/>
            })
          }
          {
            this.state.visibilitySettings.filter == SHOW_ACTIVE && this.state.todos.map((todo, i) => {
              if (!todo.completed) {
                return <TodoItem todo={todo} handleDelete={this.handleDelete} key={`todo-${i}`}/>
              }
            })
          }
          {
            this.state.visibilitySettings.filter == SHOW_COMPLETED && this.state.todos.map((todo, i) => {
              if (todo.completed) {
                return <TodoItem todo={todo} handleDelete={this.handleDelete} key={`todo-${i}`}/>
              }
            })
          }
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  const {todos, visibilitySettings} = state
  return {todos, visibilitySettings};
}

export default connect(
  mapStateToProps,
  {addTodo, deleteTodo}
)(TodoList)