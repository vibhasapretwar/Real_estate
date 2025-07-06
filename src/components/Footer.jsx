import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden ' id='Footer'>
        <div className='container mx-auto flex flex-colmd:flex-row justify-between items-center'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={assets.logo_dark} alt="" />
                <p className='text-gray-400 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quas minima minus architecto error quibusdam, nemo quaerat omnis labore quasi amet. Voluptatum libero eaque consequatur repellendus ex! Earum, esse necessitatibus.</p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                <ul className='text-gray-400 space-y-2'>
                    <li><a href='#Header' className='hover:text-white'>Home</a></li>
                    <li><a href='#About' className='hover:text-white'>About Us</a></li>
                    <li><a href='#Projects' className='hover:text-white'>Projects</a></li>
                    <li><a href='#Testimonials' className='hover:text-white'>Testimonials</a></li>
                    <li><a href='#Contact' className='hover:text-white'>Contact Us</a></li>
                    <li><a href='#' className='hover:text-white'>Privacy Policy</a></li>
                </ul>
            </div>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our Newsletter</h3>
                <p className='text-gray-400 mb-4 max-w-80'>The latest news, articles, and resources, sent to your inbox weekly.</p>
               <div className='flex  gap-2'>
                <input type="email" placeholder='Enter your email' className='p-2 rounded-md bg-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto' />
                <button className='px-4 py-2 rounded bg-blue-500 text-white'>Subscribe</button>
                
                </div>

            </div>
        </div>
        <div className='border-t border-gray-700 mt-10 py-4 text-center text-gray-500'>
            Copyright 2025 @Vibhas Real Estate . All rights reserved.
        </div>
      
    </div>
  )
}

export default Footer
