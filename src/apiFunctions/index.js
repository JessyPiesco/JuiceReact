const BASE = "https://afternoon-bayou-17974.herokuapp.com/api";

export async function getPosts(){

    const response = await fetch(`${BASE}/posts`);
    const result = await response.json();
    const posts = result.posts
    return posts;
}

export async function getTags(){
    const response = await fetch (`${BASE}/tags`);
    const result = await response.json();
    const tags = result.tags
    return tags;
}

export async function logInUser (username, password){
const options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        user: {
            username,
            password,
        },
}),
};
const response = await fetch(`${BASE}/users/login`, options);
const result = await response.json();

return result.users
}

export async function registerUser(username, password){
    const options = {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user: {
                username,
                password,
            },
        }),
    };
    const response = await fetch(`
    ${BASE}/users/register`, options);
    const result = await response.json();
    return result.users

}
