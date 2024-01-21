# URL Status Checker

This script checks a range of URLs and prints those that return a status of 200. It's useful for checking the availability of different versions of a file on a server.

## Prerequisites

- Node.js and npm installed on your machine.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install axios` to install the required library.

## Usage

The script takes three command-line arguments:

- `baseURL`: The base URL to check. The script will append `<version>.apk` to this base URL to form the full URL.
- `startVersion`: The start of the version range to check. This should be a number.
- `endVersion`: The end of the version range to check. This should be a number.

The script will check all versions in the range from `startVersion` to `endVersion`, inclusive. For each version number `x`, it will check all versions from `x.0` to `x.99`.

To run the script, use the following command:

```bash
node index.js <baseURL> <startVersion> <endVersion>
