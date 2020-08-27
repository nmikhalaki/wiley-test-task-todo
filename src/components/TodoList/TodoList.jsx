import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import './todoList.css'

const TodoList = ({todos}) => todos.map(todo => <TodoItem todo={todo} key={`todo-${todo.id}`}/>)

export default TodoList
