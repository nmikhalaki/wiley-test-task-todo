import React from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import TaskFilter from './TaskFilter/TaskFilter';
import TaskViewer from './TaskViewer/TaskViewer';
import TaskSearch from './TaskSearch/TaskSearch';
import TaskCreator from './TaskCreator/TaskCreator';


function App(props) {
    return (
        <>
            <Header></Header>
            <div className='app'>
                <TaskFilter></TaskFilter>
                <div className='app-content'>
                    <TaskSearch>
                    </TaskSearch>
                    <TaskCreator>
                    </TaskCreator>
                    <TaskViewer>
                    </TaskViewer>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default App;
