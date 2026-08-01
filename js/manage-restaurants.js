/*
====================================
Manage Restaurants
====================================
*/

// ==============================
// Check Admin Login
// ==============================

if(localStorage.getItem("adminLoggedIn")!=="true"){

alert("Please login first.");

window.location.href="admin-login.html";

}

// ==============================
// Load Restaurants
// ==============================

let restaurants = JSON.parse(

localStorage.getItem("restaurants")

);

// First Time Setup

// ==============================
// Display Restaurants
// ==============================

function displayRestaurants(){

const list=

document.getElementById("restaurantList");

list.innerHTML="";

restaurants.forEach(function(r){

list.innerHTML+=`

<div class="restaurant-card">

<div>

<h2>${r.name}</h2>

<p>${r.cuisine}</p>

<p>⭐ ${r.rating}</p>

<p>${r.time} mins</p>

</div>

<div>

<button onclick="editRestaurant(${r.id})">

Edit

</button>

<button onclick="deleteRestaurant(${r.id})">

Delete

</button>

</div>

</div>

`;

});

}
// ==============================
// Edit Restaurant
// ==============================

function editRestaurant(id){

    const restaurant = restaurants.find(function(r){

        return r.id === id;

    });

    document.getElementById("restaurantId").value = restaurant.id;

    document.getElementById("restaurantName").value = restaurant.name;

    document.getElementById("restaurantCuisine").value = restaurant.cuisine;

    document.getElementById("restaurantRating").value = restaurant.rating;

    document.getElementById("restaurantTime").value = restaurant.time;

    document.getElementById("restaurantPrice").value = restaurant.price;

    document.getElementById("restaurantDiscount").value = restaurant.discount;

    document.getElementById("restaurantImage").value = restaurant.image;

}

displayRestaurants();

// ==============================
// Add Restaurant
// ==============================
document.getElementById("addRestaurantBtn")

.addEventListener("click",function(){
document.getElementById("addRestaurantBtn")

.addEventListener("click",function(){



    const id = document.getElementById("restaurantId").value;

    const restaurant = {

        id: id ? Number(id) : Date.now(),

        name: restaurantName.value,

        cuisine: restaurantCuisine.value,

        rating: Number(restaurantRating.value),

        time: Number(restaurantTime.value),

        price: Number(restaurantPrice.value),

        discount: restaurantDiscount.value,

        image: restaurantImage.value

    };

    if (id) {

        const index = restaurants.findIndex(function(r){

            return r.id === Number(id);

        });

        restaurants[index] = restaurant;

        alert("Restaurant Updated!");

    }

    else {

        restaurants.push(restaurant);

        alert("Restaurant Added!");

    }

    localStorage.setItem(

        "restaurants",

        JSON.stringify(restaurants)

    );

    clearForm();

    displayRestaurants();

});
localStorage.setItem(

"restaurants",

JSON.stringify(restaurants)

);

displayRestaurants();

alert("Restaurant Added!");
});


// ==============================
// Delete Restaurant
// ==============================

function deleteRestaurant(id){

restaurants=restaurants.filter(function(r){

return r.id!==id;

});

localStorage.setItem(

"restaurants",

JSON.stringify(restaurants)

);

displayRestaurants();

}
// ==============================
// Clear Form
// ==============================

function clearForm(){

    document.getElementById("restaurantId").value = "";

    document.getElementById("restaurantName").value = "";

    document.getElementById("restaurantCuisine").value = "";

    document.getElementById("restaurantRating").value = "";

    document.getElementById("restaurantTime").value = "";

    document.getElementById("restaurantPrice").value = "";

    document.getElementById("restaurantDiscount").value = "";

    document.getElementById("restaurantImage").value = "";

}