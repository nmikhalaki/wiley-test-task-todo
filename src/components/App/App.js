import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TodoList from '../TodoList/TodoList'
import TodoFilter from '../TodoFilter/TodoFilter'
import TodoSort from '../TodoSort/TodoSort'
import TodoAdd from '../TodoAdd/TodoAdd'
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

function App() {
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
                <TodoList></TodoList>
              </div>
            </main>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
