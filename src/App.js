import React from 'react';
import './App.css';
import Footer from './footer/Footer';
import Header from './header/Header';
import Filter from './filter/Filter';
import Description from './description/Description';
import Manager from './manager/Manager';


function App() {
    return (
        <>
            <Header></Header>
            <div className='container'>
                <Filter></Filter>
                <Manager></Manager>
                <Description></Description>
            </div>
            <Footer></Footer>
        </>
    );
}

export default App;
