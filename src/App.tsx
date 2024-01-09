import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/Navbar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import s from "./styledComponents/Dialogs/Dialogs.module.css";
import {BrowserRouter, Route} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
    <div className={'app-wrapper'}>
        <Header/>
        <NavBar/>
        <div className={'app-wrapper-content'}>
            <Route path='/message' component={Dialogs}/>
            <Route path='/profile' component={Profile}/>
            {/*<Profile/>*/}
            <Dialogs message={'Hi! How are you?'}/>
        </div>
    </div>
      </BrowserRouter>
  );
}


export default App;
