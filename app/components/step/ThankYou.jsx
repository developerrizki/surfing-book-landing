import React from 'react'
import {Bodoni_Moda} from 'next/font/google'

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  style: 'normal',
  weights: 400
})

const ThankYou = () => {
  return (
    <div className='form-section'>
    <h2 className={`${bodoniModa.className} form-title`}>Thank you, Rizki Fauzi</h2>
    <div className='form-description'>You're In!</div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-5">
        <span>Your store visit is booked and you're ready to ride the shopping wave. Here’s your detail:</span>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-[40px]">
        <div className='w-1/2'>
          <label htmlFor="name" className='label-custom'>Name:</label> <br />
          <span>Rizki Fauzi</span>
        </div>
        <div className='w-1/2'>
          <label htmlFor="country" className='label-custom'>Country:</label> <br />
          <span>Germany</span>
        </div>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-5">
        <div className='w-1/2'>
          <label htmlFor="email" className='label-custom'>Email:</label> <br />
          <span>rizkifauzi37@gmail.com</span>
        </div>
        <div className='w-1/2'>
          <label htmlFor="visit_date" className='label-custom'>Visit date:</label> <br />
          <span>23/05/2024</span>
        </div>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-[50px]">
        <span>We look forward to seeing you at the #Swellmatch store! Your booking details already sent to your email and whatsapp</span>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-[50px]">
        <label className='label-custom text-[12px]'>This form will refresh automatically in 10 seconds</label>
      </div>
    </div>
  )
}

export default ThankYou