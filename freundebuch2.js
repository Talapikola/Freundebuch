function searchUser() {
    const displayElement = document.getElementById('displayBox');
    let inputText = document.getElementById('input')?.value.trim();
    const usersUrl = `https://dummyjson.com/users/search?q=${inputText}`;

    fetch(usersUrl)
        .then(response => response.json())
        .then(data => {
            // // Assuming each 'user' is an object with properties like 'name', 'email', etc.
            // const filteredData = data.map(user => user.name); // Displaying the 'name' property
            let users = data.users;
            users.forEach(user => {
                // const listItem = document.createElement('div');
                // const emailItem = document.createElement('div');

                // listItem.textContent = user.firstName + user.lastName;
                // emailItem.textContent = user.email;
                // displayElement.appendChild(listItem);
                // displayElement.appendChild(emailItem);
                displayElement.innerHTML += `
                <div class="card" style="width: 18rem;">
                <img src="${user.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text">${user.firstName} ${user.lastName}</p>
                  <p class="card-text">${user.email} </p>
                  <a href="https://getbootstrap.com/docs/5.3/helpers/stretched-link/#identifying-the-containing-block" class="stretched-link"></a>
                </div>
              </div>`
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}