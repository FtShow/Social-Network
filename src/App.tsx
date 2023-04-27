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
import {StoreType} from "./Redux/State";

function App(props: StoreType) {

    const {messagesPage, profilePage } = props._state

props.getState()

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className="main-section">

                    <NavBar/>
                    <Route path='/Profile' render={()=><Profile changeNewPostText={props.changeNewPostText.bind(props)}
                                                                addPost={props.addPost.bind(props)}
                                                                getState={props.getState.bind(props)}
                                                                profilePage={profilePage}/>}/>


                    <Route path="/Dialogs" render={() => <Dialogs messagesPage={messagesPage}/>}/>
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
