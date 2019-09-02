const blockchain = require('./blchain');

const bitcoin = new blockchain;

bitcoin.creatNewBlock(2389, '1H3BF8DB3S', '3HFB238F7D613');
bitcoin.creatNewBlock(1239, '1H3B3HFB238F7F8DB3S', '3HFB238F7DFB238F7F8DB3S613');
bitcoin.creatNewBlock(3387, '1H3BF8DBFB238F7DFB3S', '3HFB238F78F7DFB3SD613');

console.log(bitcoin);