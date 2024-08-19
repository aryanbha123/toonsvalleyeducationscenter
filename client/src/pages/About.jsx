import Breadcrumbs from '../utils/Breadcrumb';
import React from 'react'
import { TextBox } from '../utils/TextBox';
import sunny from '../assets/Sunny.jpg'
import Title from '../utils/Title';
import Slider from '../components/Slider';
import slide1 from '../assets/IMG_20210213_215905.jpg';
import slide2 from '../assets/IMG-20220925-WA0013 (1).jpg';
import slide3 from '../assets/IMG-20190424-WA0005.jpg';
import i1 from '../assets/1.png';
import i2 from '../assets/2.png';
import i3 from '../assets/3.png';
import i4 from '../assets/4.png';
import i5 from '../assets/5.png';
import Hero from '../components/Hero';
import Team from '../components/Team';
export default function About() {

  const data = [{
    src: slide1
  },
  {
    src: slide2
  },
  {
    src: slide3
  }]
  return (
    <>
      <Breadcrumbs items={[{ label: 'About-Us' }]} />

      {/* Sunny Sir Section */}
      <div className='mt-7 px-4 lg:px-20  lg:pb-20 md:pb-20 pb-10 pt-3 flex flex-col gap-3'>
        <Title head={"Late Sunny Singh"} subhead={"Our Visionary Leader"} />
        <TextBox className='text-start'>

          <div className="flex lg:flex-row flex-col gap-4">
            <img src={sunny} className='lg:w-[400px] w-full' alt="" />
            <div className="">

              <p className='mb-4 text-start'>In the year 2006 when <b>Mr. Sunny Singh</b> started a little one room school in Guniyal Gaon. His sole aim was the Upliftment of the girl child. He established a trust and called it THE TONS VALLEY EDUCATION TRUST. The Trust in turn ran and funded the school that began imparting computer Education and teaching English to all the underprivileged children in the area.
              </p>
              <p className='mb-4 text-start'>
                Today as we stand on the threshold of yet another year, we look back at all the years gone by with pride and a sense of accomplishment. His vision and his dream has not lost momentum and we carry forth his legacy to the best of our ability.
              </p>

              <p className='text-start mb-4'>
                We would like to pay an affectionate and grateful tribute to that wonderful, kindhearted Gentleman who devoted his life for these girls and their betterment
              </p>
              <p className='text-start mb-4'>
                The Tons Valley Education Trust, also krewn as Sunny's Amanat, was founded in 2006 by Mr. Sunny Singh. Its primary objective is the upliftment of the girl child by providing assistance in computer literacy and English language to underprivileged children in the area. Since his passing in 2012, his son, Mr. Aditya Singh, has been carrying forward this vision with enthusiastic sincerity
              </p>
              <p className='text-start mb-4'>
                The Trust provides stationery, school bags, umbrellas in the monsoon; thermals, socks and woolens in winter. It has an enviable library of books and a full- fledged computer lab.
              </p>
            </div>
          </div>
        </TextBox>
      </div >

      <Slider slides={data} />

      {/* Mission & Vission */}
      <section className='lg:px-20 px-5 mt-10'>
        <Title head={"Our Aim"} subhead={"Moving forward with our commitment to excellence"} />
      </section>
      <section className='lg:flex hidden gap-3 py-10 lg:px-20 px-5 md:flex-row flex-col justify-between' >
        <img className='h-[200px] w-[200px]' src={i1} alt="" />
        <img className='h-[200px] w-[200px]' src={i2} alt="" />
        <img className='h-[200px] w-[200px]' src={i3} alt="" />
        <img className='h-[200px] w-[200px]' src={i4} alt="" />
        <img className='h-[200px] w-[200px]' src={i5} alt="" />
      </section>
      <section className='lg:hidden flex gap-3 items-center py-10 lg:px-20 px-5 md:flex-row flex-col justify-between' >
        <div className="flex justify-around">
          <img className='h-[] w-[40%]' src={i1} alt="" />
          <img className='h-[] w-[40%]' src={i2} alt="" />
        </div>
        <img className='h-[] w-[40%]' src={i3} alt="" />
        <div className="flex justify-around">
          <img className='h-[] w-[40%]' src={i4} alt="" />
          <img className='h-[] w-[40%]' src={i5} alt="" />
        </div>
      </section>
      <div className='px-5 lg:px-20'>
        <Title head={"Our Teachers"} subhead={"Guiding the Future with Knowledge and Compassion"} />
      </div>
      <div className='lg:px-20 px-5 mt-10' >
        <Team />
      </div>


    </>
  )
}
