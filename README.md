# Decentralized-Voting-System
Voting System based on Ethereum Blockchain using Truffle Framework and UserAuthentication Mobile Application using React Native

#### Requirements:

- Node Package Manager (npm)   
- Truffle
- Ganache
- Metamask extension for Chrome
- Node-Modules
- React-Native


### Steps:
- Inside 'Dapp' directory:

     `truffle migrate --reset`
     
     `npm run dev`
- Open Ganache and copy your RPC Server Address
- Inside metamask, create a new server with the same RPC server address as in Ganache
- Import Accounts on Metamask from Ganache using the private keys of the addresses
- Reload the browser

### For QR CODE SCANNER:

- Go to directory 'User Authentication Cross Platform Mobile Application'
- `npm install expo-cli --global`
- `npm install`
- `expo start -c`
- Either run on an emulator or install expo app on your phone and scan the QR code to open the app on your phone
- Add ganache provided id keys on election.json file (Only the accounts with these keys are authorized to vote)
- Open any online QR code generator, embed one of these keys and create a QR code. Also for testing purpose, create another QR code with     any text except the key
- Open the app and scan these QR codes one by one
- Authentication succeeds or fails depending upon the validity of key in the QR code
- You can now vote as soon as the user is authenticated


### Screenshots

![Screen Shot 2019-11-06 at 17 14 07](https://user-images.githubusercontent.com/43087414/68314334-15ff1600-00de-11ea-966a-6782b1b52205.png)
![Screen Shot 2019-11-06 at 21 24 41](https://user-images.githubusercontent.com/43087414/68314005-97a27400-00dd-11ea-876c-dcbfeb08d84e.png)
![Screen Shot 2019-11-06 at 21 25 11](https://user-images.githubusercontent.com/43087414/68314010-9a04ce00-00dd-11ea-950a-21c843562662.png)
![Screen Shot 2019-11-06 at 21 25 52](https://user-images.githubusercontent.com/43087414/68314016-9b35fb00-00dd-11ea-8717-9ca1d33ebc35.png)
![Screen Shot 2019-11-06 at 21 27 51](https://user-images.githubusercontent.com/43087414/68314027-9f621880-00dd-11ea-9c09-5bebd62b6025.png)
