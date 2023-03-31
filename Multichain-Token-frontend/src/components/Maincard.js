import { CgArrowsExchangeAltV } from "react-icons/cg";
import { useState } from "react";
import Tocrypto from "./Tocrypto";
import RevToken from "../data/RevToken.json";
//import web3 from "./web3";
import Web3 from "web3";
const Maincard = ({ chain, setChain }) => {
  const [tranferValue, setTransferValue] = useState("");
  const [btntext, setbtntext] = useState("connect wallet");
  const [currentAccount, setCurrentAccount] = useState("");

  const web3 = new Web3(window.ethereum);

  async function bridgeTransfer() {
    const contract = new web3.eth.Contract(RevToken.abi, RevToken.address);

    contract.methods
      .transfer("0xb745184ee30aa3852247FFd60746084651b43FC3", tranferValue)
      .send({ from: currentAccount })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function connectWallet() {
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
        setCurrentAccount(res[0]);
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
          <button className="connect-wallet" onClick={bridgeTransfer}>
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
