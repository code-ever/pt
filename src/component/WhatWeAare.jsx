import React from 'react'
import { FaPlateWheat } from "react-icons/fa6";
import { PiDogFill } from "react-icons/pi";
import { LiaDogSolid } from "react-icons/lia";
import { FaTruck } from "react-icons/fa6";
import { FaHouseMedical } from "react-icons/fa6";
import { FaPersonShelter } from "react-icons/fa6";


const WhatWeAare = () => {
    return (
        <div className='mt-[2rem]'>
            <div className='text-center mb-[3rem]'>
                <p className='text-2xl font-semibold text-[#70a13e]'>What We Provide</p>
                <p className='text-3xl mt-2 font-semibold text-[]'>Our Work And Services</p>
            </div>

            <div className='flex-cols justify-center mx-auto py-12 mt-6 px-3'>
                <div className='grid md:grid-cols-3 gap-x-3 gap-y-24'>
                    <div className=' shadow-lg p-5 border border-3 w-[100%]'>
                        <p className='flex justify-center'>
                            <FaPlateWheat className='text-8xl rounded-full border border-3 p-2 mt-[-5rem] bg-[#70a13e] text-white' />
                        </p>
                        <div>
                            <p className='py-4 text-2xl font-semibold text-center'> Best Healthy Meals </p>
                            <div className=' text-justify'>
                                When it comes to feeding your purple dog, Destiny shelter provide the best healthy
                                meals are those packed with natural ingredients that support
                                overall well-being. Focus on meals rich in high-quality proteins,
                                whole grains, and a variety of vegetables to ensure a balanced diet.
                                Avoid artificial additives and fillers, opting instead for recipes that
                                promote strong bones, a shiny coat, and a happy, energetic pup.
                            </div>
                        </div>
                    </div>
                    <div className=' shadow-lg p-5 border border-3 w-[100%]'>
                        <p className='flex justify-center'>
                            <PiDogFill className='text-8xl rounded-full border border-3 p-2 mt-[-5rem] bg-[#70a13e] text-white' />
                        </p>
                        <div>
                            <p className='py-4 text-2xl font-semibold text-center'> Vetting dogs </p>
                            <div className=' text-justify'>
                                Destiny Shelter is dedicated to ensuring the health and well-being of every dog in our care. We provide comprehensive vetting services, including vaccinations, health checks, and necessary treatments, to prepare our dogs for their forever homes. Our commitment to vetting ensures that each dog is healthy, happy, and ready for a new beginning with their future families.
                            </div>
                        </div>
                    </div>
                    <div className=' shadow-lg p-5 border border-3 w-[100%]'>
                        <p className='flex justify-center'>
                            <LiaDogSolid className='text-8xl rounded-full border border-3 p-2 mt-[-5rem] bg-[#70a13e] text-white' />
                        </p>
                        <div>
                            <p className='py-4 text-2xl font-semibold text-center'>  Pet’s Grooming Services  </p>
                            <div className=' text-justify'>
                                Destiny Shelter offers top-notch pet grooming services to keep your furry friends looking and feeling their best. Our skilled groomers provide everything from baths and haircuts to nail trimming and ear cleaning, all in a safe and soothing environment. At Destiny Shelter, we ensure each pet receives personalized care, leaving them fresh, clean, and happy after every visit.
                            </div>
                        </div>
                    </div>
                    <div className=' shadow-lg p-5 border border-3 w-[100%]'>
                        <p className='flex justify-center'>
                            <FaTruck className='text-8xl rounded-full border border-3 p-2 mt-[-5rem] bg-[#70a13e] text-white' />
                        </p>
                        <div>
                            <p className='py-4 text-2xl font-semibold text-center'> Transport</p>
                            <div className=' text-justify'>
                                Destiny Shelter provides safe and smooth transport services for pets, ensuring they travel comfortably and securely to their new homes or veterinary appointments. Our experienced team handles each journey with care, prioritizing the well-being and safety of every animal. With Destiny Shelter, you can trust that your pet is in good hands during transit.
                            </div>
                        </div>
                    </div>

                    <div className=' shadow-lg p-5 border border-3 w-[100%]'>
                        <p className='flex justify-center'>
                            <FaHouseMedical className='text-8xl rounded-full border border-3 p-2 mt-[-5rem] bg-[#70a13e] text-white' />
                        </p>
                        <div>
                            <p className='py-4 text-2xl font-semibold text-center'>  Relating To Veterinary </p>
                            <div className=' text-justify'>
                                Destiny Shelter extends its veterinary services to dogs in many countries, ensuring that pets receive the medical care they need no matter where they are. Our global network of veterinary professionals provides essential health services, including vaccinations, treatments, and wellness checks, to keep dogs healthy and thriving. At Destiny Shelter, we are committed to the well-being of every dog, offering top-quality veterinary care across borders.                            </div>
                        </div>
                    </div>
                    <div className=' shadow-lg p-5 border border-3 w-[100%]'>
                        <p className='flex justify-center'>
                            <FaPersonShelter className='text-8xl rounded-full border border-3 p-2 mt-[-5rem] bg-[#70a13e] text-white' />
                        </p>
                        <div>
                            <p className='py-4 text-2xl font-semibold text-center'> Pet Sitters Services</p>
                            <div className=' text-justify'>
                                Destiny Shelter offers reliable pet sitter services to ensure your pets are well cared for when you’re away. Our trusted sitters provide personalized attention, feeding, playtime, and companionship in the comfort of your pet's home. With Destiny Shelter's pet sitter services, you can have peace of mind knowing your furry friends are in safe and caring hands.                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeAare
