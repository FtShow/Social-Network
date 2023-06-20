import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/AuthReducer";
import {log} from "util";
type HeaderContainerType = {
    login: string,
    isAuth: boolean
    setAuthUserData: (userId: string | number, email: string, login: string) => void
}


class HeaderContainer extends React.Component<HeaderContainerType>{
    componentDidMount() {
        console.log(this.props)
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                let {id, email, login} = response.data.data
                response.data.resultCode === 0 ? this.props.setAuthUserData(id, email, login): console.log("NOT")
            });
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

export default connect (mapStateToProps, {setAuthUserData}) (HeaderContainer)