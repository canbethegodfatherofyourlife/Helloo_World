# Hello World - Using Solidity & Hardhat


Try running some of the following tasks:

```
Local Deployment
If you'd like to run your own local hardhat network, you can run:

npx hardhat node
And then in a different terminal

npx hardhat run scripts/deploy.js --network localhost
And you should see transactions happen in your terminal that is running npx hardhat node

Important localhost note
If you use metamask with a local network, everytime you shut down your node, you'll need to reset your account. Settings -> Advanced -> Reset account. Don't do this with a metamask you have real funds in. And maybe don't do this if you're a little confused by this.

```

```

Deployment to a testnet or mainnet
Setup environment variabltes
You'll want to set your KOVAN_RPC_URL and PRIVATE_KEY as environment variables. You can add them to a .env file, similar to what you see in .env.example.

PRIVATE_KEY: The private key of your account (like from metamask). NOTE: FOR DEVELOPMENT, PLEASE USE A KEY THAT DOESN'T HAVE ANY REAL FUNDS ASSOCIATED WITH IT.
You can learn how to export it here.
GOERLI_RPC_URL: This is url of the kovan testnet node you're working with. You can get setup with one for free from Alchemy
Get testnet ETH
Head over to faucets.chain.link and get some tesnet ETH. You should see the ETH show up in your metamask.

```

```

Deploy
npx hardhat run scripts/deploy.js --network goerli
Verify on etherscan
If you deploy to a testnet or mainnet, you can verify it if you get an API Key from Etherscan and set it as an environemnt variable named ETHERSCAN_API_KEY. You can pop it into your .env file as seen in the .env.example.

In it's current state, if you have your api key set, it will auto verify kovan contracts!

However, you can manual verify with:

npx hardhat verify --constructor-args arguments.js DEPLOYED_CONTRACT_ADDRESS

```

