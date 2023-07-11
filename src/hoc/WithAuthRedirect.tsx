import {Redirect, RouteComponentProps} from "react-router-dom";
import React from "react";
import {ProfileContainer} from "../components/Profile/ProfileContainer";
import {RootStateType} from "../Redux/Redux-Store";
import {connect} from "react-redux";

export const withAuthRedirect = (Component: React.ComponentType<any>) => {
    class RedirectComponent extends React.Component<any, any> {

        render() {
            return this.props.isAuth ? <Component {...this.props}/> : <Redirect to={"/login"}/>
        }
    }
    let mapStateToPropsWithRedirect = (state: RootStateType) => ({
        isAuth: state.auth.isAuth
    })
    let ConnectedRedirectComponent = connect(mapStateToPropsWithRedirect)(RedirectComponent)

    return ConnectedRedirectComponent
};
