import React from 'react'
import adprocess from '../images/adptionp1.jpg'
import { IoCheckmarkCircleSharp } from "react-icons/io5";

function Adption() {
    return (
        <div className='py-4 mt-4 px-3'>
            <div className='grid md:grid-cols-2 gap-x-4 gap-y-4'>
                <div>
                    <img src={adprocess} alt="adoption" />
                </div>
                <div>
                    <p className='text-2xl text-[#70a13e] font-semibold'>Adoption Information</p>
                    <div className='mt-2'>
                        Before contacting Destiny Shelter, please review our FAQ. We receive up to 100 messages daily and work hard to place pets in homes worldwide. Submitting an adoption application is essential, as it helps us match you with the right pet. After submitting your application, we will respond within 24 hours.
                    </div>
                    <div className='mt-1 py-4'>
                        <p className='text-2xl font-semibold mb-4'>Esential Information</p>
                        The applicant must based in the following country
                        <ul className='py-3'>
                            <ol className='flex items-center'><IoCheckmarkCircleSharp className='text-[#70a13e]'/>&nbsp;United Kingdom</ol>
                            <ol className='flex items-center'><IoCheckmarkCircleSharp className='text-[#70a13e]'/>&nbsp;New Zealand</ol>
                            <ol className='flex items-center'><IoCheckmarkCircleSharp className='text-[#70a13e]'/>&nbsp;Canada</ol>
                            <ol className='flex items-center'><IoCheckmarkCircleSharp className='text-[#70a13e]'/>&nbsp;United State</ol>
                        </ul>
                        <p>Accept the financial responsibility of vet care and pet care
                            Be over 21 years of age to adopt a dog and 19 years of age to adopt a cat
                            Be ready to adopt within 24 hours -10 days</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Adption