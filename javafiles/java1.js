// javafiles/java1.js
console.log("java1.js is loaded!");


// Configurable message
const message = "Este es un mensaje personalizado para mi solcisio ❤️";

// Function to show the message
function showMessage() {
    alert(message);
}

// Attach the function to the button
document.getElementById("show-message").addEventListener("click", showMessage);