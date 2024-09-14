// JavaScript code to create typing effect with multiple sentences
var sentences = [
    "Web Development",
    "Frontend Development",
    "Competitive Coding",
    "Software Engineering"
]; // Array of sentences to be typed
var speed = 50; // Typing speed (milliseconds)
var container = document.getElementById('typing-container'); // Get the container element

// Function to simulate typing effect
function typeWriter(index) {
    if (index < sentences.length) {
        var sentence = sentences[index]; // Get the next sentence
        var typed = ""; // Initialize typed text
        var i = 0; // Initialize index for character in sentence

        // Inner function to type each character
        function typeCharacter() {
            if (i < sentence.length) {
                typed += sentence.charAt(i); // Add the next character
                container.innerHTML = typed; // Update the container with the typed text
                i++;
                setTimeout(typeCharacter, speed); // Call the function recursively after a delay
            } else {
                setTimeout(eraseText, 1000); // Erase the text after a delay
            }
        }

        // Inner function to erase the text
        function eraseText() {
            if (typed.length > 0) {
                typed = typed.slice(0, -1); // Remove the last character
                container.innerHTML = typed; // Update the container with the erased text
                setTimeout(eraseText, speed); // Call the function recursively after a delay
            } else {
                setTimeout(function() { typeWriter(index + 1) }, 1000); // Type the next sentence after a delay
            }
        }

        typeCharacter(); // Start typing the current sentence
    } else {
        typeWriter(0); // Loop back to the first sentence
    }
}

typeWriter(0); // Start the typing effect


document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('.scroll-to');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offset = 70; // Adjust this value as needed
                const targetOffset = targetSection.offsetTop - offset;
                window.scrollTo({
                    top: targetOffset,
                    behavior: 'smooth'
                });
            }
        });
    });
});

function openLink(url) {
    window.open(url, '_blank');
}

document.addEventListener("DOMContentLoaded", function() {
    // Select all buttons with the class 'logo' and the 'dcv' button
    const buttons = document.querySelectorAll(".logo, .dcv, .heading, .sub-heading");

    // Add the animation class to each button
    buttons.forEach(button => {
        button.classList.add("animate-slide-in");
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const aboutHeaders = document.querySelectorAll('.about-hd, .skills-hd');
    const aboutParagraphs = document.querySelectorAll('.about-p p');
    const aboutImage = document.querySelector('.abt-img');

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        aboutHeaders.forEach(header => {
            const headerTop = header.getBoundingClientRect().top;

            if (headerTop < triggerBottom) {
                header.classList.add('visible');
            } else {
                header.classList.remove('visible');
            }
        });

        aboutParagraphs.forEach(paragraph => {
            const paragraphTop = paragraph.getBoundingClientRect().top;

            if (paragraphTop < triggerBottom) {
                paragraph.classList.add('visible');
            } else {
                paragraph.classList.remove('visible');
            }
        });

        const imgTop = aboutImage.getBoundingClientRect().top;
        if (imgTop < triggerBottom) {
            aboutImage.classList.add('visible');
        } else {
            aboutImage.classList.remove('visible');
        }
    };

    window.addEventListener('scroll', revealOnScroll);

    // Initial call to reveal elements that are already in view on page load
    revealOnScroll();
});


document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    const revealCards = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        cards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 200); // Delay each card by 200ms
            }
        });
    };

    window.addEventListener('scroll', revealCards);

    // Initial call to reveal elements that are already in view on page load
    revealCards();
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (name && email && subject && message) {
        // You can add more sophisticated validation here
        console.log('Form submitted successfully!');
        // Optionally, you can use AJAX to send form data without reloading the page
        // const xhr = new XMLHttpRequest();
        // xhr.open('POST', 'your_form_handler_url', true);
        // xhr.setRequestHeader('Content-Type', 'application/json');
        // xhr.onload = function () {
        //     if (xhr.status === 200) {
        //         console.log('Form successfully submitted');
        //     } else {
        //         console.error('Error in form submission');
        //     }
        // };
        // xhr.send(JSON.stringify({ name, email, subject, message }));
    } else {
        alert('Please fill out all fields.');
    }
});

