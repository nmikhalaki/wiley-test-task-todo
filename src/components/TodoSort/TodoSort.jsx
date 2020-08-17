import React from 'react'
import './todoSort.css'
import SortIcon from '@material-ui/icons/Sort'
import {Button} from '@material-ui/core'

class TodoSort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortOrder: this.props.sortOrder,
      sortBy: this.props.sortBy,
      sortBtn: 'todo-sort-button-desc'
    }
  }

  handleClickSort() {
    this.setState({
        sortBtn: this.state.sortBtn == 'todo-sort-button-desc' ? 'todo-sort-button-asc' : 'todo-sort-button-desc'
      }
    )
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.handleClickSort()} className={this.state.sortBtn}><SortIcon></SortIcon></Button>
      </div>
    )
  }
}

export default TodoSort