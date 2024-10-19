import React, { useEffect, useState } from 'react'
import axios from 'axios'
import germanimage from '../../images/germans/garman headers.avif'
import { GiSelfLove } from "react-icons/gi";
import Aos from 'aos';
import "aos/dist/aos.css"
import { Link } from 'react-router-dom'
const Chihuahua = () => {
    const stotop = () => {
        window.scrollTo(0, 0);  // Scroll to top when link is clicked
    };
    const [chihuahua, setChihuahua] = useState([])
    useEffect(() => {
        const getChihuahua = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/eachCategoryView/11/`)
                setChihuahua(res.data)
                console.log(res.data)
            } catch (error) {
                console.log('Something went wrong' + error)
            }
        }
        getChihuahua();
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div>
            <div className='py-10 mt-16'>
                <div>
                    <p className='text-center text-2xl md:text-4xl font-semibold capitalize mb-16'>chihuahua puppie's</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-3 md:gap-x-2 gap-y-3'>
                    {chihuahua.map((chihuahuaData) => (
                        <Link to={`/details/${chihuahuaData.slug}`} onClick={stotop}>
                            <div data-aos='zoom-in-up' key={chihuahuaData.id} className='border border-3 shadow-lg rounded-lg group hover:scale-105 transition-all duration-300'>
                                <img src={`http://localhost:8000${chihuahuaData.images}`} alt={chihuahuaData.petname} className='w-full h-auto shrink md:h-48 object-cover rounded-md' />
                                <div className=' relative'>
                                    <p className=' absolute bg-white w-full inset-0 hidden group-hover:flex bottom-0 justify-center items-center'>
                                        <span className=' flex items-center inset-0 text-[#70a13e]'><GiSelfLove size={40} />Happy Home</span>
                                    </p>
                                    <p className='text-center font-semibold text-gray-700 text-2xl py-10'>{chihuahuaData.petname}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Chihuahua