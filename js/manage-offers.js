// ===============================
// Manage Offers Data
// ===============================

let adminOffers = JSON.parse(localStorage.getItem("boltifyOffers")) || [];


// ===============================
// Get Elements
// ===============================

const offerTitle =
document.getElementById("offerTitle");

const offerDescription =
document.getElementById("offerDescription");

const offerCategory =
document.getElementById("offerCategory");

const offerDiscount =
document.getElementById("offerDiscount");

const offerExpiry =
document.getElementById("offerExpiry");

const addOfferBtn =
document.getElementById("addOfferBtn");

const adminOffersContainer =
document.getElementById("adminOffersContainer");


// ===============================
// Add Offer
// ===============================

addOfferBtn.addEventListener("click", function(){


    const newOffer = {

        id: Date.now(),

        title: offerTitle.value,

        description: offerDescription.value,

        category: offerCategory.value,

        discount: offerDiscount.value,

        expiry: offerExpiry.value

    };


    adminOffers.push(newOffer);

localStorage.setItem(
    "boltifyOffers",
    JSON.stringify(adminOffers)
);
    displayAdminOffers();


    clearForm();


});


// ===============================
// Display Added Offers
// ===============================

function displayAdminOffers(){


    adminOffersContainer.innerHTML = "";


    adminOffers.forEach(function(offer){


        const card = `

        <div class="admin-offer-card">


            <h2>
            ${offer.title}
            </h2>


            <p>
            ${offer.description}
            </p>


            <p>
            Category:
            ${offer.category}
            </p>


            <p>
            Discount:
            ₹${offer.discount}
            </p>


            <p>
            Expiry:
            ${offer.expiry}
            </p>


            <button class="deleteBtn"
            onclick="deleteOffer(${offer.id})">

            Delete

            </button>


        </div>

        `;


        adminOffersContainer.innerHTML += card;


    });


}


// ===============================
// Delete Offer
// ===============================

function deleteOffer(id){

    adminOffers =
    adminOffers.filter(function(offer){

        return offer.id !== id;

    });


    localStorage.setItem(
        "boltifyOffers",
        JSON.stringify(adminOffers)
    );


    displayAdminOffers();

}


// ===============================
// Clear Form
// ===============================

function clearForm(){


    offerTitle.value = "";

    offerDescription.value = "";

    offerDiscount.value = "";

    offerExpiry.value = "";


}
displayAdminOffers();