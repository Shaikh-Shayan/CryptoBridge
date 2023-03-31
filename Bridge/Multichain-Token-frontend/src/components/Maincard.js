import { CgArrowsExchangeAltV } from "react-icons/cg";
import { useState } from "react";
import Tocrypto from "./Tocrypto";
import web3 from "./web3";
// import Web3 from "web3";
const Maincard = ({ chain, setChain }) => {
  const [tranferValue, setTransferValue] = useState("");
  const [btntext, setbtntext] = useState("connect wallet");

  function transfer() {
    if (window.ethereum) {
      const address = "0x7A6f478dF480bAcd60f5F4450ea6eF702D9004b6";
      const abi = [
        {
          inputs: [
            {
              internalType: "contract IEcoswap",
              name: "_ecsMinter",
              type: "address",
            },
            {
              internalType: "contract IERC20",
              name: "_ecs",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "txId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "mintedTo",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "BridgeBurn",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "mintedTo",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "bridgeEco",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "txId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "mintedTo",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "BridgeMint",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "mintedTo",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "mintEco",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "mintedTo",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "mintEcoOrigin",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "ecs",
          outputs: [
            {
              internalType: "contract IERC20",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "ecsMinter",
          outputs: [
            {
              internalType: "contract IEcoswap",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "txcount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ];
      const contract = new web3.eth.Contract(abi, address);
      contract.methods.bridgeEco(
        "0xC4e3BF8DA4cc6DD2a8ACb773F7DB548064046BF6",
        tranferValue
      );
      // .call(function (err, res) {
      //   if (err) {
      //     console.log("An error occured", err);
      //     return;
      //   }
      //   console.log("The balance is: ", res);
      // });
    }
  }
  function connectWallet() {
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
        console.log(res);
        setbtntext(res);
        return res;
      });
    } else {
      alert("install metamask extension!!");
    }
  }

  //   useWeb3React();

  // async function connectWallet() {
  //   try {
  //     await activate(injected);
  //   } catch (ex) {
  //     console.log(ex);
  //   }
  // }

  // const connectWallet = async () => {
  //   // web3.eth.getAccounts((err, accounts) => {
  //   //   if (err) {
  //   //   } else if (accounts.length === 0) {
  //   //     swal({
  //   //       title: "Please Note",
  //   //       text: "Please login to MetaMask..!",
  //   //       icon: "warning",
  //   //       dangerMode: true,
  //   //     }).then((a) => {
  //   //       this.logout();
  //   //       window.location.reload();
  //   //     });
  //   //   }
  //   // });

  //   // Check if MetaMask is installed on user's browser
  //   if (window.ethereum) {
  //     const accounts = await window.ethereum.request({
  //       method: "eth_accounts",
  //     });
  //     const chainId = await window.ethereum.request({ method: "eth_chainId" });
  //     // Check if user is connected to Mainnet
  //     if (chainId != "0x1") {
  //       alert("Please connect to Mainnet");
  //     } else {
  //       let wallet = accounts[0];
  //       // setWalletAddress(wallet);
  //     }
  //   } else {
  //     alert("Please install Mask");
  //   }
  // };

  //   .getElementById("Connect-wallet")
  //   .addEventListener("click", (event) => {
  //     let account;
  //     let button = event.target;
  //     ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
  //       account = accounts[0];
  //       console.log(account);
  //       button.textContent = account;

  //       ethereum
  //         .request({
  //           method: "eth_getBalance",
  //           params: [account, "latest"],
  //         })
  //         .then((result) => {
  //           console.log(result);
  //           let wei = parseInt(result, 16);
  //           let balance = wei / 10 ** 18;
  //           console.log(balance + " ETH");
  //         });
  //     });
  //   });
  return (
    <div className="main-card-container">
      <div className="sec-container">
        <div className="heading">Bridge</div>
        <div className="from">
          <div className="target">
            <div className="target-cont">
              From:<span>{chain}</span>
            </div>
            <span className="currentinput">Value:{tranferValue}</span>
          </div>
          <input
            type="number"
            className="to-input"
            onChange={(event) => setTransferValue(event.target.value)}
            placeholder="Sending Amount"
          />
        </div>
        <div className="centerlogo">
          <CgArrowsExchangeAltV fontSize={60} />
        </div>
        <div className="to-section">
          <Tocrypto />
          <input
            type="number"
            className="to-input"
            onChange={(event) => setTransferValue(event.target.value)}
            placeholder="Recived Amount"
          />
        </div>
        <div>
          <button className="connect-wallet" onClick={transfer}>
            Transfer
          </button>
          <button
            className="connect-wallet mt-5"
            id="Connect-wallet"
            onClick={connectWallet}
          >
            {btntext}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Maincard;
