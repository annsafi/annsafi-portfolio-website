// JavaScript for hover effect on project cards
function addHoverEffect(element) {
    element.style.transform = "scale(1.1)";
}

function removeHoverEffect(element) {
    element.style.transform = "scale(1)";
}

// JavaScript for form validation (you can enhance this based on your needs)
document.getElementById("contact-form").addEventListener("submit", function (event) {
    // Add form validation logic here if needed
    // Example: Check if the fields are not empty
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        event.preventDefault();
    }
});

// JavaScript for pop sound on hover
function playPopSound() {
    // You can replace 'pop-sound.mp3' with the actual path to your sound file
    const popSound = new Audio('pop-sound.mp3');
    popSound.play();
}