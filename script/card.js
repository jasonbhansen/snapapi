// Function to fetch JSON data from the API
async function fetchData() {
      
    var response = await fetch("https://static2.marvelsnap.pro/snap/do.php?cmd=getcards", {
        method: 'GET',
        mode: 'no-cors'
      });
    var data = await response.json();
    return data;
}
// Function to get the query parameter from the URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Function to update the results
function updateResults(query, data) {
    const keys = Object.keys(data);
    let options = {
        includeScore: true,
        keys: ['key']
    };

    // Initialize Fuse with the array of keys and options
    const fuse = new Fuse(keys.map(key => ({ key })), options);

    // Perform the fuzzy search
    let result = fuse.search(query);

    // Extract the best matched key from the results
    let matchedKey = result.length > 0 ? result[0].item.key : null;

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
        let data = await fetchData();
        updateResults(query, data);
    } else {
        document.getElementById('results').innerHTML = '<div>No query parameter provided</div>';
    }
}

// Initialize search on page load
document.addEventListener('DOMContentLoaded', initSearch);
