import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { Divider } from '@mui/material';
import logo from '../images/logo.svg';
import { motion } from 'framer-motion';
import { ArrowDropDown, ArrowDropUp, MailRounded } from '@mui/icons-material';

export default function Header() {
    const [fixed, setFixed] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    
    const handleScroll = () => {
        if (window.scrollY > 36) {
            setFixed(true);
        } else {
            setFixed(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Styled Link Component
    const StyledLink = styled.a`
        font-family: Hind, sans-serif;
        color: #0f0f0f;
        font-weight: 500;
        cursor: pointer;
        &:hover {
            color: #152b8a;
        }
    `;

    return (
        <>
            <nav>
                <section className={` bg-[#faf8fa] lg:px-10 py-2 lg:flex justify-between hidden gap-3`}>
                    <div className='flex items-center'>
                        <MailRounded style={{ fontSize: "20px" }} />
                        <p className='ml-3 text-[13px] font-sans'>Contact Us: Tel: +91 9897631812 | Email: guniyaleducent@gmail.com</p>
                    </div>
                    <div className='flex gap-3'>
                        <p className='ml-3 text-[13px] font-sans'>*Pan Card is mandatory for All Donations</p>
                        <a href="@" className="text-sm text-indigo-700">Visit Us</a>
                    </div>
                </section>
                <Divider />
                <section className={` transition-all duration-200  shadow-md w-full items-center lg:px-10 py-2 px-5 lg:flex hidden justify-between`}>
                    <div className="logo flex gap-1 items-center">
                        <img className='h-[90px] w-[90px]' src={logo} alt="Logo" />
                    </div>
                    <ul className='flex-1 pl-10 flex gap-4'>
                        <li><StyledLink>Home</StyledLink></li>
                        <li><StyledLink>About Us</StyledLink></li>
                        <li><StyledLink>Gallery</StyledLink></li>
                        <li><StyledLink>Impact</StyledLink></li>
                        <li><StyledLink>Donations</StyledLink></li>
                        <li className='relative' onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                            <StyledLink>Newsletters</StyledLink>
                            {dropdown ? <ArrowDropUp color='inherit' /> : <ArrowDropDown color='inherit' />}
                            {dropdown && (
                                <motion.div
                                    initial={{ opacity: 0, y: 2 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className='absolute left-0 w-[110px]'
                                >
                                    <ul className='flex flex-col gap-1 mt-12 px-1 bg-white'>
                                        <li className='text-[#242222] cursor-pointer transition-all ease-in-out duration-200 hover:text-[#1528ea]'>Last Year</li>
                                        <Divider />
                                        <li className='text-[#010101] cursor-pointer transition-all ease-in-out duration-200 hover:text-[#1528ea]'>First Year</li>
                                        <Divider />
                                        <li className='text-[#010101] cursor-pointer transition-all ease-in-out duration-200 hover:text-[#1528ea]'>Latest Year</li>
                                    </ul>
                                </motion.div>
                            )}
                        </li>
                    </ul>
                    <div className="flex">
                        <button className="bg-gradient-to-r h-8 donate-btn mb-4 flex items-center from-[#7c8fe6] to-[#152b8a] text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-101">
                            Donate Now
                        </button>
                    </div>
                </section>
            </nav>
        </>
    );
}
