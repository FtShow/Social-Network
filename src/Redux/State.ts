import {rerenderEntreTree} from "./rerender";

export type dialogsItemType = {
    id: number,
    name: string,
    avatar: string
}
export type textMessageItemType = {
    id: number,
    text: string,
    yourMessage: boolean
}
export type messagesPageType = {
    dialogs: dialogsItemType[]
    textMessage: textMessageItemType[]
}
export type messagesPageTypeProps = {
    messagesPage: messagesPageType
}
export type postsItemType = {
    id: number,
    post: string
    likes: number
}


export type profilePageType = {
    posts: postsItemType[];

}
export type PostPageProsType = {
    posts: postsItemType[];
    addPost: (v: string) => void
}

export type profilePageTypeProps = {
    profilePage: profilePageType;
    addPost: (v: string) => void
}


export type stateType = {
    messagesPage: messagesPageType
    profilePage: profilePageType

}
export type RootStateType = {
    state: stateType;
    addPost: (v: string) => void
}

export const state: stateType = {
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
            {id: 3, name: "IVAN", avatar: "https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676295806122712757.png"},
            {
                id: 4,
                name: "KATE",
                avatar: "https://avatars.mds.yandex.net/i?id=2bf8c047d61a77491675e765c2a8f65d538037fe-9182388-images-thumbs&n=13"
            },
            {id: 5, name: "MIKE", avatar: "https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676295806122712757.png"},
            {
                id: 6,
                name: "JULIA",
                avatar: "https://avatars.mds.yandex.net/i?id=2bf8c047d61a77491675e765c2a8f65d538037fe-9182388-images-thumbs&n=13"
            },
            {id: 7, name: "ALEX", avatar: "https://hostenko.com/wpcafe/wp-content/uploads/rndavatar.png"},
            {id: 8, name: "OLGA", avatar: "https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676295806122712757.png"},
            {id: 9, name: "MAX", avatar: "https://hostenko.com/wpcafe/wp-content/uploads/rndavatar.png"},
            {id: 10, name: "MARINA", avatar: "https://hostenko.com/wpcafe/wp-content/uploads/rndavatar.png"},
        ],
        textMessage: [
            {id: 1, text: "text1", yourMessage: true},
            {id: 2, text: "text2", yourMessage: true},
            {id: 3, text: "text3", yourMessage: false},
            {id: 4, text: "text3", yourMessage: false},
            {id: 5, text: "text3", yourMessage: true},

        ]
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

    }
}

//Callbacks
export const addPost = (textPost: string) => {
    const newPost = {
        id: state.profilePage.posts.length + 1,
        post: textPost,
        likes: 0,
    }
    state.profilePage.posts.push(newPost)
    rerenderEntreTree(state, addPost)
    console.log(state.profilePage.posts)
}
