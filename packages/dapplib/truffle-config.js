require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner neck fringe speak guard render remind huge good clog swift topic'; 
let testAccounts = [
"0xb7fa82fa19b043aea299cfbfe6d0c218fcd767b6d4d0e47c17214bc7cdf29aec",
"0xf1d1ff78bf0123ea7ece56b32e2e810abc2cd104eb711f8df96acdd7d36a32bb",
"0xc1bc25f049d930a43c09da7d5b2ca6a1d87b5372f9c05f42a6cac45d793a51ff",
"0x5ddf118e7c9e9f436c25690c0db6065e010b0ef361d0269cf132c38de50f340b",
"0xa650deb78ece36b2e2993111653f0723bec7612523ba35914e7d78e153e8c4ef",
"0x8bd47b3af09e4ca9406e34c51fe584708d9962e155711bd8a28ab7e4b90721ae",
"0x31e499404bd2c7ed19d6d7379586f4acd71aac04244cd60495241ad500c4d5a8",
"0xd1c136f58522e8b2d534a275c1621883a32c203065ebbf199acc502f9d3f3127",
"0x77db2a854a0bb604615fef9a042dda48ad3c1dadf75f85e5a931183a4a623257",
"0x0fc5590c6e153e1586e6c95d4b62220c677a2c1bc9a55d6870fedd351e44e527"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

