import React from 'react'
import Breadcrumb from '../utils/Breadcrumb'
import { TextBox } from '../utils/TextBox'

export default function Donations() {
  return (
    <>
      <Breadcrumb items={[{ label: "Donation" }, { label: "Make A Change" }]} />
      <TextBox className='lg:px-20 px-5'>
        <h3 className='text-center text-3xl font-bold my-10' >Your support is crucial in ensuring education for all!</h3>
        <p className='my-4 text-start'>
          Childhood is said to be the best part of human life – an age where we are carefree, safe and happy. But a happy childhood is not the reality for many children, who are out-of-school. There are many reasons for children to drop out of school – from challenging socio-economic circumstances, to lack of awareness in communities where education is not seen as a priority.
        </p>
        <p className='text-start my-10'>
          Going to school not only ensures a dignified future and a happy present for children, but also gives them a safe space to express themselves, learn, share and grow. Children who drop out often have to work as child labour, are pushed into child marriages, or become victims of child trafficking.</p>
        <p className='my-10 text-start'>
         Toons Vally Trust has been helping children from difficult circumstances continue their education, with the hope of a brighter future and better life. At present, we are directly providing education to over 120,000 children in 27 states of India.
        </p>
        <a href="#" className='mb-36 bg-gradient-to-r from-slate-200 to-slate-400 px-4 py-2 rounded-xl'>Donate Now</a>
      </TextBox>
      <section>
        
      </section>
    </>
  )
}
