import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export const Login = () => {
    const onSubmitHandler = (formData: unknown) => {
        console.log(formData)
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
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'Login'} name={'login'} component={'input'}/></div>
            <div><Field placeholder={'Password'} name={'password'} component={'input'}/></div>
            <div><Field type="checkbox" name={'RememberMe'} component={'input'}/> Remember me</div>
            <button>LOGIN</button>
        </form>
    );
};

const LoginReduxForm = reduxForm<LoginFormType>({
    form: 'login',
})(LoginForm)
