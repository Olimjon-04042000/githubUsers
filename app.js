const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const userName = document.querySelector('.user-name');
const followers = document.querySelector('.followers');
const following = document.querySelector('.following');
const repos = document.querySelector('.repos');

function getUsers(username) {
    fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(data => usersInfo(data))
        .catch(error => {
            console.log(error);
        })
}

btn.addEventListener('click', event => {
    event.preventDefault();
    let inputValue = input.value;
    getUsers(inputValue);
    input.value = '';
})


function usersInfo(user) {
    userName.textContent = user.name;
    followers.textContent = user.followers;
    following.textContent = user.following;
    repos.textContent = user.public_repos;
    console.log(userName);
}