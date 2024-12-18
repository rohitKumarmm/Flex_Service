// Selecting elements
const exploreBtn = document.getElementById('explore-btn');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const submission = document.getElementById('submission-message');

// Toggle navigation links
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Scroll to explore section
exploreBtn.addEventListener('click', showExploreSection);

function showExploreSection() {
    document.getElementById("explore-section").scrollIntoView({ behavior: "smooth" });
}

function showAboutUsSection() {
    document.getElementById("AboutUs-section").scrollIntoView({ behavior: "smooth" });
}

function showServicesSection() {
    document.getElementById("services-section").scrollIntoView({ behavior: "smooth" });
}

function showContactSection() {
    console.log("Contact section triggered");
    document.getElementById("contact-section").scrollIntoView({ behavior: "smooth" });
}

function showHomeSection() {
    document.getElementById("home-section").scrollIntoView({ behavior: "smooth" });
}

function showPricingSection() {
    console.log("Pricing section triggered");
    const pricingSection = document.getElementById("pricing-section");
    const navbarHeight = document.querySelector(".navbar").offsetHeight; // Get the height of the fixed navbar
    const scrollPosition = pricingSection.offsetTop - navbarHeight; // Adjust the offset to account for the navbar height

    console.log("Pricing Section Offset: ", pricingSection.offsetTop);
    console.log("Navbar Height: ", navbarHeight);
    console.log("Scroll Position: ", scrollPosition);

    window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
    });
}

// JavaScript Function to Initialize Form Handling
// JavaScript Function to Initialize Form Handling
function initializeFormHandling() {
    // Select the form and the message element
    const form = document.getElementById("response-form");
    const submissionMessage = document.getElementById("submission-message");

    if (!form) return; // Ensure the form exists before adding the event listener

    // Add a submit event listener to the form
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission only for this form

        // Get the input values
        const name = document.getElementById("name").value.trim();
        const contact = document.getElementById("contact").value.trim();

        // Validate inputs (basic validation)
        if (name === "" || contact === "") {
            alert("Please fill in all the required fields.");
            return;
        }

        if (!/^\+?\d+$/.test(contact)) {
            alert("Please enter a valid contact number.");
            return;
        }

        // Show submission message
        submissionMessage.style.display = "block";

        // Reset the form
        form.reset();

        // Optionally, simulate sending the data (you can replace this with an actual AJAX request)
        console.log("Form submitted:", { name, contact });
    });
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    initializeFormHandling();

    // Debugging for navigation links (optional)
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => console.log("Navigating to:", link.getAttribute("href")));
    });
});




function openModal(serviceName, description) {
    // Set the title and description dynamically based on the clicked service
    document.getElementById("modal-title").innerText = serviceName + " Overview";
    document.getElementById("modal-description").innerText = description;

    // Show the modal
    document.getElementById("service-modal").style.display = "flex";
}

function closeModal() {
    // Hide the modal
    document.getElementById("service-modal").style.display = "none";
}

document.getElementById("homeBtn").addEventListener("click", function() {
    window.location.href = "/"; // Redirect to the home page
});
