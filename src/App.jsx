import React from 'react';
import './normalize.css';
import './App.scss'

import Header from './components/Header/Header';
import MyAcc from './components/MyAcc/MyAcc'
import CreateAccount from './components/CreateAccount/CreateAccount';
import FooterReg from './components/FooterReg/FooterReg';
import AddDog from './components/AddDog/AddDog';


const App = () => {
    return (
        <div className='App'>
            <Header/>
            <CreateAccount/>
            <MyAcc/>
            <AddDog/>
            <FooterReg/>

        </div>
    );
}

export default App