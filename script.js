// Function to display an alert when a button is clicked
function showAlert() {
    alert("Button clicked! This is a simple alert message.");
}

// Add an event listener to a button (assuming you have a button in your HTML)
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("#myButton"); // Replace with your button's ID
    if (button) {
        button.addEventListener("click", showAlert);
    }
});

// Example function to change the background color
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Example: Change background color when the page loads
window.onload = () => {
    changeBackgroundColor("#ffffff"); // Change to white when the page loads
};
