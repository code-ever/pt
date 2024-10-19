import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { GiSelfLove } from "react-icons/gi";
import { Link } from 'react-router-dom'
const GoldenRetriever = () => {
    const stotop = () => {
        window.scrollTo(0, 0);  // Scroll to top when link is clicked
    };
    const [golen, setGolden] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                //const datas = await axios.get('https://djangoapi-bi6p.onrender.com/api/eachCategoryView/6/')
                const datas = await axios.get(`${process.env.REACT_APP_API_URL}/api/eachCategoryView/6/`)

                // console.log(datas.data)
                setGolden(datas.data)

            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [])
    return (
        <div className='py-16 mt-10'>
            <div className='bg-green-50 pt-10'>
                <div className='flex justify-center items-center'>
                    <p className='text-2xl md:text-4xl py-10 flex justify-center inset-0'>Golden Retriever</p>
                </div>
            </div>

            <div className='flex justify-center items-center'>
                <div>
                    <div className='grid md:grid-cols-5 md:gap-x-3 gap-y-4 md:px-3'>
                        {golen.map((mydata) => (
                            <Link to={`/details/${mydata.slug}`} onClick={stotop}>
                                <div key={mydata.id} className='border border-3 shadow-lg rounded-lg group hover:scale-105 transition-all duration-300'>
                                    <img src={`http://localhost:8000${mydata.images}`} className='h-[260px] w-full rounded-md object-cover' alt={mydata.title} />
                                    <div className=' relative'>
                                        <p className=' absolute bg-white w-full inset-0 hidden group-hover:flex bottom-0 justify-center items-center'>
                                            <span className=' flex items-center inset-0 text-[#70a13e]'><GiSelfLove size={40} />Happy Home</span>
                                        </p>
                                        <p className='text-center font-semibold text-gray-700 text-2xl py-10'>{mydata.petname}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GoldenRetriever
