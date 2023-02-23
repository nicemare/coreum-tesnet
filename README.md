Coreum Auto Claim Testnet Token with Node.js
This is a Node.js script that uses the puppeteer module to automate the process of claiming Coreum testnet tokens.

Prerequisites
Before running this script, you must have Node.js and npm installed on your system. You can download and install Node.js from the official website: https://nodejs.org/en/.

You also need to have a Coreum wallet set up and have some testnet tokens to claim.
Installation
To install the dependencies, navigate to the project directory in your terminal and run the following command:

npm install puppeteer fs

Usage
To use this script, first open the index.js file and edit fields with your Coreum wallet address to claim.

Then, in your terminal, navigate to the project directory and run the following command:
node index.js

The script will open a Chromium browser window and navigate to the Coreum testnet token faucet page. It will enter your wallet address and the amount to claim, then submit the form and confirm the transaction. Once the transaction is confirmed, the script will output a success message to the console.

Note
This script is intended for educational purposes only and should not be used for malicious or illegal activities. Use at your own risk.
