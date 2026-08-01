/*
=====================================
Admin Dashboard
=====================================
*/

// ===============================
// Check Admin Login
// ===============================

const adminLoggedIn =

localStorage.getItem("adminLoggedIn");

if(adminLoggedIn !== "true"){

    alert("Please login as Admin.");

    window.location.href = "admin-login.html";

}

// ===============================
// Load Data
// ===============================

const orders = JSON.parse(

localStorage.getItem("orders")

) || [];
// =============================
// Calculate Revenue
// =============================

let revenue = 0;

orders.forEach(function(order){

    revenue += order.total;

});

const users = JSON.parse(

localStorage.getItem("users")

) || [];

// Restaurant count from data.js

const totalRestaurants = 7;

// ===============================
// Display Statistics
// ===============================

document.getElementById("totalOrders").innerText =

orders.length;

document.getElementById("totalUsers").innerText =

users.length;

document.getElementById("totalRestaurants").innerText =

totalRestaurants;

document.getElementById("totalRevenue").innerText =

"₹" + revenue;
// ===============================
// Navigation Buttons
// ===============================

document.getElementById("restaurantsBtn")

.addEventListener("click",function(){

window.location.href="manage-restaurants.html";

});

document.getElementById("ordersBtn")

.addEventListener("click",function(){

window.location.href="manage-orders.html";

});

document.getElementById("usersBtn")

.addEventListener("click",function(){

window.location.href="manageUsers.html";

});
// =============================
// Recent Orders
// =============================

const recentOrders =

document.getElementById("recentOrders");

orders

.slice()

.reverse()

.slice(0,5)

.forEach(function(order){

recentOrders.innerHTML += `

<div class="card">

<h3>

${order.orderId}

</h3>

<p>

${order.customer}

</p>

<p>

₹${order.total}

</p>

<p>

${order.status}

</p>

</div>

`;

});

// ===============================
// Logout
// ===============================

document.getElementById("logoutBtn")

.addEventListener("click",function(){

localStorage.removeItem("adminLoggedIn");

alert("Logged Out Successfully.");

window.location.href="admin-login.html";

});