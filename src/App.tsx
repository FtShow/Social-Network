import React from "react";
import "./App.css";
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {StoreType} from "./Redux/Store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

function App() {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className="main-section">

                    <NavBar/>
                    <Route path="/Profile" render={() => <Profile/>}/>


                    <Route path="/Dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/News" component={News}/>
                    <Route path="/Music" component={Music}/>

                    <Route path="/Settings" component={Settings}/>

                </div>
                <footer> footer</footer>
            </div>
        </BrowserRouter>
    );

}


export default App;
