const defaultOffers = [

{
    id:1,
    title:"FLAT100",
    description:"Get ₹100 OFF",
    category:"Food",
    minimum:399,
    discount:100,
    expiry:"2026-08-20"
},

{
    id:2,
    title:"FREEDEL",
    description:"Free Delivery",
    category:"Delivery",
    minimum:199,
    discount:"Free Delivery",
    expiry:"2026-09-01"
},

{
    id:3,
    title:"WELCOME150",
    description:"First Order Discount",
    category:"New User",
    minimum:299,
    discount:150,
    expiry:"2026-09-15"
}

];


const adminOffers =
JSON.parse(localStorage.getItem("boltifyOffers")) || [];


const offers = [
    ...defaultOffers,
    ...adminOffers
];
// ===============================
// Offers Container
// ===============================
const filterButtons=
 document.querySelectorAll(".filter-btn");
let selectedCategory = "All";


 const offersContainer =
document.getElementById("offersContainer");
const searchOffer =
document.getElementById("searchOffer");


// ===============================
// Check Offer Expiry
// ===============================

function checkExpiry(expiryDate){

    const today = new Date();

    const expiry = new Date(expiryDate);


    if(expiry >= today){

        return "Active";

    }
    else{

        return "Expired";

    }

}
// ===============================
// Display Offers
// ===============================

function displayOffers(offersList){

    offersContainer.innerHTML = "";

    offersList.forEach(function(offer){

        const card = `

        <div class="offer-card">

            <div class="offer-badge">

                🔥 ${offer.title}

            </div>

            <h2>

                ${offer.description}

            </h2>
            <p class="expiry-status">

    ${checkExpiry(offer.expiry)}

</p>


<p>

    Expires:
    ${offer.expiry}

</p>

            <p>

                Coupon Code

            </p>
<h3 class="coupon-code">${offer.title}</h3>

           <button
    class="copyBtn"
    data-code="${offer.title}">
    Copy Code
</button>

        </div>

        `;

        offersContainer.innerHTML += card;

    });
attachCopyButtons();
}

displayOffers(offers);
function attachCopyButtons() {

    const buttons = document.querySelectorAll(".copyBtn");

    buttons.forEach(function(button) {

        button.addEventListener("click", function() {

            const code = button.dataset.code;

            navigator.clipboard.writeText(code);

            button.textContent = "Copied ✅";

            setTimeout(function() {

                button.textContent = "Copy Code";

            }, 2000);

        });

    });

}

searchOffer.addEventListener("input", searchOffers);
// ===============================
// Search Offers
function searchOffers(){

    const searchValue = searchOffer.value
    .trim()
    .toLowerCase();


    const filteredOffers = offers.filter(function(offer){


        const matchesSearch =
        offer.title.toLowerCase().includes(searchValue) ||
        offer.description.toLowerCase().includes(searchValue) ||
        offer.category.toLowerCase().includes(searchValue);


        const matchesCategory =
        selectedCategory === "All" ||
        offer.category === selectedCategory;


        return matchesSearch && matchesCategory;


    });


    displayOffers(filteredOffers);

}
displayOffers(offers);
// ===============================
// Category Filter
// ===============================

filterButtons.forEach(function(button){

    button.addEventListener("click", function(){
        selectedCategory = button.dataset.category;

        // Active button change

        filterButtons.forEach(function(btn){

            btn.classList.remove("active");

        });


        button.classList.add("active");


        // Filter offers

      searchOffers();

    });

});
// Make offers available globally

localStorage.setItem(
    "availableOffers",
    JSON.stringify(offers)
);
