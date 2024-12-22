// Array of quotes
const quotes = [
    "The truth is out there.",
    "Trust no one.",
    "I want to believe.",
    "The code reveals all.",
    "Nothing happens by chance."
];

// Function to display quotes
let currentIndex = 0;

function showQuote() {
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotes[currentIndex];
    currentIndex = (currentIndex + 1) % quotes.length; // Loop through quotes
}

// Initial display
showQuote();

// Change quote every 5 seconds
setInterval(showQuote, 5000);
