import React, { useState } from 'react'
import Buttons from '../buttons/Buttons'


const Apartmentsdogs = () => {
    const button = [
        "", "", "", "", ""
    ]
    const [isSelected, setIsSelected] = useState(0)
    const RenderComponent = ({ index }) => {
    switch (index) {
        // case value:
            
        //     break;
    
        // default:
        //     break;
    }
    }
    // const emotionalpet = [
    //     {
    //         id: 1,
    //         name: 'Mark ',
    //         img: germans1,
    //     },
    //     {
    //         id: 2,
    //         name: 'Jade ',
    //         img: germans2,
    //     },
    //     {
    //         id: 3,
    //         name: 'Scooby',
    //         img: germans3,
    //     },
    //     {
    //         id: 3,
    //         name: 'Lily',
    //         img: germans4,
    //     },
    //     {
    //         id: 5,
    //         name: 'Luna',
    //         img: germans5,
    //     },

    // ]
    return (
        <div className='py-16'>
            <div>
                <p className='py-4 text-xl md:text-3xl font-semibold text-center mt-6 '>
                    Best Apartment dogs Supported Dogs for adoption
                </p>
                <p className='py-3 text-justify px-4'>
                    Dogs are more attuned to people’s emotions, physical abilities, and even medical needs when required. Some breeds have more of a knack for these senses than others. Here is a list of breeds that are better qualified to bring you comfort and be more attuned to your emotional and physical needs.
                </p>
            </div>

            <div className=' p-3 gap-y-4 bg-[#70a13e] mt-5'>
                <div className=' text-white font-semibold text-2xl mt-4 border-black uppercase'>Emotional Support Puppies</div>
            </div>
            <div className='flex md:flex-cols-2'>
                <div className=' mt-3 bg-orange-100 md:w-[260px] md:flex-col md:justify-start text-gray-500'>
                    <div className=' grid-cols-4 gap-x-3 gap-y-2 w-full md:w-[260px] px-4'>
                        <Buttons button={button} isSelected={isSelected} setIsSelected={setIsSelected} />
                    </div>
                </div>
                <div className=' flex mt-5'>
                    <RenderComponent index={isSelected} />
                </div>
            </div>

        </div>
    )
}

export default Apartmentsdogs
