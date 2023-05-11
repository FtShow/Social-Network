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
import {RootStoreType, StoreType} from "./Redux/Store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

function App(props: RootStoreType) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className="main-section">

                    <NavBar/>
                    <Route path="/Profile" render={() => <Profile dispatch={props.dispatch.bind(props.state)}
                                                                  profilePage={props.state.profilePage}/>}/>


                    <Route path="/Dialogs" render={() => <DialogsContainer messagesPage={props.state.messagesPage}
                                                                           dispatch={props.dispatch.bind(props.state)}/>}/>
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
