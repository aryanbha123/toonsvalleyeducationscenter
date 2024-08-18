import React from 'react';
import Outing1 from '../assets/IMG-20231223-WA0034.jpg'; // Replace with actual image paths
import Outing2 from '../assets/IMG-20190417-WA0032.jpg'; // Replace with actual image paths
// import Outing2 from '../assets/IMG-20190417-WA0032.jpg'; // Replace with actual image paths

export default function Outing() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-5 lg:px-6">
                <div className="font-light text-[#111] sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Empowering Young Minds Through Education
                    </h2>
                    <p className="mb-4">
                        At Tons Valley Education Trust Unit Guniyal Gaon Girls Education Center, we are dedicated to providing quality education and fostering the holistic development of young girls in our community. Our commitment goes beyond academics; we nurture future leaders, innovators, and change-makers.
                    </p>
                    <p>
                        Through our initiatives, we create opportunities for girls to explore their potential, learn essential life skills, and gain the confidence to achieve their dreams. Join us in our mission to empower the next generation.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img className="w-full rounded-lg" src={Outing1} alt="Students during an outing 1" />
                    <img className="mt-4 w-full lg:mt-10 rounded-lg" src={Outing2} alt="Students during an outing 2" />
                </div>
            </div>
        </section>
    );
}
