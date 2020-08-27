import React from 'react'
import PropTypes from 'prop-types'
import SortIcon from '@material-ui/icons/Sort'
import {Button} from '@material-ui/core'
import {
  SORT_DESC,
  SORT_ASC,
} from '../../constants/SortTypes'
import './todoSort.css'

const TodoSort = (props) => {
  let className
  return (
    <div>
      <Button
        onClick={() => {
          const sortOrder = props.visibility.sortOrder === SORT_ASC ? SORT_DESC : SORT_ASC
          props.setSortOrder(sortOrder)
          if (sortOrder === SORT_ASC) {
            className = '.todo-sort-button-asc'
          }
          if (sortOrder === SORT_DESC) {
            className = '.todo-sort-button-desc'
          }
        }}
        className={className}><SortIcon/></Button>
    </div>
  )
}

export default TodoSort