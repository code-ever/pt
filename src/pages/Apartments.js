import React, { useState } from 'react'
import Buttons from '../buttons/Buttons'
import Poodle from '../apartmentdogs/Poodle'
import Pug from '../apartmentdogs/Pug'
import Yorkshire_terrier from '../apartmentdogs/Yorkshire_terrier'
import MiniDachshund from '../apartmentdogs/MiniDachshund'
import Goldendoodles from '../apartmentdogs/Goldendoodles'
import Maltese_dod from '../apartmentdogs/Maltese_dod'
import Chihuahua_doga from '../apartmentdogs/Chihuahua_doga'
import French_bulldog from '../apartmentdogs/French_bulldog'

const Apartments = () => {

  const button = [
    "Poodle", "Pug", "Yorkshire terrier", "Dachshund", "Maltese", "Chihuahua", "French bulldog"
  ]
  const RenderComponent = ({ index }) => {
    switch (index) {
      case 0:
        return <Poodle />
        break;
      case 1:
        return <Pug />
        break;
      case 2:
        return <Yorkshire_terrier />
        break;
      case 3:
        return <MiniDachshund />
        break;
      case 4:
        return <Maltese_dod />
        break;
      case 5:
        return <Chihuahua_doga />
        break;
      case 6:
        return <French_bulldog />
        break;
      default:
        break;
    }
  }
  const [isSelected, setIsSelected] = useState(0)

  return (
    <div className='py-16'>
      <div className='bg-gray-100'>
        <p className='py-4 text-xl md:text-3xl font-semibold text-center mt-6 '>
          Best Apartment Dogs for Adoption
        </p>
        <p className='py-3 text-justify px-4'>
          Dogs are more attuned to people’s emotions, physical abilities, and even medical needs when required. Some breeds have more of a knack for these senses than others. Here is a list of breeds that are better qualified to bring you comfort and be more attuned to your emotional and physical needs.
        </p>
      </div>

      <div className=' p-3 gap-y-4 bg-[#70a13e] mt-5'>
        <div className=' text-white font-semibold text-2xl mt-4 border-black uppercase'>Apartment dogs</div>
      </div>
      <div className='flex-1 md:flex gap-x-5'>
        <div className=' mt-3 bg-orange-100 md:flex-col md:justify-start text-gray-500'>
          <div className=' grid-cols-4 gap-x-3 gap-y-2 w-full md:w-[260px] px-4'>
            <Buttons button={button} isSelected={isSelected} setIsSelected={setIsSelected} />
          </div>
        </div>
        <div className='mt-5'>
          <RenderComponent index={isSelected} />
        </div>
      </div>

    </div>
  )
}

export default Apartments
