export const getPosts = async () =>{
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    return result.json();
}