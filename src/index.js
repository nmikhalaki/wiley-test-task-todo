import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import taskList from './state';

if (!localStorage.getItem('taskList')) {
    const tasks = []
    taskList.forEach((task, index) => {
        tasks.push(task)
    })
    localStorage.setItem('taskList', JSON.stringify(tasks))
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
