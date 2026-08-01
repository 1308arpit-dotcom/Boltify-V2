/*
=========================================
FoodExpress Login System
=========================================

This file is responsible for:

1. Logging in user
2. Validating credentials
3. Saving logged-in user
4. Redirecting to Checkout

*/

// =========================================
// Select Login Button
// =========================================

const loginBtn =
document.getElementById("loginBtn");

// Run code only if button exists

if (loginBtn) {

    loginBtn.addEventListener("click", function () {

        // =========================================
        // Get User Inputs
        // =========================================

        const email = document
            .getElementById("loginEmail")
            .value
            .trim()
            .toLowerCase();

        const password = document
            .getElementById("loginPassword")
            .value
            .trim();

        // =========================================
        // Validate Inputs
        // =========================================

        if (email === "" || password === "") {

            alert("Please fill all the fields.");

            return;

        }

        // =========================================
        // Load Users
        // =========================================
const users = JSON.parse(

    localStorage.getItem("boltifyUsers")

) || [];

        // =========================================
        // Find Matching User
        // =========================================

        const currentUser = users.find(function (user) {

            return (

                user.email === email &&

                user.password === password

            );

        });

        // =========================================
        // Login Success
        // =========================================

        if (currentUser) {

            localStorage.setItem(

                "loggedInUser",

                JSON.stringify(currentUser)

            );

            alert(

                "Welcome, " +

                currentUser.name +

                "!"

            );

            // Redirect to Checkout

            window.location.href = "index.html";

        }

        // =========================================
        // Login Failed
        // =========================================

        else {

            alert("Invalid Email or Password.");

        }

    });

}