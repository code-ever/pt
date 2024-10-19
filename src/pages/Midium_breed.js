import React, { useState } from 'react'
import Buttons from '../buttons/Buttons'
import Golden_retroever from '../midulm_bread/Golden_retroever'
import Australian_Shepherd from '../midulm_bread/Australian_Shepherd'
import Labrador_midium from '../midulm_bread/Labrador_midium'

const Midium_breed = () => {

    const button = [
        "Golden Retriever", "Australian Shepherd", "Labrador"
    ]
    const RenderComponent = ({ index }) => {
        switch (index) {
            case 0:
                return <Golden_retroever />
                break;
            case 1:
                return <Australian_Shepherd />
                break;
            case 2:
                return <Labrador_midium />
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

export default Midium_breed