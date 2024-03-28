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
            displayQuotes(data);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

// Function to display quotes in the webpage
function displayQuotes(quotes) {
    const quotesDiv = document.getElementById('quotes');
    quotesDiv.innerHTML = ''; // Clear existing quotes
    quotes.forEach(quote => {
        const p = document.createElement('p');
        p.textContent = `"${quote.q}" - ${quote.a}`;
        quotesDiv.appendChild(p);
    });
}

