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
import {connect} from 'react-redux'
import {setVisibilityFilter} from '../../actions'


class TodoFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: this.props.visibilitySettings.filter
    }
  }

  handleChooseFilter = (event) => {
    const filter = event.target.value
    this.props.setVisibilityFilter(filter)
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
          onChange={this.handleChooseFilter}
        >
          <MenuItem value={SHOW_ALL}>Show All</MenuItem>
          <MenuItem value={SHOW_ACTIVE}>Show Active</MenuItem>
          <MenuItem value={SHOW_COMPLETED}>Show Completed</MenuItem>
        </Select>
      </FormControl>
    )
  }
}

const mapStateToProps = state => {
  const {visibilitySettings} = state
  return {visibilitySettings};
}

export default connect(
  mapStateToProps,
  {setVisibilityFilter}
)(TodoFilter)