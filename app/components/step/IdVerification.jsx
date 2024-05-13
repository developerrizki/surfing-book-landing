import React from 'react'
import Dropzone from 'react-dropzone'
import {Bodoni_Moda} from 'next/font/google'

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  style: 'normal',
  weights: 400
})

const IdVerification = () => {
  return (
    <div className='form-section'>
      <h2 className={`${bodoniModa.className} form-title`}>Book Your Visit</h2>
      <div className='form-description'>3/3: ID VERIFICATION</div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-[50px]">
        <span>Help us verify your identity by uploading a photo of your ID/KTP or Passport</span>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-5">
      <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
        {({getRootProps, getInputProps}) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          </section>
        )}
      </Dropzone>
      </div>
      <div className='mt-[50px]'>
        <a href='/thank-you' className='btn-custom'>Book my visit</a>
      </div>
    </div>
  )
}

export default IdVerification