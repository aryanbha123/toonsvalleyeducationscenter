import React, { useState, useEffect } from 'react';
import monika from '../assets/Monica.jpg';
import radhika from '../assets/Radhika.jpg';
import mona from '../assets/Mona.jpg';
import { TextBox } from '../utils/TextBox';

export default function Staff() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false); // Track hover state

    const items = [
        {
            img: mona,
            name: "Miss Mona Bhagat",
            subhead: "Secretary",
            data: "Mona Bhagat is a passionate educator dedicated to teaching underprivileged children. Along with her teaching role, she serves as Secretary to the Administrator and Trustee, overseeing the computer division, school budget, and attendance. Mona holds an NTT certification from Make Me Teacher, a degree from HNB Garhwal University, an N.C.C. certification, a Diploma in Office and Change Management from IGNOU, and certificates in Tally and Entrepreneurship Development from NIESBUD. She joined Sunny’s Amanat in 2018, teaching computers to all classes. Her hobbies include photography, art, and adventure sports."
        },
        {
            img: radhika,
            name: "Mrs. Radhika",
            data: "Mrs. Radhika is a passionate teacher with 12 years of experience, holding a degree in mass communication. Born and raised in a remote village in Uttarakhand, she has a deep belief in the importance of education for those with limited opportunities. Mrs. Radhika is dedicated to sharing her knowledge and experiences, and she has led various extracurricular activities, including dancing and singing, to enrich her students' lives."
        },
        {
            img: monika,
            name: "Mrs. Monica Dangwal Kotal",
            data: "Monica Dangwal Kotal, based in Dehradun, Uttarakhand, has been working with Sunny's Amanat Guniyal Gaon Education Centre since 2013. With a BBA and MBA, she previously worked at Anand Rathi Financial Services but transitioned to education to support underprivileged children. Currently teaching middle classes, Monica is experienced in integrating technology into the classroom to enhance learning experiences."
        }
    ];

    useEffect(() => {
        let interval;
        if (!isHovered) {
            interval = setInterval(() => {
                setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
            }, 3000);
        }

        return () => clearInterval(interval);
    }, [isHovered, items.length]);

    return (
        <>
            <div
                className='relative overflow-x-hidden lg:w-[calc(100vw-160px)] lg:h-[240px] md:h-[440px] w-[calc(100vw-40px)] h-[530px] gap-4 grid lg:grid-cols-3 grid-cols-1'
                onMouseEnter={() => setIsHovered(true)} // Pause on hover
                onMouseLeave={() => setIsHovered(false)} // Resume when hover ends
            >
                {items.map((item, index) => (
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
                            <div className="flex flex-col justify-center items-start">
                                <span variant='h6' className='font-[Lato] text-bold'>{item.name}</span>
                                {item.subhead && <span className='m-0'>{item.subhead}</span>}
                            </div>
                            <p className='text-[16px] text-center lg:text-start'>
                                {item.data}
                            </p>
                        </TextBox>
                    </div>
                ))}
            </div>
            <div className='cursor-pointer relative overflow-x-hidden right-[80px] left-0 w-full h-[100px] flex gap-3 justify-center'>
                {items.map((_, index) => (
                    <div
                        id={`i${index}`}
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-[10px] h-[10px] rounded-[50%] ${index === activeIndex
                            ? 'bg-[#152b8a] from-red-500 to-pink-500'
                            : 'bg-gray-300'
                            }`}
                    />
                ))}
            </div>
        </>
    );
}
