import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/Navbar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";




function App() {
  return (
      <BrowserRouter>
    <div className={'app-wrapper'}>
        <Header/>
        <NavBar/>
        <div className={'app-wrapper-content'}>
            <Route path='/message' component={Dialogs}/>
                {/*    component={state.dialogsPage.dialogs.map(el => {*/}
                {/*    return (*/}
                {/*        <Dialogs*/}
                {/*            key = {el.id}*/}
                {/*            name={el.name}*/}
                {/*            id={el.id}*/}
                {/*        />*/}
                {/*    )*/}
                {/*}}*/}

            <Route path='/profile' component={Profile}/>
            <Route path='/new' />
            <Route path='/music'/>
            <Route path='/settings'/>
            {/*<Profile/>*/}
            <div>

            </div>
        </div>
    </div>
      </BrowserRouter>
  );
}


export default App;
