/*
=========================================
Checkout Page
=========================================
*/

// =====================================
// Check Login
// =====================================

const loggedInUser = JSON.parse(

    localStorage.getItem("loggedInUser")

);
const savedAddresses = document.getElementById("savedAddresses");

const addresses = JSON.parse(

    localStorage.getItem("boltifyAddresses")

) || [];

const userAddresses = addresses.filter(function(address){

    return address.email === loggedInUser.email;

});

userAddresses.forEach(function(address){

    savedAddresses.innerHTML += `

        <option value="${address.address}">

            ${address.title}

        </option>

    `;

});

if (!loggedInUser) {

    alert("Please login first.");

    window.location.href = "login.html";

}

// =====================================
// Auto Fill Name
// =====================================

document.getElementById("customerName").value =

loggedInUser.name;

// =====================================
// Place Order Button
// =====================================

const placeOrderBtn =

document.getElementById("placeOrderBtn");

placeOrderBtn.addEventListener("click", function () {

    // Get Form Data

    const customerName =

    document.getElementById("customerName")
    .value
    .trim();

    const phone =

    document.getElementById("phone")
    .value
    .trim();

    const address =

    document.getElementById("address")
    .value
    .trim();

    const payment =

    document.querySelector(

        'input[name="payment"]:checked'

    ).value;

    // Validation

    if (

        customerName === "" ||

        phone === "" ||

        address === ""

    ) {

        alert("Please fill all details.");

        return;

    }

    // Load Cart

    const cart = JSON.parse(

        localStorage.getItem("cart")

    ) || [];

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;

    }

    // Calculate Total

    let total = 0;

    cart.forEach(function (item) {

        total += item.price * item.quantity;

    });

    const gst = Math.round(total * 0.05);

    const delivery = 40;

    const grandTotal = total + gst + delivery;

    // Create Order

    const order = {

        orderId: "ORD" + Date.now(),

        customer: customerName,

        email: loggedInUser.email,

        phone: phone,

        address: address,

        payment: payment,

        items: cart,

        total: grandTotal,

        orderDate: new Date().toLocaleString(),

        status: "Preparing"

    };

    // Load Existing Orders

    let orders = JSON.parse(

    localStorage.getItem("boltifyOrders")

) || [];

    // Save Order

    orders.push(order);

  localStorage.setItem(

    "boltifyOrders",

    JSON.stringify(orders)

);

    // Clear Cart

    localStorage.removeItem("cart");

    // Save Current Order

    localStorage.setItem(

        "latestOrder",

        JSON.stringify(order)

    );

    // Redirect

    window.location.href = "success.html";

});
savedAddresses.addEventListener("change", function(){

    document.getElementById("address").value =

        this.value;

});