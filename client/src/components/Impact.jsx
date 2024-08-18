import React, { useState, useEffect } from 'react';
import { TextBox } from '../utils/TextBox';
import { Typography } from '@mui/material';
import {students} from '../data/students'
export default function Impact() {
    const [activeIndex, setActiveIndex] = useState(0);




    useEffect(() => {
        var len = 0
        if(window.innerWidth < 990){
            len = 8;
        }else{
            len = 6;
        }
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % len);
        }, 3000); // Adjust the time interval as needed

        return () => clearInterval(interval);
    }, [students.length]);

    return (
        <>
            <div className='relative mt-20 overflow-x-hidden lg:right-[80px] lg:left-[80px] lg:w-[calc(100vw-160px)] lg:h-[240px] md:h-[340px] w-[calc(100vw-40px)] h-[350px] gap-4 grid lg:grid-cols-3 grid-cols-1 left-5 right-5'>
                {
                    students.map((item, index) => (
                        <div
                            id={`item${index}`}
                            key={index}
                            style={{
                                transform: `translateX(${100 * (index - activeIndex)}%)`,
                                transition: 'transform 0.5s ease-in-out'
                            }}
                            className={`flex lg:flex-row flex-col mr-10 lg:w-[29.5vw] w-full pr-2 gap-5 items-center absolute`}
                        >
                            <div className="flex items-center">
                                <img
                                    className='object-contain rounded-[50%]'
                                    height={"150px"}
                                    width={"150px"}
                                    src={item.src}
                                    alt={item.name}
                                />
                            </div>
                            <TextBox className='font-[Lato] text-xl flex-1 flex flex-col justify-center items-center lg:items-start'>
                                <Typography variant='h6'>{item.name}</Typography>
                                <p className='text-[16px] text-center lg:text-start'>
                                    {item.about}
                                </p>
                            </TextBox>
                        </div>
                    ))
                }
            </div>
            <div className='cursor-pointer relative overflow-x-hidden right-[80px] left-[80px] w-[calc(100vw-160px)] h-[100px] flex gap-3 justify-center'>
                {
                    students.map((_, index) => (
                        <div
                        id={`i${index}`}
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-[10px] h-[10px] rounded-[50%] ${
                                index === activeIndex
                                    ? 'bg-[#152b8a] from-red-500 to-pink-500'
                                    : 'bg-gray-300'
                            }`}
                        />
                    ))
                }
            </div>
        </>
    );
}
