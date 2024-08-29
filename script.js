// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}


function submitFeedback() {
    var fullname = document.getElementById("fullname").value;
    var message = document.getElementById("message").value;

    // Create a new review section
    var reviewSection = document.createElement("section");
    reviewSection.classList.add("review");

    // Create review content
    var reviewContent = document.createElement("div");
    reviewContent.classList.add("review-content");

    var customerName = document.createElement("h2");
    customerName.classList.add("customer-name");
    customerName.textContent = fullname;

    var reviewText = document.createElement("p");
    reviewText.classList.add("review-text");
    reviewText.textContent = message;

    // Append review content to review section
    reviewContent.appendChild(customerName);
    reviewContent.appendChild(reviewText);

    // Append review section to the document
    reviewSection.appendChild(reviewContent);

    // Get the existing review section and replace it with the new one
    var existingReviewSection = document.getElementById("reviewSection");
    existingReviewSection.parentNode.replaceChild(reviewSection, existingReviewSection);
}