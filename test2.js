const fs = require('fs');

// Specify the file path
const filePath = 'db\\connect.js'; // Change to the actual file path

// Read the file
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // Split file contents into an array of strings
    const arrayOfStrings = data.split('\n'); // Change delimiter as needed

    // Optional: Remove trailing newline from the last string
    if (arrayOfStrings.length > 0 && arrayOfStrings[arrayOfStrings.length - 1] === '') {
        arrayOfStrings.pop();
    }

    // Now you can use the `arrayOfStrings` array as needed
    console.log('Array of strings:', arrayOfStrings);
});