import React from 'react'
import { assets } from '../assets/assets.js'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, x:200 }}
      // animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    
    
    className='flex flex-col items-center justify-center container mx-auto p-14 w-full overflow-hidden md:px-20 lg:py-32' id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='text-underline underline-offset-4 decoration-1 underline font-light'>Our Brand</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'> We are a leading real estate company dedicated to helping you find your dream home.</p>
      <div className='flex flex-col md:flex-row items-center  md:items-start md:gap-20 '>
        <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg'/>
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>  
            <div className='flex flex-row flex-wrap gap-8 w-full 2xl:pr-28'>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>10+</p>
                    <p>Years of Excellence</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>12+</p>
                    <p>Projects Completed</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>20+</p>
                    <p>Mn. Sq. Ft. Delivered</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>25+</p>
                    <p>Ongoing Projects</p>
                </div>

            </div>
            <p className='my-10 max-w-lg'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum fuga rem quam eum possimus in ad aliquam facere eaque, perspiciatis amet, sunt, exercitationem libero officia consectetur aut totam maxime veritatis.
            </p>
            <button className='bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-800 cursor-pointer'>Learn More</button>
        </div>

      </div>
    </motion.div>
  )
}

export default About
