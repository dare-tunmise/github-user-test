const btn = document.querySelector(".button");
const userName = document.querySelector(".name")
const userBio = document.querySelector(".bio");
const userTwitter = document.querySelector(".twitter");
const userBlog = document.querySelector(".website");
const dataPlug = document.querySelector(".data-table");

// const myuser = "firerum"


const url = 'https://api.github.com/users/firerum'

btn.addEventListener("click", ()=>{

    console.log(myuser)
    getUser().then((data)=>{
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

const getUser = async ()=> {

    let myuser = document.querySelector(".inputUser").value;
    const response = await fetch(`${url}${myuser}`);
    const data = await response.json();

    return data;

}

