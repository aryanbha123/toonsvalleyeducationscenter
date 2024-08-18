import React from 'react'
import Outing from '../components/Outing'
import Carousel from '../components/Carousel'
import Impact from '../components/Impact'
import Title from '../utils/Title'

export default function Home() {
  return (
    <>
      <Carousel />
      <Outing />
      <Title head={"Our Impact"} subhead={"Empowering the next generation through education and support."}  />
      <Impact/>
    </>
  )
}
