import '../App.css';
import NavbarBridge from './Navitem';
import Maincard from "./Maincard"
import {useState} from "react"
function Bridge() {

  const [chain, setChain] = useState(`Bsc`)
  return (
    <div className="gradient-bg-welcome">
        <NavbarBridge chain={chain} setChain={setChain} />
        <Maincard chain={chain}/>
    </div>
  );
}

export default Bridge;
