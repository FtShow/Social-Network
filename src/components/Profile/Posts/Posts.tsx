import s from "./Posts.module.css";
import {Post} from "./Post/Post";
import React from "react";
import {profilePageType} from "../../../Redux/Store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {ContainerTextArea} from "../../common/FormsControl/FormsControls";

export type PostPageProsType = {
    dataForPosts: profilePageType;
    addPostActionCreator: (newPost: any) => void
    clearPostActionCreator: () => void
    changeNewPostTextActionCreator: (e: string) => void
}
type formType = {
    textNewPost: string
}

export class Posts extends React.Component<PostPageProsType> {
    render() {

        const onClickHandler = (values: formType) => {
            this.props.addPostActionCreator(values.textNewPost)
        }

        const newPostLists = this.props.dataForPosts.posts.map(elem => <Post key={elem.id} id={elem.id} post={elem.post}
                                                                             likes={elem.likes}/>)

        return (
            <>
                <div className={s.newPost}>
                    <h2>My Post</h2>
                    <PostFormRedux onSubmit={onClickHandler}/>
                </div>
                {newPostLists.reverse()}
            </>
        )
    }
}

const maxLength30 = maxLengthCreator(30)
const PostForm: React.FC<InjectedFormProps<formType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name={'textNewPost'} validate={[required, maxLength30]} component={ContainerTextArea} type="text"/>
            <button> Add post </button>
        </form>
    );
};

const PostFormRedux = reduxForm<formType>({form: 'newPost'})(PostForm)

