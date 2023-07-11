import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {getAuthUserDataTC, setAuthUserData} from "../../Redux/AuthReducer";
import {log} from "util";
import {AuthAPI} from "../../Redux/Api";
type HeaderContainerType = {
    login: string,
    isAuth: boolean
    getAuthUserDataTC: () => void
}


class HeaderContainer extends React.Component<HeaderContainerType>{
    componentDidMount() {
        console.log(this.props)
        this.props.getAuthUserDataTC()
    }

    render() {
        return (
            <Header login={this.props.login} isAuth={this.props.isAuth}/>
        )

    }
}
const mapStateToProps = (state: any) =>{
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login

    }
}

export default connect (mapStateToProps, {getAuthUserDataTC}) (HeaderContainer)