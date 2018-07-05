const API = 'https://warsawjs-21-api.herokuapp.com';

function transformJSON(response) {
    if (!response.ok) {
        return Promise.reject(response);
    }
    return response.json();
}

export function login({username, password}) {
    return fetch(`${API}/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password}),
    }).then(transformJSON);
}

export function readPostList() {
    return fetch(`${API}/posts`, {
        method: 'GET'
    }).then(transformJSON);
}

export function createPost({username, title, image}) {
    const formData = new FormData();

    formData.append('username', username);
    formData.append('title', title);
    formData.append('image', image);

    return fetch(`${API}/posts`, {
        method: 'POST',
        body: formData
    }).then(transformJSON);
}

export function readPost(postId) {
    return fetch(`${API}/posts/${postId}`, {
        method: 'GET'
    }).then(transformJSON);
}

export function createComment({postId, username, body, position:{x,y}}) {
    return fetch(`${API}/posts/${postId}/comments`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({postId, username, body, position:{x,y}});
    }).then(transformJSON);
}