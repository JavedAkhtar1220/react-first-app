import React from 'react';

import { AiOutlineShop } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { FiSettings } from 'react-icons/fi';

const Footer = () => {
    return (
        <div className='row bg-primary'>
            <div className="col align-items-center">
                <div className='text-center ft py-3'>
                    <FaHome color='white' fontSize={25} />
                    <p className='mb-0 text-white h6 mt-1'>Home</p>
                </div>
            </div>
            <div className="col">
                <div className='text-center ft py-3'>
                    <AiOutlineShop color='white' fontSize={25} />
                    <p className='mb-0 text-white h6 mt-1'>Marketplace</p>
                </div>
            </div>
            <div className="col">
                <div className='text-center ft py-3'>
                    <GoLocation color='white' fontSize={25} />
                    <p className='mb-0 text-white h6 mt-1'>Location</p>
                </div>
            </div>
            <div className="col">
                <div className='text-center ft py-3'>
                    <FiSettings color='white' fontSize={25} />
                    <p className='mb-0 text-white h6 mt-1'>Settings</p>
                </div>
            </div>
        </div>
    )
};

export default Footer;
