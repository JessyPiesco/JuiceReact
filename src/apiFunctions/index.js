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

export async function createPost(title, content, tags){
    const options = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({

                title,
                content,
                tags,

        }),
    }
    const response = await fetch (`${BASE}/posts`, options);
    const result = await response.json();

    console.log(response, "response")
    console.log(result, "result api")
    return result.posts
}
console.log(createPost)

export async function deletePost (token){
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    }
    const response = await fetch(`${BASE}/posts`, options)
    const result = await response.json()
    return result
}
