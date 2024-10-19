import axios from 'axios'
import React, { useEffect, useState } from 'react'
import labradoimage from '../../images/germans/Lab-26.webp'
import { GiSelfLove } from "react-icons/gi";
import { Link } from 'react-router-dom'

const LabradorRetriever = () => {
    const stotop = () => {
        window.scrollTo(0, 0);  // Scroll to top when link is clicked
    };

    const [labrado, setLabrado] = useState([])
    useEffect(() => {
        const getGerman = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/eachCategoryView/8/`)
                setLabrado(res.data)
                console.log(res.data)
            } catch (error) {
                console.log('Something went wrong' + error)
            }
        }
        getGerman();
    }, [])

  return (
      <div className=''>
          <div className='py-10 mt-10 w-full'>
              <img src={labradoimage} alt='Labrado' className='w-full h-[100%] object-center' />
          </div>
          <div className='bg-green-50'>
              <div>
                  <p className='py-4 mb-10 text-center text-2xl md:text-3xl uppercase font-semibold'>labrador puppy </p>
              </div>
              <div className='grid md:grid-cols-5 md:gap-x-3 gap-y-4 md:px-3 '>
                  {labrado.map((germanData) => (
                      <Link to={`/details/${germanData.slug}`} onClick={stotop}>
                          <div key={germanData.id} className='border border-3 shadow-lg rounded-lg group hover:scale-105 transition-all duration-300'>
                              <img src={`http://localhost:8000${germanData.images}`} alt={germanData.petname} className='h-[280px] w-full rounded-md object-cover' />
                              <div className=' relative'>
                                  <p className=' absolute bg-white w-full inset-0 hidden group-hover:flex bottom-0 justify-center items-center'>
                                      <span className=' flex items-center inset-0 text-[#70a13e]'><GiSelfLove size={40} />Happy Home</span>
                                  </p>
                                  <p className='text-center font-semibold text-gray-700 text-2xl py-10'>{germanData.petname}</p>
                              </div>
                          </div>
                      </Link>
                  ))}
              </div>
          </div>
      </div>
  )
}

export default LabradorRetriever
