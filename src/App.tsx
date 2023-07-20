import React from "react";
import "./App.css";
import {NavBar} from "./components/NavBar/NavBar";
import {BrowserRouter, Route, RouteComponentProps, withRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {connect} from "react-redux";
import {getAuthUserDataTC} from "./Redux/AuthReducer";
import {compose} from "redux";

class App extends React.Component<any> {
    componentDidMount() {
        this.props.getAuthUserDataTC()
    }

    render() {


        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <div className="main-section">
                    <NavBar/>
                    <Route path="/Profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/Dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/Login" component={Login}/>
                    <Route path="/News" component={News}/>
                    <Route path="/Music" component={Music}/>
                    <Route path="/Users" component={UsersContainer}/>
                    <Route path="/Settings" component={Settings}/>

                </div>
                <footer> footer</footer>
            </div>
        );

    }
}


export default withRouter(connect(null, {getAuthUserDataTC})(App))
