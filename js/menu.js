/*
====================================
Restaurant Menu Page
====================================
*/

// ======================================
// Cart Elements
// ======================================
const cartBar = document.getElementById("cartBar");

const cartCount = document.getElementById("cartCount");

const cartAmount = document.getElementById("cartAmount");

const viewCartBtn = document.getElementById("viewCartBtn");

// ======================================
// Shopping Cart
// ======================================

let cart = JSON.parse(

    localStorage.getItem("cart")

) || [];

updateCartBar();
// ======================================
// Display Cart
// ======================================
viewCartBtn.addEventListener("click", function(){

    window.location.href = "cart.html";

});
function displayCart() {

    // Clear previous cart

    cartContainer.innerHTML = "";

    // If cart is empty

    if (cart.length === 0) {

        cartContainer.innerHTML = `

            <p>Cart is Empty</p>

        `;

        cartTotal.innerText = 0;

        return;

    }

    let total = 0;

    // Loop through cart

    cart.forEach(function(item){
total += item.price * item.quantity;

        cartContainer.innerHTML += `

            <div class="cart-item">

    <h4>

        ${item.name}

    </h4>
<div class="quantity-controls">

    <button
        class="decreaseBtn"
        data-id="${item.id}">

        -

    </button>

    <span>

        ${item.quantity}

    </span>

    <button
        class="increaseBtn"
        data-id="${item.id}">

        +

    </button>

</div>
    <p>

        ₹${item.price * item.quantity}

    </p>

</div>

        `;

    });

    cartTotal.innerText = total;

}
// Menu container

const menuContainer =
document.getElementById("menuContainer");

// Restaurant Name

const restaurantName =
document.getElementById("restaurantName");

// ------------------------------
// Get Restaurant ID from URL
// ------------------------------

const urlParams =

    new URLSearchParams(window.location.search);

const restaurantId =

    Number(urlParams.get("id"));

console.log("Restaurant ID:", restaurantId);

// ------------------------------
// Find Restaurant
// ------------------------------

const restaurant = restaurants.find(function(item){

    return item.id === restaurantId;

});

if(restaurant){

    restaurantName.innerText = restaurant.name;

}
// ======================================
// Find Restaurant Menu
// ======================================

const restaurantMenu = menus.find(function(menu){

    return menu.restaurantId === restaurantId;

});

// ======================================
// Display Menu Items
// ======================================

function displayMenu(items){

    menuContainer.innerHTML = "";

    items.forEach(function(food){

        const card = `

        <div class="menu-card">

            <img
            src="${food.image}"
            alt="${food.name}">

            <div class="menu-info">

                <h3>

                    ${food.name}

                </h3>

                <p>

                    ₹${food.price}

                </p>

                    <button
                        class="addBtn"
                        data-id="${food.id}">

                        Add

                    </button>

            </div>

        </div>

        `;

        menuContainer.innerHTML += card;

    });

}
// ======================================
// Add Item To Cart
// ======================================

menuContainer.addEventListener("click", function(event){

    if(event.target.classList.contains("addBtn")){

        const foodId = Number(event.target.dataset.id);

        // Find selected food

        const selectedFood = restaurantMenu.items.find(function(food){

            return food.id === foodId;

        });


      // Check if item already exists
// ======================================
// Cart Buttons (+ and -)
// ======================================

cartBar.addEventListener("click", function(event){

    // Get food ID

    const foodId = Number(event.target.dataset.id);

    // Find item in cart

    const cartItem = cart.find(function(item){

        return item.id === foodId;

    });

    if(!cartItem){

        return;

    }

    // Increase quantity

    if(event.target.classList.contains("increaseBtn")){

        cartItem.quantity++;

    }

    // Decrease quantity

    if(event.target.classList.contains("decreaseBtn")){

        cartItem.quantity--;

        // Remove if quantity becomes 0

        if(cartItem.quantity === 0){

            cart = cart.filter(function(item){

                return item.id !== foodId;

            });

        }

    }

    // Refresh cart

    updateCartBar();
    localStorage.setItem(
    "cart",
    JSON.stringify(cart)
);

});
const existingItem = cart.find(function(item){

    return item.id === selectedFood.id;

});

// If already in cart

if(existingItem){

    existingItem.quantity++;

}

// Otherwise add new item

else{

    cart.push({

        ...selectedFood,

        quantity:1

    });

}

// Refresh cart

updateCartBar();
localStorage.setItem(
    "cart",
    JSON.stringify(cart)
);

    }

});
console.log(restaurantMenu);
if(restaurantMenu){

    displayMenu(restaurantMenu.items);


}
function updateCartBar(){

    let totalItems = 0;

    let totalAmount = 0;

    cart.forEach(function(item){

        totalItems += item.quantity;

        totalAmount += item.price * item.quantity;

    });

    if(totalItems === 0){

        cartBar.classList.add("hidden");

        return;

    }

    cartBar.classList.remove("hidden");

    cartCount.innerText = totalItems;

    cartAmount.innerText = totalAmount;

}