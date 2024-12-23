// Array of quotes
const quotes = [
    "The truth is out there.",
    "Trust no one.",
    "I want to believe.",
    "The code reveals all.",
    "Nothing happens by chance.",
];

// Current index of the quote
let currentIndex = 0;

// Function to display the current quote
function showQuote() {
    const quoteElement = document.getElementById("quote");
    if (quoteElement) {
        // Update the text content of the quote element
        quoteElement.textContent = quotes[currentIndex];
        // Move to the next quote, looping back to the start if needed
        currentIndex = (currentIndex + 1) % quotes.length;
    } else {
        console.warn("Quote element not found! Check your HTML.");
    }
}

// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    showQuote();
    setInterval(showQuote, 10000);
});