"use client";
import ImageBook from '@/public/image.png'
import Image from 'next/image'
import React from 'react'
import IdVerification from './step/IdVerification';
import SurfingExperience from './step/SurfingExperience';
import ThankYou from './step/ThankYou';
import VisitorDetail from './step/VisitorDetail'

const Hero = (param) => {
  console.log(param.step);
  return (
    <div className="absolute w-[100%] h-[100%] top-0 py-[150px] bg-[url('/hero.png')] bg-cover bg-repeat-x">
      <div className="container mx-auto px-[100px]">
         <div className='flex'>
            <Image src={ImageBook} alt="image-book" height={583}/>
            {param.step === 1 && <VisitorDetail/>}
            {param.step === 2 && <SurfingExperience/>}
            {param.step === 3 && <IdVerification/>}
            {param.step === 4 && <ThankYou/>}
         </div>
      </div>
    </div>
  )
}

export default Hero