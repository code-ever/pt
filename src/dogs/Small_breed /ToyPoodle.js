import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { GiSelfLove } from "react-icons/gi";
import Aos from 'aos';
import "aos/dist/aos.css"

import { Link } from 'react-router-dom'
const ToyPoodle = () => {
    const stotop = () => {
        window.scrollTo(0, 0);  // Scroll to top when link is clicked
    };
    const [toypoodle, setToypoodle] = useState([])
    useEffect(() => {
        const getToypoodle = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/eachCategoryView/12/`)
                setToypoodle(res.data)
                console.log(res.data)
            } catch (error) {
                console.log('Something went wrong' + error)
            }
        }
        getToypoodle();
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div>
            <div className='py-10 mt-16'>
                <div>
                    <p className='text-center text-2xl md:text-4xl font-semibold capitalize mb-16'>Toy poodle puppie's</p>
                </div>
                <div className='grid md:grid-cols-5 md:gap-x-3 gap-y-4 md:px-3 '>
                    {toypoodle.map((toypoodleData) => (
                        <Link to={`/details/${toypoodleData.slug}`} onClick={stotop}>
                            <div data-aos='zoom-in-up' key={toypoodleData.id} className='border border-3 shadow-lg rounded-lg group hover:scale-105 transition-all duration-300'>
                                <img src={`http://localhost:8000${toypoodleData.images}`} alt={toypoodleData.petname} className='h-[260px] w-full rounded-md object-cover' />
                                <div className=' relative'>
                                    <p className=' absolute bg-white w-full inset-0 hidden group-hover:flex bottom-0 justify-center items-center'>
                                        <span className=' flex items-center inset-0 text-[#70a13e] font-semibold'><GiSelfLove size={40} />Happy Home</span>
                                    </p>
                                    <p className='text-center font-semibold text-gray-700 text-2xl py-10'>{toypoodleData.petname}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ToyPoodle