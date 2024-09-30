function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const quotes = [ 
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" }, 
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" }, 
    { text: "Get busy living or get busy dying.", author: "Stephen King" }, 
    { text: "You have to be odd to be number one.", author: "Dr. Seuss" }, 
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" }, 
    // Add more quotes as needed 
]; 
 
function displayQuote() { 
    const today = new Date(); 
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24); 
    const quoteIndex = dayOfYear % quotes.length; // Loop through quotes 
    const quote = quotes[quoteIndex]; 
 
    document.getElementById('quote').innerText = quote.text; 
    document.getElementById('author').innerText = `- ${quote.author}`; 
} 
 
displayQuote(); 
