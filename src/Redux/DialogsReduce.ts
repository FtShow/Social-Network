import {store} from "./Redux-Store";

const SEND_MESSAGE = "SEND-MESSAGE";
const initialState = {
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
}

export const MessagesReducer = (state: any = initialState, action: any) => {

    if (action.type === SEND_MESSAGE) {
        const newMessage = {
            id: state.textMessage.length + 1,
            text: action.newMessageBody,
            yourMessage: Math.random() < 0.5
        }
        return {
            ...state,
            textMessage: [...state.textMessage, newMessage]
        }
    } else {
        return state;
    }
}

export const sendNewMessage = (newMessage: string) => ({
    type: SEND_MESSAGE,
    newMessageBody: newMessage
})
