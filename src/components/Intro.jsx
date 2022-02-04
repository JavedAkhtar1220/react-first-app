import React from 'react';

import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';

import imgRS from '../assets/hero.svg';

const Intro = () => {
    return (
        <div className="container py-5">
            <div className="row my-5 align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 order-lg-1 order-md-1 order-sm-2 order-2 mt-lg-0 mt-md-0 mt-sm-5 mt-5">
                    <h2>NEW COMPANY</h2>
                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ex accusantium minus, impedit beatae vitae reiciendis sint, nihil numquam animi similique eos delectus nemo possimus, dolores repellendus accusamus esse? Voluptatem?</p>
                    <div className='mt-4'>
                        <p className='fw-bold'>JOIN US</p>

                        <div>
                            <button className='social-btn'>
                                <BsFacebook />
                            </button>
                            <button className='social-btn'>
                                <BsTwitter />
                            </button>
                            <button className='social-btn'>
                                <BsInstagram />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 order-lg-2 order-md-2 order-sm-1 order-1">
                    <img src={imgRS} className='img-fluid' alt="intro" />
                </div>
            </div>
        </div>
    )
};

export default Intro;
