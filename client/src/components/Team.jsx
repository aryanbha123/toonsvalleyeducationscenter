import React, { useState, useEffect } from 'react';
import monika from '../assets/Monica.jpg';
import radhika from '../assets/Radhika.jpg';
import { TextBox } from '../utils/TextBox';
import { Typography } from '@mui/material';

export default function Staff() {
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        {
            img: monika,
            name: "Mrs. Monica Dangwal Kotal",
            data: "Monica Dangwal Kotal, based in Dehradun, Uttarakhand, has been working with Sunny's Amanat Guniyal Gaon Education Centre since 2013. With a BBA and MBA, she previously worked at Anand Rathi Financial Services but transitioned to education to support underprivileged children. Currently teaching middle classes, Monica is experienced in integrating technology into the classroom to enhance learning experiences."
        },
        {
            img: radhika,
            name: "Mrs. Radhika",
            data: "Radhika is a passionate teacher with 12 years of experience, holding a degree in mass communication. Born and raised in a remote village in Uttarakhand, she has a deep belief in the importance of education for those with limited opportunities. Radhika is dedicated to sharing her knowledge and experiences, and she has led various extracurricular activities, including dancing and singing, to enrich her students' lives."
        },
        {
            img: monika,
            name: "Mrs. Mona Bhagat",
            data: "Mrs. Mona Bhagat is a dedicated educator with a strong passion for teaching underprivileged children. She effectively balances her teaching responsibilities with her role as Secretary to the Administrator and Trustee at Sunny’s Amanat, managing the computer division, school budget, and attendance records. She holds multiple certifications, including an NTT and a diploma in Advanced Office Management, and  computer education across all grades since joining in 2018."
        },
    ];


    useEffect(() => {
        var len = items.length;
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % len);
        }, 3000); // Adjust the time interval as needed

        return () => clearInterval(interval);
    }, [items.length]);

    return (
        <>
            <div className='relative overflow-x-hidden  lg:w-[calc(100vw-160px)] lg:h-[240px] md:h-[440px] w-[calc(100vw-40px)] h-[530px] gap-4 grid lg:grid-cols-3 grid-cols-1'>
                {
                    items.map((item, index) => (
                        <div
                            id={`item${index}`}
                            key={index}
                            style={{
                                transform: `translateX(${100 * (index - activeIndex)}%)`,
                                transition: 'transform 0.5s ease-in-out'
                            }}
                            className={`flex lg:flex-row flex-col w-[100%] pr-2 gap-5 items-center absolute`}
                        >
                            <div className="flex items-center">
                                <img
                                    className='object-contain rounded-[50%]'
                                    height={"180px"}
                                    width={"180px"}
                                    src={item.img}
                                    alt={item.name}
                                />
                            </div>
                            <TextBox className='font-[Lato] text-xl flex-1 gap-3 flex flex-col justify-center items-center lg:items-start'>
                                <Typography variant='h6' className='font-[Lato]'>{item.name}</Typography>
                                <p className='text-[16px] text-center lg:text-start'>
                                    {item.data}
                                </p>
                            </TextBox>
                        </div>
                    ))
                }
            </div>
            <div className='cursor-pointer relative overflow-x-hidden right-[80px] left-0 w-full h-[100px] flex gap-3 justify-center'>
                {
                    items.map((_, index) => (
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
