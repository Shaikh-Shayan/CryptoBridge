import React from 'react'
import Modal from './Modal'

const Footer = () => {
    return (
        <div className='w-full bg-black text-xs md:text-base text-white h-[10vh] flex justify-center items-center' >
            @ LAND OF REALM 2022. ALL RIGHTS RESERVED
            <Modal text={"connected"}/>
        </div>
    )
}

export default Footer
