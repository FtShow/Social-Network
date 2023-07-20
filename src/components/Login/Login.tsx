import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {ContainerInput} from "../common/FormsControl/FormsControls";
import {required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {login, logout} from "../../Redux/AuthReducer";
import {RootStateType} from "../../Redux/Redux-Store";
import {Redirect} from "react-router-dom";
import ls from './Login.module.css'
type LoginPropsType = {
    isAuth: boolean
    login:(email: string, password: string, rememberMe: boolean)=>void
    logout: ()=>void
}
const Login:React.FC<LoginPropsType> = ({isAuth, login, logout}) => {
    console.log(isAuth)
    if(isAuth)return <Redirect to={'/profile'}/>
    const onSubmitHandler = (formData: any) => {
        login(formData.email, formData.password, formData.RememberMe)
        //console.log(formData.login, formData.password, formData.RememberMe)
    }

    return (
        <div>
            <h1>LOGIN </h1>
            <LoginReduxForm onSubmit={onSubmitHandler}/>
        </div>
    );
};
type LoginFormType = {
    Login: string,
    Password: string,
    RememberMe: boolean,
}
const LoginForm: React.FC<InjectedFormProps<LoginFormType>> = (props) => {
    console.log("ERROR")
    console.log(props.error)
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={props.error && ls.globalErrorBlock}>{props.error}
            <div><Field placeholder={'Login'} validate={[required]} name={'email'} component={ContainerInput}/></div>
            <div><Field placeholder={'Password'} validate={[required]} name={'password'} type={'password'} component={ContainerInput}/></div>
            <div><Field type="checkbox" name={'RememberMe'} component={'input'}/> Remember me</div>
            <button>LOGIN</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<LoginFormType>({
    form: 'login',
})(LoginForm)
const mapStateToProps = (state: RootStateType) =>{
    return {
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {login, logout})(Login)
