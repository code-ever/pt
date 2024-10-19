import React, { useEffect, useState } from 'react'
import { FcLike } from "react-icons/fc";
import { Link } from 'react-router-dom'
import axios from 'axios'
import Aos from 'aos';
import "aos/dist/aos.css"

const Chihuahuas = () => {
    const stotop = () => {
        window.scrollTo(0, 0);  // Scroll to top when link is clicked
    };
    const [Chihuahua, setChihuahua_doga] = useState([])
    useEffect(() => {
        const Chihuahua_doga = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/eachCategoryView/11/`)
                setChihuahua_doga(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        Chihuahua_doga()
        Aos.init({ duration: 2000 })
    }, [])


    return (
        <div className='px-4 mt-32'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-3 md:gap-x-2 gap-y-3'>
                {Chihuahua.map((data) => (
                    <Link to={`/details/${data.slug}`} onClick={stotop}>
                        <div className='hover:scale-105 transition-all duration-300 ease-in-out'>
                            <div data-aos='zoom-in-up' key={data.id} className='relative shadow-lg'>
                                <img src={`http://localhost:8000${data.images}`} alt={data.title} className='w-full h-auto shrink md:h-48 object-cover rounded-md' />
                                <p className='text-center font-semibold py-3 text-gray-600 capitalize'>{data.petname}</p>
                                <p className=' absolute top-40 right-0 hover:rotate-90'><FcLike size={35} /></p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Chihuahuas