import React from 'react'
import { Link } from 'react-router-dom'
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import family from '../images/familydogs.jpg'
import smalldog from '../images/smalldogs.jpg'
import hypoall from '../images/hypoallegic.svg'
import emosional from '../images/emmosionaldog.png'
import apartment from '../images/doghome.png'

import about from '../images/Hounds-Lounge-owner-Mandy-blowing-bubbles-with-dogs-in-play-yard-800x437.jpg'
function About() {
    const handleScrollToTop = () => {
        window.scrollTo(0, 0);  // Scroll to top when link is clicked
    };
    const dontFa = [
        {
            id: 1,
            img: family,
            title: 'Family Dogs',
            link: '/family'
        },
        {
            id: 2,
            img: smalldog,
            title: 'Small dogs',
            link: '/smaill_dogs'
        },
        {
            id: 3,
            img: hypoall,
            title: 'Hypoallergentic dogs',
            link: '/hypoallergenic'
        },
        {
            id: 4,
            img: emosional,
            title: 'Emotional Dogs',
            link: '/emotional'
        },
        {
            id: 5,
            img: apartment,
            title: 'Dog Apartment',
            link: '/apartmentsdogs'
        },
    ]
    return (
        <div className='px-3 py-6 mt-4 bg-green-50 z-0'>
            <div>
                <div className='text-center py-6'>
                    <p className='text-xl md:text-3xl text-[#70a13e] pb-2 font-semibold mb-3'>More About</p>
                    <p className='text-3xl md:text-5xl font-semibold'>We Can Keep Them Happy</p>
                </div>
                <div className='grid md:grid-cols-2 justify-center gap-x-10 mx-auto'>
                    <div className=' py-10'>
                        <img src={about} alt="about" className=' rounded-md ' />
                    </div>
                    <div className=' w-[100%]'>
                        <p className=' text-justify mb-4 mt-9'>
                            Destiny Shelter is a dedicated organization based in Australia, We are committed to rescuing, caring for, and finding forever homes for dogs of all breeds, sizes, and backgrounds. Our mission is to ensure that every dog has the opportunity to live a happy and healthy life with a loving family. We believe that every dog, regardless of its past, deserves a second chance, and we work tirelessly to make that possible.
                        </p>
                        <span className='mt-3'>
                            <p className='flex items-center pt-3 text-black text-sm md:text-xl font-xl font-semibold'><IoCheckmarkCircleSharp className='text-[#70a13e]' />&nbsp; Adopting Pets to a sefty home</p>
                            <p className='flex items-center pt-3 text-black text-sm md:text-xl font-xl font-semibold'><IoCheckmarkCircleSharp className='text-[#70a13e]' />&nbsp; We Save And Protect Pets</p>
                            <p className='flex items-center pt-3 text-black text-sm md:text-xl font-xl font-semibold'><IoCheckmarkCircleSharp className='text-[#70a13e]' />&nbsp; Overexposure Of Domestic Pets</p>
                            <p className='flex items-center pt-3 text-black text-sm md:text-xl font-xl font-semibold'><IoCheckmarkCircleSharp className='text-[#70a13e]' />&nbsp; We Save And Protect Pets</p>
                            <p className='flex items-center pt-3 text-black text-sm md:text-xl font-xl font-semibold'><IoCheckmarkCircleSharp className='text-[#70a13e]' />&nbsp; Raise The Bar On The Grooming Experience </p>
                            <p className='flex items-center pt-3 text-black text-sm md:text-xl font-xl font-semibold'><IoCheckmarkCircleSharp className='text-[#70a13e]' />&nbsp; Highest Quality Premium Western Forage</p>
                        </span>
                    </div>
                </div>
            </div>

            <div className='py-5 w-full flex justify-center mx-auto bg-white border border-3 rounded-lg mt-6'>
                <div className='bg-white grid md:grid-cols-5 gap-x-4 gap-y-4'>
                    {dontFa.map((data) => (
                        <Link to={data.link} onClick={handleScrollToTop}>
                            <div ket={data.id} className=' shadow-xl flex gap-x-[3rem] transition-all hover:scale-105 duration-300 relative'>
                                <img src={data.img} className='w-full' alt={data.title} /><hr />
                                <p className=' absolute text-center top-[-3] left-0 right-0 bottom-2 font-semibold'>{data.title}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About