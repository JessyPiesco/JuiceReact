const BASE = "http://localhost:8080/api";

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

            username,
            password,

}),
};
const response = await fetch(`${BASE}/users/login`, options);
const result = await response.json();
return result
}

export async function registerUser(username, password, name, location){
    const options = {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, name, location } ),
    };
    const response = await fetch(`
    ${BASE}/users/register`, options);
    const result = await response.json();
    console.log(result)
    return result

}
