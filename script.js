// 1. Define the array of quotes
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The mind is everything. What you think you become. - Buddha",
    "Life is what happens when you’re busy making other plans. - John Lennon",
    "That which does not kill us makes us stronger. - Friedrich Nietzsche"
];

// 2. Get the necessary elements from the HTML
const quoteDisplay = document.getElementById('quoteDisplay');
const newQuoteBtn = document.getElementById('newQuoteBtn');

// 3. Define the function to generate and display a new quote
function generateQuote() {
    // Generate a random index number based on the length of the quotes array
    // Math.random() gives a float between 0 (inclusive) and 1 (exclusive)
    // We multiply it by the array length, and Math.floor() rounds it down to a whole number (0, 1, 2, etc.)
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    // Get the quote from the array using the random index
    const randomQuote = quotes[randomIndex];
    
    // Update the text content of the HTML element
    // This is the core DOM Manipulation step!
    quoteDisplay.textContent = randomQuote;
}

// 4. Attach an Event Listener to the button
// When the 'newQuoteBtn' element is 'click'ed, the 'generateQuote' function will execute
newQuoteBtn.addEventListener('click', generateQuote);

// BONUS: Display an initial quote when the page loads
// You can call the function here so the initial message is a random quote, not static text.
generateQuote(); 