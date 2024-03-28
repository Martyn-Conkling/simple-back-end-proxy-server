  // Function to fetch quotes from your backend
function fetchQuotes() {
    fetch('http://localhost:3000/api/quotes')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // This will put the quotes inside the quotes box
            displayQuotes(data);
            // If you want to save the data somehow add code to the saveQuotes() function
            // saveQuotes(data);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

// Function to display quotes in the webpage
function displayQuotes(quotes) {
    const quotesDiv = document.getElementById('quotes');
    quotesDiv.innerHTML = ''; // Clear existing quotes, if you want to keep the old quotes comment this out
    quotes.forEach(quote => {
        const p = document.createElement('p');
        p.textContent = `"${quote.q}" - ${quote.a}`;
        quotesDiv.appendChild(p);
    });
}

function saveQuotes(quotesData){
    // you decide how you want to do this
    // If you want to save the quotes on the front end you can use local storage or some sort of caching
    // If you want to save the quotes to a text file
    // you can use the fs module from Node.js, 
    // but you will need to do this on the back-end

}
