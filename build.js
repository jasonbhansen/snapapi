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

// Create output directory if it doesn't exist
const outputDir = path.join(__dirname, 'card');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
} else {
    // Clear the output directory if it exists
    clearDirectory(outputDir);
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
    fs.writeFileSync(path.join(outputDir, `${cardKey}`), `Cost: ${cardData.cost} - Power: ${cardData.power} - ${cardData.description} ${cardData.source === "" ? "" : "- " + cardData.source}`);
});

console.log('JSON files created for each card.');