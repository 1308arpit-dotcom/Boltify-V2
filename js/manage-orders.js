/*
=====================================
Manage Orders
=====================================
*/

// Check Admin Login

if(localStorage.getItem("adminLoggedIn") !== "true"){

    alert("Please login as Admin.");

    window.location.href = "admin-login.html";

}

// Load Orders

let orders = JSON.parse(

    localStorage.getItem("boltifyOrders")

) || [];

const ordersContainer =

document.getElementById("ordersContainer");

// Display Orders

function displayOrders(){

    ordersContainer.innerHTML = "";

    if(orders.length === 0){

        ordersContainer.innerHTML = "<h2>No Orders Found</h2>";

        return;

    }

    orders.forEach(function(order,index){

        let itemsHTML = "";

        order.items.forEach(function(item){

            itemsHTML += `

                <li>

                    ${item.name}

                    × ${item.quantity}

                    - ₹${item.price * item.quantity}

                </li>

            `;

        });

        ordersContainer.innerHTML += `

        <div class="order-card">

            <h2>${order.orderId}</h2>

            <p><strong>Customer:</strong> ${order.customer}</p>

            <p><strong>Email:</strong> ${order.email}</p>

            <p><strong>Phone:</strong> ${order.phone}</p>

            <p><strong>Address:</strong> ${order.address}</p>

            <p><strong>Total:</strong> ₹${order.total}</p>

            <p><strong>Payment:</strong> ${order.payment}</p>

            <p><strong>Date:</strong> ${order.orderDate}</p>

            <h3>Items</h3>

            <ul>

                ${itemsHTML}

            </ul>

            <label>

                Status

            </label>

            <select onchange="updateStatus(${index}, this.value)">

                <option value="Preparing" ${order.status==="Preparing"?"selected":""}>Preparing</option>

                <option value="Out for Delivery" ${order.status==="Out for Delivery"?"selected":""}>Out for Delivery</option>

                <option value="Delivered" ${order.status==="Delivered"?"selected":""}>Delivered</option>

                <option value="Cancelled" ${order.status==="Cancelled"?"selected":""}>Cancelled</option>

            </select>

        </div>

        `;

    });

}

displayOrders();

// Update Status

function updateStatus(index,status){

    orders[index].status = status;

    localStorage.setItem(

        "boltifyOrders",

        JSON.stringify(orders)

    );

    alert("Order status updated!");

}