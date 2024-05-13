import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='container mx-auto px-4'>
      <div className="py-4 flex items-center justify-center my-1">
        <Image
          src="/logo.svg"
          alt="Logo"
          className="invert"
          width={104}
          height={28}
          priority
        />
      </div>
    </div>
  )
}

export default Navbar