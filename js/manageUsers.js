// ===============================
// User Data
// ===============================
let users = JSON.parse(
    localStorage.getItem("boltifyUsers")
) || [];


// ===============================
// Elements
// ===============================

const usersContainer =
document.getElementById("usersContainer");

const searchUser =
document.getElementById("searchUser");


// ===============================
// Display Users
// ===============================

function displayUsers(usersList){


    usersContainer.innerHTML = "";


    usersList.forEach(function(user){


        const card = `

        <div class="user-card">


            <h2>
            ${user.name}
            </h2>


            <p>
            Email:
            ${user.email}
            </p>


            <p>
            Orders:
            ${user.orders}
            </p>


            <p>
            Status:
            ${user.status}
            </p>


           <button 
class="deleteUserBtn"
onclick="deleteUser(${user.id})">

Delete User

</button>


        </div>

        `;


        usersContainer.innerHTML += card;


    });


}


// Initial Load

displayUsers(users);
// ===============================
// Search Users
// ===============================

searchUser.addEventListener("input", function(){


    const searchValue =
    searchUser.value
    .trim()
    .toLowerCase();



    const filteredUsers =
    users.filter(function(user){


        return (

            user.name
            .toLowerCase()
            .includes(searchValue)


            ||

            user.email
            .toLowerCase()
            .includes(searchValue)


            ||

            user.status
            .toLowerCase()
            .includes(searchValue)

        );


    });



    displayUsers(filteredUsers);


});
// ===============================
// Delete User
// ===============================

function deleteUser(id){


    users = users.filter(function(user){

        return user.id !== id;

    });


    localStorage.setItem(
        "boltifyUsers",
        JSON.stringify(users)
    );


    displayUsers(users);


}