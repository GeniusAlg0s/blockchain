/*function spook(rank, firstname, lastname, jumpnumber){
    this.rank = rank;
    this.firstname = firstname;
    this.lastname = lastname;
    this.jumpnumber = jumpnumber;
}
undefined
var jason = new spook('SFC', 'Jason', 'Borne', '002')

*/

function blockchain(){
    
    this.chain = [];
    this.newTransaction = [];
}

blockchain.prototype.creatNewBlock = function(nonce, previousblockhash, hash) {
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transaction: this.newTransaction,
        nonce: nonce,
        hash: hash,
        previousblockhash: previousblockhash
                
    };
    this.newTransaction = [];
     this.chain.push(newBlock);
     return newBlock;
}

module.exports = blockchain;