import React from 'react'
import contact from '../images/woman-kissing-dog-on-head.webp'
import { Link } from 'react-router-dom'
const Gools = () => {
    return (
        <div>
            <div className='flex justify-center mx-auto w-full border border-3'>
                <div>
                    <p className='text-2xl font-semibold text-center py-5'>Our Gooles</p>
                    <div className='grid md:grid-cols-2 justify-center mx-auto px-4 gap-x-4 gap-y-5'>
                        <div className=''>
                            <div className=' text-justify'>
                                Destiny Shelter Puppies Adoption is an Australian
                                company dedicated to rescuing and rehoming puppies and dogs.
                                Their mission is to find loving and responsible families for
                                these animals, ensuring they receive the care and attention they
                                deserve. By carefully selecting homes, Destiny Shelter provides
                                a new start for pets in need, promoting responsible pet ownership
                                and a compassionate approach to animal welfare across Australia.
                                Their efforts help reduce the number of stray and abandoned dogs,
                                making a positive impact on both the pets and the families that
                                adopt them.

                            </div>
                        </div>
                        <div>
                            <img src={contact} alt="contact" className='w-full rounded-md' />
                        </div>
                    </div>
                    <p className='text-center py-5 mt-4 hover:scale-105 transition-all duration-300 '>
                        <Link className='p-2 py-3 px-6 bg-[#70a13e] text-white rounded-md hover:bg-black transition-all duration-300 ease-in-out font-semibold'>Contact Us</Link>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Gools