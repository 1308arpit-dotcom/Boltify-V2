/*
=========================================
My Orders Page
=========================================
*/

// ================================
// Check Login
// ================================

const loggedInUser = JSON.parse(

    localStorage.getItem("loggedInUser")

);

if (!loggedInUser) {

    alert("Please login first.");

    window.location.href = "login.html";

}

// ================================
// Load Orders
// ================================

const allOrders = JSON.parse(

    localStorage.getItem("boltifyOrders")

) || [];

// ================================
// Filter Current User Orders
// ================================

const myOrders = allOrders.filter(function(order){

    return order.email === loggedInUser.email;

});

// ================================
// Select Container
// ================================

const ordersList =

document.getElementById("ordersList");

// ================================
// No Orders
// ================================

if(myOrders.length===0){

    ordersList.innerHTML=`

        <h2>No Orders Yet 🍕</h2>

    `;

}

// ================================
// Display Orders
// ================================

else{

    myOrders.reverse().forEach(function(order){

        let itemsHTML="";

        order.items.forEach(function(item){

            itemsHTML+=`

                <li>

                    ${item.name}

                    × ${item.quantity}

                    - ₹${item.price*item.quantity}

                </li>

            `;

        });
        let timeline = "";

if(order.status === "Preparing"){

    timeline = `

    <div class="timeline">

        <div class="step active">

            📦 Order Confirmed

        </div>

        <div class="step active">

            👨‍🍳 Preparing

        </div>

        <div class="step">

            🛵 Out for Delivery

        </div>

        <div class="step">

            ✅ Delivered

        </div>

    </div>

    `;

}

else if(order.status === "Out for Delivery"){

    timeline = `

    <div class="timeline">

        <div class="step active">

            📦 Order Confirmed

        </div>

        <div class="step active">

            👨‍🍳 Preparing

        </div>

        <div class="step active">

            🛵 Out for Delivery

        </div>

        <div class="step">

            ✅ Delivered

        </div>

    </div>

    `;

}

else if(order.status === "Delivered"){

    timeline = `

    <div class="timeline">

        <div class="step active">

            📦 Order Confirmed

        </div>

        <div class="step active">

            👨‍🍳 Preparing

        </div>

        <div class="step active">

            🛵 Out for Delivery

        </div>

        <div class="step active">

            ✅ Delivered

        </div>

    </div>

    `;

}

else{

    timeline = `

    <div class="timeline cancelled">

        ❌ Order Cancelled

    </div>

    `;

}let progress = 0;

if(order.status === "Preparing"){

    progress = 25;

}

else if(order.status === "Out for Delivery"){

    progress = 75;

}

else if(order.status === "Delivered"){

    progress = 100;

}

else{

    progress = 0;

}

        ordersList.innerHTML+=`

        <div class="order-card">

            <h2>

                ${order.orderId}

            </h2>

            <p>

                <strong>Date:</strong>

                ${order.orderDate}

            </p>

${timeline}
<div class="progress-box">

    <h4>

        Order Progress

    </h4>

    <div class="progress-bar">

        <div
            class="progress-fill"
            style="width:${progress}%">

        </div>

    </div>

    <p>

        ${progress}% Complete

    </p>

</div>
            <p>

                <strong>Payment:</strong>

                ${order.payment}

            </p>

            <ul>

                ${itemsHTML}

            </ul>

            <h3>

                Total : ₹${order.total}

            </h3>

        </div>

        `;

    });

}