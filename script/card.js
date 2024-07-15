
// Function to get the query parameter from the URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function findKey(query, data)
{
    const keys = Object.keys(data);
    const options = {
        includeScore: true,
        keys: ['key']
    };

    // Initialize Fuse with the array of keys and options
    const fuse = new Fuse(keys.map(key => ({ key })), options);

    // Perform the fuzzy search
    const result = fuse.search(query);

    // Extract the best matched key from the results
    const matchedKey = result.length > 0 ? result[0].item.key : null;
}

// Function to update the results
function updateResults(query, data) {
    

    // Display the result
    const resultsDiv = document.getElementById('results');
    if (matchedKey) {
        const matchedObject = data[matchedKey];
        resultsDiv.innerHTML = `<pre>${JSON.stringify(matchedObject, null, 2)}</pre>`;
    } else {
        resultsDiv.innerHTML = '<div>No match found</div>';
    }
}

// Function to initialize the search based on URL parameter
async function initSearch() {
    const query = getQueryParam('query');
    if (query) {
        let matchedKey = findKey(query, cards);
        document.getRootNode().childNodes.forEach(c => c.remove());
        document.body.innerText = `${JSON.stringify(cards[matchedKey], null, 2)}`;
    } else {
        document.getElementById('results').innerHTML = '<div>No query parameter provided</div>';
    }
}

// Initialize search on page load
document.addEventListener('DOMContentLoaded', initSearch);