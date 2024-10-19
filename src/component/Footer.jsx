import React from 'react'
import Logo from '../images/green-dog-logo-8e47a288-4ff3-4dd7-8a1b-7841a95d234b.jpg'
import { Link } from 'react-router-dom'
import { MdEmail, MdAddCall } from "react-icons/md";




const Footer = () => {
  return (
      <div className='mt-4 py-6 px-3 bg-gray-700 text-white'>
          <div className='grid md:grid-cols-4 justify-start md:justify-center md:mx-auto'>
              <div>
                  <p><img src={Logo} alt="logo" className='w-20 rounded-full' /></p>
                  <div className='mt-7'>
                      Destiny Shelter gools is to bread pet nurture then, give them a vaccination when it required and adopt it to a confortable home
                  </div>
              </div>
              <div className='flex flex-col md:justify-center md:mx-auto'>
                  <p className='text-2xl font-semibold py-5 uppercase'>About</p>
                  <div className=' flex flex-col gap-y-3'>
                      <Link to="/boardstaff" className='hover:text-[#70a13e] text-sm'>Boards & Staf</Link>
                      <Link to="/" className='hover:text-[#70a13e] text-sm'>Who We Are</Link>
                      <Link to="/" className='hover:text-[#70a13e] text-sm'>Terms & Condition</Link>
                      <Link to="/" className='hover:text-[#70a13e] text-sm'>Privacy Plicy</Link>
                      <Link to="/history" className='hover:text-[#70a13e] text-sm'>Our History</Link>
                  </div>
              </div>
              <div className='flex flex-col md:justify-center md:mx-auto'>
                  <p className='text-2xl font-semibold py-5 uppercase'>Adoptation</p>
                  <div className=' flex flex-col gap-y-3'>
                      <Link to="/dogapplication" className='hover:text-[#70a13e] text-sm'>Dog Adoptation</Link>
                      <Link to="/" className='hover:text-[#70a13e] text-sm'>Categories</Link>
                      <Link to="/adoptioninfo" className='hover:text-[#70a13e] text-sm'>Adoption Information</Link>
                      <Link to="/" className='hover:text-[#70a13e] text-sm'>Happy Tails</Link>
                  </div>
              </div>
              <div className='flex flex-col md:justify-center md:mx-auto'>
                  <p className='text-2xl font-semibold py-5 uppercase'>Contact Us</p>
                  <div className=' flex flex-col gap-y-3'>
                      <Link to="/" className='hover:text-[#70a13e] text-sm flex items-center'><MdEmail size={30}  className='text-[#70a13e]'/>&nbsp;info@Destinyshelter.com</Link>
                      <Link to="/" className='hover:text-[#70a13e] text-sm flex items-center'> <MdAddCall size={30} className='text-[#70a13e]' />&nbsp;+3827837384</Link>
                      
                  </div>
              </div>
          </div>
          <p className='text-center py-10 mt-3'>Copyright © 2024 Destiny Shelter animal shelter. Powered by Destiny Shelter.</p>

    </div>
  )
}

export default Footer