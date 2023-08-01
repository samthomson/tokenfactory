import { Web3 } from 'web3'
import BigNumber from "bignumber.js"


const ERC20ABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
] as const


const abis: Record<string, any> = {
'0x36e6040b4186F9f0Ad9b3c25a9C1c9EE58112D0a': [
		{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
		},
		{
		"anonymous": false,
		"inputs": [
			{
			"indexed": true,
			"internalType": "address",
			"name": "owner",
			"type": "address"
			},
			{
			"indexed": true,
			"internalType": "address",
			"name": "spender",
			"type": "address"
			},
			{
			"indexed": false,
			"internalType": "uint256",
			"name": "value",
			"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
		},
		{
		"anonymous": false,
		"inputs": [
			{
			"indexed": true,
			"internalType": "address",
			"name": "from",
			"type": "address"
			},
			{
			"indexed": true,
			"internalType": "address",
			"name": "to",
			"type": "address"
			},
			{
			"indexed": false,
			"internalType": "uint256",
			"name": "value",
			"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
		},
		{
		"inputs": [
			{
			"internalType": "address",
			"name": "owner",
			"type": "address"
			},
			{
			"internalType": "address",
			"name": "spender",
			"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
		},
		{
		"inputs": [
			{
			"internalType": "address",
			"name": "spender",
			"type": "address"
			},
			{
			"internalType": "uint256",
			"name": "amount",
			"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
			"internalType": "bool",
			"name": "",
			"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
		},
		{
		"inputs": [
			{
			"internalType": "address",
			"name": "account",
			"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
		},
		{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
			"internalType": "uint8",
			"name": "",
			"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
		},
		{
		"inputs": [
			{
			"internalType": "address",
			"name": "spender",
			"type": "address"
			},
			{
			"internalType": "uint256",
			"name": "subtractedValue",
			"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
			"internalType": "bool",
			"name": "",
			"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
		},
		{
		"inputs": [
			{
			"internalType": "address",
			"name": "spender",
			"type": "address"
			},
			{
			"internalType": "uint256",
			"name": "addedValue",
			"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
			"internalType": "bool",
			"name": "",
			"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
		},
		{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
			"internalType": "string",
			"name": "",
			"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
		},
		{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
			"internalType": "string",
			"name": "",
			"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
		},
		{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
		},
		{
		"inputs": [
			{
			"internalType": "address",
			"name": "to",
			"type": "address"
			},
			{
			"internalType": "uint256",
			"name": "amount",
			"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
			"internalType": "bool",
			"name": "",
			"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
		},
		{
		"inputs": [
			{
			"internalType": "address",
			"name": "from",
			"type": "address"
			},
			{
			"internalType": "address",
			"name": "to",
			"type": "address"
			},
			{
			"internalType": "uint256",
			"name": "amount",
			"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
			"internalType": "bool",
			"name": "",
			"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
		}
	] as const
}

// test token 0x36e6040b4186F9f0Ad9b3c25a9C1c9EE58112D0a
// reward token 0x540053115bA579EB32aCddfaFe2d121340553411

const tokenContracts = ['0x36e6040b4186F9f0Ad9b3c25a9C1c9EE58112D0a', '0x540053115bA579EB32aCddfaFe2d121340553411']
const walletAddresses = ['0x47b7e4A01ABA5158925a722a24dbb414deDC19b9', '0x2E4693821464078e4b2a205BbE5EA9BEF4D47772', '0x131335C9e4B6df8966F221F83c088dDC816967bd']

const providerInterface = new Web3(`http://127.0.0.1:7545`);

const main = async () => {

	// for each wallet, get balances of all tokens
	for (let iAddress = 0; iAddress < walletAddresses.length; iAddress++) {

		const walletAddress = walletAddresses[iAddress];
		console.log(`Balances for addres ${walletAddress}:`)
		// get eth balance first.
		const ethBalance = await providerInterface.eth.getBalance(walletAddress)
		// console.log('eth?', ethBalance)
		console.log(`- ETH: ${humanNumber(new BigNumber(ethBalance.toString()), 18)}`)

		// for (let iToken = 0; iToken < tokenContracts.length; iToken++) {
		for (let iToken = 0; iToken < tokenContracts.length; iToken++) {

			const contract = new providerInterface.eth.Contract(ERC20ABI, tokenContracts[iToken]);

			const decimalsForToken: number = await contract.methods.decimals().call()
			const balanceOfTestToken: BigInt = await contract.methods.balanceOf(walletAddress).call()
		
			console.log(`- ${tokenContracts[iToken]}: ${humanNumber(new BigNumber(balanceOfTestToken.toString()), decimalsForToken)}`)
		}
		console.log('\n')
	}
}

const humanNumber = (number: BigNumber, decimals: number): number => {
	const divisor = new BigNumber(10).pow(decimals);
	const adjustedBalance = number.dividedBy(divisor);
	return adjustedBalance.toNumber()
}

main()