/*
=====================================
Admin Login
=====================================
*/

// Default Admin Credentials

const ADMIN_USERNAME = "admin";

const ADMIN_PASSWORD = "admin123";

// Login Button

const adminLoginBtn =

document.getElementById("adminLoginBtn");

adminLoginBtn.addEventListener("click", function () {

    const username =

    document.getElementById("adminUsername")
    .value
    .trim();

    const password =

    document.getElementById("adminPassword")
    .value
    .trim();

    // Validation

    if (username === "" || password === "") {

        alert("Please fill all fields.");

        return;

    }

    // Check Credentials

    if (

        username === ADMIN_USERNAME &&

        password === ADMIN_PASSWORD

    ) {

        localStorage.setItem(

            "adminLoggedIn",

            "true"

        );

        alert("Welcome Admin!");

        window.location.href =

        "admin-dashboard.html";

    }

    else {

        alert("Invalid Admin Credentials.");

    }

});