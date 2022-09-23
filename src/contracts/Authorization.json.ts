export default {
"abi":[
{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},
{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"Authorize","type":"event"},
{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"Deauthorize","type":"event"},
{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"StartOwnershipTransfer","type":"event"},
{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"TransferOwnership","type":"event"},
{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"deny","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isPermitted","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"newOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"takeOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"newOwner_","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}
],
"bytecode":"608060405234801561001057600080fd5b50600080546001600160a01b031916331790556104e6806100326000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80639c52a7f11161005b5780639c52a7f11461010b578063a2f55ae51461011e578063d4ee1d9014610131578063f2fde38b1461015157600080fd5b80633fd8cc4e1461008257806360536172146100bc5780638da5cb5b146100c6575b600080fd5b6100a5610090366004610473565b60026020526000908152604090205460ff1681565b60405160ff90911681526020015b60405180910390f35b6100c4610164565b005b6000546100e69073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100b3565b6100c4610119366004610473565b610292565b6100c461012c366004610473565b610339565b6001546100e69073ffffffffffffffffffffffffffffffffffffffff1681565b6100c461015f366004610473565b6103dc565b60015473ffffffffffffffffffffffffffffffffffffffff16331461020f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e0000000000000000000000000000000000000000000000606482015260840160405180910390fd5b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102b657600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491015b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff16331461035d57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf5910161032e565b60005473ffffffffffffffffffffffffffffffffffffffff16331461040057600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b9060200161032e565b60006020828403121561048557600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146104a957600080fd5b939250505056fea26469706673582212205b22d6847511bcab2226d105c6cff79b748bb4a8c22f466caac05f938049167564736f6c63430008110033"
}