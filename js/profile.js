// ===============================
// Load Logged In User
// ===============================

const profileCard =
document.getElementById("profileCard");

const loggedInUser =
JSON.parse(localStorage.getItem("loggedInUser"));


// ===============================
// Check Login
// ===============================

function getUserOrdersCount(){

    const orders = JSON.parse(

        localStorage.getItem("boltifyOrders")

    ) || [];


    const userOrders = orders.filter(function(order){

        return order.email === loggedInUser.email;

    });


    return userOrders.length;

}
if(!loggedInUser){
// ===============================
// Count User Orders
// ===============================

    profileCard.innerHTML = `

    <h2>
    Please Login First
    </h2>

    <a href="login.html">
    Go To Login
    </a>

    `;

}
else{


    profileCard.innerHTML = `


    <h2>
    ${loggedInUser.name}
    </h2>


    <p>
    Email:
    ${loggedInUser.email}
    </p>


   

   <p>
Orders:
${getUserOrdersCount()}
</p>

    `;


}



// ===============================
// Logout
// ===============================

const logoutBtn =
document.getElementById("logoutBtn");


logoutBtn.addEventListener("click",function(){


    localStorage.removeItem("loggedInUser");


    window.location.href="login.html";


});
const homeBtn =
document.getElementById("homeBtn");


homeBtn.addEventListener("click",function(){




    window.location.href="index.html";


});
const orderBtn =
document.getElementById("viewBtn");


orderBtn.addEventListener("click",function(){




    window.location.href="order.html";


});
