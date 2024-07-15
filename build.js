const fs = require('fs');
const path = require('path');
const cards = require('./data/cards'); // Adjust the path to the cards.js file

// Function to remove HTML tags from a string
function removeHtmlTags(str) {
    return str.replace(/<\/?[^>]+(>|$)/g, "");
}

// Function to delete all files in a directory
function clearDirectory(directory) {
    fs.readdir(directory, (err, files) => {
        if (err) throw err;
        for (const file of files) {
            fs.unlink(path.join(directory, file), err => {
                if (err) throw err;
            });
        }
    });
}

function getSourceLabel(source) {
    switch (source) {
        case 'Pool 1 (Collection Level 18-214)':
            return 'Pool 1';
        case 'Pool 2 (Collection Level 222-486)':
            return 'Pool 2';
        case 'Pool 3 (Collection Level 486-?)':
            return 'Pool 3';
        case 'Pool 4 (Series 4)':
            return 'Pool 4';
        case 'Pool 5 (Series 5)':
            return 'Pool 5';
        case 'Collection Level 1-14':
            return 'Level 1-14';
        case 'Starter Card':
            return 'Starter Card';
        case 'Recruit Season':
            return 'Recruit Season';
        case 'None':
            return 'Pool 5';
        default:
            return '';
    }
}

var resp = fetch("https://marvelsnap.pro/snap/do.php?cmd=getcards", {
    // "headers": {
    //   "accept": "application/json, text/plain, */*",
    //   "accept-language": "en-US,en;q=0.9",
    //   "priority": "u=1, i",
    //   "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
    //   "sec-ch-ua-mobile": "?0",
    //   "sec-ch-ua-platform": "\"Windows\"",
    //   "sec-fetch-dest": "empty",
    //   "sec-fetch-mode": "cors",
    //   "sec-fetch-site": "same-origin",
    //   "Referer": "https://marvelsnap.pro/collection/",
    //   "Referrer-Policy": "strict-origin-when-cross-origin"
    // },
    "body": null,
    "method": "GET"
  }).then(x => x.json().then(obj => console.log(obj)));



// Create output directory if it doesn't exist
const outputDir = path.join(__dirname, 'card');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
} else {
    // Clear the output directory if it exists
    console.log("cleaning"+ outputDir)
    clearDirectory(outputDir);
}

const outputDir2 = path.join(__dirname, 'json');
if (!fs.existsSync(outputDir2)) {
    fs.mkdirSync(outputDir2);
} else {
    // Clear the output directory if it exists
    console.log("cleaning"+ outputDir2)
    clearDirectory(outputDir2);
}


// Iterate over each card and create a JSON file
Object.keys(cards).forEach(cardKey => {
    const card = cards[cardKey];

    let source = card.source;
    if (cardKey.startsWith("evolved")) {
        const originalKey = cardKey.replace("evolved", "");
        if (cards[originalKey]) {
            source = cards[originalKey].source;
        }
    }

    const cardData = {
        description: removeHtmlTags(card.description),
        cost: card.cost,
        power: card.power,
        source: getSourceLabel(source)
    };
    fs.writeFileSync(path.join(outputDir2, `${cardKey}.json`), JSON.stringify(cardData, null, 2));
    fs.writeFileSync(path.join(outputDir, `${cardKey}`), `Cost: ${cardData.cost} - Power: ${cardData.power} - ${cardData.description}`);
});

console.log('JSON files created for each card.');