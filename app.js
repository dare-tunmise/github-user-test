const btn = document.querySelector(".button");
const userName = document.querySelector(".name")
const userBio = document.querySelector(".bio");
const userTwitter = document.querySelector(".twitter");
const userBlog = document.querySelector(".website");
const dataPlug = document.querySelector(".data-table");

// const myuser = "firerum"

console.log(btn)

const url = 'https://api.github.com/users/'

btn.addEventListener("click", ()=>{

    let myuser = document.querySelector(".inputUser").value;
    console.log(myuser)
    fetch(`${url}${myuser}`)
        .then((Response)=>Response.json())
        .then((data)=>{
        console.log(data);
        userName.textContent = data.name;
        userBio.textContent = data.bio;
        userTwitter.textContent = data.twitter_username;
        userBlog.textContent = data.blog;
        userBlog.setAttribute("href", `${data.blog}`);
        console.log(dataPlug);


    })
    .catch( ()=>{
        console.log("user not found")
        //dataPlug.innerHTML = `<h2>user could not be found in the database</h2>`
    })
})