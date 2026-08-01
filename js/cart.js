/*
====================================
Cart Page
====================================
*/

// ================================
// Load Cart
// ================================

let cart = JSON.parse(

    localStorage.getItem("cart")

) || [];
let discount = 0;

// ================================
// Select HTML Elements
// ================================
const checkoutBtn = document.getElementById("checkoutBtn");

checkoutBtn.addEventListener("click", function () {

    const loggedInUser = JSON.parse(
        localStorage.getItem("loggedInUser")
    );

    if (loggedInUser) {

        window.location.href = "checkout.html";

    } else {

        alert("Please login to continue.");

        window.location.href = "login.html";

    }

});

const cartItems =
document.getElementById("cartItems");

const subtotal =
document.getElementById("subtotal");

const gst =
document.getElementById("gst");

const grandTotal =
document.getElementById("grandTotal");

const couponInput =
document.getElementById("couponInput");


const applyCouponBtn =
document.getElementById("applyCouponBtn");


const discountText =
document.getElementById("discountText");

// ================================
// Display Cart
// ================================

function displayCart(){

    cartItems.innerHTML = "";

    if(cart.length === 0){

        cartItems.innerHTML = `

            <h2>Your Cart is Empty 🛒!!</h2>

        `;

        subtotal.innerText = "₹0";

        gst.innerText = "₹0";

        grandTotal.innerText = "₹0";

        return;

    }

    let subTotalValue = 0;

    cart.forEach(function(item){

        const itemTotal = item.price * item.quantity;

        subTotalValue += itemTotal;

        cartItems.innerHTML += `

            <div class="cart-card">

                <h3>

                    ${item.name}

                </h3>

                <p>

                    Price : ₹${item.price}

                </p>
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
<button 
class="removeBtn"
data-id="${item.id}">

Remove

</button>
                <p>

                    Total : ₹${itemTotal}

                </p>

            </div>

        `;

    });

    const gstValue = Math.round(subTotalValue * 0.05);

    const delivery = 40;

    subtotal.innerText = "₹" + subTotalValue;

    gst.innerText = "₹" + gstValue;

  const finalAmount =
subTotalValue + gstValue + delivery - discount;


grandTotal.innerText =

    "₹" + finalAmount;
}
// ================================
// Quantity Buttons
// ================================

cartItems.addEventListener("click", function(event){

    const foodId = Number(event.target.dataset.id);

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
{
        cartItem.quantity--;
}
        // Remove item if quantity becomes zero
// Remove Button

if(event.target.classList.contains("removeBtn")){


    cart = cart.filter(function(item){

        return item.id !== foodId;

    });


}
        if(cartItem.quantity === 0){

            cart = cart.filter(function(item){

                return item.id !== foodId;

            });

        }

    }

if(event.target.classList.contains("removeBtn")){


    cart = cart.filter(function(item){

        return item.id !== foodId;

    });


}

    // Save updated cart

    localStorage.setItem(

        "cart",

        JSON.stringify(cart)

    );

    // Refresh page

    displayCart();

});
applyCouponBtn.addEventListener("click", function(){


    const coupon =
    couponInput.value
    .trim()
    .toUpperCase();


    const availableOffers = JSON.parse(

    localStorage.getItem("availableOffers")

) || [];


const selectedOffer = availableOffers.find(function(offer){

    return offer.title === coupon;

});
if(selectedOffer){

    const currentSubtotal = cart.reduce(function(total,item){

        return total + (item.price * item.quantity);

    },0);


    if(currentSubtotal < selectedOffer.minimum){

        discount = 0;

        discountText.innerText =
        "Minimum order ₹" + selectedOffer.minimum + " required";

        displayCart();

        return;

    }

}

if(selectedOffer){


    if(selectedOffer.discount === "Free Delivery"){

        discount = 40;

        discountText.innerText =
        "Free Delivery Applied";


    }

    else{

        discount = selectedOffer.discount;


        discountText.innerText =
        "Discount Applied: ₹" + discount;

    }


}



    else{


        discount = 0;

        discountText.innerText =
        "Invalid Coupon";


    }


    displayCart();


});
displayCart();