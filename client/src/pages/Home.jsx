import React from 'react'
import Outing from '../components/Outing'
import Carousel from '../components/Carousel'
import Impact from '../components/Impact'
import Title from '../utils/Title'
import { TextBox } from '../utils/TextBox'
import { ArrowRight } from '@mui/icons-material'
import Hero from '../components/Hero'
export default function Home() {
  return (
    <>
      <Hero />
      <Carousel />
      <TextBox className='lg:px-20 px-4 py-20'>
        <p className='mb-4'>
          The Tons Valley Education Trust, also krewn as <b>Sunny's Amanat</b>, was founded in 2006 by Mr. Sunny Singh. Its primary objective is the upliftment of the girl child by providing assistance in computer literacy and English language to underprivileged children in the area. Since his passing in 2012, his son, Mr. Aditya Singh, has been carrying forward this vision with enthusiastic sincerity
        </p>
        <p className='mb-4 lg:block hidden'>

          The Trust provides stationery, school bags, umbrellas in the monsoon; thermals, socks and woolens in winter. It has an enviable library of books and a full- fledged computer lab
        </p>
        <a href='about/toons-trust' className='bg-clip-text bg-[#152b8a] text-transparent from-pink-500 to-red-500'>
          read more {">"}<ArrowRight color='#000' />
        </a>
      </TextBox>
      <Outing />
      <Impact className="bg-[#f1f1f1]" />
    </>
  )
}
