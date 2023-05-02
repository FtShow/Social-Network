// import {rerenderEntreTree} from "./rerender";
import {stat} from "fs";
const ADD_POST = "ADD-POST";
const CHANGE_NEW_POST_TEST = "CHANGE-NEW-POST-TEXT";
const CHANGE_NEW_MESSAGE_BODY = "CHANGE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";
export type dialogsItemType = {
    id: number,
    name: string,
    avatar: string
}
export type textMessageItemType = {
    id: number,
    text: string | undefined,
    yourMessage: boolean
}
export type messagesPageType = {
    dialogs: dialogsItemType[]
    textMessage: textMessageItemType[]
    newMessageBody: string | undefined
}
export type messagesPageTypeProps = {
    messagesPage: messagesPageType
    dispatch: (v: Action) => void
}
export type postsItemType = {
    id: number,
    post: string | undefined
    likes: number
}


export type profilePageType = {
    posts: postsItemType[];
    newPosts: string | undefined

}
export type PostPageProsType = {
    posts: postsItemType[];
    newMessage: string | undefined;
    dispatch: (v: Action) => void
}

export type profilePageTypeProps = {
    profilePage: profilePageType;
    getState: () => stateType
    dispatch: (v: Action) => void
}


export type stateType = {
    messagesPage: messagesPageType
    profilePage: profilePageType

}
type Action = {
    type: string;
    textPost?: string;
    newTextPost?: string;
    newMessageBody?: string
};
export type StoreType = {
    _state: stateType;
    subscriber: (callback: () => void) => void
    _onChange: () => void
    getState: () => stateType
    dispatch: (v: Action) => void
}
export type RootStoreType = {
    store: StoreType
}

export const store: StoreType = {
    _state: {
        messagesPage: {
            dialogs: [
                {
                    id: 1,
                    name: "SERGEY",
                    avatar: "https://avatars.mds.yandex.net/i?id=2bf8c047d61a77491675e765c2a8f65d538037fe-9182388-images-thumbs&n=13"
                },
                {
                    id: 2,
                    name: "ANNA",
                    avatar: "https://avatars.mds.yandex.net/i?id=2bf8c047d61a77491675e765c2a8f65d538037fe-9182388-images-thumbs&n=13"
                },
                {
                    id: 3,
                    name: "IVAN",
                    avatar: "https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676295806122712757.png"
                },
                {
                    id: 4,
                    name: "KATE",
                    avatar: "https://avatars.mds.yandex.net/i?id=2bf8c047d61a77491675e765c2a8f65d538037fe-9182388-images-thumbs&n=13"
                },
                {
                    id: 5,
                    name: "MIKE",
                    avatar: "https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676295806122712757.png"
                },
                {
                    id: 6,
                    name: "JULIA",
                    avatar: "https://avatars.mds.yandex.net/i?id=2bf8c047d61a77491675e765c2a8f65d538037fe-9182388-images-thumbs&n=13"
                },
                {id: 7, name: "ALEX", avatar: "https://hostenko.com/wpcafe/wp-content/uploads/rndavatar.png"},
                {
                    id: 8,
                    name: "OLGA",
                    avatar: "https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676295806122712757.png"
                },
                {id: 9, name: "MAX", avatar: "https://hostenko.com/wpcafe/wp-content/uploads/rndavatar.png"},
                {id: 10, name: "MARINA", avatar: "https://hostenko.com/wpcafe/wp-content/uploads/rndavatar.png"},
            ],
            textMessage: [
                {id: 1, text: "text1", yourMessage: true},
                {id: 2, text: "text2", yourMessage: true},
                {id: 3, text: "text3", yourMessage: false},
                {id: 4, text: "text3", yourMessage: false},
                {id: 5, text: "text3", yourMessage: true},

            ],
            newMessageBody: ''
        },

        profilePage: {
            posts: [
                {id: 1, post: "First post", likes: 15},
                {id: 2, post: "Second post", likes: 3},
                {id: 3, post: "Third post", likes: 4},
                {id: 4, post: "Fourth post", likes: 12},
                {id: 5, post: "Fifth post", likes: 23},
                {id: 6, post: "Sixth post", likes: 253},
                {id: 7, post: "Seventh post", likes: 14},
                {id: 8, post: "Eighth post", likes: 3},
                {id: 9, post: "Ninth post", likes: 6},
                {id: 10, post: "Tenth post", likes: 12},
            ],
            newPosts: ""

        }
    },
    getState() {
        return this._state
    },
    _onChange() {
        console.log(12)
    },
    subscriber(observer: any) {
        this._onChange = observer
    },
    dispatch(action){
        console.log(action)
        if(action.type === ADD_POST){
            const newPost = {
                id: this._state.profilePage.posts.length + 1,
                post: action.textPost,
                likes: 0,
            }

            this._state.profilePage.posts.push(newPost)
            this._onChange()
        }
        else if(action.type === 'CLEAR-POST'){


            this._state.profilePage.newPosts = ''
            this._onChange()
        }
        else if(action.type === CHANGE_NEW_POST_TEST){
            console.log(this._state.profilePage.newPosts)
            this._state.profilePage.newPosts = action.newTextPost
            this._onChange()
        }
        else if(action.type === CHANGE_NEW_MESSAGE_BODY){

            this._state.messagesPage.newMessageBody = action.newMessageBody
            this._onChange()
        }
        else if(action.type === SEND_MESSAGE){
            const newMessage = {
                id: this._state.messagesPage.textMessage.length + 1,
                text: action.newMessageBody,
                yourMessage: Math.random() < 0.5
            }

            this._state.messagesPage.textMessage.push(newMessage)
            this._onChange()
        }

    }
}
export const addPostActionCreator = () =>({type: ADD_POST, textPost: store._state.profilePage.newPosts})
export const clearPostActionCreator = () =>({type: "CLEAR-POST"})
export const changeNewPostTextActionCreator = (text: string) =>({type: CHANGE_NEW_POST_TEST, newTextPost: text})
export const changeNewTextMessageActionCreator = (text: string) =>({type: CHANGE_NEW_MESSAGE_BODY, newMessageBody: text})
export const sendNewMessageActionCreator = () =>({type: SEND_MESSAGE, newMessageBody: store._state.messagesPage.newMessageBody})