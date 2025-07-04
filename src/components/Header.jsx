import React from 'react'
import Navbar from './Navbar.jsx'
import { assets } from '../assets/assets.js'

const Header = () => {
  return (
    <div className='Relative min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden ' 
    style={{backgroundImage: `url(${assets.header_img})`}} id='Header'>
      {/* <img
        alt=''
        src= {assets.header_img}
        className='absolute top-0 left-0 w-full h-full object-cover'
      /> */}
      <Navbar/>
      <div className='container mx-auto text-center text-white py-4 px-6 md:px-20 lg:py-32'>
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>
          Explore Homes that fit your dreams 
        </h2>
        <div className='space-x-6 mt-16'>
          <a href='#Projects' className='border border-white px-8 py-3'>Projects</a>
          <a href='#Contact' className='bg-blue-500 px-8 py-3 rounded'>Contact Us</a>
        </div>
      </div>
    </div>
  )
}

export default Header

