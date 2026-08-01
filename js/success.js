/*
====================================
Order Success Page
====================================
*/

// Load latest order

const latestOrder = JSON.parse(

    localStorage.getItem("latestOrder")

);

// Select HTML

const orderDetails =

document.getElementById("orderDetails");

// If order exists

if(latestOrder){

    let itemsHTML = "";

    latestOrder.items.forEach(function(item){

        itemsHTML += `

            <li>

                ${item.name}

                ×

                ${item.quantity}

                - ₹${item.price * item.quantity}

            </li>

        `;

    });

    orderDetails.innerHTML = `

        <h2>

            Order ID

        </h2>

        <p>

            ${latestOrder.orderId}

        </p>

        <hr>

        <p>

            <strong>Customer:</strong>

            ${latestOrder.customer}

        </p>

        <p>

            <strong>Payment:</strong>

            ${latestOrder.payment}

        </p>

        <p>

            <strong>Date:</strong>

            ${latestOrder.orderDate}

        </p>

        <hr>

        <h3>

            Ordered Items

        </h3>

        <ul>

            ${itemsHTML}

        </ul>

        <hr>

        <h2>

            Total : ₹${latestOrder.total}

        </h2>

        <p>

            🚴 Estimated Delivery

            <b>

            25–30 Minutes

            </b>

        </p>

    `;

}

// Home Button

document

.getElementById("homeBtn")

.addEventListener("click",function(){

    window.location.href="index.html";

});