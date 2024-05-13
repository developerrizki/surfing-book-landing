import React from 'react'
import {Bodoni_Moda} from 'next/font/google'
import {DateInput, Select, SelectItem, Slider, Button} from "@nextui-org/react"
import {boards, markSliders} from '@/app/data'

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  style: 'normal',
  weights: 400
})

const SurfingExperience = () => {
  return (
    <div className='form-section'>
      <h2 className={`${bodoniModa.className} form-title`}>Book Your Visit</h2>
      <div className='form-description'>2/3: SURFING EXPERIENCES</div>
      <div className="flex w-full flex-wrap md:flex-nowrap mt-[50px]">
        <Slider
          label='Your Surfing Experience'
          color="foreground"
          size="sm"
          step={1}
          maxValue={10}
          minValue={0}
          defaultValue={0}
          className="max-w-md"
          marks={markSliders}
        />
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-5">
        <DateInput 
          label={"Visit date"}
          radius='none'
        />
        <Select label="Your desired board" radius='none' items={boards}>
          {(board) => <SelectItem key={board.value} radius='none'>{board.label}</SelectItem>}
        </Select>
      </div>
      <div className='mt-[50px]'>
        <a href='/id-verification' className='btn-custom'>Next</a>
      </div>
    </div>
  )
}

export default SurfingExperience