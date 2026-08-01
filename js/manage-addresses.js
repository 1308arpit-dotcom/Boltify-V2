/*
=====================================
Manage Addresses
=====================================
*/

// Check Login

const loggedInUser = JSON.parse(
    localStorage.getItem("loggedInUser")
);

if (!loggedInUser) {

    alert("Please login first.");

    window.location.href = "login.html";

}

// Select Elements

const addressTitle =
document.getElementById("addressTitle");

const fullAddress =
document.getElementById("fullAddress");

const saveAddressBtn =
document.getElementById("saveAddressBtn");

const addressList =
document.getElementById("addressList");

// Load Existing Addresses

let addresses = JSON.parse(

    localStorage.getItem("boltifyAddresses")

) || [];

// Show Addresses

function displayAddresses(){

    addressList.innerHTML = "";

    const userAddresses = addresses.filter(function(address){

        return address.email === loggedInUser.email;

    });

    if(userAddresses.length === 0){

        addressList.innerHTML = "<h3>No Saved Addresses</h3>";

        return;

    }

    userAddresses.forEach(function(address){

        addressList.innerHTML += `

        <div class="address-card">

            <h3>${address.title}</h3>

            <p>${address.address}</p>

            <button
                class="deleteBtn"
                data-id="${address.id}">

                Delete

            </button>

        </div>

        `;

    });

}

// Save Address

saveAddressBtn.addEventListener("click", function(){

    const title = addressTitle.value.trim();

    const address = fullAddress.value.trim();

    if(title === "" || address === ""){

        alert("Please fill all fields.");

        return;

    }

    addresses.push({

        id: Date.now(),

        email: loggedInUser.email,

        title: title,

        address: address

    });

    localStorage.setItem(

        "boltifyAddresses",

        JSON.stringify(addresses)

    );

    addressTitle.value = "";

    fullAddress.value = "";

    displayAddresses();

});

// Delete Address

addressList.addEventListener("click", function(event){

    if(event.target.classList.contains("deleteBtn")){

        const id = Number(event.target.dataset.id);

        addresses = addresses.filter(function(address){

            return address.id !== id;

        });

        localStorage.setItem(

            "boltifyAddresses",

            JSON.stringify(addresses)

        );

        displayAddresses();

    }

});

// Initial Load

displayAddresses();