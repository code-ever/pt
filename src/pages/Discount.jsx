import React from 'react'
import military from '../images/militarydog.jpg'
import seniorscitsim from '../images/seniorscitism.jpeg'
const Discount = () => {
    return (
        <div className='mt-12'>
            <div className='py-10 bg-gray-300 px-3'>
                <p className='text-center py-5 text-2xl font-semibold text-gray-600 uppercase'>adoption discount for Military and senoir citism</p>
                <div className='py-6'>
                    Destiny Shelter is committed to giving back to the community by offering special discounts to seniors and military personnel. We believe in honoring those who have served and ensuring that pet adoption is accessible to all. Seniors receive a 15% discount on all adoptions, and military personnel are eligible for a 20% discount. This initiative is part of our mission to connect loving pets with compassionate families while showing appreciation to these valued groups in our society.
                </div>
            </div>
            <div className='flex justify-center mx-auto py-10'>
                <div className='px-2 md:px-16'>
                    <div className='grid md:grid-cols-2 mb-16 gap-x-5 '>
                        <img src={military} className='w-full mb-3' alt="military" />
                        <div className='text-justify'>
                            At Destiny Shelter, we believe that every military member deserves recognition for their service, and what better way to show our appreciation than by offering a special discount on pet adoptions. Military personnel receive a 20% discount when adopting a dog or any other pet from our shelter. It's our way of giving back to those who have served, helping them find a loyal companion while easing the adoption process. At Destiny Shelter, we're committed to supporting our heroes and ensuring they find the perfect pet to share their journey with.
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 mb-6 gap-x-5 '>
                        <img src={seniorscitsim} className=' mb-3' alt="seniorscitsim" />
                        <div className='text-justify'>
                            At Destiny Shelter, we are proud to offer special discounts to our senior citizens when adopting a pet or dog. We understand the joy and companionship that pets bring, especially for seniors, and we want to make the adoption process easier and more affordable. Seniors receive a 15% discount on all adoptions as part of our commitment to helping them find the perfect furry companion. It’s our way of showing appreciation to older members of the community while giving pets a loving home.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discount
