import s from "./Posts.module.css";
import {Post} from "./Post/Post";
import React, {ChangeEvent} from "react";
import {profilePageType} from "../../../Redux/Store";
import {addPostActionCreator, clearPostActionCreator, setUserProfile} from "../../../Redux/ProfileReduce";
import {store} from "../../../Redux/Redux-Store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type PostPageProsType = {
    dataForPosts: profilePageType;
    addPostActionCreator: (newPost: any) => void
    clearPostActionCreator: () => void
    changeNewPostTextActionCreator: (e: string) => void
}
type formType = {
    textNewPost: string
}

export const Posts: React.FC<PostPageProsType> = (props) => {

    const onClickHandler = (values: formType) => {
        props.addPostActionCreator(values.textNewPost)

    }
    const newPostLists = props.dataForPosts.posts.map(elem => <Post key={elem.id} id={elem.id} post={elem.post}
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

const PostForm: React.FC<InjectedFormProps<formType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name={'textNewPost'} component={'input'} type="text"/>
            <button> Send</button>
        </form>
    );
};

const PostFormRedux = reduxForm<formType>({form: 'newPost'})(PostForm)

