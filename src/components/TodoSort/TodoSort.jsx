import React from 'react'
import SortIcon from '@material-ui/icons/Sort'
import {Button} from '@material-ui/core'
import {connect} from 'react-redux'
import {setSortOrder} from '../../actions'
import {
  SORT_DESC,
  SORT_ASC,
} from '../../constants/SortTypes'
import './todoSort.css'

class TodoSort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBtn: this.props.visibilitySettings.sortOrder === SORT_ASC ? 'todo-sort-button-asc' : 'todo-sort-button-desc'
    }
  }

  handleChangeSortOrder = () => {
    this.props.setSortOrder(this.props.visibilitySettings.sortOrder === SORT_DESC ? SORT_ASC : SORT_DESC)
    this.setState({
        sortBtn: this.state.sortBtn === 'todo-sort-button-asc' ? 'todo-sort-button-desc' : 'todo-sort-button-asc'
      }
    )
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleChangeSortOrder} className={this.state.sortBtn}><SortIcon></SortIcon></Button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {visibilitySettings} = state
  return {visibilitySettings};
}

export default connect(
  mapStateToProps,
  {setSortOrder}
)(TodoSort)