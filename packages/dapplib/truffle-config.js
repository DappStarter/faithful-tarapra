require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remind method include argue broken security'; 
let testAccounts = [
"0x925d427529f7d33582fb58616d33c4fe4eb4ee0be565f9b379034d9adc1755cd",
"0x82769c12a1ce4a5cff167ebfdc13b2431cc82039d75d580c2272af9161fba3a7",
"0x1ee0f7d5962722d3a46f26bf870eacfd2e378ab27656f07d28ec8902e09d32d8",
"0xcd1463a498bb4b2a14e852b963e470fa92ac7ead04b7f53b1af43ea460bf2665",
"0xb982a007d0d4e236d5e6f05676f33485d71cb01b6e44f07236d1ea78a8776efa",
"0xab63f8bff1e3d3170ae6fcaafc00d09d797efadeefb1b36fc7e53059cfd3f44b",
"0x4f5a4cb380b979821b078b65acf1f2732303667647e26fb736e1f6238b651f54",
"0x95ad60cb19a590ce192cf4237e10b9a5bd98fa19307453df4400163af7419eed",
"0x9b9645efe3bed1c1574b6a217458b2b7f0131c9446e5ecb3d5f524fb1419dc6a",
"0x92c6e34c120b686d349aa592c0101b6b62b4dfdcc16a1d79e13cbd5988d7ec42"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
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
