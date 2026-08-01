/*
=========================================
FoodExpress Signup System
=========================================

This file is responsible for:

1. Registering a new user
2. Checking duplicate email
3. Saving user into Local Storage
4. Redirecting to Login Page

*/

// =========================================
// Select Signup Button
// =========================================

const signupBtn =
document.getElementById("signupBtn");

// Run code only if button exists

if (signupBtn) {

    signupBtn.addEventListener("click", function () {

        // =========================================
        // Get User Inputs
        // =========================================

        const name = document
            .getElementById("name")
            .value
            .trim();

        const email = document
            .getElementById("email")
            .value
            .trim()
            .toLowerCase();

        const password = document
            .getElementById("password")
            .value
            .trim();

        // =========================================
        // Validate Inputs
        // =========================================

        if (name === "" || email === "" || password === "") {

            alert("Please fill all the fields.");

            return;

        }

        // =========================================
        // Load Existing Users
        // =========================================

        let users = JSON.parse(

            localStorage.getItem("boltifyUsers")

        ) || [];

        // =========================================
        // Check Duplicate Email
        // =========================================

        const userExists = users.find(function (user) {

            return user.email === email;

        });

        if (userExists) {

            alert("Email already registered!");

            return;

        }

        // =========================================
        // Create New User
        // =========================================
const newUser = {

    id: Date.now(),

    name:name,

    email:email,

    password:password,

    orders:0,

    status:"Active"

};
        // =========================================
        // Save User
        // =========================================

        users.push(newUser);

      localStorage.setItem(

    "boltifyUsers",

    JSON.stringify(users)

);

        alert("Account Created Successfully!");

        // =========================================
        // Redirect
        // =========================================

        window.location.href = "login.html";

    });

}