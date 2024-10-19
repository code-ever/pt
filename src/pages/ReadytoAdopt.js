import React from 'react'
import ready from '../images/readto.jpg'
import pet11 from '../images/allconsider.png'
import { AiFillHome } from "react-icons/ai";
import { PiDogFill } from "react-icons/pi";
import consider8 from '../images/cares2.jpg'
import { LuThumbsDown } from "react-icons/lu";
import PetAdoption from "../images/dd.jpg"
import play1 from "../images/selected.png"


import { FaTruckFront, FaChildReaching, FaChildren } from "react-icons/fa6";
import { Link } from 'react-router-dom';





function ReadytoAdopt() {
    return (
        <div>
            <div className='h-[300px] mt-[5rem] relative'>
                <img src={ready} alt="ready" className='w-full h-[300px] object-cover' />
                <div className='bg-black/50 absolute inset-0 w-full'></div>
            </div>
            <div className='py-10 px-5'>
                <p className='text-center text-2xl md:text-3xl font-semibold capitalize '>
                    Advantage in adopting pets from Destiny Shelter Adopters
                </p>
                <div className='py-3 text-justify'>
                    Adopting a pet from Destiny Shelters saves a life, giving homeless animals a second chance. It’s cost-effective, often covering vet care, vaccinations, and spaying/neutering. You'll find a variety of breeds and ages, making it easier to find a perfect match. Adopting also reduces pet overpopulation and combats unethical puppy mills. Shelter pets tend to form deep, loyal bonds, offering emotional rewards for both the pet and the owner. By adopting, you support the shelter's mission and help them care for more animals in need.
                </div>
            </div>
            <div>
                <p className='py-3 text-center text-2xl md:text-4xl font-semibold'>
                    ARE YOU READY TO ADOPT?
                    <p className='text-center text-xl py-2'>
                        Things to Consider Before Adopting
                    </p>
                </p>
            </div>
            <div className='grid md:grid-cols-2 mx-auto justify-center px-10 mt-10'>
                <div>
                    <div className='flex gap-x-3'>
                        <img src={pet11} alt="consider" className=' rounded-full' />
                    </div>
                </div>
                <div>
                    <p className='text-3xl font-semibold flex'><AiFillHome className='text-[#70a13e]' size={30} />&nbsp;Adapting to new Home</p>
                    <div className='py-2 text-justify flex'>
                        <p className=''>it is very impoartant to give an adopted pet time to adjust to their new environment. Transitioning from a shelter to a home can be overwhelming for the animal, so providing a few weeks (or more) for them to settle in is crucial. During this period, patience, consistency, and a calm, supportive environment are key. Gradually introducing routines, offering affection, and understanding their needs will help them feel secure and start forming a bond, creating a loving home for both the pet and the owner.</p>
                    </div>
                    <div>
                        <div className='py-6 flex items-center'><PiDogFill size={30} className='text-[#70a13e]' />
                            <p className='text-2xl md:text-4xl font-semibold'> &nbsp;Dog traning</p>
                        </div>
                        <div className='py- text-justify'>
                            training is essential for every dog to help them become well-behaved, confident, and strong both physically and mentally. Proper training builds discipline, strengthens the bond between the dog and owner, and provides the dog with a sense of structure. It helps prevent behavioral issues and ensures they understand commands, which makes them more secure and adaptable in various environments.
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex justify-center gap-x-7 mt-6 border-8 border-dotted px-4 '>
                    <div className='text-center text-black font-semibold py-4'>
                        <p className='text-2xl md:text-3xl'>HAVE YOU </p>
                        <p>Considered Your Circumstances?</p>

                    </div>
                </div>
                <div className='grid md:grid-cols-2 justify-center mx-auto  mt-10 gap-x-5 px-5 gap-y-5'>
                    <div className='h-fit'>
                        <img src={consider8} alt="consider8" className=' w-full object-center' />
                    </div>
                    <div>
                        <div className='flex flex-col'>
                            <div className='flex'>
                                <p><FaTruckFront size={30} className='text-[#70a13e]' /></p>&nbsp;&nbsp;
                                <div>
                                    <p><b className='text-2xl'>√</b> Are you likely to be transferred in the near future?</p>
                                    <p><b className='text-2xl'>√</b>&nbsp;Will you be able to take your pet?</p>
                                    <p><b className='text-2xl'>√</b>&nbsp;Do you have a plan for who might be able to take your pet if you do have to move with little forewarning?</p>
                                    <p><b className='text-2xl'>√</b>&nbsp;Are you going to be deployed or transferred overseas?</p>
                                    <p><b className='text-2xl'>√</b>&nbsp;Too many animals are abruptly dumped at shelters when people move and cannot take them. Where would your pet would go if this happened?</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col py-4'>
                            <div className='flex'>
                                <p><FaChildren size={40} className='text-[#70a13e]' /></p>&nbsp;&nbsp;
                                <div>
                                    Are you considering having kids in the near future? Are you willing to research the necessary steps for preparing a pet for a new child? Too many animals are dumped when people do not plan adequately for the arrival of a new child.
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col py-4'>
                            <div className='flex'>
                                <p><FaChildReaching size={40} className='text-[#70a13e]' /></p>&nbsp;&nbsp;
                                <div>
                                    If you have kids, will you be able to spend the time necessary to make sure that your kids are treating the pet the right way? Animals mistreated by children often grow up to be aggressive and/or fearful of humans. It’s important to not only tell your children what is and what is not acceptable, but to watch them closely!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-5'>
                <div className='flex justify-center mx-auto bg-green-50'>
                    <div className='text-center'>
                        <p className='text-3xl uppercase font-semibold py-2 mb-3 flex items-center'>Bein ready to adopt<LuThumbsDown className='text-3xl text-[#70a13e]' /></p>
                    </div>
                </div>
                <div className='py-5 px-3 text-justify'>
                    Once you submit an Adoption Questionnaire, a proverbs1210
                    the volunteer will review it. If it looks like you and the animal are a good match, the volunteer will e-mail or call you to discuss your application further. Determining a good match takes into consideration the animal’s age, temperament, schedule, and experience. Our goal is to make the best match possible! If the animal you applied to adopt is not a good fit for you, the volunteer may make suggestions for other animals in our program that might better fit.
                </div>
            </div>
            <div className='py-5 px-4 bg-green-50'>
                <div className='grid md:grid-cols-2 justify-center mx-auto gap-x-4'>
                    <div>
                        <p className='text-3xl font-semibold py-4'>Adoption Steps</p>
                        <div className='text-justify'>
                            Once Adoption Questionnaire has been submited, a Destiny Shelters
                            will review your application.
                            If your application matches the pets, Destiny Shelters  will e-mail for further enquirement. Determining a good match takes into consideration the animal’s age, temperament, schedule, and experience. Our goal is to make the best match possible! If the animal you applied to adopt is not a good fit for you, the Destiny Shelters  may make suggestions for other animals in our program that might better fit.
                        </div>
                        <div className='py-8'>
                            <Link to='/dogapplication' className='p-3 bg bg-black text-white w-60 text-center font-semibold rounded-full'>View Adoption Form </Link>
                        </div>
                    </div>
                    <div className='hover:scale-105 transition-all duration-300'>
                        <img src={PetAdoption} className='rounded-lg' alt="Pet Adoption" />
                    </div>
                </div>
            </div>

            <div className='px-3 py-6 flex justify-center mx-auto'>
                <div className='rounded-full grid md:grid-cols-2'>
                    <div className='flex hover:scale-105 transition-all duration-300'>
                        <img src={play1} className=' rounded-full' alt="play" />
                    </div>

                    <div>
                        <p className='py-3'>
                            We require vet references to ensure that your pets are spayed and neutered and kept current on their vaccines and that the overall quality of care you provide is high!
                        </p>
                        <p className='py-3'>
                            We require landlord references for those people renting. This ensures that you are permitted to have a pet and clarifies breed and size restrictions.
                        </p>
                        <p className='py-3'>
                            After this process is complete, you will be given the green light to adopt your new family member!
                        </p>
                        <p className='py-3'>
                            Please note that adoption fees are non-refundable except for special circumstances considered by our adoption team.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReadytoAdopt
