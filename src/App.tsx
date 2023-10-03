import React from "react";
import "./App.css";
import {NavBar} from "./components/NavBar/NavBar";
import {Route, withRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {connect} from "react-redux";
import {initializedApp} from "./Redux/AppReducer";
import {RootStateType} from "./Redux/Redux-Store";
import {Preloader} from "./components/common/Preloader/Preloader";

type MapStateToPropsType = {
    initialize: boolean
}
type MapDispatchToPropsType = {
    initializedApp: () => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType
class App extends React.Component<any> {
    componentDidMount() {
        this.props.initializedApp()
    }


    render() {
        if (!this.props.initialize) {
            return <Preloader/>
        }

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
const mapStateToProps = (state: RootStateType)=>{
    return {
        initialize: state.initialized.initialized
    }
}

export default withRouter(connect(mapStateToProps, {initializedApp})(App))
