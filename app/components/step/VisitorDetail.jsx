import React from 'react'
import {Bodoni_Moda} from 'next/font/google'
import {Input, Select, SelectItem} from "@nextui-org/react";
import {countries} from '@/app/data'

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  style: 'normal',
  weights: 400
})

const VisitorDetail = () => {
  return (
    <div className='form-section'>
      <h2 className={`${bodoniModa.className} form-title`}>Book Your Visit</h2>
      <div className='form-description'>1/3: VISITOR DETAILS</div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-[50px]">
        <Input type="text" label="Name" radius='none'/>
        <Select label="Country" radius='none' items={countries}>
          {(country) => <SelectItem key={country.value} radius='none'>{country.label}</SelectItem>}
        </Select>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-[35px]">
        <Input type="email" label="Email" radius='none'/>
        <Input type="text" label="Whatsapp number" radius='none'/>
      </div>
      <div className='mt-[50px]'>
        <a href='/surfing-experience' className='btn-custom'>Next</a>
      </div>
    </div>
  )
}

export default VisitorDetail