import React, { useState } from 'react'
import Siberianhuskys from '../familydogs/Siberianhuskys';
import JackRussells from '../familydogs/JackRussells';
import Pomeranian from '../familydogs/Pomeranian';
import Daschund from '../familydogs/Daschund';
import Buttons from '../buttons/Buttons';


const Family = () => {
    const button = [
        "Siberian husky ", "Jack Russell", "Pomeranian", "Daschund"
    ]

    const RenderComponent = ({ index }) => {
        switch (index) {
            case 0:
                return <Siberianhuskys />
                break;
            case 1:
                return <JackRussells />
                break;
            case 2:
                return <Pomeranian />
                break;
            case 3:
                return <Daschund />
                break;
            default:
                break;
        }
    }
    const [isSelected, setIsSelected] = useState(0)
  return (
      <div className='py-16'>
          <div>
              <p className='py-4 text-xl md:text-3xl font-semibold text-center mt-6 '>
                  Best Family Dogs for adoption
              </p>
              <p className='py-3 text-justify px-4'>
                 Do you knwo that adopting a family dog is one of the most rewarding decisions you can make. Dogs bring joy, companionship, and unconditional love into your home, becoming an integral part of your family’s daily life. Whether you’re looking for a loyal protector, a playful companion for your children, or a gentle presence to offer emotional support, adopting a dog creates lasting bonds that enrich your life.
              </p>
          </div>

          <div className=' p-3 gap-y-4 bg-[#70a13e] mt-5'>
              <div className=' text-white font-semibold text-2xl mt-4 border-black uppercase'>Family Puppies</div>
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

export default Family
