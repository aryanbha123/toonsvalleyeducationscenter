import Breadcrumbs from '../utils/Breadcrumb';
import React from 'react'
import { TextBox } from '../utils/TextBox';
import sunny from '../assets/Sunny.jpg'
import Title from '../utils/Title';
import Slider from '../components/Slider';
import slide1 from '../assets/IMG_20210213_215905.jpg';
import slide2 from '../assets/IMG-20240824-WA0000.jpg';
import slide3 from '../assets/IMG-20190424-WA0005.jpg';
import slide4 from '../assets/IMG-20240823-WA0009.jpg';
import i1 from '../assets/1.png';
import aditya from '../assets/aditya.jpg';
import i2 from '../assets/2.png';
import i3 from '../assets/3.png';
import i4 from '../assets/4.png';
import i5 from '../assets/5.png';
import Hero from '../components/Hero';
import Zarine from '../assets/zarine.jpg'
import Team from '../components/Team';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
export default function About() {

  const data = [{
    src: slide1
  },
  {
    src: slide2
  },
  {
    src: slide3
  },
  {
    src: slide4
  }]
  return (
    <>
      <Breadcrumbs items={[{ label: 'About-Us' }]} />

      {/* Sunny Sir Section */}
      <div className='mt-7 px-4 lg:px-20  lg:pb-20 md:pb-20 pb-10 pt-3 flex flex-col gap-3'>
        <Title head={"Late Sunny Singh"} subhead={"Our Visionary Leader"} />
        <TextBox className='text-start'>

          <div className="flex lg:flex-row flex-col gap-4">
            <div className='w-[93vw]' >
              <img src={sunny} className='lg:w-[400px] lg:h-[400px] w-full' alt="" />
            </div>
            <div className="">

              <p className='mb-4 text-start' >
                Surendra Nath Singh was an alumnus of the prestigious Doon School in Dehradun and completed his education from Delhi University. A few years later, he retired as an executive in the GENERAL ELECTRIC COMAPANY based in Calcutta.
                Surendra Nath Singh was an alumnus of the prestigious Doon School in Dehradun and completed his education at Delhi University. A few years after he retired as an executive at the GENERAL ELECTRIC COMPANY based in Calcutta.
              </p>
              <p className='mb-4 text-start'>
                Sunny was a “DOSCO” who had returned to his ‘roots’; having bought a small piece of land at a very scenic spot and built there a lovely cottage, then he started hunting for shrubs, plants, vines, and creepers for his garden, traveling as far as Thailand to add to his collection. The Cottage and the little garden could have been straight out of any English countryside Home and Garden magazine.

              </p>
              <p className='mb-4 text-start'>
                Any other person would have sat back and savored the peace and tranquility of the scenic surroundings, read books, listened to music, watched TV, or like old faujis, pottered around the garden and muttered around the house. But the life of a Lotus Eater was not for Sunny Singh; he realized it was “PAY BACK TIME TO SOCIETY.”

              </p>



            </div>
          </div>

          <div></div>

          <Accordion sx={{
            boxShadow: "none",
            marginTop:"1rem"
          }}>
            <AccordionSummary id="panel-header" aria-controls="panel-content" >
              <TextBox>

                <span className='text-center text-indigo-700'>
                  Read More ...
                </span>
              </TextBox>
            </AccordionSummary>
            <AccordionDetails>
              <p className='text-start mb-4'>

                After much deliberation and consultations with friends, he decided to set up a school to educate the ‘Girl Child.’ Sunny went around to all the village homes selling his idea to the doubtful and reluctant villagers.
                So In the year 2006 Mr. Sunny Singh started a little one room school in Guniyal Gaon. His sole aim was the Upliftment of the girl child. He established a trust and called it THE TONS VALLEY EDUCATION TRUST. The Trust in turn ran and funded the school that began imparting computer Education and teaching English to all the underprivileged children in the area

                After much deliberation and consultations with friends, he decided to set up a school to educate the ‘Girl Child.’ Sunny went around to all the village homes selling his idea to the doubtful and reluctant villagers.
              </p>
              <p className='text-start my-4'>
                The trust that he founded has grown in dimension and direction under the patronage of his wife Pomma Singh and son Aditya Singh.
              </p>
              <p className='text-start my-4'>
                Today as we stand on the threshold of yet another year, we look back at all the years gone by with pride and a sense of accomplishment. His vision and his dream has not lost momentum and we carry forth his legacy to the best of our ability.
              </p>
              <p className='text-start my-4'>
                Next, Sunny requisitioned a room from the local Gram Sabha Pradhan and, with a few chairs and tables, he set about putting his ideas into practice. Six little girls joined the school. Undaunted, Sunny hired a teacher for them. By the end of the year, the numbers had swelled as the good reputation of this kind gentleman spread. So, with a few bumps and many a hiccup, the school slowly established itself, and everyone knew it as Sunny Sir’s school in Guniyal Gaon.
              </p>
              <p className='text-start my-4'>
                So In the year 2006 Mr. Sunny Singh started a little one room school in Guniyal Gaon. His sole aim was the Upliftment of the girl child. He established a trust and called it THE TONS VALLEY EDUCATION TRUST. The Trust in turn ran and funded the school that began imparting computer Education and teaching English to all the underprivileged children in the area.
              </p>

              <p className='mb-4 text-start'>
                A Trust was accordingly formed to run the school; it took over the task of providing scholarships for college girls and paid for their tuition fees, books, clothes, shoes, bags, and other miscellaneous expenses. Sunny then let friends and family know what he was doing, and soon the old Dosco friends and others from his Calcutta and Delhi days, well-wishers, and generous people from Doon began to send donations in cash and kind (gifts) in the form of blankets and tracksuits in winter, shoes and school bags in summer, and umbrellas in the Monsoon that were thankfully accepted. No gift was too small; everything was received with gratitude.
              </p>
              <p className='mb-4 text-start'>
                Large quantities of old clothes, bags, and shoes began pouring in. Soon, one could see the village lass in Gucci shoes, carrying a Ferragamo bag, and wearing a Christina blouse with as much aplomb as her city counterpart. Friends also helped to sponsor girls through college. Sunny personally shopped for them when he went on his holidays overseas and brought back wristwatches, smart handbags, salwar suits, shoes, jeans, etc. The college girls looked so smart that they could have come from LSR in Delhi or Sophia in Bombay, and they did him proud by passing their examinations with good grades.
              </p>
              {/* <p className='mb-4 text-start'>
                Computer training was the next thing on the cards. Mr. Alok Tandon of NIIT graciously gave assistance and guidance, and soon we had Deepika learning computer skills which she began to impart to the college girls.
              </p> */}
              <p className='mb-4 text-start'>
                By December 2012, the school began to prominently figure in the local Hindi and English newspapers and attracted more supporters from amongst the Doonites. Sunny, then in his khadi kurta pajamas and Woodland shoes and his long flowing silver beard, was a familiar sight in the city, his car full of village girls being taken for special ‘treats’ to McDonald's, KFC, Pizza Hut, ice creams, and Elloras.
              </p>
              <p className='mb-4 text-start'>
                Twice a year, the children were taken out on picnics, meticulously planned from what bus to charter and right through the food they were to partake in! Sunny accompanied them on every trip, taking them to Paonta Sahib, Rishikesh, Haridwar, Mussoorie, Chandigarh, etc. His friends and well-wishers sponsored all those trips, and Sunny gave the girls money from his own pocket for shopping on these excursions.

                Pressure cookers were gifted to the mothers of the girls, while the mothers of the college-going girls were presented with food processors. It was then that Sunny decided that the families of these collegiate girls too should be financially assisted in getting them married. Despite reproachment and unsolicited advice from friends, he gave them small trousseaus and a trunk full of utilities for the house and kitchen. However, none of this sidetracked him from his original vision of educating and uplifting the girl child.
                Sunny Singh passed in the winter of 2012.
              </p>
              <p className='mb-4 text-start'>
                Sunny Singh passed in the winter of 2012. The trust that he founded has grown in dimension and direction under the patronage of his wife Pomma Singh and son Aditya Singh.
              </p>

              <p className='mb-4 text-start'>
                Today as we stand on the threshold of yet another year, we look back at all the years gone by with pride and a sense of accomplishment. His vision and his dream has not lost momentum and we carry forth his legacy to the best of our ability.
              </p>
            </AccordionDetails>
          </Accordion>
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
      <div className='lg:px-20 px-5'>
        <Title head={"Mrs Zarine Bath"} subhead={"Our Visionary Leader "} />

        <TextBox className='text-start my-8'>

          <div className="flex lg:flex-row flex-col gap-4">

            <div className="">
              <p className='text-start'>
                Mrs. Zarina Bath is a remarkable woman whose journey began with a strong educational foundation at Good Shepherd's Convent in Bangalore. She made significant contributions to the Army Wives Welfare Association, including setting up vocational training centers and ensuring early pension disbursement for war widows. Her passion for the environment is evident in her efforts to protect trees, preserve rivers, and care for abandoned cows. As an entrepreneur, she runs a successful cottage industry and empowers village women. Mrs. Bath also created the BILLZAR platform, supporting grassroots women entrepreneurs. Her legacy continues as she proudly carries forward her late husband's vision, leaving an indelible mark on all who know her.
              </p>
            </div>
            <img src={Zarine} className='lg:w-[250px] rounded w-full' alt="" />
          </div>
        </TextBox>
      </div>

      <div className='lg:px-20 px-5'>
        <Title head={"Mr. Aditya Singh"} subhead={"Trustee"} />

        <TextBox className='text-start my-8'>

          <div className="flex lg:flex-row flex-col gap-4">

            <div className="">
              <p className='text-start'>
              Aditya Singh, trustee of the Tons Valley Education Trust, brings extensive leadership experience in corporate banking and finance. A graduate of St. Xavier’s College, Kolkata, and an MBA from the International Management Institute, New Delhi, he actively supports education for underprivileged girls in Uttarakhand, contributing to the growth and success of the trust. His commitment to promoting quality education and holistic development reflects his passion for empowering the next generation and making a lasting impact in the community.
              </p>
            </div>
            <img src={aditya} className='lg:w-[250px] rounded w-full' alt="" />
          </div>
        </TextBox>
      </div>


    </>
  )
}
