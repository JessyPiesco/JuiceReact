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
