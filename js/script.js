/*
=========================================
FoodExpress Main JavaScript File
=========================================

This file is responsible for:

1. Displaying restaurant cards
2. Search button
3. Order button

*/

// ========================================
// Selecting Restaurant Container
// ========================================

// This is where all restaurant cards
// will be displayed.

const restaurantContainer =
document.getElementById("restaurantContainer");

const sortOption = document.getElementById("sortOption");
const ratingFilter = document.getElementById("ratingFilter");
// ========================================
// Function to Display Restaurants
// ========================================
function displayRestaurants(restaurantsList) {

    // Clear previous cards
    restaurantContainer.innerHTML = "";

    // If no restaurants are found
    if (restaurantsList.length === 0) {

        restaurantContainer.innerHTML = `
            <h2>No Restaurants Found 😔</h2>
        `;

        return;
    }

    // Loop through restaurants
    restaurantsList.forEach(function (restaurant) {

        const card = `
            <div class="card">

                <div class="discount">
                    ${restaurant.discount}
                </div>

                <img
                    src="${restaurant.image}"
                    alt="${restaurant.name}"
                    width="300"
                    height="200">

                <div class="card-body">

                    <h3>${restaurant.name}</h3>

                    <p> ⭐${restaurant.rating}</p>

                    <p>${restaurant.cuisine}</p>

                    <p>${restaurant.time} mins• ₹${restaurant.price}</p>

                   <button
                    class="orderBtn"
                     data-id="${restaurant.id}">

                         Order Now

                    </button>
                </div>

            </div>
        `;

        restaurantContainer.innerHTML += card;

    });

}


// ========================================
// Display Cards Immediately
// ========================================

displayRestaurants(restaurants);


// ========================================
// Search Button
// ========================================

const searchBtn =
document.getElementById("searchBtn");

const searchInput =
document.getElementById("searchInput");

// Search Button

// ============================
// Search Function
// ============================

function updateRestaurantList() {

    // Search Value

    const searchValue = searchInput.value
        .trim()
        .toLowerCase();

    // Rating

    const selectedRating = ratingFilter.value;

    // Sort

    const selectedSort = sortOption.value;

    // Start with all restaurants

    let filteredRestaurants = restaurants;

    // Search Filter

    if (searchValue !== "") {

        filteredRestaurants = filteredRestaurants.filter(function (restaurant) {

            return (

                restaurant.name.toLowerCase().includes(searchValue)

                ||

                restaurant.cuisine.toLowerCase().includes(searchValue)

            );

        });

    }

    // Rating Filter

    if (selectedRating !== "all") {

        filteredRestaurants = filteredRestaurants.filter(function (restaurant) {

            return restaurant.rating >= Number(selectedRating);

        });

    }

    // Sorting

    if (selectedSort === "rating") {

        filteredRestaurants.sort(function (a, b) {

            return b.rating - a.rating;

        });

    }

    else if (selectedSort === "time") {

        filteredRestaurants.sort(function (a, b) {

            return a.time - b.time;

        });

    }

    else if (selectedSort === "price") {

        filteredRestaurants.sort(function (a, b) {

            return a.price - b.price;

        });

    }

    displayRestaurants(filteredRestaurants);

}


// Search Button
searchBtn.addEventListener("click", updateRestaurantList);

searchInput.addEventListener("input", updateRestaurantList);

ratingFilter.addEventListener("change", updateRestaurantList);

sortOption.addEventListener("change", updateRestaurantList);

searchInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        updateRestaurantList();

    }

});

    
//=====================================


// ========================================
// Order Button
// ========================================

// Since buttons are created dynamically,
// Event Delegation is used.
restaurantContainer.addEventListener("click", function (event) {

    if (event.target.classList.contains("orderBtn")) {

        // Get restaurant ID

        const restaurantId = event.target.dataset.id;

        // Open menu page

        window.location.href =

            `menu.html?id=${restaurantId}`;

    }

});