
// Тестирование добавления поста
import {
    addPostAC,
    changeNewPostTextActionCreator,
    clearPostActionCreator, deletePostAC, profilePageType,
    ProfileReducer, setStatus, setUserProfile, updateStatus
} from "./ProfileReduce";

const initialState: profilePageType = {
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
    newPosts: "",
    profile: null,
    status: ''
}

test('should add a new post', () => {
    const textPost = 'New Post Text';
    const action = addPostAC(textPost);

    const newState = ProfileReducer(initialState, action);

    expect(newState.posts.length).toBe(initialState.posts.length + 1);
    expect(newState.posts[newState.posts.length - 1].post).toBe(textPost);
});

// Тестирование очистки текста поста
test('should clear the new post text', () => {
    const action = clearPostActionCreator();

    const newState = ProfileReducer(initialState, action);

    expect(newState.newPosts).toBe('');
});

// Тестирование изменения текста нового поста
test('should change the new post text', () => {
    const newText = 'New Text';
    const action = changeNewPostTextActionCreator(newText);

    const newState = ProfileReducer(initialState, action);

    expect(newState.newPosts).toBe(newText);
});

// Тестирование установки профиля пользователя
test('should set user profile', () => {
    const profile = { name: 'John', age: 30 }; // Замените на реальный объект профиля
    const action = setUserProfile(profile);

    const newState = ProfileReducer(initialState, action);

    expect(newState.profile).toBe(profile);
});

// Тестирование установки статуса
test('should set status', () => {
    const status = 'Online';
    const action = setStatus(status);

    const newState = ProfileReducer(initialState, action);

    expect(newState.status).toBe(status);
});

// Тестирование обновления статуса
test('should update status', () => {
    const newStatus = 'Away';
    const action = updateStatus(newStatus);

    const newState = ProfileReducer(initialState, action);

    expect(newState.status).toBe(newStatus);
});
//удаление поста
test('should update status', () => {
    const id = 2;
    const action = deletePostAC(id);

    const newState = ProfileReducer(initialState, action);

    expect(newState.posts.length).toBe(initialState.posts.length - 1);
});