import React from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import TaskManager from './TaskManager/TaskManager'


function App(props) {
    return (
        <>
            <Header></Header>
                <TaskManager></TaskManager>
            <Footer></Footer>
        </>
    );
}

export default App;
