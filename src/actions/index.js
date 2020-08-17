import * as actionTypes from '../constants/ActionTypes'
import * as filterTypes from '../constants/FilterTypes'
import * as sortTypes from '../constants/SortTypes'


export const addTodo = ({title, description}) => ({type: actionTypes.ADD_TODO, title, description})
export const editTodo = ({id, title, description}) => ({type: actionTypes.EDIT_TODO, id, title, description})
export const deleteTodo = (id) => ({type: actionTypes.DELETE_TODO, id})
export const deleteAllTodos = () => ({type: actionTypes.DELETE_ALL_TODOS})
export const completeTodo = (id) => ({type: actionTypes.COMPLETE_TODO, id})
export const setVisibilityFilter = (filter) => ({type: actionTypes.SET_VISIBILITY_FILTER, filter})
export const setSortByField = (sortBy) => ({type: actionTypes.SET_SORT_BY_FIELD, sortBy: sortBy})
export const setSortOrder = (sortOrder) => ({type: actionTypes.SET_SORT_ORDER, sortOrder: sortOrder})
