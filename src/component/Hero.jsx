import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import required modules

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        fade: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    const [austrelia, setAustrelia] = useState([])
    useEffect(() => {
        const getGerman = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/subcategory/`)
                setAustrelia(res.data)
                console.log(res.data)
            } catch (error) {
                console.log('Something went wrong' + error)
            }
        }
        getGerman();
    }, [])

    return (
        <div className='mt-[6rem] mb-[4rem]'>
            <div className=''>

                <Slider {...settings}>
                    {austrelia.map((data) =>
                        <div key={data.id} className='md:h-[500px] max-h-screen relative'>
                            <div style={{ backgroundImage: `url(${data.image})` }} className='w-[100%] h-[50vh] md:h-[100%] bg-no-repeat bg-cover bg-center '>
                                <div className='absolute z-50 flex flex-col justify-center items-center inset-0'>
                                    <div className='text-center'>
                                        <p className='text-center text-[#70a13e] text-xl font-semibold'>{data.title}</p>
                                        <p className=' md:text-5xl text-xl text-white'>{data.name}</p>
                                        <p className=' md:text-5xl text-xl text-white'>{data.smalldescription}</p>
                                    </div>
                                    <button className='p-2 rounded-md uppercase text-white bg-[#70a13e] mt-6 px-6 cursor-pointer hover:bg-black transition-all ease-in-out duration-300'>Lern more</button>
                               </div>
                                <p className='bg-black/70 absolute w-full h-screen'></p>
                            </div>
            
                        </div>
                    )}
                </Slider>
            </div>
        </div >
    )
}

export default Hero