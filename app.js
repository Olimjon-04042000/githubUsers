const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

function getUsers(username) {
    fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(data => console.log(data));
}
getUsers();

btn.addEventListener('click', event => {
    event.preventDefault();
    let inputValue =
        console.log(input.value);
})

// function renderUsers(users) {
//     let html = '';
//     users.forEach(user => {
//         // html += `<h2>${user.name}</h2>`
//         console.log(user);
//     });
//     // document.querySelector('.container').innerHTML = html;
//     console.log(html);
// }