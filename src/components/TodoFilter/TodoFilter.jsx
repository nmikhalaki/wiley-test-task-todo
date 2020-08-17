import React from 'react'
import {
  Select,
  MenuItem,
  FormControl,
} from '@material-ui/core'
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
} from '../../constants/FilterTypes'


class TodoFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: this.props.filter
    }
  }

  handleChooseFilter(filter) {
    this.setState({
      filter: filter
    })
  }

  render() {
    return (
      <FormControl>
        <Select
          id="filter-todo-list"
          value={this.state.filter}
          onChange={e => this.handleChooseFilter(e.target.value)}
        >
          <MenuItem value={SHOW_ALL}>Show All</MenuItem>
          <MenuItem value={SHOW_ACTIVE}>Show Active</MenuItem>
          <MenuItem value={SHOW_COMPLETED}>Show Completed</MenuItem>
        </Select>
      </FormControl>
    )
  }
}

export default TodoFilter