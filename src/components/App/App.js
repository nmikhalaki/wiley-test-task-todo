import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TodoList from '../TodoList/TodoList'
import TodoFilter from '../TodoFilter/TodoFilter'
import TodoSort from '../TodoSort/TodoSort'
import TodoAdd from '../TodoAdd/TodoAdd'
import {SORT_ASC} from '../../constants/SortTypes'
import {
  SHOW_ACTIVE,
  SHOW_COMPLETED,
} from '../../constants/FilterTypes'
import {connect} from 'react-redux'
import './app.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App({todos}) {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3} justify="center">
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <main className="main-container">
              <div className="todo-options-container">
                <TodoSort />
                <TodoFilter />
                <TodoAdd />
              </div>
              <div className="todo-items-container">
                <TodoList todos={todos}/>
              </div>
            </main>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

const mapStateToProps = state => {
  const {todos, visibilitySettings} = state
  visibilitySettings.sortOrder === SORT_ASC ?
    todos.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1) :
    todos.sort((a, b) => (a.title.toLowerCase() < b.title.toLowerCase()) ? 1 : -1)
  visibilitySettings.filter === SHOW_ACTIVE && todos.filter(todo => !todo.completed)
  visibilitySettings.filter === SHOW_COMPLETED && todos.filter(todo => todo.completed)
  return {todos, visibilitySettings}
}

export default connect(
  mapStateToProps,
)(App)
