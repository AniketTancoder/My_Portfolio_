
document.addEventListener('DOMContentLoaded', function () {

    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(function (link) {

        link.addEventListener('click', function (event) {

            event.preventDefault();


            const targetId = link.getAttribute('href');


            const targetSection = document.querySelector(targetId);

            targetSection.scrollIntoView({ behavior: 'smooth' });


            const navbarToggle = document.querySelector('.navbar-toggle');
            if (navbarToggle.classList.contains('active')) {
                navbarToggle.classList.remove('active');
                document.querySelector('.navbar-collapse').classList.remove('show');
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {

    const whatsappLink = document.getElementById('whatsappLink');


    whatsappLink.addEventListener('click', function (event) {

        event.preventDefault();


        window.open(whatsappLink.href, '_blank');
    });
});
// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get references to the "More About Me" button and the neon box
    const moreAboutMeButton = document.querySelector('.btn-box');
    const neonBox = document.querySelector('.neon-box');
    const closeButton = document.querySelector('.close-button');

    // Show the neon box when the button is clicked
    moreAboutMeButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action (scrolling)
        neonBox.style.display = 'block'; // Show the neon box
    });

    // Hide the neon box when the close button is clicked
    closeButton.addEventListener('click', function() {
        neonBox.style.display = 'none'; // Hide the neon box
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".internship-box");
    boxes.forEach(box => {
        const button = box.querySelector(".btn-box");
        button.addEventListener("click", () => {
            const details = box.querySelector(".details");
            details.classList.toggle("hidden");
        });
    });
});

"use strict";

// APPLY EVENTLISTENERS TO THE CARDS
const cards = document.querySelectorAll(".card");
cards.forEach(c => {
    c.addEventListener("mouseenter", hoverEffects);
    c.addEventListener("mouseleave", leaveEffects);
    c.addEventListener("click", turnEffects);
});

/** APPLY EFFECT ON HOVERED CARD AND INVOKE EFFECTS FOR SIDECARDS
 * @param {HTMLDivElement} card  */
function hoverEffects({currentTarget: card}) {
    const wrapper = card.parentElement;
    wrapper.style.zIndex = "2";
    card.style.transform = "translateZ(50px)";
    card.querySelector(".front .pic-holder").style.transform = "translateZ(60px)";
    const siblingsRight = getSiblingCards(wrapper, "next");
    const siblingsLeft = getSiblingCards(wrapper, "prev");
    adjustSiblings(siblingsRight, "next");
    adjustSiblings(siblingsLeft, "prev");
}
/** RESET EFFECT ON HOVERED CARD AND INVOKE RESETTING OF SIBLINGS
 * @param {HTMLDivElement} card */
function leaveEffects({currentTarget: card}) {
    card.style.transform = "";
    card.classList.remove("is-turned");
    const wrapper = card.parentElement;
    wrapper.style.zIndex = "0";
    const siblingsRight = getSiblingCards(wrapper, "next");
    const siblingsLeft = getSiblingCards(wrapper, "prev");
    resetSiblings(siblingsRight);
    resetSiblings(siblingsLeft);
}
/** CALLBACK FOR TUNRING CARDS WHEN CLICKED ON
 * @param {HTMLDivElement} card */
function turnEffects({currentTarget: card}) {
    if(card.classList.contains("is-turned"))
        {
            card.style.transform = "translateZ(50px) rotateY(0)";
            card.classList.remove("is-turned");
        }
        else
        {
            card.style.transform = "translateZ(50px) rotateY(180deg)";
            card.classList.add("is-turned");
        }
}
/** FETCH SIBLINGS RIGHT OR LEFT OF THE HOVERED CARD
 * @param {HTMLDivElement} wrapper 
 * @param {string} type 
 * @returns {HTMLDivElement[]} */
function getSiblingCards(wrapper, type) {
    let currentWrapper =
    type === "next" ?
    wrapper.nextElementSibling : wrapper.previousElementSibling;
    const array = [];
    if(currentWrapper) {
        do {
            array.push(currentWrapper.querySelector(".card"));
            currentWrapper =
            type === "next" ?
            currentWrapper.nextElementSibling : currentWrapper.previousElementSibling;
        }
        while(currentWrapper);
    }
    return array;
}
/** COMPUTE DIFFERENT TRANSFORM VALUES BASED ON THE SIBLINGS´
 *  INDEX
 * @param {HTMLDivElement[]} array 
 * @param {string} type */
function adjustSiblings(array, type) {
    let offsetImmediate =
    type === "next" ?
    -20 : 20;
    let offset =
    type === "next" ?
    -20 : 20;
    let angleFirst =
    type === "next" ?
    "35deg" : "-35deg";
    let angleSecond =
    type === "next" ?
    "25deg" : "-25deg";
    array.forEach((card, index) => {
        let wrapper = card.parentElement;
        switch(index) {
            case 0:
                wrapper.style.zIndex = "1";
                wrapper.style.transform = `translateX(${offsetImmediate}px)`;
                card.style.transform = `rotateY(${angleFirst})`;
                card.querySelector(".front .pic-holder").style.transform = "translateZ(60px)";
                break;
            case 1:
                wrapper.style.zIndex = "0";
                wrapper.style.transform = `translateX(${offsetImmediate * 2}px)`;
                card.style.transform = `rotateY(${angleSecond}) translateZ(-50px)`;
                card.querySelector(".front .pic-holder").style.transform = "translateZ(60px)";
                break;
            default:
                wrapper.style.transform = `translateX(${offset * (index * 2)}px)`;
                card.style.transform = "translateZ(-70px)";
                break;
        }
    });
}
/** RESETS ALL TRANFORMATIONS OF THE SIBLINGS
 * @param {HTMLDivElement[]} array  */
function resetSiblings(array) {
    array.forEach(card => {
        card.style.transform = "";
        card.parentElement.style.transform = "";
        card.querySelector(".front .pic-holder").style.transform = "translateZ(0)";
    });
}

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
