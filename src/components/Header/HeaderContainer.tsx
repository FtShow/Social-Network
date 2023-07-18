import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserDataTC, logout} from "../../Redux/AuthReducer";

type HeaderContainerType = {
    login: string,
    isAuth: boolean
    getAuthUserDataTC: () => void
    logout: ()=>void
}


class HeaderContainer extends React.Component<HeaderContainerType>{
    componentDidMount() {
        this.props.getAuthUserDataTC()
    }

    render() {
        return (
            <Header logout={this.props.logout} login={this.props.login} isAuth={this.props.isAuth}/>
        )

    }
}
const mapStateToProps = (state: any) =>{
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login

    }
}

export default connect (mapStateToProps, {getAuthUserDataTC, logout}) (HeaderContainer)