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
gsap.to(".hero-food", {
    y: -20,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});
gsap.from(".hero-search", {

    y: 50,

    opacity: 0,

    duration: 1,

    delay: 0.4

});
gsap.from(".hero-buttons button", {

    y: 30,

    opacity: 0,

    stagger: 0.2,
ease: "back.out(1.7)",

    duration: 0.8

});
gsap.from(".hero-food", {
    x: -100,
    rotation: 360,
    scale: 3,
    duration: 2
});
gsap.from(".restaurant-card", {

    y: 100,

    opacity: 0,

    scale: 0.5,

    rotation: -10,

    duration: 2.5,

    stagger: 1,

});
gsap.from(".hero-title", {

    y: -100,

    opacity: 0,

    duration: 1.5,

    ease: "back.out(1.7)"

});