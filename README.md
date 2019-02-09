# Decentralized-Voting-System
Voting System based on Ethereum Blockchain using Truffle Framework and UserAuthentication Mobile Application using React Native

Requirements:
1: Node Package Manager (npm)   
2: Truffle
3: Ganache
4: Metamask extension for Chrome
5: Node-Modules
4: React-Native

Steps:
1: Inside 'Dapp' directory:
    $ truffle migrate --reset
    $ npm run dev
2: Open Ganache and copy your RPC Server Address
3: Inside metamask, create a new server with the same RPC server address as in Ganache
4: Import Accounts on Metamask from Ganache using the private keys of the addresses
5: Reload the browser

For QR CODE SCANNER:
1: Open Your Mobile App and scan for the qr code which contains the valid private key of the authenticated user
2: You can now vote as soon as the user is authenticated


