gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

// Navbar
tl.from("header", {
    y: -100,
    opacity: 0,
    duration: 1
});

// Hero Heading
tl.from("h1", {
    x: -100,
    opacity: 0,
    duration: 1
});

// Hero Paragraph
tl.from("p", {
    y: 30,
    opacity: 0,
    duration: 0.8
});

// Buttons
tl.from("button", {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2

});
gsap.from(".category-card", {

    scrollTrigger: {

        trigger: ".category-card",

        start: "top 80%"

    },

    y: 80,

    opacity: 0,

    duration: 1,

    stagger: 0.2

});