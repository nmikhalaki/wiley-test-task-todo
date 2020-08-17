import React from 'react'
import {connect} from 'react-redux'
import TodoItem from '../TodoItem/TodoItem'
import './todoList.css'


const TodoList = (props) => {
  return props.todos.map(todo => {
    return <TodoItem todo={todo} key={`todo-${todo.id}`}/>
  })
}

const mapStateToProps = state => {
  const {todos} = state
  return {todos};
}

export default connect(
  mapStateToProps,
)(TodoList)
