import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import App from './components/App/App';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import reducers from './reducers'
import * as serviceWorker from './serviceWorker';


const store = createStore(reducers)
// console.log(store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState()))
// store.dispatch(addTodo('#4 task', 'dfddl;af sdkfsdlkf'))
// store.dispatch(deleteTodo(0))
// unsubscribe()

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline></CssBaseline>
    <Header />
    <App />
    <Footer />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA