"use strict";

// === Navbar ===
const hamburgerOnClick = () => {
    const navbar = document.querySelector(".navbar");

    navbar.classList.add("active");
};

const closeOnClick = () => {
    const navbar = document.querySelector(".navbar");

    navbar.classList.remove("active");
};

const linkOnClick = () => {
    const navbar = document.querySelector(".navbar");
    
    navbar.classList.remove("active");
};
// === / Navbar ===