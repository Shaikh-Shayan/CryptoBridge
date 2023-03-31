import React from 'react'
import Navitem from './Navitem'


const NavbarBridge = ({chain, setChain}) => {
    return (
        <div className='navbar'>
            <Navitem chain ={chain} setChain={setChain}/>
                  
        </div>
    )
}

export default NavbarBridge