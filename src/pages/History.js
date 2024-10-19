import React from 'react'
import Historyimg from '../images/adoptionproces.avif'
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const History = () => {
    return (
        <div className='mt-[3rem] relative'>
            <div>
                <div style={{ backgroundImage: `url(${Historyimg})` }} className='w-full h-80 bg-no-repeat bg-cover bg-center'>
                    <p className='bg-black/70 absolute z-20 w-full h-80 '></p>
                </div>
                <p className='mt-5 flex justify-center mx-auto items-center text-xl sm:text-2xl md:text-4xl z-50 uppercase'>History of Destiny Shelter</p>

                <div className='flex justify-center mx-auto pt-16 px-3 md:px-16'>
                    <div className='text-justify'>
                        Dogs are widely regarded as some of the most emotionally intelligent creatures, often described as second only to humans in their capacity for emotional connection. Their ability to experience and express a wide range of emotions—from joy and affection to fear and sadness—makes them unique companions. Much like humans, dogs form deep emotional bonds, respond to their environment, and can even sense the emotional states of those around them. This makes dogs not just pets, but valued members of the family.

                        <div className='font-semibold text-xl md:text-2xl py-4'>Emotionally Intelligent Companions</div>

                        Dogs have evolved alongside humans for thousands of years, developing an innate ability to understand human emotions and behaviors. They can recognize facial expressions, respond to tone of voice, and even mirror the feelings of their human companions. Studies have shown that dogs experience emotions like love, excitement, and anxiety. Their capacity to form strong attachments is evident in their loyalty and eagerness to please. This emotional depth is one reason why adopting a dog is such a fulfilling experience.

                        Dogs, like humans, thrive on love, care, and companionship. When neglected or mistreated, they can exhibit signs of emotional distress such as anxiety or depression. On the other hand, dogs that are loved and cared for blossom into confident and affectionate companions.

                        <div>
                            <p className='font-semibold text-xl md:text-2xl py-4'>How Destiny Shelter Helps Dogs Adapt</p>
                            <span>
                                At Destiny Shelter, the focus is on helping dogs not only find loving homes but also adapt well to their new environments. The shelter’s team recognizes that every dog has a unique personality and background, and they work tirelessly to ensure each dog finds the right match with a family that suits their needs.
                                <p className='mt-3 flex flex-col gap-y-4' >
                                    <p className='flex'><IoCheckmarkCircleSharp  className='text-[#70a13e] text-4xl' />&nbsp;Personalized Pet Profiles: Destiny Shelter creates detailed profiles for each dog, highlighting their temperament, energy levels, and any special needs. This information helps potential adopters choose a dog that fits their lifestyle and family dynamic.</p>
                                    <p className='flex'><IoCheckmarkCircleSharp  className='text-[#70a13e] text-4xl' />&nbsp;Behavioral Support: Many dogs come from difficult or unknown backgrounds, which can make adaptation challenging. Destiny Shelter provides behavioral assessments and training to ensure the dogs are well-prepared for their new homes. The staff also offers advice and support to adopters on how to help their new pets settle in comfortably.</p>
                                    <p className='flex'><IoCheckmarkCircleSharp  className='text-[#70a13e] text-4xl' />&nbsp;Gradual Socialization: Destiny Shelter understands the importance of socialization for dogs, particularly those that may have been isolated or lacked positive experiences with humans or other animals. Through careful socialization programs, they help dogs build confidence, making them more adaptable and friendly in any home environment.</p>
                                    <p className='flex'><IoCheckmarkCircleSharp  className='text-[#70a13e] text-4xl' />&nbsp;Matching Dogs with the Right Families: One of Destiny Shelter’s key principles is ensuring that every dog is placed in a home where it will thrive. They carefully consider both the dog's and the family’s needs to ensure a successful adoption. This personalized approach increases the chances of a lasting bond between the dog and its new family.</p>
                                    <p className='flex'><IoCheckmarkCircleSharp  className='text-[#70a13e] text-4xl' />&nbsp;Matching Dogs with the Right Families: One of Destiny Shelter’s key principles is ensuring that every dog is placed in a home where it will thrive. They carefully consider both the dog's and the family’s needs to ensure a successful adoption. This personalized approach increases the chances of a lasting bond between the dog and its new family.</p>

                                </p>
                            </span>
                        </div>
                        <div>
                            <p className='font-semibold text-xl md:text-2xl py-4'>Dogs Become Part of the Family</p>
                            <span>
                                When a dog is adopted through Destiny Shelter, it quickly becomes part of the family. Dogs are naturally affectionate and loyal, and with the right care, they can adapt to any home environment. Whether it’s a large family with children or a single person looking for a companion, dogs have a remarkable ability to bond with humans and bring joy into their lives.

                                Destiny Shelter's dedication to matching dogs with the right families, combined with their focus on emotional support and training, ensures that dogs not only adapt to their new homes but thrive. This commitment to the well-being of both the dog and the adopter helps create lifelong bonds between people and their pets.
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default History
