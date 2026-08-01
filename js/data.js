/*
=========================================
Restaurant Data
=========================================

Each restaurant is stored as an object.

The entire collection is stored inside
an array called restaurants.
*/

/*
=========================================
Restaurant Data
=========================================

This file initializes restaurant data
only the first time the application runs.

After that, data is loaded from
localStorage.

*/

// Load restaurants from localStorage

let restaurants = JSON.parse(

    localStorage.getItem("restaurants")

);

// First Time Setup

if (!restaurants) {

    restaurants = [

        {
            id:1,
            name:"Pizza Hut",
            rating:4.5,
            cuisine:"Italian • Pizza",
            time:25,
            price:125,
            discount:"20% OFF",
            image:"https://tse2.mm.bing.net/th/id/OIP.A3YsU1th_zNeVM9hPAmAiAHaF7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        },

        {
            id:2,
            name:"ZORKO",
            rating:3,
            cuisine:"Burger • Pizza for ₹149",
            time:20,
            price:50,
            discount:"50% OFF ON ORDER ABOVE ₹299",
            image:"https://img.restaurantguru.com/w550/h367/r9f3-ZORKO-Brand-Of-Food-Lovers-beverage-2023-04-12.jpg"
        },

        {
            id:3,
            name:"Narang Restaurant",
            rating:3.8,
            cuisine:"Buy 2 Get 1 Free Pizza",
            time:15,
            price:300,
            discount:"BUY 2 GET 1",
            image:"https://cdn-th.orstatic.com/userphoto/doorphoto/8/6JB/01AHDW32315E69B640973Apx.jpg"
        },

        {
            id:4,
            name:"Domino's",
            rating:4.2,
            cuisine:"Pizza",
            time:30,
            price:75,
            discount:"15% OFF",
            image:"https://mir-s3-cdn-cf.behance.net/projects/404/ce035a170737247.Y3JvcCwxNTI1LDExOTMsMTk2LDA.png"
        },

        {
            id:5,
            name:"Burger King",
            rating:4.4,
            cuisine:"Burger • Fast Food",
            time:10,
            price:100,
            discount:"30% OFF",
            image:"https://www.foodandwine.com/thmb/K_t1B_xBKIKYm_ZoNIEqaBvuXcQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Burger-King-Everything-Seasoned-Bun-FT-BLOG0922-c8c7859b9c794c42af7700b5b957a874.jpg"
        },

        {
            id:6,
            name:"Deepak Hotel",
            rating:4.7,
            cuisine:"North Indian",
            time:15,
            price:150,
            discount:"40% OFF",
            image:"https://media-cdn.tripadvisor.com/media/photo-s/2d/cf/2e/1d/caption.jpg"
        },

        {
            id:7,
            name:"McDonald's",
            rating:4.6,
            cuisine:"Burger • Fries",
            time:22,
            price:175,
            discount:"25% OFF",
            image:"https://as2.ftcdn.net/v2/jpg/10/13/54/39/1000_F_1013543917_OB7moMVkEQakOu62l5KsxYXtQlagQrQx.jpg"
        }

    ];

    localStorage.setItem(

        "restaurants",

        JSON.stringify(restaurants)

    );

}
// ========================================
// Restaurant Menus
// ========================================

const menus = [

    {
        restaurantId: 1,

        items: [

            {
                id: 1,
                name: "Margherita Pizza",
                price: 199,
                quantity:1,
                image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143"
            },

            {
                id: 2,
                name: "Farmhouse Pizza",
                price: 299,
                quantity:1,

                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
            },

            {
                id: 3,
                quantity:1,

                name: "Garlic Bread",
                price: 149,
                image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c"
            },

            {
                id: 4,
                name: "Pepsi",
                quantity:1,

                price: 60,
                image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97"
            }

        ]
    },

    {
        restaurantId: 4,

        items: [

            {
                id: 1,
                name: "Cheese Burst Pizza",
                quantity:1,

                price: 299,
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
            },

            {
                id: 2,

                quantity:1,
                name: "Veg Loaded Pizza",
                price: 349,
                image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c"
            },

            {
                id: 3,
                name: "Choco Lava Cake",

                quantity:1,
                price: 129,
                image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c"
            },

            {
                id: 4,
                name: "Coke",

                quantity:1,
                price: 60,
                image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e"
            }

        ]
    },

    {
        restaurantId: 5,

        items: [

            {
                id: 1,
                name: "Whopper",

                quantity:1,
                price: 199,
                image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
            },

            {
                id: 2,
                name: "Crispy Veg Burger",

                quantity:1,
                price: 149,
                image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
            },

            {
                id: 3,
                name: "French Fries",

                quantity:1,
                price: 99,
                image: "https://images.unsplash.com/photo-1576107232684-1279f390859f"
            },

            {
                id: 4,
                name: "Coke",

                quantity:1,
                price: 60,
                image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e"
            }

        ]
    },

    {
        restaurantId: 6,

        items: [

            {
                id: 1,
                name: "Paneer Butter Masala",

                quantity:1,
                price: 250,
                image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7"
            },

            {
                id: 2,

                quantity:1,
                name: "Dal Makhani",
                price: 220,
                image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d"
            },

            {
                id: 3,
                name: "Butter Naan",

                quantity:1,
                price: 40,
                image: "https://images.unsplash.com/photo-1601050690597-df0568f70950"
            },

            {
                id: 4,
                name: "Jeera Rice",

                quantity:1,
                price: 150,
                image: "https://images.unsplash.com/photo-1512058564366-18510be2db19"
            }

        ]
    },

    {
    restaurantId: 2,

    items: [

        {
            id: 1,

                quantity:1,
            name: "Classic Burger",
            price: 149,
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
        },

        {
            id: 2,

                quantity:1,
            name: "Cheese Pizza",
            price: 199,
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
        },

        {
            id: 3,

                quantity:1,
            name: "French Fries",
            price: 99,
            image: "https://images.unsplash.com/photo-1576107232684-1279f390859f"
        },

        {
            id: 4,

                quantity:1,
            name: "Cold Drink",
            price: 50,
            image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e"
        }

    ]
},
{
    restaurantId: 3,

    items: [

        {
            id: 1,

                quantity:1,
            name: "Veg Pizza",
            price: 249,
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
        },

        {
            id: 2,
            name: "Paneer Pizza",

                quantity:1,
            price: 299,
            image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c"
        },

        {
            id: 3,

                quantity:1,
            name: "Garlic Bread",
            price: 129,
            image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c"
        },

        {
            id: 4,
            name: "Chocolate Shake",

                quantity:1,
            price: 120,
            image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699"
        }

    ]
},
{
    restaurantId: 7,

    items: [

        {
            id: 1,

                quantity:1,
            name: "McAloo Tikki",
            price: 79,
            image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
        },

        {
            id: 2,
            name: "McVeggie Burger",

                quantity:1,
            price: 149,
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
        },

        {
            id: 3,

                quantity:1,
            name: "French Fries",
            price: 99,
            image: "https://images.unsplash.com/photo-1576107232684-1279f390859f"
        },

        {
            id: 4,
            name: "Coke",

                quantity:1,
            price: 60,
            image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e"
        }

    ]
}
];
// ===============================
// User Navbar System
// ===============================

const userArea = document.getElementById("userArea");


if(userArea){

    const loggedInUser = 
    JSON.parse(localStorage.getItem("loggedInUser"));


    if(loggedInUser){


       userArea.innerHTML = `

<a href="profile.html" class="profile-link">

Hello, ${loggedInUser.name} 👋

</a>


<button id="logoutBtn">

Logout

</button>

`;


        const logoutBtn =
        document.getElementById("logoutBtn");


        logoutBtn.addEventListener("click",function(){


            localStorage.removeItem("loggedInUser");


            window.location.reload();


        });


    }

}