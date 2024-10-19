import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { GiSelfLove } from "react-icons/gi";
import Aos from 'aos';
import "aos/dist/aos.css"
import { Link } from 'react-router-dom'

const Maltese_dogs = () => {
    const stotop = () => {
        window.scrollTo(0, 0);  // Scroll to top when link is clicked
    };
    const [maltese, setMaltese] = useState([])
    useEffect(() => {
        const getMaltese = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/eachCategoryView/13/`)
                setMaltese(res.data)
                console.log(res.data)
            } catch (error) {
                console.log('Something went wrong' + error)
            }
        }
        getMaltese();
        Aos.init({ duration: 2000 })
    }, [])


  return (
      <div className='py-1 mt-16 px-4'>
          <div>
              <p className='text-center text-2xl md:text-4xl font-semibold capitalize mb-4'>Maltese puppies</p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 md:gap-x-2 gap-y-3 '>
              {maltese.map((malteseData) => (
                  <Link to={`/details/${malteseData.slug}`} onClick={stotop}>
                      <div className='hover:scale-105 transition-all duration-200'>
                          <div data-aos='zoom-in-up' key={malteseData.id} className='border border-3 shadow-lg rounded-lg group hover:scale-105 transition-all duration-300'>
                              <img src={`http://localhost:8000${malteseData.images}`} alt={malteseData.petname} className='w-full h-auto shrink md:h-48 object-cover rounded-md' />
                              <div className=' relative'>
                                  <p className=' absolute bg-white w-full inset-0 hidden group-hover:flex bottom-0 justify-center items-center'>
                                      <span className=' flex items-center inset-0 text-[#70a13e] font-semibold'><GiSelfLove size={40} />Happy Home</span>
                                  </p>
                                  <p className='text-center font-semibold text-gray-700 text-2xl py-10'>{malteseData.petname}</p>
                              </div>
                          </div>
                      </div>
                  </Link>
              ))}
          </div>
      </div>
  )
}

export default Maltese_dogs