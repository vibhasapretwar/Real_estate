import React, { useEffect } from 'react'
import { assets, projectsData } from '../assets/assets.js'
import { useState } from 'react';
const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);

useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth < 640) {
            setCardsToShow(projectsData.length); // Show all cards on mobile
        } else {
            setCardsToShow(1); // Show 1 card on larger screens
        };
        UpdateCardsToShow();
    }
}, []);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    };


    const prevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1));
    };



  return (
    <div>
        <h1 className='text-2xl sm:text-4xl font-bold text-center mb-2'>Projects <span className='text-underline underline-offset-4 decoration-1 underline font-light'>Completed</span></h1>
        <p className='text-gray-500 max-w-80 text-center mx-auto'> We take pride in our diverse portfolio of successful real estate projects.</p>
    
    {/* slider buttons */}
    <div className='flex justify-end items-center mb-10'>
         <button onClick={prevProject} 
         className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Project'>
            <img src={assets.left_arrow} alt="" />
         </button>
         <button onClick={nextProject}
          className='p-3 bg-gray-200 rounded ml-2' aria-label='Next Project'>
            <img src={assets.right_arrow} alt="" />
         </button>
    </div>
    {/* project slider container */}

    <div className='overflow-hidden'>
        <div className='flex gap-8 transition-transform duration-500 ease-in-out'
        style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }} id='Projects'
        >
            {projectsData.map((project,index)=>(
                <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                    <img src={project.image} alt={project.title}  className='w-full h-auto mb-14'/>
                    <div className='absolute bottom-5 left-0 right-0 flex justify-center'>
                        <div className='inline block bg-white w-3/4 px-4 py-2 shadow-md'>
                        <h2 className='text-xl font-semibold text-gray-800'>
                            {project.title}

                        </h2>
                        <p className='text-gray-600 text-sm'>
                            {project.price} <span></span> {project.location} 
                        </p>

                        </div>

                    </div>

                </div>

            ))} 
        </div>
    </div>
    </div>
  )
}

export default Projects
