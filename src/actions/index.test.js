import * as actionTypes from '../constants/ActionTypes'
import * as actions from './index'


describe('actions testing', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo('Task 1', 'to do something')).toEqual({
      type: actionTypes.ADD_TODO,
      title: 'Task 1',
      description: 'to do something',
    })
  })
  it('editTodo should create EDIT_TODO action', () => {
    expect(actions.editTodo('Task 1', 'change something')).toEqual({
      type: actionTypes.EDIT_TODO,
      title: 'Task 1',
      description: 'change something',
    })
  })
})