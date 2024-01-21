const axios = require('axios');
const process = require('process');

async function checkUrlStatus(baseURL, start, end) {
    let totalRequests = (end - start + 1) * 100;
    let completedRequests = 0;

    for (let i = start; i <= end; i++) {
        for (let j = 0; j <= 99; j++) {
            let version = `${i}.${j}`;
            let url = `${baseURL}${version}.apk`;

            try {
                let response = await axios.get(url);
                if (response.status === 200) {
                    console.log(`URL ${url} returned status 200`);
                }
            } catch (error) {
                // Do nothing if status is not 200
            } finally {
                completedRequests++;
                process.stdout.write(`Progress: ${((completedRequests / totalRequests) * 100).toFixed(2)}%\r`);
            }
        }
    }
}

// Check command-line arguments
if (process.argv.length !== 5) {
    console.log('Usage: node index.js <baseURL> <startVersion> <endVersion>');
    process.exit(1);
}

let baseURL = process.argv[2];
let startVersion = parseFloat(process.argv[3]);
let endVersion = parseFloat(process.argv[4]);

if (isNaN(startVersion) || isNaN(endVersion)) {
    console.log('Error: Start and end versions must be numbers.');
    process.exit(1);
}

// Call the function with command-line arguments
checkUrlStatus(baseURL, startVersion, endVersion);