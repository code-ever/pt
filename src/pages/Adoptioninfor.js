import React from 'react'
import { Link } from 'react-router-dom'
import { FaEdit } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import adoptionp from '../images/home_hero.png'


function Adoptioninfor() {
    return (
        <div className='py-16 mt-8 text-gray-600'>
            <p className='text-center text-3xl font-semibold py-6'>Adoption Proccess</p>

            <div className='grid md:grid-cols-2 py-6 justify-center mx-auto px-4 bg-gray-100 gap-x-6 gap-y-4'>
                <div className='h-fit max-w-[100%]'>
                    <img src={adoptionp} className=' w-full object-scale-down' alt="adoptionp" />
                </div>
                <div>
                    <div className='py-5'>
                        <p className='text-xl'>We are very glad for choosing Destiny Shelters as your adoption Providers </p>
                        <div className='text-sm text-justify py-4'>
                            Your sentence has a great message but could be refined for clarity and impact. Here's a revised version:

                            "Choosing the right family for a pet is crucial, and at Destiny Shelter, we ensure that every adoption brings joy and companionship. When you adopt from us, you’ll find a loving, well-cared-for pet ready to become a part of your family."

                            This version emphasizes the importance of finding the right match and makes the benefits of adopting from Destiny Shelter clearer.
                        </div>
                    </div>
                </div>

            </div>
            <div className='py-4 px-4 '>
                <p className='text-center text-4xl font-semibold uppercase'>simple process</p>
                <div className='py-4 flex justify-center mx-auto items-center'>
                    <p>
                        Need a pet running buddy? We have her! Need a friendly pet? We have them here, too! We can help you find the right lovely pet,
                        right now. We connect people and pets based on shared sensibilities, like lifestyle and energy, so every relationship is on a solid foundation.

                        When you visit the Destily Shelter, one of our experienced adoption counselors will learn about your preferences and help you find a forever friend. Getting started only click ,<Link to="/dogapplication" className='text-green-800 text-2xl'>HERE</Link>, a form of payment and an open heart. Together, we can find a new roommate the same day you visit.
                    </p>
                </div>
            </div>
            <div className='py-6 px-3 md:px-20'>
                <p className='text-2xl text-gray-400 uppercase font-semibold'>Adoption Fees</p>
                <p className='py-4 text-2xl md:text-4xl font-semibold text-black uppercase'>
                    Your fee provides for more
                </p>
                <div className='text-justify py-3 text-gray-500'>
                    Our adoption fee ranges from $350 and above, Your adoption fee is one additional reason to feel great about bringing home a new family member. Also our variable pricing structure allows the pets that find homes quickly to cover those who stay with us longer or require a little more help getting back on their paws.

                    Our fees also include special discounts for senior citizens, as well as active duty military and veterans.

                </div>

                <div className='py-6 grid md:grid-cols-1 gap-y-5 justify-center mx-auto mt-4'>
                    
{/*                     
                    
                    <div className=''>
                        <div>
                            <p className='font-semibold text-4xl text-black uppercase'>Adoption Fees</p>
                        </div>
                        <div className='py-3 flex mt-5'>
                            <LiaDogSolid size={30} className='text-[#70a13e] border border-[#70a13e] rounded-full' />
                            <div className='px-3'>
                                <p>Puppy – 8 weeks up to 6 months of age</p>
                                <p>$250-600.00</p>
                            </div>
                        </div>
                        <div className='py-3 flex mt-2'>
                            <LiaDogSolid size={30} className='text-[#70a13e] border border-[#70a13e] rounded-full' />
                            <div className='px-3'>
                                <p>Puppy – 6 months up to 1 year of age</p>
                                <p>$200-550.00</p>
                            </div>
                        </div>
                        <div className='py-3 flex mt-2'>
                            <LiaDogSolid size={30} className='text-[#70a13e] border border-[#70a13e] rounded-full' />
                            <div className='px-3'>
                                <p>Adult Dog – 1 year through 7 years</p>
                                <p>$350.00-550</p>
                            </div>
                        </div>
                        <div className='py-3 flex mt-2'>
                            <GiSittingDog size={30} className='text-[#70a13e] border border-[#70a13e] rounded-full' />
                            <div className='px-3'>
                                <p>Senior Dog – 8 years and older</p>
                                <p>$250.00-300</p>
                            </div>
                        </div>
                    </div> */}


                    <div>
                        <p className='text-4xl uppercase text-black font-semibold'>What's Included</p>
                        <div className=''>
                            <div className='py-3 flex mt-5'>
                                <FaEdit size={30} className='text-[#70a13e] ' />
                                <div className='px-3'>
                                    <p>One week of complimentary dog training through </p>

                                </div>
                            </div>
                            <div className='py-3 flex mt-2'>
                                <FaEdit size={30} className='text-[#70a13e]' />
                                <div className='px-3'>
                                    <p>Neuter surgery</p>
                                </div>
                            </div>
                            <div className='py-3 flex mt-2'>
                                <FaEdit size={30} className='text-[#70a13e]' />
                                <div className='px-3'>
                                    <p>Pet ID, Collar, and leash</p>

                                </div>
                            </div>
                            <div className='py-3 flex mt-2'>
                                <FaEdit size={30} className='text-[#70a13e]' />
                                <div className='px-3'>
                                    <p>Small bag of Purina Premium food (while supplies last)</p>
                                </div>
                            </div>
                            <div className='py-3 flex mt-2'>
                                <FaEdit size={30} className='text-[#70a13e]' />
                                <div className='px-3'>
                                    <p>SUp-to-date vaccinations and de-worming</p>
                                </div>
                            </div>
                            <div className='py-3 flex mt-2'>
                                <FaEdit size={30} className='text-[#70a13e]' />
                                <div className='px-3'>
                                    <p>Up-to-date flea/tick preventative</p>
                                </div>
                            </div>
                            <div className='py-3 flex mt-2'>
                                <FaEdit size={30} className='text-[#70a13e]' />
                                <div className='px-3'>
                                    <p>Small bag of Purina Premium food (while supplies last)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-3 md:px-16'>
                <p className='text-center text-3xl md:text-4xl font-semibold text-black'>
                    Requirements
                </p>
                <p className='py-3 flex items-center'>
                    <CiEdit size={30} />
                    <p className='px-3'>
                        Before falling in love with one of our pets or completing the adoption process, please make sure that you are:
                    </p>
                </p>
                <div>
                    <p className='py-2 flex items-center'>
                        <CiEdit size={30} />
                        <p className='px-3'>
                            At least 21 years of age with a valid state-issued photo ID.
                        </p>
                    </p>
                    <p className='py-2 flex items-center'>
                        <CiEdit size={30} />
                        <p className='px-3'>
                            If current address does not match ID, you must provide copies of three bills verifying your current address
                        </p>
                    </p>
                    <p className='py-2 flex items-center'>
                        <CiEdit size={30} />
                        <p className='px-3'>
                            Able and willing to spend the time and money necessary to provide necessary training, medical treatment, and proper care for the animal over the course of their life
                        </p>
                    </p>

                </div>
            </div>
            <div className=' md:px-16 py-6 px-3'>
                <p className='text-center text-2xl md:text-4xl font-semibold text-black'>Adoption Procedures </p>
                <div className='py-5 text-justify'>
                    Please take the time to observe and notice all our pets. All of the pets deserve loving homes and our goal is to match up the right pet with the right family.
                    If there is an animal you are interested in interacting with, ask the staff member or director you are with to meet with them in one of our quiet “meet & greet” rooms.
                    If after socializing with an animal you are interested in adopting, ask to complete our Pre-Adopt form.  Once completed, an HP Director will review your completed application with you and get clarification on anything if needed. We do same-day adoptions.

                    The Pre-Adopt form is then reviewed thoroughly and a decision will be made and communicated to you after all information is gathered. This ‘waiting period’ will also allow the adopter time to reflect upon the responsibility associated with adopting an animal and ensure that it is a commitment they are willing to make.

                </div>
                <div className='mt-3'>
                    <Link to="/dogapplication" className='bg-black text-white rounded-full p-3 font-semibold w-60'>Check out our Puppies form</Link>
                </div>
            </div>
        </div>
    )
}

export default Adoptioninfor