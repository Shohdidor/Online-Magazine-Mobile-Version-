import React, { useEffect } from 'react'

// AOS 
import AOS from 'aos';
import 'aos/dist/aos.css';


// VIDEO 
import TEAM from "/src/assets/video/Office Video _ People Working As A Team _ Group Meeting _ Business _ Free Stock Footage.mp4"


// IMG 
import TEAMSTYLE from "/src/assets/images/TEAM STILL.jpg"
import Colego from "/src/assets/images/Colego.jpg"
import BusinessMan from "/src/assets/images/Busines Man.jpg"
import AfroGirl from "/src/assets/images/Afro Girl.jpg"


function About() {
 
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <> 
    <div className='overflow-hidden'>

    <h1 className='pl-[62px] dark:text-white font-semibold py-[30px] md:text-[50px] mb2:text-[45px] text-[40px]'>
      About Us 
    </h1>
    <div data-aos="zoom-in" className='flex gap-[20px] px-[10px]'>
     <span className='text-[13px] dark:text-white mb2:text-[15px] lg:text-[35px] lg:ml-[40px] lg:w-[350px] md:text-[25px] md:w-[400px] md:px-[10px]'>
     Our Team Press 
      </span>
      
      <div className='lg:w-[750px]'>
      <p className='pb-[25px] text-[13px] text-gray-500 dark:font-bold md:text-[20px] dark:text-black mb2:text-[16px]'>
      Teamwork is the synergy of individual talents, efforts, and ideas towards a common goal. It's like a well-oiled machine where each part plays a crucial role in driving success. A team isn't just a collection of people; it's a cohesive unit where members support, motivate, and challenge each other to achieve greatness.
      </p>
      <p className='text-[13px] pb-[30px] text-gray-500 mb2:text-[16px] dark:font-bold md:text-[20px] dark:text-black'>
      In a team, diversity isn't just welcomed; it's celebrated. Different backgrounds, perspectives, and skill sets enrich the collective wisdom of the group, enabling it to tackle complex problems from multiple angles. When individuals come together, each bringing their unique strengths to the table, the possibilities become endless.
      </p>
      </div>

    </div>

    <video src={TEAM} autoPlay muted className='lg:flex lg:pl-[55px]'></video>


<div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" className='flex items-center lg:ml-[250px] px-[10px] py-[80px] md:gap-[75px] md:px-[20px]'>

    <h1 className='font-medium mb2:text-[25px] md:text-[30px] md:w-[500px]'>
      <span className='font-extrabold'>
      «
      </span>  Our work does make sense only if it a faithful witness of his time  <span className='font-extrabold'>
        »
      </span>
    </h1>

    <img src={TEAMSTYLE} alt="Team Style"  className='w-[220px] md:w-[300px]'/>
</div>


    <div>
      <div className='grid grid-cols-2 gap-[25px] px-[15px] md:w-[700px] lg:px-[10px]'>
      <img data-aos="fade-right" src={BusinessMan} alt="Coleg" />
      <img data-aos="fade-left" src={AfroGirl} alt="Coleg" className='pt-[170px]' />
      <img data-aos="fade-right" src={Colego} alt="Coleg" className='mt-[-70px]' />
      </div>

      <div  data-aos="zoom-in-up" className='md:pl-[350px] md:mt-[-300px] lg:pl-[800px] lg:mt-[-770px] lg:pb-[300px] md:pb-[50px]'>
        <h1 className='dark:text-white lg:text-[70px] md:text-center md:text-[50px] md:w-[555px] font-semibold text-center mb2:text-[45px] text-[40px] py-[25px]'>
          THE TEAM 
        </h1>
        <div className='px-[15px] md:w-[550px] md:text-center'>
        <p className='pb-[25px] lg:text-[20px] lg:text-left mb2:text-[15px] text-[13px] md:text-[17px] text-gray-500 dark:font-bold dark:text-black'>
      Teamwork is the synergy of individual talents, efforts, and ideas towards a common goal. It's like a well-oiled machine where each part plays a crucial role in driving success. A team isn't just a collection of people; it's a cohesive unit where members support, motivate, and challenge each other to achieve greatness.
      </p>
      <p className='text-[13px] lg:text-left lg:text-[20px] pb-[30px] mb2:text-[15px] md:text-[17px] text-gray-500 dark:font-bold dark:text-black'>
      In a team, diversity isn't just welcomed; it's celebrated. Different backgrounds, perspectives, and skill sets enrich the collective wisdom of the group, enabling it to tackle complex problems from multiple angles. When individuals come together, each bringing their unique strengths to the table, the possibilities become endless.
      </p>
     
        </div>
      </div>

    </div>

    </div>
    </>
  )
}

export default About